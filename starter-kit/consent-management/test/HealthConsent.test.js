const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HealthConsent", function () {
  let healthConsent;
  let patient;
  let doctor;
  let insurer;

  // Deploy a fresh contract before each test
  beforeEach(async function () {
    [patient, doctor, insurer] = await ethers.getSigners();

    const HealthConsent = await ethers.getContractFactory("HealthConsent");
    healthConsent = await HealthConsent.deploy();
    await healthConsent.waitForDeployment();
  });

  // =========================================================================
  // These tests describe how your finished contract should behave.
  // Right now they will FAIL because the contract functions are empty.
  // Your job: make them pass.
  // =========================================================================

  describe("Granting access", function () {
    it("should allow the patient to grant access to a provider", async function () {
      await healthConsent.grantAccess(doctor.address, "lab-results");

      expect(await healthConsent.hasAccess(doctor.address)).to.equal(true);
    });

    it("should store the correct scope", async function () {
      await healthConsent.grantAccess(doctor.address, "lab-results");

      expect(await healthConsent.getAccessScope(doctor.address)).to.equal("lab-results");
    });

    it("should emit an AccessGranted event", async function () {
      await expect(healthConsent.grantAccess(doctor.address, "lab-results"))
        .to.emit(healthConsent, "AccessGranted")
        .withArgs(doctor.address, "lab-results");
    });

    it("should NOT allow a non-patient to grant access", async function () {
      // doctor tries to grant access — should fail
      await expect(
        healthConsent.connect(doctor).grantAccess(insurer.address, "full-record")
      ).to.be.reverted;
    });

    it("should NOT allow granting access to the zero address", async function () {
      await expect(
        healthConsent.grantAccess(ethers.ZeroAddress, "lab-results")
      ).to.be.reverted;
    });
  });

  describe("Revoking access", function () {
    beforeEach(async function () {
      // Grant access first so we can test revoking it
      await healthConsent.grantAccess(doctor.address, "lab-results");
    });

    it("should allow the patient to revoke access", async function () {
      await healthConsent.revokeAccess(doctor.address);

      expect(await healthConsent.hasAccess(doctor.address)).to.equal(false);
    });

    it("should emit an AccessRevoked event", async function () {
      await expect(healthConsent.revokeAccess(doctor.address))
        .to.emit(healthConsent, "AccessRevoked")
        .withArgs(doctor.address);
    });

    it("should NOT allow a non-patient to revoke access", async function () {
      await expect(
        healthConsent.connect(doctor).revokeAccess(doctor.address)
      ).to.be.reverted;
    });

    it("should fail if the provider doesn't have access", async function () {
      await expect(
        healthConsent.revokeAccess(insurer.address)
      ).to.be.reverted;
    });
  });

  describe("Checking access", function () {
    it("should return false for a provider that was never granted access", async function () {
      expect(await healthConsent.hasAccess(doctor.address)).to.equal(false);
    });

    it("should return empty string scope for a provider without access", async function () {
      expect(await healthConsent.getAccessScope(doctor.address)).to.equal("");
    });

    it("should allow granting access to multiple providers", async function () {
      await healthConsent.grantAccess(doctor.address, "lab-results");
      await healthConsent.grantAccess(insurer.address, "diagnosis-only");

      expect(await healthConsent.hasAccess(doctor.address)).to.equal(true);
      expect(await healthConsent.hasAccess(insurer.address)).to.equal(true);
      expect(await healthConsent.getAccessScope(doctor.address)).to.equal("lab-results");
      expect(await healthConsent.getAccessScope(insurer.address)).to.equal("diagnosis-only");
    });
  });
});

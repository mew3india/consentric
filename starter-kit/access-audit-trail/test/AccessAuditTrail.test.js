const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AccessAuditTrail", function () {
  let auditTrail;
  let patient;
  let doctor;
  let insurer;

  beforeEach(async function () {
    [patient, doctor, insurer] = await ethers.getSigners();

    const AccessAuditTrail = await ethers.getContractFactory("AccessAuditTrail");
    auditTrail = await AccessAuditTrail.deploy();
    await auditTrail.waitForDeployment();
  });

  // =========================================================================
  // These tests describe how your finished contract should behave.
  // They will FAIL against the stub — make them pass.
  // =========================================================================

  describe("Logging access", function () {
    it("should log an access record", async function () {
      await auditTrail.connect(doctor).logAccess("lab-results", "treatment");

      expect(await auditTrail.getAccessCount()).to.equal(1);
    });

    it("should store the correct accessor address", async function () {
      await auditTrail.connect(doctor).logAccess("lab-results", "treatment");

      const record = await auditTrail.getAccessRecord(0);
      expect(record.accessor).to.equal(doctor.address);
    });

    it("should store the correct record type and reason", async function () {
      await auditTrail.connect(doctor).logAccess("lab-results", "treatment");

      const record = await auditTrail.getAccessRecord(0);
      expect(record.recordType).to.equal("lab-results");
      expect(record.reason).to.equal("treatment");
    });

    it("should store a timestamp", async function () {
      await auditTrail.connect(doctor).logAccess("lab-results", "treatment");

      const record = await auditTrail.getAccessRecord(0);
      expect(record.timestamp).to.be.greaterThan(0);
    });

    it("should emit an AccessLogged event", async function () {
      await expect(
        auditTrail.connect(doctor).logAccess("lab-results", "treatment")
      )
        .to.emit(auditTrail, "AccessLogged")
        .withArgs(doctor.address, (timestamp) => timestamp > 0, "lab-results", "treatment");
    });

    it("should NOT allow empty record type", async function () {
      await expect(
        auditTrail.connect(doctor).logAccess("", "treatment")
      ).to.be.reverted;
    });
  });

  describe("Multiple access logs", function () {
    beforeEach(async function () {
      await auditTrail.connect(doctor).logAccess("lab-results", "treatment");
      await auditTrail.connect(insurer).logAccess("diagnosis", "insurance-claim");
      await auditTrail.connect(doctor).logAccess("prescription", "follow-up");
    });

    it("should track the correct count", async function () {
      expect(await auditTrail.getAccessCount()).to.equal(3);
    });

    it("should return the correct record by index", async function () {
      const record0 = await auditTrail.getAccessRecord(0);
      expect(record0.accessor).to.equal(doctor.address);
      expect(record0.recordType).to.equal("lab-results");

      const record1 = await auditTrail.getAccessRecord(1);
      expect(record1.accessor).to.equal(insurer.address);
      expect(record1.recordType).to.equal("diagnosis");

      const record2 = await auditTrail.getAccessRecord(2);
      expect(record2.accessor).to.equal(doctor.address);
      expect(record2.recordType).to.equal("prescription");
    });

    it("should return all records", async function () {
      const allRecords = await auditTrail.getAllAccessRecords();
      expect(allRecords.length).to.equal(3);
    });

    it("should revert for out-of-bounds index", async function () {
      await expect(auditTrail.getAccessRecord(99)).to.be.reverted;
    });
  });

  describe("Empty state", function () {
    it("should return zero count when no accesses have been logged", async function () {
      expect(await auditTrail.getAccessCount()).to.equal(0);
    });

    it("should return empty array when no accesses have been logged", async function () {
      const allRecords = await auditTrail.getAllAccessRecords();
      expect(allRecords.length).to.equal(0);
    });
  });
});

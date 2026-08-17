const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SelectiveDisclosure", function () {
  let disclosure;
  let patient;
  let verifier;

  // Helper: create a bytes32 record ID from a string
  function toRecordId(str) {
    return ethers.id(str); // keccak256 of the string
  }

  beforeEach(async function () {
    [patient, verifier] = await ethers.getSigners();

    const SelectiveDisclosure = await ethers.getContractFactory("SelectiveDisclosure");
    disclosure = await SelectiveDisclosure.deploy();
    await disclosure.waitForDeployment();
  });

  // =========================================================================
  // These tests describe how your finished contract should behave.
  // They will FAIL against the stub — that's intentional.
  // =========================================================================

  describe("Storing commitments", function () {
    it("should allow the patient to store a commitment", async function () {
      const recordId = toRecordId("vaccination-record");
      const fakeData = "patient-name:John,vaccine:COVID-19,date:2024-01-15";
      const commitment = ethers.id(fakeData); // keccak256 of the data

      await disclosure.storeCommitment(recordId, commitment);

      expect(await disclosure.hasCommitment(recordId)).to.equal(true);
      expect(await disclosure.getCommitment(recordId)).to.equal(commitment);
    });

    it("should emit a CommitmentStored event", async function () {
      const recordId = toRecordId("vaccination-record");
      const commitment = ethers.id("some-health-data");

      await expect(disclosure.storeCommitment(recordId, commitment))
        .to.emit(disclosure, "CommitmentStored")
        .withArgs(recordId, commitment);
    });

    it("should NOT allow a non-patient to store commitments", async function () {
      const recordId = toRecordId("vaccination-record");
      const commitment = ethers.id("some-data");

      await expect(
        disclosure.connect(verifier).storeCommitment(recordId, commitment)
      ).to.be.reverted;
    });

    it("should NOT allow storing a zero commitment", async function () {
      const recordId = toRecordId("vaccination-record");
      const zeroCommitment = ethers.ZeroHash;

      await expect(
        disclosure.storeCommitment(recordId, zeroCommitment)
      ).to.be.reverted;
    });
  });

  describe("Verifying facts", function () {
    const recordId = ethers.id("vaccination-record");
    const fakeData = "patient-name:John,vaccine:COVID-19,date:2024-01-15";
    let commitment;

    beforeEach(async function () {
      commitment = ethers.id(fakeData);
      await disclosure.storeCommitment(recordId, commitment);
    });

    it("should verify a valid fact with correct proof", async function () {
      const fact = "vaccinated";
      // proof = keccak256(abi.encodePacked(commitment, fact))
      const proof = ethers.solidityPackedKeccak256(
        ["bytes32", "string"],
        [commitment, fact]
      );

      await expect(disclosure.verifyFact(recordId, fact, proof))
        .to.emit(disclosure, "FactVerified")
        .withArgs(recordId, fact);
    });

    it("should reject an invalid proof", async function () {
      const fact = "vaccinated";
      const badProof = ethers.id("wrong-proof");

      await expect(
        disclosure.verifyFact(recordId, fact, badProof)
      ).to.be.reverted;
    });

    it("should reject verification for a non-existent record", async function () {
      const fakeRecordId = ethers.id("does-not-exist");
      const fact = "vaccinated";
      const proof = ethers.id("irrelevant");

      await expect(
        disclosure.verifyFact(fakeRecordId, fact, proof)
      ).to.be.reverted;
    });

    // Anyone can verify (not just the patient) — that's the point of
    // selective disclosure. A hospital, insurer, or employer can check
    // the proof without needing the patient's private data.
    it("should allow anyone to verify a fact (not just the patient)", async function () {
      const fact = "vaccinated";
      const proof = ethers.solidityPackedKeccak256(
        ["bytes32", "string"],
        [commitment, fact]
      );

      await expect(disclosure.connect(verifier).verifyFact(recordId, fact, proof))
        .to.emit(disclosure, "FactVerified")
        .withArgs(recordId, fact);
    });
  });

  describe("Querying commitments", function () {
    it("should return false for a record with no commitment", async function () {
      const recordId = ethers.id("nonexistent");
      expect(await disclosure.hasCommitment(recordId)).to.equal(false);
    });

    it("should return zero hash for a record with no commitment", async function () {
      const recordId = ethers.id("nonexistent");
      expect(await disclosure.getCommitment(recordId)).to.equal(ethers.ZeroHash);
    });
  });
});

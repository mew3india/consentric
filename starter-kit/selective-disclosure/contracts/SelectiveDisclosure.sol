// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title SelectiveDisclosure
 * @notice A simplified selective-disclosure contract for health records.
 *
 * The idea: a patient can store a commitment (a hash) of their health data
 * on-chain, and later prove specific facts about that data without revealing
 * the data itself.
 *
 * Example: A patient has a vaccination record. Instead of sharing the full
 * record, they store a hash of it on-chain. Later, they can prove "I am
 * vaccinated" by providing proof that their record contains a vaccination
 * entry — without revealing their name, date of birth, or any other details.
 *
 * FOR THIS HACKATHON: We're simplifying this to a hash-based commitment
 * scheme. Real-world selective disclosure uses zero-knowledge proofs, which
 * are complex. Here, we're focusing on the concept:
 *
 * 1. Patient stores a hash (commitment) of their data
 * 2. Patient can later reveal a specific fact + a proof that it matches
 *    the stored commitment
 * 3. A verifier can check the proof without seeing the full data
 *
 * YOUR JOB: Implement the functions below. The tests describe the expected behavior.
 *
 * HINTS:
 * - keccak256() is your friend for hashing
 * - A simple approach: the "commitment" is keccak256(fullData), and a
 *   "proof" is keccak256(fact + secret) where the patient knows the secret
 * - Don't try to build actual ZK proofs — focus on the access pattern
 */
contract SelectiveDisclosure {
    // =========================================================================
    // STATE VARIABLES
    // =========================================================================

    // TODO: Store the patient (owner) address
    // TODO: Store commitments — maybe a mapping from a record ID to a hash?
    // TODO: Store which facts have been disclosed

    // =========================================================================
    // EVENTS
    // =========================================================================

    /// @notice Emitted when a patient stores a new data commitment
    event CommitmentStored(bytes32 indexed recordId, bytes32 commitment);

    /// @notice Emitted when a fact is successfully verified
    event FactVerified(bytes32 indexed recordId, string fact);

    // =========================================================================
    // CONSTRUCTOR
    // =========================================================================

    /**
     * @notice Sets up the contract. The deployer is the patient.
     * TODO: Implement this
     */
    constructor() {
        // TODO: Store the deployer as the patient
    }

    // =========================================================================
    // CORE FUNCTIONS
    // =========================================================================

    /**
     * @notice Store a commitment (hash) of a health record.
     * @param recordId A unique identifier for this record (e.g. "vaccination-record")
     * @param commitment The keccak256 hash of the full record data
     *
     * Requirements:
     * - Only the patient can store commitments
     * - The commitment must not be zero (bytes32(0))
     * - Should emit a CommitmentStored event
     *
     * TODO: Implement this function
     */
    function storeCommitment(bytes32 recordId, bytes32 commitment) external {
        // TODO: Implement this
    }

    /**
     * @notice Verify a fact about a record without revealing the full record.
     * @param recordId The record this fact relates to
     * @param fact The fact being disclosed (e.g. "vaccinated", "age-above-18")
     * @param proof A hash that proves the fact is consistent with the stored commitment.
     *             In our simplified model: proof = keccak256(abi.encodePacked(commitment, fact))
     *
     * Requirements:
     * - A commitment must exist for the given recordId
     * - The proof must be valid: keccak256(abi.encodePacked(storedCommitment, fact)) == proof
     * - Should emit a FactVerified event if valid
     * - Should revert if the proof is invalid
     *
     * TODO: Implement this function
     */
    function verifyFact(bytes32 recordId, string calldata fact, bytes32 proof) external {
        // TODO: Implement this
    }

    /**
     * @notice Check if a commitment exists for a given record ID.
     * @param recordId The record ID to check
     * @return True if a commitment has been stored for this record
     *
     * TODO: Implement this function
     */
    function hasCommitment(bytes32 recordId) external view returns (bool) {
        // TODO: Implement this
    }

    /**
     * @notice Get the stored commitment for a record.
     * @param recordId The record ID to look up
     * @return The stored commitment hash (bytes32(0) if none exists)
     *
     * TODO: Implement this function
     */
    function getCommitment(bytes32 recordId) external view returns (bytes32) {
        // TODO: Implement this
    }
}

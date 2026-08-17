// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title AccessAuditTrail
 * @notice An immutable, on-chain log of every access to a patient's health records.
 *
 * The idea: every time someone (a doctor, insurer, lab tech) accesses a patient's
 * health record, that access is logged on-chain. The log is immutable — no one can
 * go back and erase the fact that they looked at the data. The patient can see
 * exactly who accessed their records, when, and why.
 *
 * This is like an access log file, except it can't be tampered with because
 * it lives on Ethereum.
 *
 * YOUR JOB: Implement the functions below. The tests describe the expected behavior.
 *
 * HINTS:
 * - Solidity events are your best friend here. They're cheap to emit, they're
 *   indexed (so you can filter them), and they're permanently stored in the
 *   transaction logs.
 * - You'll want to store some on-chain state too (an array or mapping of
 *   access records) so the contract can answer queries like "who accessed
 *   my records?" directly.
 * - Think about what data each log entry needs: who accessed it, when,
 *   what they accessed (a record type or ID), and maybe a reason.
 */
contract AccessAuditTrail {
    // =========================================================================
    // DATA STRUCTURES
    // =========================================================================

    /**
     * @notice Represents a single access log entry.
     *
     * TODO: This struct is defined for you. Use it in your implementation.
     */
    struct AccessRecord {
        address accessor;    // Who accessed the record
        uint256 timestamp;   // When they accessed it (block.timestamp)
        string recordType;   // What they accessed (e.g. "lab-results", "prescription")
        string reason;       // Why they accessed it (e.g. "treatment", "insurance-claim")
    }

    // =========================================================================
    // STATE VARIABLES
    // =========================================================================

    // TODO: Store the patient (owner) address
    // TODO: Store the access log — an array of AccessRecord, or a mapping, or both

    // =========================================================================
    // EVENTS
    // =========================================================================

    /// @notice Emitted every time a record access is logged
    event AccessLogged(
        address indexed accessor,
        uint256 timestamp,
        string recordType,
        string reason
    );

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
     * @notice Log an access to the patient's records.
     * @param recordType What was accessed (e.g. "lab-results", "prescription")
     * @param reason Why it was accessed (e.g. "treatment", "insurance-claim")
     *
     * Requirements:
     * - Anyone can log an access (in a real system, this would be called by
     *   the access-control layer, but for this hackathon, keep it simple)
     * - recordType must not be empty
     * - Should store the access record on-chain
     * - Should emit an AccessLogged event
     *
     * NOTE: msg.sender is automatically the accessor — you don't need a
     * separate parameter for who is accessing.
     *
     * TODO: Implement this function
     */
    function logAccess(string calldata recordType, string calldata reason) external {
        // TODO: Implement this
    }

    /**
     * @notice Get the total number of access log entries.
     * @return The number of times the patient's records have been accessed.
     *
     * TODO: Implement this function
     */
    function getAccessCount() external view returns (uint256) {
        // TODO: Implement this
    }

    /**
     * @notice Get a specific access log entry by index.
     * @param index The index of the entry (0-based)
     * @return The AccessRecord at that index
     *
     * Requirements:
     * - Index must be within bounds
     *
     * TODO: Implement this function
     */
    function getAccessRecord(uint256 index) external view returns (AccessRecord memory) {
        // TODO: Implement this
    }

    /**
     * @notice Get all access log entries. Useful for displaying the full audit trail.
     * @return An array of all AccessRecord entries
     *
     * NOTE: This can be expensive for large logs. In production you'd paginate.
     * For a hackathon, returning everything is fine.
     *
     * TODO: Implement this function
     */
    function getAllAccessRecords() external view returns (AccessRecord[] memory) {
        // TODO: Implement this
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title HealthConsent
 * @notice A patient-controlled consent contract for health record access.
 *
 * The idea: a patient (the contract deployer, or a registered patient address)
 * can grant and revoke access to their health records on a per-provider basis.
 * Access can be scoped — maybe a doctor can see lab results but not mental
 * health notes. Maybe an insurer can verify a diagnosis exists but can't read
 * the full record.
 *
 * YOUR JOB: Implement the functions below. The tests in test/HealthConsent.test.js
 * describe exactly how the finished contract should behave.
 *
 * HINTS:
 * - Think about what data structures you need. A mapping from provider address
 *   to some kind of permission struct?
 * - "Scoped" access could be as simple as a string label (e.g. "lab-results")
 *   or an enum. Keep it simple for a hackathon.
 * - Only the patient should be able to grant or revoke access. Think about
 *   access control (hint: who deployed the contract?).
 */
contract HealthConsent {
    // =========================================================================
    // STATE VARIABLES
    // =========================================================================

    // TODO: Define the patient (owner) address
    // TODO: Define a data structure to track who has access and what scope

    // =========================================================================
    // EVENTS
    // =========================================================================

    // These events are already defined for you — your implementation should
    // emit them at the right times. The tests check for these.

    /// @notice Emitted when a patient grants access to a provider
    event AccessGranted(address indexed provider, string scope);

    /// @notice Emitted when a patient revokes access from a provider
    event AccessRevoked(address indexed provider);

    // =========================================================================
    // CONSTRUCTOR
    // =========================================================================

    /**
     * @notice Sets up the contract. The deployer is the patient.
     *
     * TODO: Store the deployer's address as the patient/owner.
     */
    constructor() {
        // TODO: Implement this
    }

    // =========================================================================
    // CORE FUNCTIONS
    // =========================================================================

    /**
     * @notice Grant a provider access to the patient's records with a given scope.
     * @param provider The address of the doctor, hospital, insurer, etc.
     * @param scope A label describing what they can access (e.g. "lab-results",
     *              "full-record", "diagnosis-only").
     *
     * Requirements:
     * - Only the patient (contract deployer) can call this
     * - The provider address must not be the zero address
     * - Should emit an AccessGranted event
     *
     * TODO: Implement this function
     */
    function grantAccess(address provider, string calldata scope) external {
        // TODO: Implement this
    }

    /**
     * @notice Revoke a provider's access entirely.
     * @param provider The address to revoke access from.
     *
     * Requirements:
     * - Only the patient can call this
     * - The provider must currently have access
     * - Should emit an AccessRevoked event
     *
     * TODO: Implement this function
     */
    function revokeAccess(address provider) external {
        // TODO: Implement this
    }

    /**
     * @notice Check whether a provider currently has access.
     * @param provider The address to check.
     * @return True if the provider has been granted access and it hasn't been revoked.
     *
     * TODO: Implement this function
     */
    function hasAccess(address provider) external view returns (bool) {
        // TODO: Implement this
    }

    /**
     * @notice Get the scope of access granted to a provider.
     * @param provider The address to check.
     * @return The scope string (e.g. "lab-results"). Empty string if no access.
     *
     * TODO: Implement this function
     */
    function getAccessScope(address provider) external view returns (string memory) {
        // TODO: Implement this
    }
}

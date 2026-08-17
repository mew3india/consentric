# Consent Management — Starter Kit

## Goal

Build a smart contract that lets a patient control who can access their health records. The patient should be able to:

1. **Grant access** to a provider (doctor, hospital, insurer) with a specific scope (e.g. "lab-results", "full-record")
2. **Revoke access** from a provider at any time
3. **Check** whether a provider currently has access, and what scope they were granted

The key idea: the patient is always in control. No one else can grant or revoke access on their behalf.

## What's Here

- `contracts/HealthConsent.sol` — A stub contract with all the function signatures but empty bodies. Read the comments — they tell you exactly what each function should do.
- `test/HealthConsent.test.js` — Tests that describe how the finished contract should behave. **These tests will fail right now.** Your job is to fill in the contract until they pass.

## Getting Started

```bash
npm install
npx hardhat test    # Run the tests (they'll fail — that's expected)
npx hardhat compile # Compile the contract
```

## Hint

Think about a `mapping` from `address` to a struct that stores whether access is active and what scope was granted. Use `msg.sender` to enforce that only the patient can grant/revoke access. Don't overthink it — a working simple solution beats an overengineered incomplete one.

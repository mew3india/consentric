# Selective Disclosure — Starter Kit

## Goal

Build a smart contract that lets a patient prove specific facts about their health records without revealing the records themselves.

Think of it like this: a patient has a vaccination record. An employer asks "are you vaccinated?" Instead of handing over the full medical file, the patient provides a cryptographic proof that says "yes, this person is vaccinated" — and the employer can verify it's legit, without ever seeing a name, date of birth, or diagnosis.

## What's Here

- `contracts/SelectiveDisclosure.sol` — A stub contract using a simplified hash-based commitment scheme. Function signatures are there, bodies are TODO.
- `test/SelectiveDisclosure.test.js` — Tests showing how the finished contract should work. **They fail right now.** Fill in the contract to make them pass.

## Getting Started

```bash
npm install
npx hardhat test    # Run the tests (they'll fail — that's expected)
npx hardhat compile # Compile the contract
```

## Hint

The simplified model works in two steps: (1) the patient stores `keccak256(fullData)` as a commitment, (2) to prove a fact, someone provides `keccak256(commitment + fact)` as a proof — if it matches the expected value, the fact is verified. This isn't real zero-knowledge (a determined attacker could brute-force simple data), but it demonstrates the concept. If you want to go further, look into Merkle trees or actual ZK libraries — but a working simple version is better than a broken complex one.

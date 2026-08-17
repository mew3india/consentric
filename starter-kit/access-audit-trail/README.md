# Access Audit Trail — Starter Kit

## Goal

Build a smart contract that creates an immutable, on-chain log of every time someone accesses a patient's health records. Think of it as an access log file that can't be tampered with — because it lives on Ethereum.

Every log entry should record: who accessed the data, when, what type of record they accessed, and why. The patient can query the contract to see the full history of who's been looking at their records.

## What's Here

- `contracts/AccessAuditTrail.sol` — A stub contract with an `AccessRecord` struct already defined and function signatures with empty bodies. Read the comments.
- `test/AccessAuditTrail.test.js` — Tests showing the expected behavior. **They fail right now.** Fill in the contract to make them pass.

## Getting Started

```bash
npm install
npx hardhat test    # Run the tests (they'll fail — that's expected)
npx hardhat compile # Compile the contract
```

## Hint

Use a `AccessRecord[]` array as your primary storage, and push a new entry every time `logAccess` is called. Use `block.timestamp` for the time and `msg.sender` for the accessor address. Events are important here — emit `AccessLogged` with every new entry so off-chain tools can listen for real-time access notifications.

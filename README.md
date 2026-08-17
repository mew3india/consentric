# Consentric — Privacy-First Health Records on Ethereum

**Your medical records should belong to you, not to whichever hospital, insurer, or database happens to be holding them that year.**

## Why This Event Exists

India's health records are going digital. The Ayushman Bharat Digital Mission is pushing medical data onto centralized and blockchain-based systems, and hospital networks are experimenting with distributed ledgers for the same problem. Meanwhile, patients still have almost no say in who sees their records, when, or why.

This hackathon takes Ethereum's core values — censorship resistance, open source, privacy, security — and uses them as the actual design brief. You're not learning Solidity for the sake of learning Solidity. You're building something that could genuinely matter: a system where a patient controls their own health data.

## Details

| | |
|---|---|
| **What** | 6-hour, in-person Ethereum build sprint |
| **When** | 21 September 2026, 11:00–17:00 IST |
| **Where** | Baderia Global Institute of Engineering and Management, Jabalpur, Madhya Pradesh, India |
| **Register** | [luma.com/fdadgux1](https://luma.com/fdadgux1) |

## Agenda

| Time (IST) | Block | What Happens |
|---|---|---|
| 11:00–11:15 | Welcome | Why this problem, why Ethereum |
| 11:15–12:15 | Workshop I | Wallet setup, first transaction, deploying a contract no single party can take down |
| 12:15–13:00 | Workshop II | Hands-on patient-consent contract (grant/scope/revoke), intro to selective disclosure |
| 13:00–13:30 | Break | Lunch + team formation |
| 13:30–16:30 | Build Sprint | Teams pick a track and ship a working prototype |
| 16:30–17:00 | Demos & Awards | Lightning demos, judging, prizes |

## Build Tracks

### 1. Consent Management
Build the access-control logic for a health record: who can see it, what parts they can see, and how a patient takes that access back. Think `grantAccess`, `revokeAccess`, scoped permissions.

### 2. Selective Disclosure
Prove a fact about a medical record — "this person is vaccinated," "this person is over 18" — without revealing the record itself. The record stays private; the proof is public and verifiable.

### 3. Access Audit Trail
Every time someone touches a health record, that access gets logged on-chain. Immutable, transparent, and the patient can see exactly who looked at what, and when.

## Prizes

| Place | Category |
|---|---|
| 🥇 1st | Best Consent Flow |
| 🥈 2nd | Best Selective-Disclosure Demo |
| 🥉 3rd | Best Open-Source Contribution |

See [JUDGING.md](JUDGING.md) for what the judges are actually looking for.

## Who Should Come

- **CSE, IT, AI/ML, Blockchain-branch students** — you're the technical builders
- **MBA Healthcare & Hospital Management students** — you bring the domain perspective that makes this real, not just a toy demo
- **Anyone else** — any branch, any year, any nearby college. If you're curious, you're qualified.

No prior blockchain experience required. The workshops in the first two hours will get you from zero to deploying a contract.

## What to Bring

A laptop. That's it.

## How to Participate

1. **Before the event:** Clone this repo
   ```bash
   git clone https://github.com/mew3india/consentric.git
   cd consentric
   ```

2. **Pick a track branch** for a head start (pre-scaffolded starter code):
   ```bash
   git checkout track/consent-management
   # or
   git checkout track/selective-disclosure
   # or
   git checkout track/access-audit-trail
   ```

3. **During the build sprint (13:30–16:30):** Build your prototype.

4. **Submit before 16:30 IST:**
   - Fork this repo (or work on a clone if you have write access)
   - Add your project under `submissions/<your-team-name>/` with a short README
   - Open a pull request into `main`

Full submission details: [CONTRIBUTING.md](CONTRIBUTING.md)

## CROPS Alignment

This event isn't just themed around Ethereum — it's structured around Ethereum's values:

- **Censorship Resistance** — Health records stored on-chain can't be silently deleted, altered, or withheld by any single party. The contracts you build here are deployed to a network no one entity controls.
- **Open Source** — Every line of code at this event ships to a public repo under the MIT license. Your work is reusable, forkable, and auditable by anyone.
- **Privacy** — The selective-disclosure track exists specifically because "transparent" shouldn't mean "everyone sees everything." You can prove facts about data without revealing the data itself.
- **Security** — Immutable audit trails, cryptographic access control, on-chain consent logs. Security isn't a feature here — it's the architecture.

## Organizers

Built by the **Department of Computer Science & Engineering, Baderia Global Institute of Engineering and Management** and **[Mew3 India](https://github.com/mew3india)** (student Web3 community).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- Instagram: [instagram.com/mew3india](https://instagram.com/mew3india)
- X: [x.com/Mew3india](https://x.com/Mew3india)

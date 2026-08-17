# Contributing — How to Submit Your Build

This document explains the full submission flow for Consentric. Read it before the build sprint starts so you don't lose precious hacking time to git confusion.

## Before the Event

1. **Install the tools:**
   - [Git](https://git-scm.com/downloads)
   - [Node.js](https://nodejs.org/) (LTS version, 18+)
   - A code editor (VS Code is fine)

2. **Clone the repo:**
   ```bash
   git clone https://github.com/mew3india/consentric.git
   cd consentric
   ```

## During the Event

### Step 1: Pick a Track

Check out the branch for your chosen track to get the pre-scaffolded starter code:

```bash
# Option A: Consent Management
git checkout track/consent-management

# Option B: Selective Disclosure
git checkout track/selective-disclosure

# Option C: Access Audit Trail
git checkout track/access-audit-trail
```

Each track branch has a starter kit with a stub contract, a test file, and a README explaining what to build. You can also start from `main` if you want to build from scratch — the track branches just save you setup time.

### Step 2: Install Dependencies

```bash
cd starter-kit/<your-track>/
npm install
```

### Step 3: Build Your Project

Write your contracts, tests, and any frontend or scripts you want to include. The stub contracts have TODO comments telling you what to implement.

### Step 4: Prepare Your Submission

Create a folder for your team under `submissions/`:

```
submissions/
└── your-team-name/
    ├── README.md       # Required — see below
    ├── contracts/      # Your smart contracts
    ├── test/           # Your tests
    └── ...             # Anything else (scripts, frontend, etc.)
```

Your submission `README.md` should include:
1. **What you built** (1–2 sentences)
2. **Which track** (consent-management / selective-disclosure / access-audit-trail)
3. **Team members** (names and, optionally, GitHub handles)
4. **How to run it** (any setup steps beyond `npm install && npx hardhat test`)
5. **Anything else** the judges should know

### Step 5: Submit via Pull Request

**If you forked the repo** (recommended):
```bash
# Make sure you're on main or your own branch
git checkout -b submission/your-team-name

# Add your submission folder
git add submissions/your-team-name/
git commit -m "Add submission: your-team-name"
git push origin submission/your-team-name
```
Then open a pull request from your fork into `mew3india/consentric:main` on GitHub.

**If you have direct write access** (event organizers may grant this):
```bash
git checkout main
git checkout -b submission/your-team-name
git add submissions/your-team-name/
git commit -m "Add submission: your-team-name"
git push origin submission/your-team-name
```
Then open a PR into `main`.

### Step 6: Wait for Merge

A mentor or organizer will do a quick sanity check (does the folder exist? does the README make sense?) and merge your PR. This is a hackathon, not a production code review — we're not going to nitpick your variable names.

## Deadline

**All pull requests must be opened before 16:30 IST on 14 September 2026.**

PRs submitted after 16:30 won't be considered for prizes but will still be merged as part of the open-source record.

## Questions?

Grab any organizer at the venue, or reach out on [Instagram](https://instagram.com/mew3india) / [X](https://x.com/Mew3india).

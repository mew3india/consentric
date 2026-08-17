# Judging Criteria

Three prizes, three things we care about. Judges will be looking at working prototypes, not polished pitch decks — show us what your code does, not what your slides say it could do.

## 🥇 Best Consent Flow

Rewards the cleanest, most understandable grant/scope/revoke logic. We're not looking for the most features — we're looking for the implementation that a real patient could actually trust. Can a non-technical person understand what permissions they're granting? Can they take those permissions back? Is the logic correct and the code readable?

**What wins here:** Clear access-control logic, sensible scoping (not just all-or-nothing), clean revocation, and tests that prove it works.

## 🥈 Best Selective-Disclosure Demo

Rewards the most convincing proof-without-revelation. Can you prove that a patient meets some criteria — vaccinated, above a certain age, has a specific condition — without leaking the underlying record? Bonus points if a judge can actually run the demo and see it work end to end.

**What wins here:** A working proof mechanism (even a simplified one), a clear demo showing what's revealed vs. what stays hidden, and an honest explanation of what your approach can and can't do.

## 🥉 Best Open-Source Contribution

Rewards the submission that would be most useful to someone else picking up this problem tomorrow. Good documentation, clean code, clear README, maybe even a well-written contract that others could fork and extend. This prize is less about clever code and more about being a good open-source citizen.

**What wins here:** Code quality, documentation, a README that actually explains things, tests, and anything that makes the project easy to understand and build on.

---

## General Notes

- **Completeness matters less than correctness.** A small thing that works beats a big thing that doesn't.
- **Tests count.** If your contract passes its tests, the judges can see that immediately. If it doesn't have tests, they have to take your word for it.
- **Beginner teams are not at a disadvantage.** Judges know this is a 3-hour sprint and many participants are writing their first Solidity. A well-executed simple solution is absolutely a winning submission.

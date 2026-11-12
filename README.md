# merge-queue-canary

Throwaway, isolated canary. It records how a GitHub merge queue reports checks and identities, so a
release design elsewhere can be decided on evidence:

- Which required checks report on a merge-group head: the Actions job `verify` (App 15368) and the
  code-scanning `CodeQL` check (App 57789).
- How the code-scanning ruleset rule behaves compared with a required `CodeQL` status check.
- Which actor, sender and committer a queue-produced push to `main` carries.

It is not a product, has no secrets and deploys nothing. It will be archived after the test.

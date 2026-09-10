#!/bin/bash
# B.I.B. — rebuild everything and push the public build to GitHub.
# Usage:  ./push.sh "commit message"
set -e
cd "$(dirname "$0")"
python3 src/build.py > /tmp/bib_build.log 2>&1 || { tail -20 /tmp/bib_build.log; exit 1; }
tail -4 /tmp/bib_build.log
git add -A
if git diff --cached --quiet; then echo "Nothing to push — already up to date."; exit 0; fi
git commit -q -m "${1:-Update}"
git push
echo "Pushed: $(git log --oneline -1)"

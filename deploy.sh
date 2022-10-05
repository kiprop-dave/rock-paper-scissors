
#!/usr/bin/env sh

# abort on errors
set -e

git init
git remote add origin https://github.com/kiprop-dave/rock-paper-scissors.git
git add -A
git commit -m 'initial commit'
git branch -M main
git push -u origin main

#cd -

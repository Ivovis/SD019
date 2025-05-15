To grab an existing repository:

- git clone git@github.com:userName/repositoryName.git

Normal commit cycle:

- git add .
- git commit -m "feat: comment"
- git push

To list existing branches or current branch:

- git branch
- git branch --show-current

To switch create and switch to a new branch:

- git checkout -b branchName

  exclude the -b flag to switch to existing branch

To push a new branch (after adding and committing):

- git push --set-upstream origin branchName

To configure your local device to use main instead of branch:

- git config --global init.defaultBranch main

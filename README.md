# Node.js + Express + TypeScript

## Pre-reqs

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)
- Install [Prettier in VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Install [Tslint in VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- Install [PostgreSQL](https://www.postgresql.org/)

## Fork and run the project

- [Fork](https://help.github.com/en/articles/fork-a-repo) this repo

- Clone your forked repo

```javascript
git clone git@github.wdf.sap.corp:<yourfork>/express_ts.git
```

- Install dependencies

```javascript
cd express_ts
npm install --verbose
```

- Build and run the project

```javascript
npm start
```

- You can access the web app via

```
http://localhost:3000/ui/index.html
```

## Contribute

- Create a dev branch depends on master locally
- Commit your changes
- Push to the remote dev branch of your forked repo
- Create Pull-Request to the main repo
  - If code check, review and test passed, this PR will be merged into the main repo
  - If failed to pass the review, this PR will be required to fix the issue
- Sync the latest main repo (default master branch)

```javascript
git checkout master
git fetch upstream
git merge upstream/master
git push origin master
git checkout dev
git rebase master
```

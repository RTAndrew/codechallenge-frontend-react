# Are you ready for the (re)volution?!

## Resume
Pharma Inc. is a unicorn company that manages over 1 billion of public and private medical data, and, sooner or late, it expects to reach the moon.

Access the link [here](https://rtandrew-unicorn-company.netlify.app/)

## Technical Resume
In this project I was challenged to create a web app that interacts with the [Random User API](https://randomuser.me/documentation) and helps users find patient's medical information.

The challenged needed to be completed within 5 days, but I managed to do it in 3 days, covering all the test cases in the application.

## Project requirements
- [x] Follow the proposed UI design
- [x] Fetch user, add route pagination to allow link sharing
- [x] Allow users to search the results based on `username` and `country`
- [x] Allow sorting the results by `full name` and `gender`
- [x] Implement `unit` and `integration` tests (currently the `test coverage is at 84.5%`)


## Tech Stack
- [x] React.js (CRA) + Typescript + [Ant Design](ant.design/)
- [x] Continous Delivey pipeline with Netlify, and Continuous Integration pipeline with GitHub Actions
- [x] Git Workflow
- [x] Jest + React Testing Library - For testing
- [x] SASS modules
- [x] [Git Commit Message Convention](https://github.com/RTAndrew/git-commit-message-convention)
- [x] ESlint + Prettier
- [x] Commit lint + Lint Staged
- [x] Netlify


## How To Run
```bash
  git clone <repository> codechallenge-frontend-react
```

```bash
  cd codechallenge-frontend-react
```

```bash
  npm i
```

```bash
  npm run dev
```
For testing (before pushing, it will automatically run the tests):

```bash
  npm run test
```

There is no `env` to be set. However, and if you would like to, you can change some of the configurations in `/src/config`.
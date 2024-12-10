<!-- # Workflow Course Assignment

## Goal

This project is part of my second-year, first-semester workflow course assignment. The objective is to improve a website's development process by configuring tools and writing tests to ensure high-quality code and efficient workflows.

---

## Steps to Set Up the Project

### 1. Fork and Clone the Repository

1.1 **Fork the Repository**

- Navigate to the repository's page.
- Click on the "Fork" button to create a copy under your GitHub account.

  1.2 **Clone the Repository Locally**

- Clone the forked repository:
  ```bash
  git clone https://github.com/NoroffFEU/workflow-repo-ca.git
  ```
---

### 2. Create a Branch

2.1 **Create the Workflow Branch**

- Navigate to the cloned repository directory:
  ```bash
  cd <repository-directory>
  ```
- Create a new branch named `workflow` to manage all changes:
  ```bash
  git checkout -b workflow
  ```

---

### 3. Set Up Development Tools

3.1 **Install ESLint and Prettier**

- Install the required packages:
  ```bash
  npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
  ```
- Configure ESLint to handle test file globals and Prettier to format HTML and JavaScript files.

  3.2 **Set Up Commit Hooks**

- Add Husky and lint-staged for commit hooks:
  ```bash
  npx husky-init && npm install
  npm install lint-staged --save-dev
  ```
- Update `.husky/pre-commit`:
  ```bash
  npx lint-staged
  ```
- Add the following to `package.json`:
  ```json
  "lint-staged": {
    "*.{js,html}": ["prettier --write", "eslint"]
  }
  ```

---

### 4. Set Up Testing Tools

4.1 **Unit Testing with Vitest**

- Install Vitest for unit testing:
  ```bash
  npm install vitest --save-dev
  ```
- Write tests for the following functions:

  - **isActivePath**:
    1.  Returns `true` when the current path matches the href exactly.
    2.  Returns `true` for root path (`/`) when the path is `/` or `/index.html`.
    3.  Returns `true` when the current path includes the href.
    4.  Returns `false` when paths don't match.
  - **getUserName**:
    1.  Test that it returns the name from the user object in storage (first save a user object to storage).
    2.  Test that it returns `null` when no user exists in storage.

  4.2 **End-to-End Testing with Playwright**

- Install Playwright for end-to-end testing:
  ```bash
  npm install playwright --save-dev
  ```
- Test the following cases:
  - **Login**:
    1.  User can successfully log in with valid credentials from environment variables.
    2.  User sees an error message with invalid credentials.
  - **Navigation**:
    1.  Navigate to the home page.
    2.  Wait for the venue list to load.
    3.  Click the first venue.
    4.  Verify that the venue details page loads and contains the words "Venue details" in the heading.

---

## How to Contribute

1. **Fork the Repository**

   - Fork the project repository to your GitHub account.

2. **Create a Branch**
   - Create a new branch (`workflow`) for your changes.
3. **Make Changes**

   - Implement your changes, such as adding features, fixing bugs, or improving tests.

4. **Commit Changes**

   - Ensure that your code passes the linting and formatting checks:
     ```bash
     git add .
     git commit -m "Your commit message"
     ```

5. **Push Changes**

   - Push your changes to your forked repository:
     ```bash
     git push origin workflow
     ```

6. **Create a Pull Request**
   - Go to your forked repository on GitHub and create a pull request to the original repository.
   - Ensure your PR follows the repository’s contribution guidelines. -->

# Workflow Course Assignment

## Goal

This project is part of my second-year, first-semester workflow course assignment. The objective is to improve a website's development process by configuring tools and writing tests to ensure high-quality code and efficient workflows.

## Installation Instructions

### Prerequisites

- **Node.js**: This project requires **Node.js v22.3.0**. You can install Node.js from [here](https://nodejs.org/).

### Install Dependencies

To install all the project dependencies, run the following command:

```bash
npm install
```

## Setting Up the Environment

Create a .env file in the root directory of the project and include the following environment variables:

```bash

TEST_USER_EMAIL=<your-test-user-email>
TEST_USER_PASSWORD=<your-test-user-password>
```

Make sure to add .env to your .gitignore to avoid committing sensitive information.

## Running the Development Server

To start the live server, run the following command:

```bash
npm run start
```

This will start the server on http://localhost:5500.

## Running Tests

### Running Tests

#### Unit Tests with Vitest

To run unit tests, execute the following command:

```bash
npm run test
```

#### End-to-End Tests with Playwright

To run end-to-end tests, use:

```bash
npx playwright test
```

## Code Quality / Commit Hooks

We use ESLint and Prettier for code linting and formatting. Before committing any changes, the code will be automatically linted and formatted via commit hooks.

You can manually lint and format your code with:

```bash
npm run lint
```

# Contributing Guidelines

We welcome contributions! To ensure smooth collaboration, please follow these steps:

1. Fork the Repository

- Fork the project repository to your GitHub account. This creates your own copy of the project where you can work on changes.

2. Create a Branch

- Create a new branch from main for your changes. Name it workflow to keep your changes aligned with the project’s workflow:

```bash
git checkout -b workflow

```

3. Make Your Changes

- Implement your changes (features, bug fixes, tests, etc.).
- Ensure that your code follows the project’s linting and formatting rules.
- If adding a new feature, please include tests where applicable.

4. Commit Your Changes

- Before committing, make sure to stage your changes and verify that the code passes linting and formatting checks:

```bash
git add .
git commit -m "Your commit message"

```

5. Push Your Changes
   Push your branch to your forked repository:

```bash
git push origin workflow

```

6. Create a Pull Request

- Once your changes are pushed, go to your forked repository on GitHub and create a pull request (PR) to the original repository.
- In the PR description, provide a clear summary of the changes you’ve made and reference any relevant issues.
- Make sure your PR follows the repository’s contribution guidelines.

# Example Commands

Here are some example commands to help you get started with the project:

- Install Dependencies:
  - To install all the project dependencies, run:

```bash
npm install
```

- Start the Development Server:
  - To start the development server with live-reloading, use:

```bash
npm run start
```

- Run Unit Tests with Vitest:
  - To run the unit tests, execute:

```bash
npm run test
```

- Run End-to-End Tests with Playwright:
  - To run the end-to-end tests, use:

```bash
npx playwright test
```

- Lint and Format Code:
  - To lint and format your JavaScript and HTML files, run:

```bash
npm run lint
```

# `@carbon/ibm-products` starter template (vite)

This template will scaffold an application using Carbon v11, Carbon for IBM Products and Github Pages. Use this template to jump start your application with a completely pre-configured setup using `vite`.

There is a prerequisite of having `degit` installed in order to get this template. To learn more about `degit`, see their [repository](https://github.com/Rich-Harris/degit).

- [Carbon Design system](https://github.com/carbon-design-system/carbon)
- [Carbon for IBM Products](https://github.com/carbon-design-system/ibm-cloud-cognitive)

## Getting started

```console
# Start template creation
degit glapadre/carbon-github-pages-vite-template my-new-vite-template

# Change to app directory
cd my-new-vite-template

# Install dependencies
yarn

# Start vite dev server
yarn dev

# (Optional) to setup Githhub Pages

# Initialize git
git init
git add .

# Push first commit
git commit -m 'initial commit' 

# Push an existing repository from the command line
git remote add origin git@github.com:{yourGitHubName}>/{yourRepositoryName}.git
git branch -M main
git push -u origin main

# Push the React app to the GitHub repository
yarn deploy
```

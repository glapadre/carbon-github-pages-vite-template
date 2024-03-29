# `@carbon/ibm-products` starter template (vite)

This template will scaffold an application using Carbon v11, Carbon for IBM Products and Github Pages (IBM Internal). Use this template to jump start your application with a completely pre-configured setup using `vite`.

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
-- Update `homepage` vars in package.json line 5
-- Update `base` var in vite.config.js line 6

# Initialize git
git init
git add .

# Push first commit
git commit -m 'initial commit' 

# Push this template to a existing IBM repository from the command line
git remote add origin git@github.ibm.com:{yourGitHubName}/{yourRepositoryName}.git
git branch -M main
git push -u origin main

# Deploy react app
yarn deploy
```

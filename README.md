# Lerna Getting Started Example

This repo is a small example of using Lerna 5+.

Watch this [10-minute walkthrough](https://youtu.be/1oxFYphTS4Y) to see how new versions of Lerna work.

This repo contains three packages or projects:

- `core` (a core package, login , logout)
- `dashboard` (a package for example)
- `accessControl` (an package for users and permissions)

```
>> npm ci
>> npm lerna init
>> npm lerna bootstrap
>> cd packages/core 
>> npx tailwindcss -i ./src/styles/base.css -o ./dist/css/base.css --watch // in every package
>> npm run dev
```

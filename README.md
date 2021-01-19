# bitwala-task

Bitwala coding challenge: A React Native app that will display bitcoin latest blocks and transactions

## Dependencies to other systems

- Bitquery GraphQL API

## How to use

### Run the tests

`yarn test`

### Run the linter

`yarn lint`

### Run locally

`yarn start`

### Run for Android

`yarn android`

### Run for iOS

`yarn ios`

### Run for Web

`yarn web`

## Decision documentation & suggestions

### Expo

I decided to use Expo to get started. Expo has limitations of course, however, the requirements of the app at the moment can perfectly be built with Expo. Once we'll add requirements that Expo doesn't support, we can easily "eject".
I've made good experiences with using tools like Expo or create-react-app to get started, as it does a lot of the heavy-lifting regarding configuration and many best practises are already implemented.

### ESlint & Prettier

I used ESlint with the Bitwala configuration to have a consistent code style. Additionally I used prettier with husky and lint-staged to automatically enforce code formatting when code is commited.
I'd run the linter at least during build and exit in case of errors. We could think about running it before pushing, but this can become a heated discussion ;)

### Folder Structure

I went with the folder structure that comes with Expo as it already allowed to separate business logic from visual components. File structure evolves over time and is usually hard to get right the first time. It makes sense to revisit it and change it to what fits when this app evolves.

### Resource Hooks

I used "resource hooks" to encapsulate and abstract data fetching with Apollo, a concept we used a lot in a previous project. My colleague Manu Hornung wrote a nice article about it if you're curious: https://manuscript.blog/future-proof-data-fetching-with-react/

### React Native Testing Library

I've made good experiences using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) to test my React components from a users perspective. I've used [Enzyme](https://enzymejs.github.io/enzyme/) before but always found myself testing implementation details. Therefore, I decided to go with [react-native-testing-library](https://github.com/callstack/react-native-testing-library). Additionally, I talked to some of my colleagues who are using the library to cover whole scenarios (e.g. login, ticket purchase, etc.) by mimicking the according user actions and by checking if the UI components are shown correctly. This is a great step towards end to end tests for our React Native app. Doing this we could cover a lot of our scenarios, while the test runs would still be relatively fast.

### Detox

[Detox](https://github.com/wix/Detox) could be a way for end to end testing on a virtual device, which will be even closer to the product the user is using in the end.

### Browserstack

Real mobile testing could be realized with [Browserstack](https://www.browserstack.com/app-automate) but might get expensive if we want more parallel tests.
We can look at your analytics to decide which devices are the most important to test with.

### Sentry

I added a basic configuration for [Sentry](https://sentry.io/welcome/) as it's already in use at Bitwala and will help us to track down errors happening on our customers devices. The DSN I'd inject through configuration when releasing the application. The Sentry Error Boundary is currently only implemented for native apps, not web.

### Error handling

I have not yet implemented sophisticated error handling apart from using the Sentry error boundary to log errors to Sentry and show a fallback message. Additionally my `useBlocks` simply swallows errors at the moment and returns an empty array. If we'd own the used API, I'd assume that errors are logged and monitored there. Still, frequent empty results would be bad UX and should be tracked. We could also monitor this with Sentry.
If possible, it would be great to handle errors in a graceful way, so it would make sense for example to introduce more error boundaries closer to where the error happened to provide the customer with more information.

### Logging

I have not implemented any logging yet. While I think logging is very important for server side applications, I considered Sentry to be of more value for now. Logging however could be implemented with tools like loglevel, which would also allow us to push logs to a remote server.

### i18n

I have not implemented internationalization yet but would for a real world application with ie. [react-i18next](https://github.com/i18next/react-i18next)

### User Experience

As I decided to focus more on the coding part of this application, ie. structure, code style, testing, etc. there is of course many things that can be improved in terms of UI/UX like:

- a nice UI that fits your corporate identity
- loading indicators or skeletons
- pull to refresh
- automatic updates for new blocks and transactions

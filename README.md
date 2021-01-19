# bitwala-task

Bitwala coding challenge: A React Native app that will display bitcoin latest blocks and transactions

## Dependencies to other systems

- Bitquery GraphQL API

## Decision documentation & suggestions

### Using Expo

I decided to use Expo to get started. Expo has limitations of course, however, the requirements of the app at the moment can perfectly be built with Expo. Once we'll add requirements that Expo doesn't support, we can easily "eject".
I've made good experiences with using tools like Expo or create-react-app to get started, as it does a lot of the heavy-lifting regarding configuration and many best practises are already implemented.

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

## Future Features

- Support multiple languages
- Show loading indicators when fetching data

**React Hello World Program**

React.createElement() -> Creating an Object.

const heading = React.createElement(); /_ heading is react element which is JS object. _/

# Parcel (parceljs.org)

- Dev Build
- Local Server
- HMR = HOt Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds (parcel-cache)
- Image Optimization
- Minification while moving to Production
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential bundling - supports older browers
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# React Hooks:
(Normal Js Utility functions)
- UseState() - SuperPowerful State Variables in React
- UseEffect()

# 2 Types of Routing:
- Client Side Routing
- Server Side ROuting

# Redux
- Install  @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice  (CartSlice)
- Dispatch(action)
- Selector   

# Types of Testing   (Developer)
- Unit Testing
- Integration Testing
- End to end Testing - e2e testing

# Setting up Testing in out Application
- Install React Testing Library -> @testing-library/react
- Installed Jest -> npm i -D jest
- Install Babel dependencies - [jest](https://jestjs.io/docs/getting-started)
- Configure Babel - [jest](https://jestjs.io/docs/getting-started)
- Configure parcel Config file to disable default babel Transpilation - Go to Parcel Docs -> https://parceljs.org/languages/javascript/#babel
- Configure Jest -> [npx jest --init] command  (Give some inputs)
- Install jsdom library - React testing library -> setup -> jest28 -> (npm i -D jest-environment-jsdom)
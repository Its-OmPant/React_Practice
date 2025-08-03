# Day 05 Let's Get Hooked

In this lecture we have refactored our old code into mupliple files. seperating each component and the mock data and constants.

We also have looked in to react hooks.

## React Hooks

React hooks are just normal javascript functions with some superpowers. there are multiple hooks in react. the most used and most common of them are these two

-   useState()
-   useEffect()

We explored useState Hooks - it provides access to a special type of variable known as state variable, which react keeps track of. anytime the value of this state variable changes the react triggers re-render for that component.

To change the value of this state variable useState hook also provides a setter function.

## React Reconciliation Algorithm (React Fiber)

This is the core algorithm of react that determines only the necessary part of the ui that needs to be changes and then updates the actual dom based on the results.

To do so, it keeps track of a parallel DOM , aka virtual dom (which is nothing but made up of react elements), as sson as the state value gets updated, react triggers what known as a DIFF ALGORITHM, which determines the changed part of a ui by comparing the previous virtual dom with the updated virtual dom. then changes the actual dom accordingly.

This is only the simpler explanation of this react Fiber algorithm
more accurate details can be found HERE -> [REACT_RECONCILIATION]('https://github.com/acdlite/react-fiber-architecture')

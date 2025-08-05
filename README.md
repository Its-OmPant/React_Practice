# Day 09 Optimizing Our App

In this lecture we'll see how to optimize our app, how to make it fast, lightweight, performant. We will also see how to create custom Hooks

## Single Responsibility Principle

Single Responsibility principle or SRP states that any code entity in your code should only have a single responsibility, and shouldn't do multiple different things. this helps in increasing Modularity

The more modular code is the more

-   Testable
-   Maintainable
-   Reusable

[NOTE] We had used the RestaurantMenu component to show an example for a customHook to seperate fetchData functionality, but as in our case this component is not ready yet so we will skip it for now.

## Optimizations

-   When building a large scale application, we can have a large no of components and functionality that are somehow, not tightly coupled for ex, if u see swiggy website, then they have multiple offerings like Dineout, Instamart, Online order, all these functionality are logically seperable.

-   But normally any bundler will bundle all of the components used into a single file, that sometimes can feel unnecessary because of these seperable functionality.

-   To handle this situation we can using Chunking.

### Chunking

It is a process of seperating the code for seperable entities so that it can be loaded on demand. in this process we can basically make multiple js file chunks for different entities/functionality.

-   This is also knows as following names..

    -   Code Splitting
    -   Dynamic Bundling
    -   Lazy Loading
    -   On Demand Loading

-   Now to do this react provides us with a built in function called <b>lazy()</b> which helps lazily load the component. lets understand this via an example we will create a grocerry functionality in our app and will lazy load it.

-   Where the Grocery Component is used, remove the import to grocery component and add following

```javascript
const Grocery = lazy(() => import("./components/Grocery"));

// more lines of code
{
    path: "grocery",
    element: <Grocery />
}
```

-but this alone won't work and throw error if u'll try to access it now, the problem here is once u click grocery component, then it starts downloading is js file, but since that time react doesn't have any thing to render in grocery, it will suspend the render.

To correctly handle this react also provides a component called <b>Suspense</b> with a fallback prop, which will be shown till the js file is being downloaded(e.g. just like we load shimmer ui)
like this.

```javascript
// code
{
path: "grocery",
element: (
    <Suspense fallback={<h1>Grocery is loading...</h1>}>
        <Grocery />
    </Suspense>
)}
//code
```

# Day 07 Finding the path

In this lecture we will explore routing in react, but before it lets go deep in useEffect Hook

the useEffect hook takes two arguments
1 - Callback Functionn (required)
2 - Dependency Array (optional)

```javascript
useEffect(() => {}, []);
```

Now based on the dependency array useEffect's behaviour can change

-   If it is not Passed -> the callback will be executed in each render of the component
-   If passed an empty array -> the callback will be executed only in the initial render of the component (just once)
-   If there's some dependency -> then the callback will be executed each time the dependency is updated along with initial render.

### useState Best Practices

-   useState hooks is intended to create local state variables inside components and should be only used for this purpose only.

these are the things to avoid while using useState

-   Never declare state variables outside the functional component.
-   Never declare state variables inside if else or loops statments.
-   Never declare state variables inside any normal function.

## Routing In React

For routing in react we will be using another js library known as react-router.

-   For this library to work we will need to declare some routing configurations in our root level component.

## Two Types of Routing in Web Apps

1 - Server Side Routing
In Server side routing, the client makes a different http requests for seperate pages and the server handles the routing via apis

2 - Client Side Routing
In Client side routing the server sends whole code in one request and the routes and its content is prepared at the client side

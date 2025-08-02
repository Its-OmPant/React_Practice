# Day 01 Inception

Today We'll start with react, we will explore What it is and how to integrate it with our websites.

First we'll see how we can have hello world written in our Website using three ways-

1. Via html
   This one is simple just add an heading element and That's it.

2. Using JavaScript:
   This one involvs DOM manipulation using DOM API's like createElement, etc.

3. Using React:
   To use react first we need to get it, one of the ways to add react to our project is via CDN links.
   We will add the react's cdn links after our body element and will then create our own script.

    Hello World example in react:

    ```
    const heading = React.createElement(
    	"h1",
        { id: "heading" },
    	"Hello World from React!"
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);
    ```

-   Now creating a large react app is not suitable this way so we will seperate our own script and create a new file 04_app.js and write our react code there.

See 04_app.js for its code and Notes.

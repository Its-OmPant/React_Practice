# Day 02 Notes

In previous lecture we saw How we can use react directly via cdn, but our app to be used in production, may need multiple things like caching, optimizations, minimizations, bundling etc. to use these functionality we will be using a bundler - Parcel.

To install parcel

```
    npm install parcel
```

Parcel needs an html file as a entry point for the application, and build the bundle from there only, so we need to remove main field from the package.json file.

Building the package/ Starting dev server

```
    npx parcel index.html
```

## Some Features of parcel

-   Dev builds
-   Local Development Server
-   HMR Hot Module Replacement
-   File watching Algorithm
-   Caching - Faster builds
-   Image Optimization
-   Minification
-   Bundling
-   Compression
-   Consistent Hashing
-   Code splitting
-   Differencial Bundling
-   Diagnostic and Error Handling
-   HTTPs Support
-   Tree Shaking

Generating Production Build Using Parcel

```
    npx parcel build index.html
```

Now after build is done, we also need to ensure the compatability of our app with old browsers. To do that there's a pre installed package in parcel which is browserslist which allows us to configure the compatible browsers for our app.

To use browserlist configure it in package.json like this

```
    "browserslist": [
        "last 2 Chrome versions",
        "last 2 Firefox versions"
    ]
```

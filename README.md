# Day 06 Let's Explore The World

## Monoliths vs Microservice Architecture

Firstly we talked about monolith and microservices architecture. in monolith architecture the various parts of a code e.g UI, auth, db, api etc are all clubbed together as a single service but in microservice architecture all of these can exists as seperate services that talks to each other when required.

Microservices architecture helps is seperation of concerns and also reduces the deploymet complexities.

## Approachs To Make API Calls.

To load the initial ui dynamically we generally have two approaches to make api calls and get data

1 - When the app starts to load, then we make an api call to server requesting the data, then once the data is available we do render it on the page

2 - When the app starts to load, first load some bare minimum structure of UI, and then make the api call, then once data is available re-render it.

This second approach helps increasing the UX as user doesn't have to blankly stare at the screen and wait for data to load.

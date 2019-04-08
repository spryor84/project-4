# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Functional Components | Complete
|Day 5| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 6| Backend | Complete
|Day 7| Initial Clickable Model  | Compolete
|Day 9| MVP | Semicomplete
|Day 12| Post MVP | Incomplete
|Day 13| Present / Science Fair | Incomplete


## Project Description

I am recreating Google Finance using a different API because Google's version was discontinued and the data is no longer publicly accessible there. I think it will be a great opportunity to work solo on everything: project planning, wireframing, React, Node/Express, PostgreSQL, and D3. Relevant API links are included in the resources section below.

## Wireframes

https://res.cloudinary.com/duuqzvlvn/image/upload/v1542700125/unit04-project/Home.png

https://res.cloudinary.com/duuqzvlvn/image/upload/v1542700125/unit04-project/Home%20Bottom.png

https://res.cloudinary.com/duuqzvlvn/image/upload/v1542700125/unit04-project/News%20Stories.png

https://res.cloudinary.com/duuqzvlvn/image/upload/v1542700124/unit04-project/Stock%20Individual.png

https://res.cloudinary.com/duuqzvlvn/image/upload/v1542725864/unit04-project/ERD%20and%20Components.jpg

## Priority Matrix

https://res.cloudinary.com/duuqzvlvn/image/upload/v1542700229/unit04-project/Priority%20Matrix.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Database building
- API call
- React front end with 6+ components, including Header and search bar
- User created favorites
- CRUD functionality
- Layout and style front-end with CSS
- Deployment

#### PostMVP 

- "Google" Login simulation
- Incorporate multiple D3 visualizations
- Special company info

## React Architectural Design

Define the the React components and the architectural design of your app.

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | --- |  
| App | Highest level component | 
| Home | This will render the parent layout of Google Finance | 
| Stock | This will render an individual stock | 
| StockChart | This will render the individual stock chart | 
| DMarkets | This will render the aside layout of Domestic Markets | 
| WMarkets | This will render the aside layout of World Markets | 
| Articles | This will render the articles based on the relative content | 
| Header | This will render the header include the nav | 
| Footer | This will render the footer include the nav | 

## Time Frames

| Component | Priority | Estimated Time (hrs) | Time Invetsted (hrs) | Actual Time (hrs) |
| --- | :---: |  :---: | :---: | :---: |
| Wire Framing and App Design | N/A | 4 | 3 | 0 |
| Writing Proposal | N/A | 2 | 2 | 0 |
| Exploring API | H | 6 | 5 | 0 |
| Setting up React | H | 6 | 4 | 0 |
| Setting up Node | H | 3 | 2 | 0 |
| Collecting and Parsing API data | H | 5 | 6 | 0 |
| CRUD Functionality | H | 5 | 3 | 0 |
| Google-like Search Bar | M | 6 | 2 | 0 |
| D3 Part One | M | 4 | 2 | 0 |
| D3 Part Two | L | 4 | 0 | 0 |
| User Authentication | L | 6 | 0 | 0 |
| Experimenting | N/A | 1 | 3 | 0 |
| Finalizing Deliverables | N/A | 2 | 1 | 0 |
| Total | N/A | 52 | 30 | 0 |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize
| Search
| Favorites

## Resources

https://iextrading.com/developer/docs/
https://api.iextrading.com/1.0/stock/aapl/quote
https://api.iextrading.com/1.0/stock/aapl/chart/1d
https://api.iextrading.com/1.0/stock/ttm/batch?types=quote,news,chart&range=1m&last=100
https://www.google.com/search?num=10&newwindow=1&safe=off&site=finance&tbm=fin&q=NYSE:+TTM&stick=H4sIAAAAAAAAAONgecRoyi3w8sc9YSmdSWtOXmNU4-IKzsgvd80rySypFJLgYoOy-KR4uLj0c_UNknOSkkyMeQCjw9G2OgAAAA&sa=X&ved=0ahUKEwiE4NLJmOHeAhUjiOAKHWlPAUIQlq4CCDgwAA&biw=1440&bih=744#scso=_Ig_zW67NNaaxggehi7S4BA2:0
https://beta.observablehq.com/@mbostock/d3-line-chart

https://api.exchangeratesapi.io/latest?base=USD
https://api.exchangeratesapi.io/latest
https://exchangeratesapi.io/
https://www.alphavantage.co/documentation/


## Additional Libraries / Dependencies
    "axios": "^0.18.0",
    "body-scroll-lock": "^2.5.10",
    "react": "^16.6.0",

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```


```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  



## Issues and Resolutions

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier          

**RESOLUTION**: Missing comma after first object in sources {} object

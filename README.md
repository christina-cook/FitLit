# FitLit

FitLit is a proof-of-concept for a fitness tracking web application. The app breaks down a users hydration, sleep patterns, and activity levels, comparing them to their goals, and to community averages. Although designed with a mobile view in mind, FitLit works on browsers of any size. It is deployed to GitHub Pages here.

## Technologies and Skills

FitLit uses...
* HTML and CSS adhering to BEM naming conventions.
* Old School Vanilla JavaScript (OSVJS).
* [Charts.js](https://www.chartjs.org/) to visualize weekly data. 
* [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for unit testing. 
* [ESLint](https://eslint.org/) to help flag errors and inconsistencies. 

## Architecture
FitLit currently uses prototype data found in our `data` folder. Most of the functionality is housed in our `src` folder, which includes all of our classes (ex: `User.js`) as well as our JS logic (`scripts.js`), HTML (`index.html`), and CSS (`styles.css`). We also have a testing suite, housed in our `test` folder.

## Contributors

FitLit was made by [Christina Cook](https://github.com/christina-cook) and [Boone Epstein](https://github.com/deadbelly) by expanding on a boilerplate provided to us by [the Turing School of Software and Design](https://turing.io/). We'd like to thank the creators of `Chart.js` for everything that their library has added to the project. We also used public domain icons sourced from [icons8](https://icons8.com/icons/set/public-domain).

## Support

If you have questions about this app or encounter issues [send Boone an email](mailto:boonejamin@gmail.com).

## Features

### Home Page
When the user opens FitLit they're welcome by a home page displaying their user information and a comparison of their step goal to the community average. Right now the "user" is chosen at random from our prototype data on page load. 
---home dash img---
From here the user can navigate to one of three detailed breakdowns- regarding either their Hydration, Sleep, or Activity. 

### Hydration 
The hydration dashboard shows how many ounces of water the user has drank today and compares it to their average. It also shows a chart of their daily water intake (measured again in ounces) for the last week.
---hydration img---

### Sleep
The sleep dashboard displays how many hours the user slept and the sleep quality (measured between 0 and 5) for the last night. It compares both of these values to their average. Below it displays two charts, one showing nightly hours slept for the last week and the other show quality of sleep on each night for the last week.
---Sleep img---

### Activity
The activity dashboard shows a user their total steps taken, minutes active, and flights of stairs climbed today. It compares all three of these values to the community average (sourced from all users). It also shows how many miles they've walked today, which is calculated using the number of steps they've taken and their stride length. It has three charts breaking down weekly data: one showing steps taken each day, another showing minutes active each day, and a third showing flights climbed each day.
---activity img---

## Future Iterations

We have no plans to released future, finished versions of this app, but there are several things we'd like to change or re-examine if we did.
### Variables Without Keywords
In some files we declare variables without using keywords. This is because we have no tool like webpack to integrate our unit testing with running the app in a browser. We get around errors this can cause by creating global variables only when a conditional evaluates to true, and part of that means declaring variables without keywords. This is bad practice and we'd rather use a tool to avoid it. 
---img---

### Accessibility Issues
We've tested FitLit for accessibility flaws in multiple ways, including using the Wave auditor, adhering to semantic html, and navigated the site using only the tab key. Still there's a lot more testing to be done, and it's hard to be confident about the app's accessibility until someone using a tool like a screen reader actually attempts to use it.

### Global Constants for Time
Since we're relying on prototype data for this project, the dates involved are static. We use global constants for todays date and the last week. If we were to use dynamic data we would need to write a function to retrieve todays date, and find the dates for the last week. We've tried to anticipate that possibility, but several existing functions might still need to be updated to accommodate this change.

### Desktop 
FitLit was designed with a mobile view in mind. Although it's a simple web app that runs in a browser, most of our inspiration came from mobile apps. Right now we're happy with FitLit's responsive design, but given more time we may want to add more media queries and alter it's look on large screens even more, perhaps choosing a different layout that doesn't rely on buttons, and makes good use of the extra space. 

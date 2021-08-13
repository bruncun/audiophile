# Project Title

This project is my solution to Frontend Mentor's Audiophile e-commerce website challenge. I made this to both showcase my front-end skills and practice advanced techniques. It took approximately 6 weeks to complete.

## Demo

[View demo](https://bruncun-audiophile.herokuapp.com)

## Tech Stack

**Client:**

- React
- React Query
- React Router
- React Hook Form
- React Intersection Observer
- Create React App
- Craco
- TypeScript
- Bootstrap
- Sass
- Cypress

**Server:**

- JSON Server

## Lessons Learned

### TypeScript

This was my first major experience working with TypeScript and it left me in awe. The reduced edit-compile-run cycles elevated my flow state to new heights. Application-wide refactors were also made effortless. Start the change on one end, resolve the resulting diagnostics, and voila.

In particular I got comfortable working with React, DOM, and 3rd party library types. I also wrote a [slick discriminated union](https://github.com/bruncun/audiophile/blob/34f0ba3fb496aee6376966b6ba65fe6f39b7d5ac/src/global.d.ts#L1) to type a reducer with mixed action types.

### React Query

I actually started this project using Redux Toolkit, and removed it when I tried out React Query. React Query provided seamless and sane data fetching strategy out of the box. It eliminated all the boilerplate that tempts me towards flux architecture. It made advanced techniques like caching and prefetching a breeze. The resulting user experience feels like a static site or native app. It's so satisfying.

### Bootstrap

Bootstrap changed a lot in its latest version. The utilities API and Sass documentation both made customization more pleasant. If I'm working without a design or aiming for "good enough" fidelity, Bootstrap is still my go to framework. But, I also learned "good enough" wasn't good enough for me. I had to pass over the UI a second time before the results satisfied me. 

## Cypress

Cypress is great for testing and debugging intricate logic. A single test can cover rendering, dispatching actions, state updates, and data fetching. This informed my testing strategy until I worked with this stack. I felt so confident in the little code I wrote that I stopped writing tests.

Of course, this boldness doesn't scale. It led to poor coverage and  some manual testing. But it was faster than having Cypress drive development. With this little non-library code, unit and integration testing would have been better. Leaving the terminal less and more atomic-sized testing feels promising. Granted, testing strategies aren't one or the other - focusing on one is a matter of style.

## Challenges Encountered

### Design fidelity

Shoehorning custom design into Bootstrap is cumbersome. Doing so called for steadfast determination and intimate familiarity with the framework. It took two separate iterations through the presentation layer to stay motivated. I compromised on some nuances like letter spacing and vertical rhythm.

I wish I rolled my own design system. Working with typed UI props would have been incredible. Readability would have improved too. For my next project I would love to work again with Storybook, Styled Components, and Theme UI.

### Sass and Create-react-app

Create-react-app is quite particular about how to add assets. As of this writing, it prohibits CSS files from referencing the public folder. This is problematic for images with dynamic paths, among other cases. My initial solve was to duplicate my assets inside both the public and src directories. But this offended aesthetic sensibility.

I found a workaround using Craco that would prevent CSS Loader from handling URLs. That worked in development, but not in production. On compilation, leading backslashes were still stripped from URLs, breaking absolute paths. So I updated the workaround to remove and re-add Resolve URL Loader. This dropped the restrictive configuration. Tada, public URLs in CRA without ejection!

### Pictures and React

I discovered what I thought was a bug in React. In Safari, picture elements were not displaying the correct image after window resizing. I submitted the issue to the React team and they informed me it was actually a bug in Safari. Luckily, the Preact community had found a workaround. Updating any of the picture's elements would trigger it to rerender. So I wrote an effect hook that exploits this whenever the user resizes the window.

### Completing the Challenge

Finishing this project without compromising my standards was tough for a few reasons:

- I wanted to reflect my skills the best I could.
- I had little experience with most of the tech stack.
- The design was intricate and had some minor inconsistencies and issues.

Allowing myself time was essential. This was definitely more of a marathon than a sprint. I forgoed animation because getting it done to standard would have been no small feat. And I was minimal with accessibility because that too was another rabbit hole. This project already had its fair share of rabbit holes, and I had only so much available time.

## Optimizations

### Refactoring

I have a couple heuristics for code quality:

- Less than 100 lines per file.
- Less than 10 files per folder.

Applying these rules to components and hooks feels great. Large forms can get awkward, but are still remediable. The trick is to pass components form state and validation logic using a context.

I found that utility classes made markup harder to read. This inspired me to extract layout components which helped. Not only do they isolate semantic noise, they also demarcate other components. 

The most complex logic is in the cart. Encapsulated in a single hook is, there's:

- Order state
- A reducer
- Getters
- Caching side effects

I stored order state using a hash table that tracks product IDs and quantities. This keeps the reducer minimal and makes it easy to fetch product data.

I'm proud of the end project organization and hope others enjoy exploring it. 

### Performance

Performance is such a joy to tune. I kept bundle size small by:

- Handrolling UI logic and using tiny libraries
- Importing only the Bootstrap modules I needed
- Using utility classes as much as possible

The huge wins were in perceived performance. I made all images responsive and wrapped them in aspect ratio boxes. These techniques prevented layout shift while loading the app and transitioning between pages.

I also devised a prefetching strategy. I wrapped any component that linked to another page with an intersection observer. When that component came into view, I prefetched whatever data the linked page needed. The result is a "spinnerless" user experience that feels like a static site or native app.

### Accessibility

I never get opportunities to work on accessibility so, I gave myself one on this project. I checked out A11y and the W3C using VoiceOver to get a feel for the browsing experience. Then I tweaked  aria attributes and semantics until the experience was comparable. I ensured the entire site was navigatable by keyboard. The cart modal was somewhat tricky. I didn't know modals needed focus on show! Suffice to say, all this was bare bone accessibility. I look forward to further developing these skills soon. 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL=http://localhost:3004/api`


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Also serves the API at [http://localhost:3004](http://localhost:3004).

### `yarn test`

Launches Cypress.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Acknowledgements

Shout-outs to [@cyberstrike](https://github.com/cyberstrike), [@sdav9375](https://github.com/sdav9375), and [@ernieatlyd](https://github.com/ernieatlyd) for the code review and encouragement. And thanks to [Frontend Mentor](https://www.frontendmentor.io/solutions) for the excellent challenge. 

# The Most Epic To-Do List in the World

Brought to you by Seth NeJame. . .this project is currently a work in progress. The aim of the project is to create a task list a la JS/React to display my coding prowess and ingenuity. It is to be completed in conjunction with the tech specs set below.

Stay tuned for more updates.


## Deployment

The deployed 'Task List' app can be visited by following the link below:

https://sethnejame.github.io/Arbetsprov/

I will continue to maintain an open PR with the original branch (belonging to fredrik-mondido) where you can view updates to the task list.

My forked repo can be found here:
https://github.com/sethnejame/Arbetsprov.git


## Testing

A full test suite for all Task List features is available via Cypress.  

1. Run 'npm install' after you pull down the project in order to install the Cypress dependencies. 
2. With the project open and your CLI in the root directory, type 'npm run cy:open' to run the Cypress test suite.  
3. From the pop up window, choose which test you would like to run.
4. Watch the magic happen.

Please note, the test server runs on localhost:3000. If you forget to ctrl+C out of the testing framework from the CLI as I often do (leaving the server running), and you get an error when you try to boot the test server up again, type 'killall node' in the CLI to kill any open servers and try again.


## Resources

Cypress Documentation
https://github.com/cypress-io

React JS Crash Course - 2019
https://www.youtube.com/watch?v=sBws8MSXN7A

Introducing React Hooks
https://www.youtube.com/watch?time_continue=73&v=mxK8b99iJTg


# Welcome to Mondido

Congratulations on making it this far. Beyond this point lies work satisfaction and great colleagues, but first, you must prove yourself in one last feat of coding prowess to prove your worth. Beyond this brief introductory text lies a somewhat lacking specification to a problem we want you to solve. Mind, the specification was created by a team of management consultants, sold by a dedicated and customer-pleasing team of salespersons lacking in nothing but their total disregard of realistic deadlines and developer frustration levels, to a customer now chomping at the bit to release the feature to thousands of customers. Failure is not an option, and it is up to you to ship this feature and save the world by doing so.

## The task

I want you to build a task tracking application. It is up to you to add any feature that you might enhance this simple application and staple of programming lore. In the words of the regional sales manager,it is my job to overpromise, and it is your duty to over deliver. There are, however, a few requirements for you to follow. See below for instructions.

## Specification

Below is the basic layout of the application we want you to create.

### Minimum functionality

Create, display, complete, update, assign and delete tasks.

### Story points

Each task should have an assigned complexity index from 0-10

### States

A task can have the following states:
created, active, completed, onhold and deleted.

The status can only be changed according to the following rules.

- A task can only be completed after being set to active.
- A task can only become active after being assigned a dev
- A task can only go from onhold to active or deleted

### Basic layout

The tasks should be presented in columns representing the available states. Deleted tasks should not be presented in a column but rather have a separate view. It should be possible to sort the tasks in a column according to level of complexity, see story points.

### UI/UX

The designer is on vacation, it is up to you to imagine and construct a neat and customer facing interface.

## Requirements

All logic must reside in a single HOC component. Use Hooks. All components must be functional components. The application must be deterministic. All components other than the HOC component housing the logic must be stateless at all times. Use Jest to test your components. GIT is to be used at all times, it is essential that we can follow your development process through your commits.

## Focus

Performance, performance, performance and more performance. Keep it simple, keep it smart, make it fast, make it fun and for [insert deity of choice] don't use libraries.

## Extra credit

Surprise us.

## Gold star

Make us laugh.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Microfrontends - Multiple React applications combined using Single-spa Framework

Simple to do application created with React. Added functionality of deleting the tasks, which sends them to trash, which is stationed on another page which ends with url "/trash". Two pages in the application are created with separate, initially independent React projects.

Navbar is the third React project which is present on both pages. React-router-dom is used for navigation.

Independently created projects communicate with each other using window object. Also, local storage is utilized so every task user adds or deletes is saved, unless the user deletes the task permanently on the trash page.

Starting the application:

`cd container-app`
`npm install`
`npm start`

The above lines will initiate container app at port 9000 by default.

`cd navbar`
`npm install`
`npm start -- --port 9001`

`cd to-do-app`
`npm install`
`npm start -- --port 9002`

`cd trash-app`
`npm install`
`npm start -- --port 9003`

go to [http://localhost:9000] [http://localhost:9000]

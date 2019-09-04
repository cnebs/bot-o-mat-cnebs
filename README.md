# BOT-O-MAT
Thanks for looking over my Bot-O-Mat!

You can find a live demo on my website at: https://charlesneblett.com/bot-o-mat-cnebs

I chose to use React.js on Javascript as my library and language, as I enjoy front-end development and building graphical interfaces. I also find React to be more readable. I used React-Bootstrap to structure and style the elements, and tried to keep the design clean.

### How to install & run Bot-O-Mat:

1. First install Node from: https://nodejs.org/en/download/ . 

2. Clone or download the repository onto your local machine.

3. Enter the main directory:  `$ cd bot-o-mat-cnebs` , open with your editor of choice.

4. Use `$ npm install` . This script will reference the dependencies in `package.json` to download the packages that React needs to run this app.

4. Use `$ npm start` . This script will launch a React development environment and a live server.

5. The app will load onto your browser. Input a bot name and type; click Build-A-Bot! (If you're missing an input, you'll get an alert!).

6. You'll notice the leaderboard gains a row for your new Bot. Click one of the bot's tasks to get it working. Only one task can be done at a time per Bot!

7. After the task is finished, you'll notice the leaderboard has updated with that Bot's tasks completed. Try building more bots; as they complete more tasks, the leaderboard will adjust!

Have fun!

-Charles

# Coding Challenge Guidelines

- Collect a name and robot type from user.
- Instantiate a Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on Robot to complete tasks from the provided list

## Robot
Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{ 
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
Be creative and have fun! Use this list or create your own features.
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats


## Authors
- Scott Hoffman <https://github.com/scottshane>
- Olivia Osby <https://github.com/oosby>

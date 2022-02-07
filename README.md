# AppleBox
A small React/TS project to automate random adventure tasks.

## Where it started
I don't really believe in New Year's resolutions, but right around the end of the year, I wanted to create something that would make it fun to do the small tasks that usually require motivation. Things like working out, going for walks, cleaning a room, starting the Rumba, solving a coding problem. Things it's easy to forget to do, even though they can be enjoyable. So I made a list of about 30 of these, half tasks and half rewards like "Eat a chocolate", "Order sushi", "Buy a plant". I printed out about 10 of each, mixed them all together, and put them into a box with apples on the lid. So now, when I'm bored, or antsy, or want a reward, I do a blind draw from the box. The agreement is that I do whatever it is right then, task or reward. 

![20220207_104543 (1)](https://user-images.githubusercontent.com/55030317/152846848-c733d770-d2e8-4adc-8423-3ba7c4eafdf6.jpg)

## This project
While my original apple box was full of personal tasks, for this app version, I'm using an API that generates random activities. The app allows the user to choose the type of activity, price, and how many participants can be involved. Once the user has an activity, they can search nearby to see if there's somewhere to do the task.

## Setup
To run the app, `cd apple-box-app`. 

`npm i`

`npm start`

The app will open in the browser. 

## Future plans
One of the things that's missing from the current version is a backend to save user information. Right now, the user gives a name and zipcode, which is held in state for the duration of the user's session. In the future, I'd like to add proper Auth so that a user can log in and be able to see all the tasks they've performed. I'd like to add a points system for the tasks as well. Another thing that would be useful, is personalizing the tasks the way the original apple box did. Allowing a user to write their own tasks to be added to the random ones that come back from the API. 

Currently, the app uses React Redux Toolkit to set up state. Toolkit has thunk functionality built in, so for production, I would refactor the useFetchTask request to run through the thunk, saving the task to state. The same would be used for the user info and search results. 

Adding a better, more comprehensive search which is capable of bringing back varied results would add functionality as well. I'd add a map with actual places for the activities, for the ones that require going outside the house.

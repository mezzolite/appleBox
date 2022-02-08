# AppleBox
A small React/TS project to automate random adventure tasks.

## Where It Started
I don't really believe in New Year's resolutions, but right around the end of the year, I wanted to create something that would make it fun to do the small tasks that usually require motivation. Things like working out, going for walks, cleaning a room, starting the Rumba, solving a coding problem. Things it's easy to forget to do, even though they can be enjoyable. So I made a list of about 30 of these, half tasks and half rewards like "Eat a chocolate", "Order sushi", "Buy a plant". I printed out about 10 of each, mixed them all together, and put them into a box with apples on the lid. So now, when I'm bored, or antsy, or want a reward, I do a blind draw from the box. The agreement is that I do whatever it is right then, task or reward. 

![20220207_104543 (1)](https://user-images.githubusercontent.com/55030317/152846848-c733d770-d2e8-4adc-8423-3ba7c4eafdf6.jpg)

## This Project
While my original apple box was full of personal tasks, for this app version, I'm using an API that generates random activities. The app allows the user to choose the type of activity, price, and how many participants can be involved. Once the user has an activity, they can search nearby to see if there's somewhere to do the task.

## Dependencies/Versions
- [Node v14 or higher](https://nodejs.org/en/)

### Libraries Used
- [React v17](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### API Used
- [Bored API](https://www.boredapi.com/)

## Setup
1. Clone this repo.
2. `cd apple-box-app`
3. Run `npm install`
4. To start the app run `npm start`
5. The app will open in a browser. 

<img width="828" alt="User Info screenshot" src="https://user-images.githubusercontent.com/55030317/152924848-a29cfbcb-f1dc-4f6d-a6ef-b26034f76413.png">
<img width="826" alt="Task Search screenshot" src="https://user-images.githubusercontent.com/55030317/152924888-a3788788-badd-4802-9fa4-5c733cbff27a.png">

## Future plans
- One of the things that's missing from the current version is a backend to save user information. Right now, the user gives a name and zipcode, which is held in state for the duration of the user's session. In the future, I'd like to add proper Auth so that a user can log in and be able to see all the tasks they've pulled up and which they've performed. 
- I'd like to add a points system for the tasks as well. With a backend, the app could save all the tasks a user pulls up, and then when they complete the task, they could receive points for it. 
- Another thing that would be useful, is personalizing the tasks the way the original apple box did. Allowing a user to write their own tasks to be added to the random ones that come back from the API. 
- Currently, the app uses React Redux Toolkit to set up state. Toolkit has thunk functionality built in, so for production, I would refactor the useFetchTask request to run through the thunk, saving the task to state. The same would be used for the user info.
- A useful functionality would be to add a search feature. The reason I ask for a zipcode is that once a task is pulled up, the app could offer search results based on where a user is and where they could do that task. If it's a task that has to be done outside the home, the results could be shown on a map. 

# DMA Project Team 32

This is the Github repo for Team 32 on the debtors web application. This project is a platform that allows schools in a certain locality list directory of people owing them - to help them avoid going to other schools.

## Frontend Workflow 🍃

1. Clone the repo and open the project on your prefered code editor
   `git clone https://github.com/zuri-training/my-debtors-team32.git`

2. Change directory to the frontend directory
   `cd dma_frontend`

3. Using your terminal set your remote connection to the main repo
   `git remote add origin https://github.com/zuri-training/my-debtors-team32.git`

4. Create a new branch for your work
   `git checkout -b <type_your_new_branch_name_here>`

5. Install all dependencies for the project
   `yarn install`

6. Start the development server
   `yarn start`

## Contribution🛂

- First create an issue using one of the specified templates. Please describe in clear details what you are doing so that other people can understand. See this [short explanation](https://www.loom.com/share/73aecf29ee8844839824c3b6e2740164) for a brief explanation

- On your laptop stage all your changes and commit them to the zuri repo

```js
git add .
git commit -m "A short message here"
git pull origin main
/*
The above step will update your current files and folders
with any changes that might have been merged on main repo.
In case you have merge conflicts, see the next step
on how you can resolve them
*/
git push origin <type_your_new_branch_name_here>
```

## Contribution 🛂

1. First create an issue using one of the specified templates. Please describe in clear details what you are doing so that other people can understand.
2. On the Right side where you see the Assignees section, kindly assign yourself or the right person for the issue.
3. On the Projects section. click on the settings icon and select `my_debtors_team_32` and also set the status to `Todo`
4. Create a new branch in your laptop to begin working on the issue. For clarity, give the new branch a name similar to the issue/feature you are working on. E.g If you are adding a new button to the home page, your new branch name can be `add-button-to-home`.
5. For now, when creating a new page, create your html and css files in the public folder. Your html and css files should have the same name for easy identification. E.g A `landing-page.html` file should have a css file name of `landing-page.css`.
6. Once you are done, ensure you commit your changes to the newly created branch and push to the remote repository on that same branch.

```
git commit -m "Your commit message"
git push origin <your branch name>
```

7. Once you are done, make a pull request from your branch to the main branch and ask for a review.

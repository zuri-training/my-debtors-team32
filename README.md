# DMA Project Team 32



This is the Github repo for Team 32 on the debtors web application. This project is a platform that allows schools in a certain locality list directory of people owing them - to help them avoid going to other schools. This service is a **Microservice web application**. The frontend was developed with **React.js** and Backend was developed developed using **Django**.

- [Figma Link](https://www.figma.com/file/hveeuRURz7a3O7wOnyWwv0/Team32-%2FMy-debtor-project?node-id=187%3A37)
- [Frontend App](https://my-debtors-team32.vercel.app/)
- [Backend App](https://debtors-backend.herokuapp.com/docs/)

### Admin Login to backend
- username: testadmin
- password: zuridma123

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

- If you have any merge conflict, you can watch this [video](https://screencast-o-matic.com/watch/c3iuloVZ0Wb) on how you can resolve them. Also the same video will show you to make a Pull Request to the repo. Please follow every instruction stated in this [video](https://screencast-o-matic.com/watch/c3iuloVZ0Wb)

## Backend WorkFlow
1. Clone the repo with this link `https://github.com/zuri-training/my-debtors-team32.git` and open in a code editor.

2. Change directory to the backend directory
   `cd DMA_backend`

3. Create a virtual environment and type
   `python -m pip install -r requirements.txt`

4. Set up database with PostgreSQL or Sqlite3. Change the database in DMA/settings to run data base of your choice. 
   For production, **PostgreSQL** is preferred.

5. Start development server
   `python manage.py runserver`

To view API Endpoints type `127.0.0.1:800/docs/` 

# UI-Apps

Created the whole end-to-end movie list application using VUE JS, Node JS with
Express and MongoDB</br>

Used VUE JS as the frontend library to display the movie list on page load. This page has the
following features incorporated</br>
 Displays first 100 movies in a sorted order</br>
 ON key up of the search movie input field will pull the new set of records matching
the input text also in sorted first 100 records</br>
 On click of the movie title will navigate to the next view – movie details page, Used
VUE routers to navigate to the landing and details pages.</br>
 In the details page, Movie Details will be displayed and the comments are displayed
and can submitted. Once submitted it will update the comments section the
comment.</br>
Middle layer is designed using Node JS and express JS to connect with the Mongo DB
database. This layer server the request from the front end app and gets the data from
MongoDB.</br>
The Data source I have used is Mongo DB which has inbuilt movie collection and comments
collection which are related to movies data.</br>
Pre-requisites:</br>
Node JS installed</br>
Commands to run the application:</br>
 Once the file is extracted to a location, open the terminal/cmd and navigate to path.
Under the Movies-World folder you will find 2 sub folder “api” and “movies-app”</br>
 Run the api app by using the cmd “npm run dev” it will running on port 3000.</br>
 In another terminal run the movies-app using cmd “npm run serve” it will be running
or port 8080</br>
 In the browser window type localhost:8080, you should see the landing page with
the movies list.</br>
 Mongo db is already configured no need of any changes as it is free Mongo DB atlas
account.</br>

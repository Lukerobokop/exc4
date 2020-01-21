/**
* @author Rokop, Luke (lrokop14@gmail.com)
* @version 0.0.1
* @summary Exercise 4 || created 12-27-19
* @todo
*/

 "use strict";
 const PROMPT = require ('readline-sync');
 
 let movieName, movieList, currentUser, //string
currentUser, totalRaiting, numberRating, choice, movie, total, i; //number 
const A = 1; //to create a loop

function main(){
	while(A == 1){
	setMovieList();
	setChoice();
		if(choice == 1){
			setMovie(); //rate new movie
				setCurrentUser();
				setNumberOfRating();
				setTotalRating();
		} else if (choice == 2){
			setMovieTitle(); //adds movie
		}
	}
}

main();

function setMovielist(){
	if (movieList == undefined){
		movieList = [];
	}else{
	console.log(`${movieList} ${numberOfRating} ${totalRating}`) //displays movies, their ratings, and how many people have rated it
	}
}

function setChoice(){
	choice = PROMPT.question(`\nplease pick one, [1=rate a movie, 2=add a movie]`)//the user picks adding or rating
}

function setMovieTitle(){
	movieName = PROMPT.question(`\what movie would you like to add?`)
	
	movieList = movieList.push(`${MovieName}`); // adds user movie
}

function setMovie(){
	movie = PROMPT.question(`\nwhat movie would you like to rate? [choice is based off of movies ex. "first movie = 0, second movie = 1"]`)
	movie = movieList[`${movie}`]//shows selected movie 
}

function setCurrentUser(){
	CurrentUser = PROMPT.question(`\nhow many stars would you give this movie?`)//user rates the selected movie
}

function setNumberOfRating(){
	if(numberOfRating == undefined){
		numberOfRating = 1;
	}else{
		numberOfRating = numberOfRating++;
	}
}

function setTotalRating(){
	if(totalRating == undefined){
		totalRating = `${currentUser}`;
		i++;
	}else{
		i++;
		total = {totalRating + `${currentUser}`)/ i;
		totalRating = total;
	}
}
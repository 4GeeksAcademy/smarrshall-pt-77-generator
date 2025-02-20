import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // array with the words
  let first = "The ";
  let team = ["Patriots ", "Cowboys ", "Chiefs ", "Bills ", "Lions ", "Bengals "];
  let city = ["New England ", "Dallas ", "Kansas City ", "Buffalo ", "Detroit ", "Cincinati "];
  let coach = ["Mike Vrabel ", "Brian Shottenhiemer ", "Andy Reid ", "Sean McDermott ", "Dan Campbell ", "Zac Taylor "];
  let starPlayer = ["Drake Maye ", "Dak Prescott ", "Patrick Mahomes ", "Josh Allen ", "Jared Goff ", "Joe Burrow "];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * team.length);
  let rdm2 = Math.floor(Math.random() * city.length);
  let rdm3 = Math.floor(Math.random() * coach.length);
  let rdm4 = Math.floor(Math.random() * starPlayer.length);

  // creating a sentence ()
  document.querySelector("#decision").innerHTML = "The Best Team is: " + team[rdm1] + ", The Best NFL City is: " + city[rdm2] + ", The best NFL Coach is: " + coach[rdm3] + ", The best QB is : " + starPlayer[rdm4];
}

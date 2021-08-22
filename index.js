var readlineSync = require('readline-sync');

var highscores = [
  {
    name : "Sohan Shetty",
    score : "4 / 4",
  }
]

var question1 = {
  q: "1. Where do I live",
  ans: "mumbai",
}
var question2 = {
  q: "2. What is my favrite animal ?",
  ans: "dog",
}
var question3 = {
  q: "3. What is my favorite color ?",
  ans: "black",
}
var question4 = {
  q: "4. What is my dream to become ?",
  ans: "developer",
}

var questions = [question1, question2, question3, question4]
var name = readlineSync.question("Whats your name ? ");
console.log("\n Ok " +  name + " Lets see how much you know me ? \n");

score = 0;
console .log ( "\n Score : " + score);

for ( let question of questions){
  ans = readlineSync.question(question.q + " \n");
  // console.log(question.ans);
  // console.log(ans.toLowerCase());
  if ( question.ans === ans.toLowerCase() ){
    score += 1 ;
    console.log("Yeah you nailed it !!!! ");
    console.log("\n ------------- ");
  }
  console.log ( "\n Score : " + score);
  console.log(" \n -------------- \n");
}

console.log("\n Final Score : " +  score + " / 4");

if ( score === 4){
  console.log(" \n Congratulations , you have scored the highest : ");
  console.log("\n *To be in the highest scorers list just ping me up with a screen shot of your score ")

  console.log("\n #######  Top scores  ####### \n");
  for (highscore of highscores){
    console.log("Name : " + highscore.name + "\n Score : " + highscore.score  + " \n");
  }
  
}
else{
  console.log ("\n You have not scored the highest , you can try again");
}

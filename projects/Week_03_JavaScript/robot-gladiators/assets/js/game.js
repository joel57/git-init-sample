// this creates a funcition named "fight


var playerName = window.prompt("What is your robot's name?"); 
var playerHealth= 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
}

fight();

//note the lack of quotations  on the playersName
console.log(playerName);

console.log("This logs a string, good for leaving yourself a messge");

//This will do math and log 20.
console.log(10 + 10);

//What is this?
console.log("Our robot's name is" + playerName)


function fight() {
    window.alert("The fight has begun!")
;
}

//fight();
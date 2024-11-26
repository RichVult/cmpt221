/****************************************************************************************************************/
/* In-Class Exercises                                                                                           */
/****************************************************************************************************************/
/* 1. create an array called "fruits" and assign the values "Strawberry", "Raspberry", and "Apple" to it         */
// add code here
let fruits = ["Strawberry", "Raspberry", "Apple"];
console.log(fruits)
/* 2. add two more fruits to the "fruits" array using the correct array method                                   */
// add code here
console.log(fruits.push("Blue Berry","Pear"));

/* 3. sort the fruits array alphabetically using the correct array method                                        */
// add code here
console.log(fruits.sort());
/* 4. create a function called printFruit that prints each item in the fruits array to the console              */
/*    and call the printFruit function                                                                          */
// add code here
function printFruit(){
    for(let i in fruits){
        console.log(fruits[i]);
    }
}
printFruit();
/* 5. create a fruit class that has three properties: name, color, and season and one method: printFruit()      */
/*    that prints all three properties of the fruit to the console. Then, create 3 fruit objects and print      */
/*    them using the printFruit() method             */
// add code here //
class Fruit{
    constructor(name,color,season){
        this.name = name,
        this.color = color,
        this.season = season
    }

    printFruit(){
        console.log(this.color + " " + this.name + " in the " + this.season);
    }
}

let george = new Fruit("kiwi","green","winter")
let bob = new Fruit("Banana","yellow","fall")
let joe = new Fruit("Strawberry","red","Summer")
george.printFruit();
bob.printFruit();
joe.printFruit();
/****************************************************************************************************************/
/* In-Class Lab                                                                                                 */
/****************************************************************************************************************/
/* 1. Write a function that asks the user if they want to say hi. If the user selects "Okay" (true), then       */
/*    display a welcome message. If the user selects "Cancel" (false), then display a different message         */
function areYouSure() {
    let text ="Do you want to say hi?"
    if(confirm(text) === true){
        text = "welcome!"
    }
    else {
        text = "Rude!"
    }
    document.getElementById("welcome").innerHTML = text;
}

/* 2. Write a function to change 3 styles on the webpage                                                        */
function changeStyle() {
    document.getElementById("welcome").style.color = "red";
    document.getElementById("button1").style.color = "red";
    document.getElementById("button2").style.color = "red";
}

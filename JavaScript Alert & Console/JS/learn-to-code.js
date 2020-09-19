//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;
//      
//var message = "Hi, my name is " + name + ". I am " + age + " years old!";

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgUrl = 'hhtp://coolpicks.com/johnjacob.jpg';
//
//var loginWelcomeMessage = "Welcome, " + firstName  + ". Happy " + age + "rd birthday!";
//
////alert(message);
//console.log(loginWelcomeMessage);

//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * ((5 +3) -4);
//
//console.log(result);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
//
///*Reminder*/
//// === 
//// == equal to
//// <= less than or equal to
//// >= greater than or equal to
//// != not equal to
//
//var val1 = 23;
//var val2 = "23";
//
//if (val1 !== val2) {
//    console.log("These are not the same");
//} else {
//    console.log("One of these is like the other ...")
//}


//if (nikeSBShoes <= myAccountBalance) {
////    myAccountBalance = myAccountBalance - nikeSBShoes; 
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought shoes!")
//    console.log("Account Balance: " + myAccountBalance)
//} else if (nikeSBShoes - coupon <= myAccountBalance) {
//    console.log("We bought some shoes with coupon!")
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("Account Balance: " + myAccountBalance)
//} else {
//    console.log("You too broke fo shoes bra!")

//if (1 === 1 && 2 === 2 || "joe" === "joe") {
//    console.log("These are both true!");
//}
//
//if (true && true) {
//    console.log("There are the same");
//}
//
//if (1 === 3 || "joe" === "joe") {
//    console.log("One of these are true");
//}


//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap = true;
//
//if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap) {
//    console.log("Cat 1 is the cutest")
//} else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap) {
//    console.log("Cat 2 is the cutest")
//} else if (( cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap) {
//    console.log("Cat 3 is the cutest")
//}

//#####Arrays#######//

var studentNames = ["Timmy", "Janessa", "Arun"];
//Add Student
var naughtyList = [];
naughtyList.push(studentNames[0]);

//Remove Student - finds element line by line - not recommended.
var index = naughtyList.indexOf("Timmy");
console.log(naughtyList);
if (index > -1) {
    naughtyList.splice(index, 1);
}

console.log(naughtyList);

//#######Loops########//


    













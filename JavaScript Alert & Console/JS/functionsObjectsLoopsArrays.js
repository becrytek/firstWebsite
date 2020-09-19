//var student1 = "Timmy";
//var student2 = "Janessa";
//var student3 = "Arun";
//
//var balances = [50.45, 4000.12, -300.50];
//
//var studentNames = ["Timmy","Janessa","Arun"];
//
//var naughtyList = [];
//naughtyList.push(studentNames[0]);
//
//var index = naughtyList.indexOf("Timmy");
//
//console.log(naughtyList);
//if (index > -1) {
//   naughtyList.splice(index, 1);
//}
//
//console.log(naughtyList);
//
//var length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//
//var lenght2 = 12;
//var width2 = 14;
//var area2 = lenght2 * width2;
//
//
//console.log(area1);
//console.log(area2);
//
//function area(length, width) {
//   return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(4,5));
//
//console.log(rectanglesAreas);
//
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//       bankBalance -= priceOfSale;
//       console.log("Purchase Successful");
//   } else {
//       console.log("Insufficient Funds");
//   }
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//
//console.log(bankBalance);
//makeTransaction(2.32);
//
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//
//var transaction = function(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//       bankBalance -= priceOfSale;
//       console.log("Purchase Successful");
//   } else {
//       console.log("Insufficient Funds");
//   }
//};
//
//var printCustomerName = function(first,last) {
//   console.log("First Name: " + first + " Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul) {
//   //call some functions to process application
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);
//
//var total = 10;
//for (var x = 0; x < total; x++) {
//   console.log(x);
//}


//for Loops//

//var total = 10;
//for (var x = 0; x < total; x++) {
//    //Iterate until not to
//    console.log(x);
//    
//}
//    

////Loops in Arrays//
//var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"]; 
//
//for (var x = 0; x < students.length; x++) {
//    console.log(students[x]);
//}

//###### Functions ########//

//var length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//
//var length2 = 12;
//var width2 = 14;
//var area2 = length2 * width2;
//
//console.log(area1);
//console.log(area2);


//########### Function w/ Arrays##########//
//function area(length, width) {
//    return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(4,5));
//
//console.log(rectanglesAreas);
    
    
    
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Succesful")
//    } else {
//        console.log("Insufficient Funds")
//    }
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//console.log(bankBalance);
//makeTransaction(2.32);
//console.log(bankBalance);
//makeTransaction(10.45);
//console.log(bankBalance);
//makeTransaction(450.00);
//
//var transaction = function(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Succesful")
//    } else {
//        console.log("Insufficient Funds")
//    }
//}
//
//var printCustomerName = function(first, last) {
//    console.log("First Name: " + "Last Name: " + last);
//}
//
//var applyForCredit = function(creditScore, soul) {
//    //call some function to process app.
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCredit);

// Fuctions Objects //




//var student0 = {
//    firstName: "Jayne",
//    lastName: "Looo",
//    age: 8 
//    
//};
//
//console.log(student0.greeting());

// Creates a new empty object //
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;

var students = []; 


function student(first, last, age) {
    this,firstName = first;
    this,lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
}

students.push(new student("Jenny","Laga",5));
students.push(new student("Timmy","Turner",8));
students.push(new student("Carl","Jr",4));


var student = students[0];
// for in //
for (var key in student) {
    console.log(student[key]);
}
//for (var x = 0; x < students.length; x++) {
//    var student = students[x];
//    console.log(student.greeting());
//}



//var s1 = new student("Jenny","Laga",5);
//console.log(s1);
//console.log(s1.greeting());





//students.push(student0);
//students.push(student1);
//students.push(student2);

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);


// bind //
    
// Alex Brown

//this.car ="Honda Civic w/ Spoiler";
//
//var marksGarage = {
//  car: "Aston Martin",
//  getCar: function() {
//    return this.car;
//  }
//};
//
//console.log(marksGarage.getCar());
//
//var storeGetCarForLater = marksGarage.getCar;
//
////Now work is over and Mark wants his car
//
//console.log(storeGetCarForLater()); //WTF
//
//var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
//console.log(theRealGetCarFunction());
    
    
    
    
    
    
    
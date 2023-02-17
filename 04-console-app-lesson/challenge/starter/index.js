var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];



// * The total number of months included in the dataset.



//logged number of months in the datatset, which is starting point for math to follow
console.log ("Number of Months in Dataset: "+ finances.length);

//Calculate net total of profits/losses over entire period.
let total= 0;
for (var i=0; i<finances.length; i++) {
    total= total + finances[i][1];
}
console.log("Net Total: $" ,total)


//object containing finances array 

var financeObject= {}
for (var i=0 ; i<finances.length; i++) {
    var month=finances[i][0];
    var profits= finances[i][1];
    financeObject[month]=profits; //key(month)=property name, value(profts)= property value
}


//datatypes from array of arrays--> object containing arrrays, separated and defined. 
//profits/losses:
var allProfits= Object.values(financeObject);
var moneyMade= 0; 
for (var i=0; i<allProfits.length; i++) {
    moneyMade+= allProfits[i]// instead of repeating moneyMade = moneyMade + allProfits[i]
}
//months:
var months= Object.keys(financeObject);



//Average fluctuation between months. What values need to be considered that aren't already present?
var changeArray=[]
var lastValue= 0
for (var i=0; i<allProfits.length; i++) {
    var currentValue= allProfits[i];
    var monthlyChange= Math.abs(currentValue-lastValue);//makes values absolute, because difference between values is relative 
    changeArray.push(monthlyChange);
    lastValue= currentValue;
}
// * The net total amount of Profit/Losses over the entire period.this is monthly change. to find average of thjose changes, i just divided by the .length/number of idices.
// * The average of the **changes** in Profit/Losses over the entire period.
var averageChange= (monthlyChange/allProfits.length)
console.log("Average Change: $", averageChange.toFixed(2))

// console.log(monthlyChange.toFixed(2)/allProfits.length)
// console.log(monthlyChange/allProfits.length)
// console.log(monthlyChange/allProfits.length)

var biggestIncrease= Math.max(changeArray);


// * The greatest increase in profits (date and amount) over the entire period.

// * The greatest decrease in losses (date and amount) over the entire period.
//define change as increase/decrease
//define biggest increase
//define biggest decrease
//loop through changeArray and decipher increase and decrease. 
// use comparison logic to detect whether or not next value is hgiher or lower, loop through and decide which is the biggest difference

//console logs the largest change, whether increase or decrease. 
// var greatestIncrease= Math.max(monthlyChange);
// console.log("Highest Change between months: $" ,greatestIncrease); no, just the last value in the array. 

// The greatest increase in profits (date and amount) over the entire period.
// The greatest decrease in losses (date and amount) over the entire period.

// i am using the original array of arrays, comparing the (1) indexes with are numerical datatypes. 
//i am finding the largest increase
//i am fiding the largest decrease
//i am listing those alongside their (0) indexes. 
//compare numerical values of arrays and return string value. for highest increase and highest decrease./ get key value pairs from object made before?nah 

// console.log(financeObject);// obejcts consisting of key value pairs of finance array converted to object. 
// console.log(changeArray);//array consisting of absolute values of the relative differences between values of financeObject?
//calculate highest increase inside changeArray
//calculate highest decrease inside changeArray
//return index of both values. return index of corresponding object.keys

// var largestProfit= Math.max(changeArray);
// console.log("Highest Increase between months: $" ,Math.max(changeArray));


//https://stackoverflow.com/questions/38092872/calculate-percent-change-over-multiple-dynamic-values-with-javascript
// const values = [10000, 20000, 25000, 5000]; // values per year sorted ascending

// const increases = values.map((currVal, index) => {
//     if (index === 0) {
//         return;
//     }

//     const prevVal = values[index - 1];
//     return ((currVal - prevVal) / prevVal) * 100;
// }).filter(Boolean);

// console.log(increases); // [100, 25, -80] values in percent
// function to return a list with increase (%) from year to year.

var percentageChanges= changeArray.map((currVal, index)=> {
    if (index=== 1) { //because the first value would just be finding its difference from itself if i started from 0, right?
        return;
    }
    const prevVal= changeArray [index-1];
    return((currVal- prevVal) / prevVal) *100;
}).filter(Boolean);
// console.log(percentageChanges);


// find highest and lowest values in percentageChanges
const max = Math.max(...percentageChanges);

console.log("Highest increase in profits: $" + max.toFixed(2));

const min = Math.min(...percentageChanges);
console.log("Highest decrease in profits: $"+ min.toFixed(2));
//highest increase and 
  
//now i need to  find the indexes that correspond to the highest and lowest values of the percentage changes, to match those to the indexs of the key value pairs in the finance object. 

// var biggestIncrease=0;
// var biggestLoss=0;

// var biggestIncrease = function(percentageChanges){
//     for (var i=0; i< percentageChanges.length; i++) {
//         if (percentageChanges [i]>0){
//         console.log(Math.max(percentageChanges[i]));
//     }else if(percentageChanges [i]<0) {
//         var biggestLoss = function (percentageChanges){
//             for (var i=0; i< percentageChanges.length; i++) {
//                 if (percentageChanges [i]<0){
//                     console.log(Math.min(percentageChanges[i]));
//                 }
//             }
//         }
//     }
//  }
// } that did NOT work. 

// var positiveArr = [];
// var negativeArr = [];

// t.forEach(function(item) {
//   if (item < 0) {
//     negativeArr.push(item);
//   } else {
//     positiveArr.push(item)
//   }
// });

// console.log(positiveArr) // should output [5, 6, 1]
// console.log(negativeArr)

// var percentageChanges= [];
// var positiveChanges= 0;
// var negativeChanges= 0;

// percentageChanges.forEach(function(item) {
//     if (item < 0) {
//         negativeChanges.push(item);
//     }else {
//         positiveChanges.push(item)
//     }
//     });

//     console.log(positiveChanges);
//     console.log(negativeChanges);
// here i filtered the value to see if havingpositives and negatives would allow the max/min methods to work, it didnt. 
    // const positiveChanges = percentageChanges.filter(num => num > -1);
    // console.log(positiveChanges);
    // var highestRise= Math.max(positiveChanges);


    // const negativeChanges = percentageChanges.filter(num => num < -1);
    // console.log(negativeChanges);
    // var biggestFall= Math.min(negativeChanges);
 
 


// Using percentage changes, find indexes of highest and lowest values (lowest will now be highest decrease, in negatives)
//https://www.w3schools.com/jsref/jsref_findindex.asp 
//array.findIndex(function(currentValue, index, arr), thisValue)








//!!!!return indexes for highest and lowest values and use those values to loop through finances object/original array? to return key value pairs. !!!!!!!! but still, how to specify whether it is an increase or decrease? i dont know. - calculate percentage change, then return the indexes of the highest positive interger and highest negative integer, then console log those indexes of the finance object. 



//monthlychange. changeArray contains differences between values in finances. 
//if difference= increase, difference = increase, else difference= decrease.
//find max increase and max decrease.


 






// When you open your code in the browser your resulting analysis should look similar to the following:

//   ```text
//   Financial Analysis
//   ----------------------------
//   Total Months: 25
//   Total: $2561231
//   Average  Change: $-2315.12
//   Greatest Increase in Profits: Feb-2012 ($1926159)
//   Greatest Decrease in Profits: Sep-2013 ($-2196167)
//   ```



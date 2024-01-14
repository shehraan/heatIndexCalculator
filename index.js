/*
  Name:        A2 (index.js)
  Purpose:     To calculate the heat index

  Author:      Shehraan
  Created:     20-Oct-2022
  Updated:     29-Oct-2022
*/

/* This program uses a well-known method to get the heat index calculation through the formula that is available on weather.gov. The calculation lets a person pass the base temperature and humidity on a particular day and the program will return a calculated heat index off it (Used a loop to go through multiple days calculate it for everything). If the heat index is above certain thresholds, this program will warn the user about the heat conditions. If it isn't, it will tell the user that the head conditions are safe and don't require any caution*/

// Let answer = true
let answer = "YES"
// Create function to calculate heat index
function heatIndex(t, h) {
  let heatIndexNumber = -42.379 + (2.04901523 * t) + (10.14333127 * h) - (0.22475541 * t * h) - (0.00683783 * t * t) - (0.05481717 * h * h) + (0.00122874 * t * t * h) + (0.00085282 * t * h * h) - (0.00000199 * t * t * h * h)
  return Math.round(heatIndexNumber)
}
//Declare constant for errors
const error = "Error, inadmissible input entered"
//Declare constant for user's choice between entering fahrenheit and celsius
let choice = prompt("Enter choice of F for using fahrenheit and C for using Celsius");
//Make sure that user's input is in uppercase
choice = choice.toUpperCase()
//A while loop to calculate heat index and print errors if application
while (answer == "YES") {
  //Create max heat index render limit
  for (let i = 1; i <= 100; i += 1) {
    //Make user, re-answer, if they accidentally enter the wrong input
    while (!(choice == "C" || choice == "F")) {
      console.log(error + ". Try again")
      choice = prompt("Correctly enter choice of F for using fahrenheit and C for using Celsius")
      choice = choice.toUpperCase()
    }
    // Declare variables for temperature, humidity
    let t = (parseInt(prompt("Enter the temperature")));
    //Make user, re-answer, if they accidentally entered the wrong input
    let temp = String(t);
    while (temp == "NaN") {
      console.log(error)
      t = (parseInt(prompt("Correctly enter the numerical temperature")));
      temp = String(t)
    }
    let h = (parseInt(prompt("Enter the humidity in a percentage between 1 percent and 100percent ")));
    //Make user, re-answer, if they accidentally entered the wrong input
    console.log("The humidity entered is " + h)
    while (h > 100 || h < 0) {
      console.log(error)
      h = (parseInt(prompt("Correctly enter the humidity in percentage")));
    }
    //Convert celsius to fahrenheit, if celsius is the chosen unit for temperature. Also check for any errors if an incorrect input is entered
    if (choice == "C") {
      t = t * 1.8 + 32
    }
    //Count days
    if (i >= 1) {
      console.log("Day " + i)
    }
    //Render heat index
    let heatIndexNumber = Math.round(heatIndex(t, h))
    console.log("the heat index = " + (heatIndex(t, h)))
    //Inform the user of whether the heat conditions, require any caution
    if (heatIndexNumber <= 80) {
      console.log("Congratulations, the heat and humidity together, are within safe levels and you do not need to take any caution regarding heat.")
    }
    else if (heatIndexNumber >= 80 && heatIndexNumber <= 90) {
      console.log("Exercise caution because extended exposure to the heat can cause weariness.")
    }
    else if (heatIndexNumber >= 90 && heatIndexNumber <= 103) {
      console.log("Exercise a high degree of caution as heat exhaustion or cramps are likely. In addition, extended heat exposure can cause stroke.")
    }
    else if (heatIndexNumber >= 103 && heatIndexNumber <= 124) {
      console.log("Heat sicknesses are approaching life-threatening levels, try to stay inside if you can, and cover yourself when going outside. STRICTLY AVOID being outside for extended periods of time.")
    }
    else if (heatIndexNumber >= 125) {
      console.log("Heat sicknesses are at extremely dangerous levels, remain indoors")
    }
    //Ask user if the want to run the program again
    answer = prompt("Do you want to continue (Enter YES or NO)")
    //Make sure that answer is uppercase
    answer = answer.toUpperCase()
    //Make user, re-answer, if they accidentally entered the wrong input
    while (!(answer == "NO" || answer == "YES")) {
      console.log(error + ". Try again")
      answer = prompt("Do you want to continue (Enter YES or NO)")
    }
    //End the for loop if user says that they don't want to continue entering inputs
    if (answer == "NO") {
      break
    }
  }
  //Exit while loop, if it has been over 100 days
  if (answer !== "NO") {
    answer = "NO"
  }
}
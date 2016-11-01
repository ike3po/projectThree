/**
 *   @author Thrasher, Isaac
 *   @version 0.0.2
 *   @summary Project 3 || created: 10.15.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numOfStars;



function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse === 1) {
        movieTitleName();
        starsGiven();
        averageStars();
        setContinueResponse();
    }

    printGoodbye();
}

    main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}


    function movieTitleName() {
        console.log(`\n The moive is called Star Wars!`);
    }

    function starsGiven() {

        let answered = 0;
        let counter = 0;
        const MIN_STARS = 1,
            MAX_STARS = 5,
            RETRIES = 3;


            while (counter < RETRIES && answered != 1) {
                numOfStars = PROMPT.question(`\n How many Stars do you wish to give this moive?  Please Choose a number 1 through 5.  1 is the smallest and 5 is the largest: `);
                if (numOfStars < MIN_STARS && numOfStars > MAX_STARS)
                    console.log(`\n ${numOfStars} is an  incorrect value. Please try again.`);
                if (numOfStars < 0 || numOfStars > 5)
                    counter++;

                else {
                    counter++;
                    answered = 1;
                }

            }





    }

    function averageStars() {
        console.log(`The average number of stars for the movie is  ${numOfStars}`);
    }

    function printGoodbye() {
        process.stdout.write('\x1Bc');
        console.log(`\tGoodbye.`);
    }

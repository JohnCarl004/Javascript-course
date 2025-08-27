console.log("Part 2 is now working") 

//function - declarations and Expressions
console.log( ` === FUNCTIONS === `)

function logger() {
    console.log("My name is John Carl")
}

logger(); 
logger(); 
logger(); 

function fruitProcessor(apples, oranges) {
    console.log (apples, oranges)   
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

console.log(fruitProcessor(5, 3))


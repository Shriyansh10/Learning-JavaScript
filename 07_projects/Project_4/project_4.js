let originalValue;
let previousGuesses;
let guessesRemaining;

values_reset();
document.querySelector("section").addEventListener("click", (e)=>{
    let guess_value = document.querySelector("#guess_number").value;

    if(e.target.id === "reset"){
        reset(`Better luck next time, the number was ${originalValue}`);
    }
    
    if(e.target.id === "submit"){

        if(guess_value == "" || guess_value <1 || guess_value >100 || isNaN(guess_value)){

        call_result("#result", `Kindly enter a valid number between 1 to 100`)
        guess_value = "";

    }else{

        const value = Number(guess_value);
        if(originalValue !== value){

            previousGuesses.push(value);
            --guessesRemaining;
            console.log(...previousGuesses, guessesRemaining)
            console.log(`not matched`)
        
            // // for result
            if(value>originalValue) call_result("#result", `Try a Smaller Value`)
            else call_result("#result", `Try a Bigger Value`)

            //  for previous guesses
            call_prev_guesses("#prev_guesses","span", "prev_guesses_array", previousGuesses)

            // for guesses remaining
            call_guesses_remaining("#guesses_rem", "span", "guesses_remaining_value", guessesRemaining);

            if(guessesRemaining === 0){
                reset(`Better luck next time, the number was ${originalValue}`);
            }


        }else{
            reset(`Congratulations!!! You have guessed the number ${originalValue}`);
        }
    }
    }
}, false)

function call_guesses_remaining(attributeName, tagName, tagClass, tagVariable) {
    const element = document.createElement(tagName);
    element.className = tagClass;
    element.innerHTML = ` ${tagVariable}`
    if(document.querySelector(attributeName).lastChild){
        document.querySelector(attributeName).lastChild.remove();
    }
    document.querySelector(attributeName).appendChild(element)
}


function call_prev_guesses(attributeName, tagName, tagClass, tagVariable) {
    const element = document.createElement(tagName);
    element.className = tagClass;
    element.innerHTML = ` [${tagVariable.join(', ')}]`
    if(document.querySelector(attributeName).lastChild){
        document.querySelector(attributeName).lastChild.remove();
    }
    document.querySelector(attributeName).appendChild(element)
}

function call_result(attributeName, message) {
    if(document.querySelector(attributeName).lastChild){
        document.querySelector(attributeName).lastChild.remove();
    }
    document.querySelector(attributeName).appendChild(document.createTextNode(message)) 
}

function values_reset(){
    originalValue = Math.floor((Math.random()*100)+1);
    console.log(originalValue);
    previousGuesses = [];
    guessesRemaining = 10;
}

function reset(message){
    let count = previousGuesses.length;
    for(let i=0;i<count;i++) previousGuesses.pop();
    guessesRemaining = 10;
!~
    // for result
    call_result("#result", message)
    
    //  for previous guesses
    call_prev_guesses("#prev_guesses","span", "prev_guesses_array", previousGuesses)
    
    // for guesses remaining
    call_guesses_remaining("#guesses_rem", "span", "guesses_remaining_value", guessesRemaining);
    values_reset();
    document.querySelector("#guess_number").value = "";
}
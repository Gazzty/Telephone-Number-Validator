// Get components
const userInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const output = document.getElementById("results-div")

// Functions
function validPhoneNumber(number) {
    // Regex to validate user input
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/

    return phoneRegex.test(number)
}

// Event listeners
clearBtn.addEventListener("click", (e) => {
    e.preventDefault()

    output.innerText = ""
})

checkBtn.addEventListener("click", (e) => {
    e.preventDefault()

    if (userInput.value === "") {
        alert("Please provide a phone number")
    }
    else {
        if(validPhoneNumber(userInput.value)){
            output.innerHTML += `Valid US number: ${userInput.value}`
        }
        else{
            output.innerText += `Invalid US number: ${userInput.value}`
        }
    }

    // Add line break
    output.innerHTML += "<br>"
})
function checkThala() {
    var userInput = document.getElementById("userInput").value;
    var resultElemnet = document.getElementById("result");

    if (/^[a-zA-Z]+$/.test(userInput)) {
        var charCount = userInput.length;
        if (charCount === 7) {
            resultElemnet.innerHTML = "Thala for a Reason 😊";
        } else{
            resultElemnet.innerHTML = "Not Thala 😞";
        }
    } else {
        resultElemnet.innerHTML = "Invalid input. Please enter a string..."
    }
}
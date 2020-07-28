// var misMatchingMgs = document.getElementById('misMatchingMgs');
// var matchingMgs = document.getElementById('matchingMgs')


//Hide message section from the bottom.
var notify = document.getElementById('notify');
function removeNotify() {
    misMatchingMgs.style.display = 'none';
    matchingMgs.style.display = 'none';
}
removeNotify();


//Generate random number

document.getElementById('generate-btn').addEventListener('click', function () {
    var output = Math.floor(1000 + Math.random() * 9999);
    var showDigit = document.getElementById('show-generate-digit');
    parseInt(showDigit.value);
    showDigit.value = output;
})


var showDigit = document.getElementById('show-generate-digit');
var submitPin = document.getElementById('submit-pin');

// Show message 
submitPin.addEventListener('click', function () {
    if (showDigit.value == matchPin.value) {
        matchingMgs.style.display = 'block';
    } else{
        misMatchingMgs.style.display = 'block';
    }
})

//Slice last number
document.getElementById('cutOneDigit').addEventListener('click', function () {
    matchPin.value = matchPin.value.slice(0, -1);

})

//Remove all digit
document.getElementById('remover').addEventListener('click', function () {
    matchPin.value = "";
})







function getUserInput () {

    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let howManyMonths = document.getElementById("howManyMonths").value;
    
    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);
    howManyMonths = parseInt(howManyMonths);

    // check if they are INTEGERS !

    if(Number.isInteger(loanAmount, interestRate, howManyMonths)) {

        console.log("heidy ho!");

        // interestRate = percentToDecimal(interestRate);
        
        // return (interestRate * loanAmount) / (1 - (Math.pow((1 + interestRate), (-howManyMonths))));


    }        



}

function displayPayment () {

    let totalPrincipal = 0;
    let totalInterest = 0;
    let totalCost = 0;

    
}



    // else {
    // Swal.fire({
    // icon: 'error',
    // title: 'Ooops...',
    // text: 'Only integers are allowed for calculation'
    //     });


function getUserInput () {

    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let howManyMonths = document.getElementById("howManyMonths").value;
    
    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);
    howManyMonths = parseInt(howManyMonths);

    // check if they are in fact INTEGERS !

    if(Number.isInteger(loanAmount, interestRate, howManyMonths)) {

        

        // else {
        // Swal.fire({
        // icon: 'error',
        // title: 'Ooops...',
        // text: 'Only integers are allowed for Hundo'
        //  })

    }


}
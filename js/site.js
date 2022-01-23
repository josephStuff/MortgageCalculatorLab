


function getUserInput() {

    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let howManyMonths = document.getElementById("howManyMonths").value;
    let monthlyTotal = document.getElementById("monthlyTotal").value;


    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);
    howManyMonths = parseInt(howManyMonths);

    // check if they are INTEGERS !

    if (Number.isInteger(loanAmount, interestRate, howManyMonths)) {

        interestRate = interestRate / 100;

        monthlyTotal = (interestRate * loanAmount) / (1 - Math.pow((1 + interestRate), (-howManyMonths)));

    }

    else {
        Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text: 'Only integers are allowed for calculation'});

    }

    // console.log(monthlyTotal);

    document.getElementById("monthlyTotal").innerHTML = monthlyTotal.toLocaleString();

}

function displayPayment() {

  let totalPrincipal = parseInt(document.getElementById("loanAmount").value);
  let totalInterest = (document.getElementById("interestRate").value / 100) * (document.getElementById("loanAmount").value);
  let totalCost = totalPrincipal + totalInterest;



  document.getElementById("totalPrincipal").innerHTML = totalPrincipal.toLocaleString();
  document.getElementById("totalInterest").innerHTML = totalInterest.toLocaleString();
  document.getElementById("totalCost").innerHTML = totalCost.toLocaleString();


}

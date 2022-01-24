


function getUserInput() {

    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let howManyMonths = document.getElementById("howManyMonths").value;
     


    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);
    howManyMonths = parseInt(howManyMonths);

    // check if they are INTEGERS !

    if (Number.isInteger(loanAmount, interestRate, howManyMonths)) {

        interestRate = (interestRate / 100) / 12;

        let monthlyTotal = (interestRate * loanAmount) / (1 - Math.pow((1 + interestRate), (-howManyMonths)));
        document.getElementById("monthlyTotal").innerHTML = monthlyTotal.toLocaleString();

    }

    else {
        Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text: 'Numbers Only Please!!!!'});

    }


}

function displayPayment() {

  let totalPrincipal = parseInt(document.getElementById("loanAmount").value);
  let totalInterest = (document.getElementById("interestRate").value / 100 / 12) * document.getElementById("howManyMonths").value * document.getElementById("loanAmount").value;  
  let totalCost = totalPrincipal + totalInterest;


  document.getElementById("totalPrincipal").innerHTML = totalPrincipal.toLocaleString();
  document.getElementById("totalInterest").innerHTML = totalInterest.toLocaleString();
  document.getElementById("totalCost").innerHTML = totalCost.toLocaleString();


}

function displayToTable () {

    let locationOfList = document.getElementById("debtBody");
    let templateForList = document.getElementById("")



    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    let row = `<tr><td class="${className}">${number}</td></tr>`;
    templateRows += row;


}
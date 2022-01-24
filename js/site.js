


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

//   let monthlyTotal = getUserInput;  
  let totalPrincipal = parseInt(document.getElementById("loanAmount").value);
  let totalInterest = document.getElementById("monthlyTotal").innerHTML * document.getElementById("howManyMonths").value - document.getElementById("loanAmount").value;
  let totalCost = totalPrincipal + totalInterest;


  document.getElementById("totalPrincipal").innerHTML = totalPrincipal.toLocaleString();
  document.getElementById("totalInterest").innerHTML = totalInterest.toLocaleString();
  document.getElementById("totalCost").innerHTML = totalCost.toLocaleString();


}

// function displayToTable () {

//     let debtBody = document.getElementById("debtBody");
//     let listNames_template = document.getElementById("listNames_template")

//     debtBody.innerHTML = "";

//     let currentPayments = JSON.parse(localStorage.getItem("paymentArray")) || [];

//     if (currentPayments == 0) {
//         currentPayments = debts;
//         localStorage.setItem("paymentArray", JSON.stringify(currentPayments));
//     }

//     for (let index = 0; index < currentPayments.length; index++) {
//         // const element = array[index];
//         let paymentRow = document.importNode(listNames_template.content, true);
//         let paymentCols = paymentRow.querySelectorAll("td");

//         paymentCols[0].textContent = currentPayments[index].month;
//         paymentCols[1].textContent = currentPayments[index].payment;
//         paymentCols[2].textContent = currentPayments[index].principal;
//         paymentCols[3].textContent = currentPayments[index].interest;
//         paymentCols[4].textContent = currentPayments[index].totalInterest;
//         paymentCols[5].textContent = currentPayments[index].balance;

//         debtBody.appendChild(paymentRow);
//     }


// }



function getUserInput() {

    let loanAmount = [];
    let howManyMonths = [];
    let interestRate = [];

    loanAmount = document.getElementById("loanAmount").value;
    howManyMonths = document.getElementById("howManyMonths").value;
    interestRate = document.getElementById("interestRate").value; 


    loanAmount = Number(loanAmount);
    interestRate = parseFloat(interestRate);
    howManyMonths = parseInt(howManyMonths);


    // check if they are INTEGERS !

    if (Number(loanAmount, interestRate, howManyMonths)) {

        // calcInterestRate(interestRate);

        let monthlyPayment = calcMonthlyPayment(loanAmount, interestRate, howManyMonths);    
        document.getElementById("monthlyTotal").innerHTML = monthlyTotal.toLocaleString();

        let monthlyInterestRate =  calcInterestRate(interestRate);
        

        let payments = getAllPayments(loanAmount, monthlyInterestRate, howManyMonths, monthlyPayment);   
        displayPayments(payments, loanAmount, monthlyPayment);

    }

    else {

      Swal.fire({
        title: "Incorrect!",
        text: "Only Numbers Please!",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });

      

    }

      

}


function calcPrincipalPayments () {

}

function calcInterestRate (interestRate) {
  return (interestRate / 1200);          //   -------------  alternative method  -------------------
}


function calcMonthlyPayment (loanAmount, interestRate, howManyMonths) {

  let rate = interestRate / 1200;
  return (rate * loanAmount) / (1 - (Math.pow(1 + rate,-howManyMonths)));

}

function calcInterest (balance, interestRate) {
  return balance * interestRate;
}


// function displayPayments(totalPrincipal, totalInterest, totalCost) {
 
//   totalPrincipal = parseInt(document.getElementById("loanAmount").value);
//   totalInterest = (monthlyTotal * howManyMonths) - loanAmount;
//   totalCost = totalPrincipal + totalInterest;


//   document.getElementById("totalPrincipal").innerHTML = totalPrincipal.toLocaleString();
//   document.getElementById("totalInterest").innerHTML = totalInterest.toLocaleString();
//   document.getElementById("totalCost").innerHTML = totalCost.toLocaleString();

//   let payments = [];

// }

function displayPayments (currentPayments, loanAmount, monthlyPayment) {

    let debtBody = document.getElementById("debtBody");
    let template = document.getElementById("payment_template");

      //  -----------------------  CLEARS TABLE OF PREVIOUS DATA -------------------
    debtBody.innerHTML = "";

    // ---------------- CONFIGURE CURRENCY FORMATTER --------------------------------
    let currenceyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });


    for (let index = 0; index < currentPayments.length; index++) {
        // const element = array[index];
        let paymentRow = template.content.cloneNode(true);
        let paymentCols = paymentRow.querySelectorAll("td");

        paymentCols[0].textContent = currentPayments[index].month;
        paymentCols[1].textContent = currenceyFormatter.format(currentPayments[index].payment.toFixed(2));
        paymentCols[2].textContent = currenceyFormatter.format(currentPayments[index].loanAmount.toFixed(2));
        paymentCols[3].textContent = currenceyFormatter.format(currentPayments[index].interest.toFixed(2));
        paymentCols[4].textContent = currenceyFormatter.format(currentPayments[index].totalInterest.toFixed(2));
        paymentCols[5].textContent = currenceyFormatter.format(currentPayments[index].balance.toFixed(2));

        debtBody.appendChild(paymentRow);
    }

    let labelLoanAmount = document.getElementById("loanAmount");
    labelLoanAmount.innerHTML = Number(loanAmount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    let labelInterestRate = document.getElementById("interest");
    labelInterestRate.innerHTML = Number(interestRate).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    
    let labelTotalInterest = document.getElementById("totalInterest");
    labelTotalInterest.innerHTML = Number(totalInterest).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    let labelCurrentPayments = document.getElementById("currentPayments");
    labelCurrentPayments.innerHTML = Number(currentPayments).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    let labelBalance = document.getElementById("balance");
    labelBalance.innerHTML = Number(balance).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })


}



function getAllPayments (loanAmount, interestRate, howManyMonths, monthlyPayment) {          //    alternative method

    let allPayments = [];

    let balance = loanAmount;
    let totalInterest = 0;
    let monthlyPrincipal = 0;
    let monthlyInterest = 0;
    monthlyTotalInterest = 0;

    for (let month = 0; month <= howManyMonths; month++) {
      
      monthlyInterest = calcInterest(balance, interestRate);
      totalInterest += monthlyInterest;
      monthlyPrincipal = monthlyPayment - monthlyInterest;
      balance = Math.abs(balance - monthlyPrincipal);

      //   --------------------------------- ADD THE DETAILS TO AN OBJECT ----------------
      let curPayment = {
        month: month,
        payment: monthlyPayment,
        principal: monthlyPrincipal,
        interest: monthlyInterest,
        totalInterest: totalInterest,
        balance: balance,
      };
      
      allPayments.push(curPayment);

    }

    return allPayments;
    
}
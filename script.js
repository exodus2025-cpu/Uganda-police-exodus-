let balance = 10000; // Sample balance in UGX

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    amount = parseFloat(amount);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("balance").innerText = balance + " UGX";
        alert("Withdrawal successful! New balance: " + balance + " UGX");
    } else {
        alert("Invalid amount or insufficient funds!");
    }
}

function applyLoan() {
    let loanAmount = prompt("Enter loan amount to apply for:");
    loanAmount = parseFloat(loanAmount);
    if (loanAmount > 0) {
        alert("Loan application for " + loanAmount + " UGX submitted. Awaiting approval.");
    } else {
        alert("Invalid loan amount!");
    }
}

document.getElementById("emi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const salary = parseFloat(document.getElementById("salary").value);
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const loanType = document.getElementById("loan-type").value;

    // Define interest rates based on loan type
    const interestRates = {
        "home-loan": 0.07, // 7% annually
        "car-loan": 0.10,  // 10% annually
        "education-loan": 0.05 // 5% annually
    };

    const interestRate = interestRates[loanType];
    let loanDuration = 12; // Default to 1 year
    let emi = 0;

    // Loan duration depends on salary and loan amount
    if (salary >= 30000 && loanAmount <= 500000) {
        loanDuration = 12; // 1 year
    } else if (salary >= 50000 && loanAmount <= 1000000) {
        loanDuration = 24; // 2 years
    } else if (salary >= 75000 && loanAmount <= 2000000) {
        loanDuration = 36; // 3 years
    } else {
        loanDuration = 48; // 4 years (high salary)
    }

    // Calculate EMI using the formula
    const r = interestRate / 12; // Monthly interest rate
    const n = loanDuration; // Loan duration in months
    emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p><strong>Loan Type:</strong> ${loanType.replace('-', ' ').toUpperCase()}</p>
        <p><strong>Loan Amount:</strong> ₹${loanAmount}</p>
        <p><strong>Loan Duration:</strong> ${loanDuration} months</p>
        <p><strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}</p>
    `;
    resultElement.style.display = "block";
});

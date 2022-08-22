// ui
const progress = document.querySelector('#progress');
progress.style.visibility = 'hidden';
const error = document.querySelector('#error');
error.style.visibility = 'hidden';
const results = document.querySelector('#results');
results.style.display = 'none';
const calculate = document.querySelector('#calculate')
calculate.addEventListener('click', calculateLoans);
const clear = document.querySelector('#clear')
clear.addEventListener('click', clearInputs);

function showErrorMessage() {
  error.style.visibility = 'visible';
  setTimeout(() => {
    error.style.visibility = 'hidden';
  }, 3500);
}


// inputs
const loanAmount = document.querySelector('#loanAmount');
const annualInterest = document.querySelector('#annualInterest');
const repaymentYears = document.querySelector('#repaymentYears');

function clearInputs() {
  loanAmount.value = '';
  annualInterest.value = '';
  repaymentYears.value = '';
}

function calculateLoans() {
  // outputs
  const monthlyPayment = document.querySelector('#monthlyPayment');
  const totalPayment = document.querySelector('#totalPayment');
  const totalInterest = document.querySelector('#totalInterest');

  //clear outputs
  monthlyPayment.value = '';
  totalPayment.value = '';
  totalInterest.value = '';

  // calculations
  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(annualInterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(repaymentYears.value) * 12;
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if(isFinite(monthly)) {
    progress.style.visibility = 'visible';
    setTimeout(() => {
      progress.style.visibility = 'hidden';
    }, 1900);
    setTimeout(() => {
      results.style.display = 'block';
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    }, 2000);
  } else {
    progress.style.visibility = 'visible';
    setTimeout(() => {
      progress.style.visibility = 'hidden';
    }, 1900);
    setTimeout(() => {
      showErrorMessage();
    }, 2100);
  }
}


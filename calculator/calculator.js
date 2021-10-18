// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const values  = { amount: 250000, years: 30, rate: 12.5 };
    
    const loan = document.querySelector("#loan-amount");
    const term = document.querySelector("#loan-years");
    const interst = document.querySelector("#loan-rate");
   
    loan.value = values.amount;
    term.value = values.years;
    interst.value = values.rate;   
    
    update();
  
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const currentUIValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentUIValues));
  
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  
  return (
    (p * i) /
  (1 - Math.pow((1 + i), -n)) 
  
  ).toFixed(2)
  
  
  }
  
  
  
  
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
  const span = document.querySelector("#monthly-payment").innerText = monthly;
    
  
  }
  
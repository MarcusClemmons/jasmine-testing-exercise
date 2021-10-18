it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 250000,
      years: 30,
      rate: 12.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('2668.14');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    }; 
    
    expect(calculateMonthlyPayment(values)).toEqual('131.00')
  });
  
  
   it("should be less then monthly rate", function() {
    const values = {
      amount: 250000,
      years: 30,
      rate: 12.5
    }
      
    expect(calculateMonthlyPayment(values)).toBeLessThan('3000')
  
   });
describe("Payments test", function() {

       
    it('should create curPayment', function(){
        submitPaymentInfo();
        let curPayment = createCurPayment()
    
    
        expect(submitPaymentInfo()).toEqual(curPayment);
    });
    
    it('should calculate tipPercent', function(){
        createCurPayment();
    
        expect(createCurPayment()).toEqual(undefined);
        
    });
    
    it('should add on input value' , function(){
       
      let curPayment = allPayments['payment1'];;
    
        expect(appendPaymentTable(curPayment)).toEqual(undefined);
        
    });
    
    it('should  calculated sum of all payment', function(){
        updateSummary();
        let paymentTotal = 0;
        let numberOfPayments = 0;
        tipPercentAvg = paymentTotal / Object.keys(allPayments).length;
      
        
        expect(tipPercentAvg).toEqual(0);
    
    
    
    })
          
    
    
    
    
    
    
    
    
    
    
    });
    
    
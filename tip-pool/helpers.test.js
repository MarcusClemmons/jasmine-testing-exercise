it('should  sum  all payment to total',function(){
    expect(sumPaymentTotal(200)).toEqual(0);
});

it('should calculate bill and tip amount',function(){
    billAmtInput.value =100;
    tipAmtInput.value = 20;
    
    
    expect(calculateTipPercent(100, 20)).toEqual(20);
});

it('should generate new td from value and append to tr on appendTd(tr, value)',function(){
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
    
});
$(function(){
        $('input').each(function() {
            $(this).keyup(function(){
                calculateTotal($(this));
            });
        });
    });

    function calculateTotal(src) {
        let sum = 0;
        const sumform = src.closest('form');

        sumform.find('input').each(function() {
            if(!isNaN(this.value) && this.value.length!=0) {
                sum += parseFloat(this.value);
            }
        });
       //autofill sub-total field
        sumform.find("#total").html(sum.toFixed(2));
        //calculate VAT @ 20%
        let vatTotal = sum * 0.2;
        //add VAT amount
        sumform.find('#vat').html(vatTotal.toFixed(2));
        //Add up grand total
        let finalTotal = parseFloat(sum) + parseFloat(vatTotal)
        sumform.find('#grandTotal').html(finalTotal.toFixed(2));
    }

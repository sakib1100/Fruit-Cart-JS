document.getElementById('fruit-plus').addEventListener('click',function(){
    const fruitNum = document.getElementById('fruit-number');
    let fruitVal = fruitNum.value;
   
   
    fruitVal++;
fruitNum.value = fruitVal;

  document.getElementById('fruit-total').innerText =  fruitVal * 30;;

const main =   parseInt(document.getElementById('fruit-total').innerText) + parseInt(document.getElementById('fruit1-total').innerText);

 const totalAmount = document.getElementById('sub-total').innerText = main.toFixed(2);
 const tax = totalAmount * .1;
 document.getElementById('tax-amount').innerText = tax.toFixed(2);
 const totalPrice = main + tax;
 document.getElementById('total-price').innerText = totalPrice.toFixed(2);
   
})

document.getElementById('fruit-minus').addEventListener('click',function(){
    const fruitNum = document.getElementById('fruit-number');
    let fruitVal = fruitNum.value;
   
   
  if(fruitVal > 0) {
    fruitVal--;
    fruitNum.value = fruitVal;
  }
  document.getElementById('fruit-total').innerText =  fruitVal * 30;

  const main =   parseInt(document.getElementById('fruit-total').innerText) + parseInt(document.getElementById('fruit1-total').innerText);
  const totalAmount = document.getElementById('sub-total').innerText = main.toFixed(2);
 const tax = totalAmount * .1;
 document.getElementById('tax-amount').innerText = tax.toFixed(2);
 const totalPrice = main + tax;
 document.getElementById('total-price').innerText = totalPrice.toFixed(2);

})




// ornge section is finished




document.getElementById('fruit1-plus').addEventListener('click',function(){
    const fruitNum = document.getElementById('fruit1-number');
    let fruitVal = fruitNum.value;
   
   
    fruitVal++;
fruitNum.value = fruitVal;

 document.getElementById('fruit1-total').innerText =  fruitVal * 20;;

 const main =   parseInt(document.getElementById('fruit-total').innerText) + parseInt(document.getElementById('fruit1-total').innerText);
 const totalAmount = document.getElementById('sub-total').innerText = main.toFixed(2);
 const tax = totalAmount * .1;
 document.getElementById('tax-amount').innerText = tax.toFixed(2);
 const totalPrice = main + tax;
 document.getElementById('total-price').innerText = totalPrice.toFixed(2);
   
})

document.getElementById('fruit1-minus').addEventListener('click',function(){
    const fruitNum = document.getElementById('fruit1-number');
    let fruitVal = fruitNum.value;
   
   
  if(fruitVal > 0) {
    fruitVal--;
    fruitNum.value = fruitVal;
  }
   document.getElementById('fruit1-total').innerText =  fruitVal * 20;;
   const main =   parseInt(document.getElementById('fruit-total').innerText) + parseInt(document.getElementById('fruit1-total').innerText);
   const totalAmount = document.getElementById('sub-total').innerText = main.toFixed(2);
   const tax = totalAmount * .1;
   document.getElementById('tax-amount').innerText = tax.toFixed(2);
   const totalPrice = main + tax;
   document.getElementById('total-price').innerText = totalPrice.toFixed(2);
})



// apple section is finished



// const fruitNum = document.getElementById('fruit-number');

















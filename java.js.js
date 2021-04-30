var document
let removeBtn = Array.from(document.getElementsByClassName("fa-trash-alt"));
console.log(removeBtn);

for (let rmv of removeBtn) {
  rmv.addEventListener("click", function () {
    rmv.parentNode.remove();
    sum()
  });
}

let BtnPlus = Array.from(document.querySelectorAll(".add"));
console.log(BtnPlus);

let qte = Array.from(document.querySelectorAll(".qte"));

for (let i = 0; i < BtnPlus.length; i++) {
  BtnPlus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    sum();
  });
}

let BtnMinus = Array.from(document.getElementsByClassName("minus"));
for (let min of BtnMinus) {
  min.addEventListener("click", function () {
    if (min.previousElementSibling.innerHTML > 0) {
      min.previousElementSibling.innerHTML--;
      sum()
    }
  });
}

function Sum(){
  let qtt=Array.from(document.querySelectorAll('.quantity_input'))
  
  let price=Array.from(document.querySelectorAll('.total-price'))
  let s=0;
  for (let i=0;i<qtt.length;i++){
     s+=(parseInt(qtt[i].innerHTML)*parseInt(price[i].innerHTML));
  
  }
  let V=s.toString()
  
  return (document.getElementById('total-cart').innerHTML ='Prix Totale: '+V+' TND');
  }






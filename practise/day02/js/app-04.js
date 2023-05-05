
let msgSonuc=document.querySelector(".sonuc");
let tabanEl=document.querySelector("#taban");
let ustEl=document.querySelector("#ust");
function ustAl(){

   
   
    msgSonuc.classList.add("ekle");
    if(tabanEl.value==""||ustEl.value==""){
        msgSonuc.innerText="alanlari tam doldur"
    }else{
        msgSonuc.innerText="Hosgeldiniz " +tabanEl.value+" "+ustEl.value;
    }
}
function sil(){
tabanEl.value="";
ustEl.value="";
msgSonuc.innerText="";
}
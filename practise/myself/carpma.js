let isim=document.querySelector("#isim");
isim.focus();
document.getElementById("giris").addEventListener("click",()=>{
isim= isim.value==""? "abuzer" :isim.value;
document.getElementById("ilk").classList.add("d-none");
document.querySelector("h1").innerHTML+=isim;
document.querySelector("h1").classList.remove("d-none");
document.querySelector("#iki").classList.remove("d-none");
});
document.getElementById("basla").addEventListener("click",()=>{
    document.getElementById("basliyoruz").classList.add("d-none");
    document.getElementById("iki").classList.add("d-none");
    document.querySelector("#container").classList.remove("d-none");
   
});
let dogru=0;
let yanlis=0;
let islem=["+","-","*"];
let sayi1;
let sayi2;
let islm;
let simdi;
let puan=0;
const islemcagir=()=>{
    document.getElementById("sonuc").focus();
    sayi1=Math.floor(Math.random()*10)+1;
    sayi2=Math.floor(Math.random()*10)+1;
    islm=Math.floor(Math.random()*3);
    if(sayi2>sayi1){
        let haf=sayi1;
        sayi1=sayi2;
        sayi2=haf;
    }
    document.getElementById("firstNumber").value=sayi1;
    document.getElementById("secondNumber").value=sayi2;
    
    document.getElementById("islem").innerHTML=islem[islm];
}
const basliyoruz=()=>{
    document.getElementById("basliyoruz").classList.remove("d-none");

    simdi=Date.now();
       islemcagir();
       document.querySelector("h3").classList.add("d-none");
       document.querySelector("h2").innerHTML="Dogru cevabi yaz ve sonuc a tikla"
       document.querySelector("#devam").classList.add("d-none");
}
document.getElementById("beginn").addEventListener("click",()=>{
    basliyoruz();
});
document.getElementById("weiter").addEventListener("click",()=>{
    document.querySelector("#butons").classList.add("d-none");
    document.querySelector("#devam").classList.remove("d-none");
    

    let sonuc=document.getElementById("sonuc").value;
    let sonuc2=eval(sayi1+islem[islm]+sayi2);
    if(sonuc==sonuc2){
        dogru++;
        puan+=10;
        document.querySelector("#bitti").classList.remove("bg-danger");
        document.querySelector("#bitti").classList.add("bg-primary","text-light")
        document.querySelector("#bitti").innerHTML=`<b>Dogru</b>`;
    }else{
        yanlis++;
        puan-=10;
        document.querySelector("#bitti").classList.add("bg-danger","text-light");
        document.querySelector("#bitti").innerHTML=`<b>Yanlis</b>`;
    }
    document.getElementById("dogruSayisi").innerHTML=dogru;
    document.getElementById("yanlisSayisi").innerHTML=yanlis;
    if(dogru==10){
        let sonTime=Date.now();
        let fark=(sonTime-simdi)/1000;
        document.querySelector("#bitti").innerHTML=`Oyun bitti Puaniniz: ${puan} sureniz: ${fark}`;
        document.querySelector("#container").classList.add("d-none");
        document.querySelector("#tekrar").classList.remove("d-none");

    }
}); 
document.getElementById("devam").addEventListener("click",()=>{
    document.getElementById("sonuc").value="";
    document.querySelector("#butons").classList.remove("d-none");
    document.querySelector("#devam").classList.add("d-none");
    document.getElementById("bitti").innerHTML="";
    islemcagir();
   
});
document.getElementById("tekrar").addEventListener("click",()=>{
    dogru=0;
    yanlis=0;
    puan=0;
    window.location.reload ();
   
});

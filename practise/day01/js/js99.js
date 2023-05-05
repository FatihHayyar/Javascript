

function gonder(){
    const tabanEl=document.querySelector("#isim").value
    const ustEl=document.querySelector("#soyad").value

    const message=document.querySelector("h2");
   
    message.classList.add("sonuc");
    message.innerText="Naber";
}

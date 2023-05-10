let isim=document.querySelector("#isim");

document.getElementById("giris").addEventListener("click",()=>{
isim= isim.value==""? "abuzer" :isim.value;
document.getElementById("ilk").classList.add("d-none");
document.querySelector("h1").innerHTML+=isim;
document.querySelector("h1").classList.remove("d-none");
document.querySelector("#basla").classList.remove("d-none");
});
document.getElementById("bsla").addEventListener("click",()=>{
    isim= isim.value==""? "abuzer" :isim.value;
    document.getElementById("ilk").classList.add("d-none");
    document.querySelector("h1").innerHTML+=isim;
    document.querySelector("h1").classList.remove("d-none");
    document.querySelector("#basla").classList.remove("d-none");
    });
let liste=["../myself/img/Zar1.png","../myself/img/Zar2.png","../myself/img/Zar3.png","../myself/img/Zar4.png","../myself/img/Zar5.png","../myself/img/Zar6.png"]


document.querySelector("button").addEventListener("click",()=>{
    let zar=Math.floor(Math.random()*6);
    document.querySelector("img").src=liste[zar];
    
    
})
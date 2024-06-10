document.querySelector('.home').addEventListener("click",()=>{document.querySelectorAll(".hidden1").forEach((item)=>{item.classList.toggle("showing1");});})
document.querySelector('.about').addEventListener("click",()=>{document.querySelectorAll(".hidden2").forEach((item)=>{item.classList.toggle("showing2");});})
document.querySelector('.services').addEventListener("click",()=>{document.querySelectorAll(".hidden3").forEach((item)=>{item.classList.toggle("showing3");});})
document.querySelector('.contact').addEventListener("click",()=>{document.querySelectorAll(".hidden4").forEach((item)=>{item.classList.toggle("showing4");});})

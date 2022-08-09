AOS.init();
let lis  = document.querySelectorAll(".portofolio-ul li");
let imgs = document.querySelectorAll(".photo-co img")
let pohotp = document.querySelectorAll(".photo-co img")

lis.forEach((li) => {
    li.addEventListener("click" , removeActive);
    li.addEventListener("click", mang)
});

function removeActive(){
    lis.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active")
    })
}

function mang(){
    imgs.forEach((img) => {
        img.style.display = "none";
    });
document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
})
}

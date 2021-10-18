1.
// show-modal => click = >
// opacity =>1
// backdrop => block
const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".close-modal");

// console.log(showmodalBtn);


showModalBtn.addEventListener("click", ()=> {
    modal.style.opacity = "1";
    modal.style.transform = "translateY(20vh)";
    backDrop.style.display = "block" ;

});

// closeModalBtn.addEventListener("click", ()=> {
//     modal.style.opacity = "0";
//     modal.style.transform = "translateY(-180vh)";
//     backDrop.style.display = "none" ;
// });

// backDrop.addEventListener("click", ()=> {
//     modal.style.opacity = "0";
//     modal.style.transform = "translateY(-180vh)";
//     backDrop.style.display = "none" ;
// });

//we can define function for close
function closeModalFunction() {
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-180vh)";
    backDrop.style.display = "none" ;
}
closeModalBtn.addEventListener("click", closeModalFunction);
backDrop.addEventListener("click", closeModalFunction);
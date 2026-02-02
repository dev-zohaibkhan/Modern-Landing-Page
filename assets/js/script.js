// ======== Hum Burgger Menu Start ===========
let navBar = document.querySelector("header nav ul");
let humBurgger = document.querySelector(".hum-burgger");
let icon = document.querySelector(".hum-burgger i");

let count = 0;
    humBurgger.addEventListener("click", () => {
        if(count === 0){
            navBar.style.transform = 'translateY(0)';
            count++;
        }else{
            navBar.style.transform = 'translateY(-100%)';
            count--;    
        }
    })
// ======== Hum Burgger Menu End ===========

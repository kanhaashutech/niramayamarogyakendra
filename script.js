window.addEventListener('scroll' , reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for( var i=0; i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop =reveals[i].getBoundingClientRect().top;
        var revealpoint =150;

        if(revealtop <windowheight -revealpoint){
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// toggle 


// const toggleBtn= document.querySelector('.toggle-btn')
// const toggleBtnIcon= document.querySelector('.toggle-btn i')
// const dropDownMenu= document.querySelector('.dropdown-menu')


// toggleBtn.onclick = function () {
//     dropDownMenu.classList.toggle('open')
//     const isOpen = dropDownMenu.classList.contains('open')

//     toggleBtnIcon.classList = isOpen
//     ? 'fa-solid fa-xmark'
//     : 'fa-solid fa-bars'
// }

function myFunction(){
    var x = document.getElementById("menu");
    // var x = document.getElementById("menu1");
    // var x = document.getElementById("menu2");
    // var x = document.getElementById("menu3");
    // var x = document.getElementById("menu4");

    if(x.style.display == "block"){
        x.style.display = "none";

    }

    else{
        x.style.display = "block";
    }
}
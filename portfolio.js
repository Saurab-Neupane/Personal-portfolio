
//for skills experience //

var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab")
}

//for hamburger menu //

var sidemenu  = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-180px";
}


// for dark mode toggle //

const inputel = document.querySelector("input");

const bodyel = document.querySelector("body");
inputel.checked = false;

updatebody()


function updatebody(){
    if (inputel.checked) {
        bodyel.style.background = "grey";
    }
    else{
        bodyel.style.background = "black";
    }
}
inputel.addEventListener("input",()=>{

    updatebody()
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputel.checked));
}





// for google contact form link //


const scriptURL = 'https://script.google.com/macros/s/AKfycbxS-6cAR6LxYsHYmO7ikglM2Uh9QpyEyuBANMBN8UlgqkNWpGpTuWyTK7WsTVaK1UnCZQ/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("message")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
     message.innerHTML= "Message sent successfully"
    setTimeout(function(){
        message.innerHTML=" "
    },3000)
    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



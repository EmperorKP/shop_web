var click = document.getElementById("button");


click.addEventListener("click", function() {  
    window.location.href = 'https://www.shop.com/nbts/create-myaccount.xhtml?ischeckout=false'; 
});

var click1 = document.getElementById("submit-button");

click1.addEventListener("click", function() {  
    window.location.href = '../homepage/homepage.html'; 
});
var dropbtn = document.getElementById("myDropdown")
var selectText = document.getElementById("sel-text")

var li = document.querySelectorAll("#myDropdown>li")

li.forEach((e)=>{
    e.addEventListener("click",(event)=>{
        selectText.innerText=event.target.innerText
        dropdown()
    })
})
function dropdown() {
    dropbtn.classList.toggle("show")
}


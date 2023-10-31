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
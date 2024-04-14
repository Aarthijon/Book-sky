var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var addpopbutton=document.querySelector(".add-button")

addpopbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var ccontainer=document.querySelector(".container")
var addd=document.getElementById("add")
var titleinp=document.getElementById("book-name")
var authinp=document.getElementById("Author-name")
var descript=document.getElementById("book-description")

addd.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${titleinp.value}</h2>
    <h5>${authinp.value}</h5>
    <p>${descript.value}</p>
    <button onclick="deleteclick(event)">Delete</button>`
    ccontainer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    document.getElementById("Author-name").value = "";
    document.getElementById("book-name").value = "";
    document.getElementById("book-description").value = "";
})
function deleteclick(event){
    event.target.parentElement.remove()
}
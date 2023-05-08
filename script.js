const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")
const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = document.querySelectorAll("a")
const sections = document.querySelectorAll("section")


tabs[0].style.display = "block"

function showTab(evt, id){
        
    for(let i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none"
    buttons[i].classList.remove("selected")
}

    document.getElementById(id).style.display = "block"

    evt.currentTarget.classList.add("selected")
}


burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    links.classList.toggle("absolute")
})
        
window.addEventListener("scroll", function(){
    let current = window.innerHeight
        
    for(let section of sections){
        if(this.window.pageYOffset >= section.offsetTop - 50){
            current = section.getAttribute("id")
                }
    }
        
    for(let anchor of anchors){
                    
        anchor.classList.remove("active")
        
        if(anchor.getAttribute("href") == "#" + current){
        anchor.classList.add("active")
        }
    }
            
})
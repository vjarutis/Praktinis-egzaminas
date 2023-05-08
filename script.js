const tabs = document.getElementsByClassName("tab")
        const buttons = document.getElementsByTagName("button")

        tabs[0].style.display = "block"

        function showTab(evt, id){
        
            for(let i = 0; i < tabs.length; i++){
            tabs[i].style.display = "none"
            buttons[i].classList.remove("selected")
        }

            document.getElementById(id).style.display = "block"

            evt.currentTarget.classList.add("selected")
        }
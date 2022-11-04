// navbar

var DropDownBtn = document.querySelector("#dropdown") ;
var DropDownTab = document.querySelector("#tab")

DropDownTab.style.display = "none"


DropDownBtn.onclick = () =>{
   

    if(DropDownTab.style.display == "none"){

        DropDownTab.style.display = "block"
        DropDownTab.style.opacity = '1';
      
    }

    else{

        DropDownTab.style.display = "none"

    }

    

    
}

// buttons




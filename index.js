console.log("this is console for index js");

let btn  = document.getElementById("btn")
btn.addEventListener("click", async () =>{

    let [tab] = chrome.tabs.query(
        {active:true, currentWindow:true}
    )

    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function : blocker()
    })
} )


 function blcoker(){
    alert("alert from content js");
    
 }
import homeContent from "./homepage.js";
import menuContent from "./menu.js";
import contactsContent from "./contacts.js";

function renderContent(e) {
 
    // Get what page to render 
    const route = e.target.id;
    console.log(route);
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    switch (route) {
        case "home":
            contentContainer.appendChild(homeContent());
            break;
        case "menu": 
            contentContainer.appendChild(menuContent()); 
        case "contacts":
            contentContainer.appendChild(contactsContent());  
    }
    
    
}

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", renderContent);
})

document.querySelector("#content").appendChild(homeContent());


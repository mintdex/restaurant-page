const contactsContent = () => {
    const container = document.createElement("div");
    
    const phone = document.createElement("p");
    const email = document.createElement("p");

    phone.textContent = "Phone: 123456789"
    email.textContent = "Email: restaurant@me.here"

    container.appendChild(phone);
    container.appendChild(email);
    
    return container;
};

export default contactsContent
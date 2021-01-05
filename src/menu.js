const menuContent = () => {
    const container = document.createElement("div");
    // Number of dishes in menu
    const numOfDishes = 2; 
    const dishInfo = {
        "Pho": ["https://vietnamnomad.com/wp-content/uploads/2020/06/Top-Vietnam-food-Pho-768x480.jpg", "$100/persosn (super cheap)"],
        "Banh mi": ["https://vietnamnomad.com/wp-content/uploads/2020/06/Top-food-in-vietnam-Banh-Mi-768x480.jpg", "$300/p (reasonable)"],
    };

    for (const [dishName, info] of Object.entries(dishInfo)) {
        const img = document.createElement("img");
        const name = document.createElement("p");
        const price = document.createElement("p");
        
        img.src = info[0];
        name.textContent = dishName;
        price.textContent = info[1]
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(price);   
    }

    return container;

};

export default menuContent

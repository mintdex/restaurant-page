
const homeContent = () => {
    const container = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem obcaecati repudiandae incidunt, voluptatibus, provident quam fuga minus est fugiat corrupti numquam ducimus et animi neque, placeat alias hic eaque. Quasi! Don't understand that? Don't worry just pay the bill in our restaurant";
    
    const img = document.createElement("img");
    img.src = "https://media-cdn.tripadvisor.com/media/photo-s/1a/32/e7/70/updated-menu.jpg";
    img.id = "background";

    container.appendChild(paragraph);
    container.appendChild(img);
    
    return container;
};

export default homeContent
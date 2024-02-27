const predefinedImages = [
    'img1.png','spiderman (7).jpg','spiderman (1).jpg','spiderman (2).jpg','spiderman (3).jpg','spiderman (4).jpg',
    'img2.png','spiderman (5).jpg','spiderman (6).jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    '6.jpg'
    // Add more image URLs here
];
var closeImgDiv = document.getElementById("closeimg");
var images = closeImgDiv.querySelectorAll("img");

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const keyword = document.getElementById('search-input').value;
    const imageContainer = document.getElementById('image-results');
    const loadingContainer = document.getElementById('loading-container');
    
    loadingContainer.style.display = 'block';
    //imageContainer.style.display = 'none';

    // Clear previous results
    imageContainer.innerHTML = '';
    setTimeout(function () {
        // Clear previous results and hide the loading container
        //imageContainer.innerHTML = '';
        loadingContainer.style.display = 'none';

        // Add your code to fetch and display images here
        // For example, you can fetch images from an API and append them to the imageContainer
    }, 1000);

    // Filter and display predefined images based on the keyword
    const filteredImages = predefinedImages.filter(image => image.includes(keyword.toLowerCase()));

    if (filteredImages.length === 0) {
        button.style.display = "inline-block";
        
    } else {
        filteredImages.forEach(image => {
            //imageContainer.innerHTML = '<div class="image-container">';
            const Div = document.createElement("div");
            Div.className = "image-container";

            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Image';
            imgElement.setAttribute('onclick','openFullImg(this.src)');

            const link = document.createElement("a");
            link.className = "download-link";
            link.href = image;
            link.toggleAttribute('download');
             
            const btn = document.createElement("button");
            btn.className = "download-button";
            btn.textContent = "Download";
            imageContainer.appendChild(Div);
            Div.appendChild(imgElement);
            Div.appendChild(link);
            link.appendChild(btn);
        });
    }
});

const button = document.getElementById("closeimg");
function changeImg() {
    button.style.display = "none";
    //images.forEach(link => {
      //  link.style.display = "none";
    //});
}

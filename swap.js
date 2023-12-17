var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content6 = document.getElementById("content6");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var container = document.getElementById("container");
function openHTML() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(300%)";
    content3.style.transform = "translateX(300%)";
    content6.style.transform = "translateX(300%)";
    btn1.style.color = "#ff7846";
    btn2.style.color = "#000";
    btn3.style.color = "#000";
    btn1.style.background = "#0b2239";
    btn2.style.background = "white";
    btn3.style.background = "white";
    btn1.style.borderStyle = "solid";
    btn2.style.borderStyle = "none";
    btn3.style.borderStyle = "none";
    const loadingContainer = document.getElementById('loading-container1');

    loadingContainer.style.display = 'block';
    setTimeout(function () {
        loadingContainer.style.display = 'none';
    }, 1000);


}

function openCSS() {
    content1.style.transform = "translateX(300%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(300%)";
    content6.style.transform = "translateX(300%)";
    btn1.style.color = "#000";
    btn2.style.color = "#ff7846";
    btn3.style.color = "#000";
    btn1.style.background = "white";
    btn2.style.background = "#0b2239";
    btn3.style.background = "white";
    btn1.style.borderStyle = "none";
    btn2.style.borderStyle = "solid";
    btn3.style.borderStyle = "none";
    const loadingContainer = document.getElementById('loading-container');

    loadingContainer.style.display = 'block';
    setTimeout(function () {
        loadingContainer.style.display = 'none';
    }, 1000);

}
function openJAVA() {
    content1.style.transform = "translateX(300%)";
    content2.style.transform = "translateX(300%)";
    content3.style.transform = "translateX(0)";
    content6.style.transform = "translateX(300%)";
    btn1.style.color = "#000";
    btn2.style.color = "#000";
    btn3.style.color = "#ff7846";
    btn1.style.background = "white";
    btn2.style.background = "white";
    btn3.style.background = "#0b2239";
    btn1.style.borderStyle = "none";
    btn2.style.borderStyle = "none";
    btn3.style.borderStyle = "solid";
    const loadingContainer = document.getElementById('loading-container');

    loadingContainer.style.display = 'block';
    setTimeout(function () {
        loadingContainer.style.display = 'none';

    }, 1000);
}
function openprofile(){
    content1.style.transform = "translateX(300%)";
    content2.style.transform = "translateX(300%)";
    content3.style.transform = "translateX(300%)";
    content6.style.transform = "translateX(0)";
}
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}

var header = document.getElementById("header");
const darkMode = document.querySelector('.dark-mode');
var Nav = document.getElementById("nav");

var count = 0;
darkMode.addEventListener('click', () => {
    if (count % 2 == 0) {
        container.style.background = '#202528';
        header.style.background = '#202528';
        header.style.color = "White";
        Sounder.style.background = "#202528";
        Nav.style.background = "#202528";
    }
    else {
        container.style.background = 'White';
        header.style.background = 'White';
        header.style.color = "black";
        Nav.style.background = "White";
        Sounder.style.background = "White";
    }
    count++;
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

/*const images = document.querySelectorAll('.image-container');

const observerOptions = {
    root: document.querySelector('.content-right'),
    rootMargin: '0px',
    threshold: 0.1 // Adjust this threshold as needed
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

images.forEach(image => {
    observer.observe(image);
});
*/

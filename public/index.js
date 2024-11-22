// Your code here 

const URL = 'https://api.thecatapi.com/v1/images/search';

window.onload = async () => {
    const image = document.getElementById('image');

    const response = await fetch(URL);
    const data = await response.json();
    const imageObject = data[0];

    image.src = imageObject.url;
};

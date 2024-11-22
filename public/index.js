// Your code here 

const URL = 'https://api.thecatapi.com/v1/images/search';

window.onload = async () => {
    console.log('here');
    const image = document.getElementById('image');

    const response = await fetch(URL);
    const [data] = await response.json();

    const { url } = data;

    console.log(url);

    image.src = url;
};

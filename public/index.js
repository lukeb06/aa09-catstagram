// Your code here 

const URL = 'https://api.thecatapi.com/v1/images/search';

async function refreshImage() {
    const image = document.getElementById('image');
    const score = document.getElementById('score');
    const commentWrapper = document.getElementById('commentWrapper');

    score.textContent = 0;
    commentWrapper.innerHTML = '';

    const response = await fetch(URL);
    const data = await response.json();
    const imageObject = data[0];

    image.src = imageObject.url;
}

window.onload = () => {
    const refreshButton = document.getElementById('refreshButton');
    const upvoteButton = document.getElementById('upvoteButton');
    const downvoteButton = document.getElementById('downvoteButton');
    const score = document.getElementById('score');

    const commentForm = document.getElementById('commentForm');
    const commentWrapper = document.getElementById('commentWrapper');
   
    refreshButton.addEventListener('click', () => {
        refreshImage();
    });

    upvoteButton.addEventListener('click', () => {
        score.textContent = +score.textContent + 1;
    });

    downvoteButton.addEventListener('click', () => {
        score.textContent = +score.textContent - 1;
    });


    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const commentInput = document.getElementById('commentInput');
         
        const comment = document.createElement('p');
        comment.textContent = commentInput.value;

        commentWrapper.appendChild(comment);

        commentInput.value = '';
    });

    refreshImage();
};

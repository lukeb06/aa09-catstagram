const URL = 'https://api.thecatapi.com/v1/images/search';

async function refreshImage(firstTime = false) {
    const image = document.getElementById('image');
    const score = document.getElementById('score');
    const commentWrapper = document.getElementById('commentWrapper');

    score.textContent = 0;
    commentWrapper.innerHTML = '';

    const response = await fetch(URL);
    const data = await response.json();
    const imageObject = data[0];
    let _url = imageObject.url;

    if (firstTime) {
        const cachedUrl = localStorage.getItem('url');
        const cachedScore = localStorage.getItem('score');
        const cachedComments = localStorage.getItem('comments');

        console.log(localStorage, cachedUrl);

        if (cachedUrl) _url = cachedUrl;
        if (cachedScore) score.textContent = cachedScore;
        if (cachedComments) commentWrapper.innerHTML = cachedComments;
    }

    localStorage.setItem('url', _url);

    image.src = _url;
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
        localStorage.setItem('score', score.textContent);
    });

    downvoteButton.addEventListener('click', () => {
        score.textContent = +score.textContent - 1;
        localStorage.setItem('score', score.textContent);
    });


    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const commentInput = document.getElementById('commentInput');

        const comment = document.createElement('p');
        comment.textContent = commentInput.value;

        commentWrapper.appendChild(comment);

        localStorage.setItem('comments', commentWrapper.innerHTML);

        commentInput.value = '';
    });

    refreshImage(true);
};

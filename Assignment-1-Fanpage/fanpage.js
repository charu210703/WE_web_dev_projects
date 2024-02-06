document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('likeButton');
    const likeCounter = document.getElementById('likeCounter');
    let likeCount = 0;

    likeButton.addEventListener('click', function () {
        this.classList.toggle('active');
        likeCount += 1;
        likeCounter.textContent = likeCount;
    });
});
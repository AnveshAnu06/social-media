document.getElementById('post-button').addEventListener('click', function() {
    const postInput = document.getElementById('post-input').value;

    if (postInput) {
        const postContainer = document.getElementById('post-container');
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.textContent = postInput;

        postContainer.appendChild(newPost);
        document.getElementById('post-input').value = '';
    } else {
        alert('Please write something before posting.');
    }
});
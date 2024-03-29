const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');

function saveBlogPost() {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    // save the form data as an object
    const blogPost = {
        username: usernameInput.value,
        title: titleInput.value.trim(),
        content: contentInput.value.trim()
    };
    // Convert object to string and store object in localStorage
    blogs.push(blogPost);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function clearInput() {
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        alert('Please fill all input fields!');
        clearInput();
    } else {
        saveBlogPost();
        clearInput();
        location.href = 'blog.html';
    }
});
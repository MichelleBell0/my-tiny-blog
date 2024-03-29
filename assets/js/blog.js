const blogPosts = document.getElementById('blog-posts');

function getBlogPosts(index) {
    const blogArray = JSON.parse(localStorage.getItem('blogs'));
    return blogArray;
}
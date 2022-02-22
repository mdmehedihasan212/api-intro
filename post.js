function userPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(repsonse => repsonse.json())
        .then(data => getPost(data))
}
userPost();
function getPost(posts) {
    const postId = document.getElementById('post')
    for (const user of posts) {
        const div = document.createElement('div')
        div.classList.add('posts')
        div.innerHTML = `
    <h2>${user.title}</h2>
    <p>${user.body}</p>
    `;
        postId.appendChild(div)
        console.log(user.title);
    }


}
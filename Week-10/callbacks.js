
const posts = [
    { title: 'Post One', body: 'description 1'},
    { title: 'Post Two', body: 'description 2'},
]

function getPosts() {
    setTimeout(() => {
        console.log('timeout')
    },1000)
}

getPosts()
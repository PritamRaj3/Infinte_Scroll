let containerBox = document.querySelector('.container-box');

let pageCount = 1;
let postCount = 1;
let pageLimit = 4;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${pageLimit}$_page=${pageCount}`);
    const data = await response.json();

    data.map((currentPost, index) => {

        const htmlData = `
        <div class="post-box">
                <div class="count-box"><span> ${postCount++} </span></div>
                <div class="post-content">
                    <div class="content">
                        <h2>${currentPost.title}</h2>
                    </div>
                    <p class="subcontent">${currentPost.body}</p>
                </div>
            </div>
        `;
        containerBox.insertAdjacentHTML('beforeend', htmlData);
    });

}

getPost();

const showData = ()=>{
    setTimeout(()=>{
        pageCount++;
        getPost();
    },500);
}


// infinte scroll
window.addEventListener('scroll', ()=>{
const {scrollHeight, scrollTop, clientHeight } = document.documentElement;
if(scrollTop + clientHeight >= scrollHeight){
    showData();
}
});
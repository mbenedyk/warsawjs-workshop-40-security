async function fetchComments(){
    let response = await fetch("/comments");
    let comments = await response.json();
    console.log("comments: ");
    console.log(comments);
    return comments;
}

function renderComments(comments) {
    const $ul = document.querySelector('ul');
    
    comments.forEach((c)=>{
        const $il = document.createElement("li");
        $il.textContent = c;
        $ul.appendChild($il); 
    });
}

function renderComment(comment){
    const $ul = document.querySelector('ul');
    
   
        const $il = document.createElement("li");
        $il.textContent = comment;
        $ul.appendChild($il); 
}

function addComment(comment){
    fetch("/comments", {method: "POST", body: JSON.stringify({comment}), headers: { 'Content-Type': 'application/json'}});
    renderComment(comment);
}

window.addEventListener("DOMContentLoaded", async () => {
    const $form = document.querySelector('form');
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const comment = document.querySelector("textarea").value;
        addComment(comment);
    });
    
    var comments = await fetchComments();
    renderComments(comments);
});
let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("comment_button"); 
   
nameInput.addEventListener("input", toggleCommentButton);
commentInput.addEventListener("input", toggleCommentButton);

function toggleCommentButton() {
    let nameValue = nameInput.value;
    let commentValue = commentInput.value;

    if (nameValue.trim() !== "" && commentValue.trim() !== "") { 
        commentButton.removeAttribute("disabled");
    } else {
        commentButton.setAttribute("disabled", "true"); 
    }
}

function addComment() {
    let name = nameInput.value;
    let comment = commentInput.value;

    if (name.trim() === '' || comment.trim() === '') {
        return;
    }

    let commentsSection = document.getElementById("comment_sec"); 
    let commentElement = document.createElement('div');
    commentElement.innerHTML = `<h4>${name}</h4><p>${comment}</p>`; 
    commentsSection.appendChild(commentElement);

    nameInput.value = '';
    commentInput.value = '';
    commentButton.setAttribute('disabled', 'true');
}

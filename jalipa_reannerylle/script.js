let nameInput = document.getElementById("name");
    let commentInput = document.getElementById("comment");
    let commentButton = document.getElementById("comment-button");
   
    nameInput.addEventListener("input", toggleCommentButton);
    commentInput.addEventListener("input", toggleCommentButton);

    function toggleCommentButton() {
        let nameValue = nameInput.value;
        let commentValue = commentInput.value;

        if (nameValue !== "" && commentValue !== "") {
            commentButton.removeAttribute("disabled");
        } else {
            commentButton.setAttribute("disabled", "disabled");
        }
    }
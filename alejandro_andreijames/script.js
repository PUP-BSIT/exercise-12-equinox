let userName = document.getElementById("name");
let userComment = document.getElementById("comment");
let commentButton = document.getElementById("comment_button");
   
userName.addEventListener("input", buttonActivate)
userComment.addEventListener("input", buttonActivate);

function buttonActivate() {
    let nameContentValue = userName.value;
    let commentContentValue = userComment.value;

    if (nameContentValue !== "" && commentContentValue !== "") {
         commentButton.removeAttribute("disabled");
    } else {
         commentButton.setAttribute("disabled", "disabled");
    }
}

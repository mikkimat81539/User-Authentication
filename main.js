const showImg = document.getElementById('show_icon')
const passwordInput = document.getElementById('password')

showImg.addEventListener("click", changingImg)

function changingImg() {
    if (showImg.src.includes('hide.png')) {
        showImg.src = "show.png";  // Change to a different image
        passwordInput.type = "text"
    } 
    
    else {
        showImg.src = "hide.png";  // Revert back to the first image
        passwordInput.type = "password"
    }
}
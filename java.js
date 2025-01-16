let loadingBar = document.getElementById('loading-bar');
let loadingContainer = document.getElementById('loading-container');
let userImage = document.getElementById('userImage');
let width = 0;

function increaseLoadingBar() {
    if (width >= 100) {
        clearInterval(loadingInterval);
        loadingContainer.style.display = 'none';
        document.body.style.backgroundColor = 'white';
        userImage.style.display = 'block';  // Correctly show the image
    } else {
        width += 2;
        loadingBar.style.width = width + '%';
    }
}

let loadingInterval = setInterval(increaseLoadingBar, 100);

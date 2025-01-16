let loadingBar = document.getElementById('loading-bar');
let width = 0;

function increaseLoadingBar() {
    if (width >= 100) {
        clearInterval(loadingInterval);
    } else {
        width += 1;
        loadingBar.style.width = width + '%';
    }
}

let loadingInterval = setInterval(increaseLoadingBar, 1);

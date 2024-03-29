// window.localStorage.setItem('darkMode', null);
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// check if dark mode is enabled
// if enabled => turn it off
// if disabled => turn it on

const enableDarkMode = () => {
    // adding class darkmode to the body
    document.body.classList.add('darkmode');
    // update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
    // update img src
    document.querySelector('#toggle-img').src = "./assets/images/darkmode-outlined.png";
}

const disableDarkMode = () => {
    // removing class darkmode from the body
    document.body.classList.remove('darkmode');
    // update darkMode in the localStorage
    localStorage.setItem('darkMode', null);
    // update img src
    document.querySelector('#toggle-img').src = "./assets/images/darkmode-filled.png";
}

// maintains previously chosen darkMode value after refresh
if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
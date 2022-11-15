let manu = document.querySelector('#mobile');
let nav = document.querySelector('.nav');
manu.addEventListener("click", () => {
    manu.classList.toggle('fa-times');
    nav.classList.toggle('active');
});
window.onscroll = () => {
    manu.classList.remove('fa-times');
    nav.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader() {
    document.querySelector('.loaders').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 2000);
}
window.onload = fadeOut();
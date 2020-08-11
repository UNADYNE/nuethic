let navLink;
document.addEventListener('DOMContentLoaded', (e) => {
    navLink = document.getElementsByClassName('nav-linm');
    let linkList = document.getElementsByClassName('nav-link');

    linkList.array.forEach(el => {
        el.addEventListener('mouseover', (evt) => {
            evt.target.classList.Add('active');
        });
    });    
});

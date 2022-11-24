let bars = document.getElementById('bars');
let navLinks = document.getElementById('navLinks');
let logoEl = document.getElementById('pageLogo');
let closeEl = document.getElementById('closeEl');
bars.addEventListener('click',function(){
    navLinks.classList.toggle('display-none');
    logoEl.classList.toggle('logo-bordercolor');
    bars.classList.toggle('display-none');
    closeEl.classList.toggle('display-none');
});
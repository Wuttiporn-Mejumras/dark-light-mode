const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
}
function darkMode(){
    toggleIcon.children[0].textContent="Dark mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
}
function lightMode(){
    toggleIcon.children[0].textContent="Ligth mode"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb(252 244 244 / 50%)';
}
switchToggle.addEventListener('change',switchMode);
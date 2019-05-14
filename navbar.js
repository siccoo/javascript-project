const navbarBtn = document.getElementsByClassName('navbar_btn');
const navbarLink = document.querySelector('navbar_links');

navbarBtn.addEventListener('click', function(){
    let value = navbarLink.classList.contains('navbar_collapse')

    if(value) {
        navbarLink.classList.remove('navbar_collapse');
        navbarLink.classList.remove('change');
    } else {
        navbarLink.classList.add('navbar_collapse');
        navbarLink.classList.add('change');
    }
})
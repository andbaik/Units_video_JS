document.querySelector("theme_toggle").addEventListener("clik", (event) =>{

    event.preventDefault();

    document.querySelector('body').classList.toggle('dark_theme');

    if (document.querySelector('body').classList.contains('dark_theme')) {
        event.target.textContent = 'Светлая тема';
    } else {
        event.target.textContent = 'Темная тема';
    }

});
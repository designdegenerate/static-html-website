const contentToggleBtns = document.querySelectorAll('.contentToggleBtn');

for (var i = contentToggleBtns.length - 1; i >= 0; i--) {

    const btn = contentToggleBtns[i]

    btn.addEventListener('click', function(event) {
        btn.nextElementSibling.classList.toggle('open');
    });
}
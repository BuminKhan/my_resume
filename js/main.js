document.querySelectorAll('a[href^="#"]').forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        const hedef = document.querySelector(el.getAttribute('href'));
        if (hedef) {
            window.scrollTo({ top: hedef.offsetTop - 70, behavior: 'smooth' });
        }
    };
});

const form = document.getElementById('contact-form');
if (form) {
    form.onsubmit = e => {
        e.preventDefault();
        const veri = Object.fromEntries(new FormData(form));
        console.log(veri);
        form.reset();
        alert('Mesajınız gönderildi!');
    };
}


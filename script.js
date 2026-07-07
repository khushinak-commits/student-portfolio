document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector('.btn.active');
    const contactBtn = document.querySelector('.btn:not(.active)');
    const togglebtn = document.querySelector('.togglebtn');
    const navlinks = document.querySelector('.navlinks');

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            console.log("CV download clicked");
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (togglebtn && navlinks) {
        togglebtn.addEventListener("click", function () {
            this.classList.toggle("click");
            navlinks.classList.toggle("open");
        });
    }

    if (typeof Typed !== 'undefined') {
        new Typed('.input', {
            strings: ["Frontend Developer", "Data Analysis", "UI/UX Designer"],
            typeSpeed: 70,
            backSpeed: 55,
            loop: true
        });
    }
});
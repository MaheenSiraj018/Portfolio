var typed=new Typed(".text",{
    strings:["Front-End Developer","Artist", "Web Developer",],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    backDelay:1000
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
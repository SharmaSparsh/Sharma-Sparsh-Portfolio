/*********************Toggle icon navbar****************************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*********************Scroll section ative link****************************/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                // navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                // document.querySelector('header nav a[href*="${id}"]').classList.add('active');

            });
        };
    });


    /*********************Sticky navbar****************************/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*********************Remove toggle icon and navbar****************************/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

    /*********************Scroll reveal****************************/
    ScrollReveal({
        distance:'80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


    /*********************Typed JS****************************/
    const typed =new Typed ('.multiple-text',{
        strings : ['Frontend Developer.', 'Java Developer.', 'UI/UX Designer.'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });


/*********************Toggle icon navbar****************************/

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active');
// };

// // /*********************Scroll section ative link****************************/
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY;
    
//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//         }
//     });

//     /*********************Sticky navbar****************************/
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     /*********************Remove toggle icon and navbar****************************/
//     // Optionally remove this part if you don’t need to hide the menu icon and navbar on scroll
//     // menuIcon.classList.remove('fa-xmark');
//     // navbar.classList.remove('active');
// };



// // let sections = document.querySelectorAll('section');
// // let navLinks = document.querySelectorAll('header nav a');

// // window.onscroll = () => {
// //     sections.forEach(sec => {
// //         let top = window.scrollY;
// //         let offset = sec.offsetTop - 150;
// //         let height = sec.offsetHeight;
// //         let id = sec.getAttribute('id');

// //         if (top >= offset && top < offset + height) {
// //             navLinks.forEach.apply(links => {
// //                 // navLinks.forEach(links => {
// //                 links.classList.remove('active');
// //                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
// //                 // document.querySelector('header nav a[href*="${id}"]').classList.add('active');

// //             });
// //         };
// //     });


// //     /*********************Sticky navbar****************************/

// //     let header = document.querySelector('header');
// //     header.classList.toggle('sticky', window.scrollY > 100);

// //     /*********************Remove toggle icon and navbar****************************/

// //     menuIcon.classList.remove('fa-xmark');
// //     navbar.classList.remove('active');
// // };

//     /*********************Scroll reveal****************************/
//     ScrollReveal({
//         distance: '80px',
//         duration: 2000,
//         delay: 200,
//     });
    
//     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
//     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
//     ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
//     ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    
//     // ScrollReveal({
//     //     distance:'80px',
//     //     duration: 2000,
//     //     delay: 200,
//     // });

//     // ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
//     // ScrollReveal().reveal('.home-img .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
//     // ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
//     // ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


//     /*********************Typed JS****************************/
//     const typed = new Typed('.multiple-text', {
//         strings: ['Frontend Developer', 'Java Developer', 'UI/UX Designer'],
//         typeSpeed: 70,
//         backSpeed: 70,
//         backDelay: 1000,
//         loop: true,
//     });
    
//     // const typed =new Typed ('.multiple-text',{
//     //     strings : ['Frontend Developer', 'Java Developer', 'UI/UX Designer'],
//     //     typeSpeed: 70,
//     //     backSpeed: 70,
//     //     backDelay: 1000,
//     //     loop: true,
//     // });

    
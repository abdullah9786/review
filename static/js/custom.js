    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        responsive: {
            0: {
                items: 3
            },
            900: {
                items: 9
            }
        }
    })
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        responsive: {
            0: {
                items: 3
            },
            900: {
                items: 11
            }
        }
    })



    document.getElementsByClassName('sec2')[0].querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });


        });
    });
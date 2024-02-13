function fetchDataJson(callback) {
    $.getJSON('/assets/json/data.json', function (data) {
        callback(data)
    });
}

function addHeroElement(data) {
    var heroes = data.hero;
    $.each(heroes, function (index, item) {
        var Element = `
        <div class="container-greet"><div><h1>${item.title}</h1></div><div><article style="text-align: justify;">${item.subtitle}</article></div><div class="container-greet-button"><a class="button" href="#">Menuju Aplikasi <img src="/assets/icons/arrow-open-right.svg" style="margin-left: 0.5rem; display: inline-block; width: 1rem; color: var(--main-color);" alt=""></a><a style="display: flex; align-items: center; " href="#"> <img src="/assets/icons/play-button.svg" style="margin-right: 0.5rem; display: inline-block; width: 3rem; color: var(--first-color);" alt=""> Apa itu Pustabooks?</a></div></div><div class="container-hero"><img src="/assets/img/Book-lover-bro.svg" alt=""></div>
          `;
        $('.greet .container-service').before(Element);
        console.log(hero);
    });
}

function addLayananElement(data) {
    var layanan = data.layanan;
    $.each(layanan, function (index, item) {
        var newElement = `
      <div class="item reveal"><img src="${item.logo}" alt="Logo"><h2>${item.judul}</h2><h3>${item.subjudul}</h3><a href="${item.linkRef}" title="${item.linkTitle}">${item.linkTitle}</a></div>
        `;
        $('.list-service').append(newElement);
        console.log(layanan);
    });
}

function addBukuPopulerElement(data) {
    var buku_populer = data.daftar_buku_populer;
    if (buku_populer.length > 9) {
        var randomIndices = [];
        while (randomIndices.length < 9) {
            var randomIndex = Math.floor(Math.random() * buku_populer.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }
        var buku_terpilih = randomIndices.map(index => buku_populer[index]);
    } else {
        var buku_terpilih = buku_populer;
    }
    $.each(buku_terpilih, function (index, item) {
        var newElement = `
        <div class="item scale_hover">
            <img src="${item.url_gambar}" alt="Logo">
            <h4>${item.judul}</h4>
            <a href="${item.link_buku}" title="Lihat">Baca</a>
        </div>
    `;
        $('.list-book').append(newElement);
    });
    $('.arrow-left').append('<svg fill="#0F1035" height="50px" width="50px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M18.7,20.3c0.4,0.4,0.4,1,0,1.4C18.5,21.9,18.3,22,18,22s-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L14.4,16L18.7,20.3z"/></svg>');
    $('.arrow-right').append('<svg fill="#0F1035" height="50px" width="50px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22 s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"/></svg>');
    $('.arrow-left').click(function () {
        $('.list-book').animate({
            scrollLeft: '-=250'
        }, 'slow');
    });
    $('.arrow-right').click(function () {
        $('.list-book').animate({
            scrollLeft: '+=250'
        }, 'slow');
    });
    console.log("buku executed")
}

function addAboutUsSection(data) {
    var about_us = data.about_us
    $.each(about_us, function (index, item) {
        var Element = `
      <div class="container container-section"><div class="section-title"><div class="button button-layanan"><h3>${item.title}</h3></div></div><div class="container-about_us"><article><span class="pustabooks-logo"><div class="logo_title">Pusta<span>books</span></div></span>${item.description}</article><aside><img src="${item.img_src}" alt="founder" class="founder_img"></aside></div></div>
        `;
        $('#about_us').append(Element);
        console.log(about_us)
    });
}

function changeFontSize(factor, element, property) {
    var viewportWidth = $(window).width();
    var scaleFactor = viewportWidth / 1440;
    if (property == 'font-size') {
        var rootFontSize = parseFloat($('html').css('font-size'));
        var fontSize = parseFloat(element.css(property));
        var newFontSize = rootFontSize * factor * scaleFactor;
        var remNewFontSize = newFontSize / rootFontSize
        element.css('font-size', remNewFontSize + 'rem');
        console.log(fontSize);
    }
    else if (property == 'width') {
        var newHeight = (scaleFactor * 10) + factor
        element.css(property, newHeight + '%')
    }
}

function checkWindowWidth() {
    if (window.matchMedia('(min-width: 992px) and (max-width: 1200px)').matches) {
        $('.header').css({ 'flex-direction': 'column', 'height': 'auto' });
        $('.header .container-navbar').css('justify-content', 'center');
        $('main .container-greet-button').css('font-size', '1rem');
        $('.header .navbar').css('width', '100%');
        $('.list-service .item').css({ 'flex': '0 0 40%', 'margin': '1.5rem' });
    } else {
        $('.header').css({ 'flex-direction': '' });
        $('.header .container-navbar').css('justify-content', '');
        $('.header .navbar').css('width', '');
        $('main .container-greet-button').css('font-size', '');
        $('.list-service .item').css({ 'flex': '', 'margin': '' })
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
        $('.menu').css('display', 'block');
        $('.header').addClass('mobile');
        $('.greet').addClass('mobile');
        $('.container-about_us').addClass('mobile');
        $('.footer').addClass('mobile');
    }
    else {
        $('.menu').css('display', 'none');
        $('.header').removeClass('mobile');
        $('.greet').removeClass('mobile');
        $('.container-about_us').removeClass('mobile');
        $('.footer').removeClass('mobile');
    }
}

// ================================================
// START HERE WERE FUNCTION HAS EVENT LISTENER GOES
// ================================================

function imgTooltip() {
    $('#about_us').on('mouseenter', '.founder_img', function () {
        $(this).css('cursor', 'pointer').attr('title', 'Foto Founder PustaBooks');
    }).on('mouseleave', '.founder_img', function () {
        $(this).css('cursor', 'auto').removeAttr('title');
    });
}

function menuNavbarMobileHandler() {
    $('.menu').click(function () {
        $(this).toggleClass('cancel');
        $('.header').toggleClass('active');

        if ($('.menu').hasClass('cancel')) {
            $('.menu').html('<svg fill="currentColor" height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165c90.982,0,165-74.019,165-165S255.982,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z"></path> <path d="M239.247,90.754c-5.857-5.858-15.355-5.858-21.213,0l-53.033,53.033l-53.033-53.033c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L143.788,165l-53.033,53.033c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.606-4.394l53.033-53.033l53.033,53.033 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L186.214,165 l53.033-53.033C245.105,106.109,245.105,96.612,239.247,90.754z"></path> </g> </g></svg>');

            $('.header.mobile nav>ul>a').addClass('animated');
        } else {
            $('.menu').html('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>');
            $('.header.mobile nav>ul>a').removeClass('animated');

        }

    });
}

function scrollHeaderSticky() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 99) {
            var header = $('.header');
            if (!header.hasClass('scrolled') && !header.hasClass('full') && $(this).scrollTop() > 99) {
                $('.header').css({ 'top': '-6rem', 'transition': 'none' });
                setTimeout(function () {
                    $('.header').addClass('scrolled full');
                }, 25);
                setTimeout(function () {
                    $('.header').css({ 'top': '', 'transition': 'all .6s ease' });
                }, 50);
            }
        }
        else {
            $('.header').removeClass('scrolled full');
        }
    })
}

function changeFontSizeFunction() {
    var targetFonts = $('.scale_font');
    var targetWidth = $('.scale_width');

    $(window).resize(function () {
        if (window.matchMedia('(min-width: 1200px) and (max-width: 1400px)').matches) {
            targetFonts.each(function () {
                changeFontSize(1.25, $(this), 'font-size');
            });
            targetWidth.each(function () {
                changeFontSize(80, $(this), 'width')
            })
        }
        else if (window.matchMedia('(min-width: 1400px)').matches) {
            targetFonts.each(function () {
                $(this).css('font-size', '1.25rem')
            });
            targetWidth.each(function () {
                $(this).css('width', '')
            })
        }
    });

}

function muncul_scroll_start() {
    muncul_scroll({ reset: true });
    muncul_scroll().reveal('section', {
        duration: 3000,
        origin: "top",
        distance: "3rem",
        easing: "cubic-bezier(0.5, 0, 0, 1)"
    });
}

function scroll_Reveal() {
    var revealPoint = 200;
    var revealElement = document.querySelectorAll(".reveal");
    for (var i = 0; i < revealElement.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = revealElement[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        revealElement[i].classList.add("revealOn");
      } else {
        revealElement[i].classList.remove("revealOn");
      }
    }
  }

// ================================================
// START HERE WERE FUNCTION HAS EVENT LISTENER START
// ================================================

function eventListenerRun() {
    imgTooltip();
    menuNavbarMobileHandler();
    changeFontSizeFunction();
    scrollHeaderSticky();
    $(window).resize(checkWindowWidth);
    window.addEventListener("scroll", scroll_Reveal);
}

// ================================================
// START HERE ALL FUNCTION RUNNING
// ================================================

$(document).ready(function () {
    fetchDataJson(function (data) {
        addHeroElement(data);
        addLayananElement(data);
        addBukuPopulerElement(data);
        addAboutUsSection(data);
        checkWindowWidth();
        scroll_Reveal();
        eventListenerRun();

    });
});
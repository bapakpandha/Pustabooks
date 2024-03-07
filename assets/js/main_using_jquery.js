// ================================================
// HOME HANDLER
// ================================================

function fetchDataJson(callback) {
    fetch('assets/json/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            if (error.message.includes('CORS')) {
                const fallbackData = { "hero": [{ "title": "Pentingnya Membaca Buku dan Menuntut Ilmu!", "subtitle": "Tau nggak? Membaca buku itu, bukan cuma nambah pengetahuan, tapi juga bikin otak stay on point dan ngurangin risiko Alzheimer. Jadi, jangan lupa sisihin waktu buat baca-baca di tengah rutinitas harian, karena itu investasi penting buat kesehatan otak dan pengetahuan kamu ke depannya! 📚✨" }], "layanan": [{ "logo": "assets/icons/layanan-article.svg", "judul": "Artikel", "subjudul": "Jelajahi Informasi Menarik Seputar Dunia Buku dan Literasi", "linkTitle": "Link Title 1", "linkRef": "#" }, { "logo": "assets/icons/layanan-upload.svg", "judul": "Unggah Buku", "subjudul": " Bagikan Karya Anda dengan Mengunggah Buku ke Pustabooks", "linkTitle": "Link Title 2", "linkRef": "#" }, { "logo": "assets/icons/layanan-books.svg", "judul": "Buku Cetak", "subjudul": "Temukan Koleksi Buku Cetak Terbaru dan Terpopuler", "linkTitle": "Link Title 3", "linkRef": "#" }, { "logo": "assets/icons/layanan-kemitraan.svg", "judul": "Kemitraan", "subjudul": "Bergabunglah dengan Kami untuk Membangun Kemitraan", "linkTitle": "Link Title 4", "linkRef": "#" }], "daftar_buku_populer": [{ "ID_books": "Pusta001", "judul": "Fur Immer Dein Ian", "url_gambar": "https://cdn.gramedia.com/uploads/items/img20220928_15154296.jpg", "sinopsis": "Pernahkah kamu merasa terbebani oleh kenyataan bahwa kamu harus menyembunyikan perasaanmu demi menjaga kedekatan sebagai teman? Itulah yang dirasakan Atika dan Damian. Meskipun mereka berada dalam jarak yang dekat, mereka terpaksa menahan perasaan cinta mereka agar tidak membuat suasana menjadi tidak nyaman. Meskipun mencoba untuk bersikap biasa, mereka menyadari bahwa setiap kata dan gerakan yang dilakukan oleh satu sama lain memiliki daya tarik yang kuat. Meskipun bertemu secara tak terduga, mereka menyadari bahwa mereka berdua berharap untuk sesuatu yang lebih. Namun, keduanya merasa sulit untuk membuka hati mereka sepenuhnya. Ketika mereka berada di bawah langit yang dingin di Munchen, pertanyaan tentang kemungkinan menyatukan hati mereka menjadi semakin tidak pasti.", "link_buku": "#book1" }, { "ID_books": "Pusta002", "judul": "Majnun", "url_gambar": "https://cdn.gramedia.com/uploads/items/img20220924_13195778.jpg", "sinopsis": "Majnun merupakan sebuah kisah yang mencakup tema cinta, persahabatan, serta sebuah pengingat akan sejarah yang sering dilupakan. Novel ini juga mengangkat isu-isu tentang kebebasan dan ketidakadilan. Cerita ini bergerak di antara bayang-bayang kenangan dan luka masa lalu para karakternya, yang terjalin dengan sejarah negara yang pernah diwarnai oleh kolonialisme, represi politik, dan konflik agama. Dalam novel ini, Anton Kurnia mengajak pembaca untuk menyelami dunia kegelapan dan kegilaan cinta, yang disertai oleh simfoni musik Carmina Burana yang menggambarkan tragedi kemanusiaan. Kisah Majnun membawa kita ke dalam aliran air cinta yang tidak terkendali. Anton Kurnia secara lincah memadukan dua cerita cinta legendaris, Laila-Majnun dan Yusuf-Zulaikha, dengan konteks zaman sekarang. Namun, Majnun bukan hanya tentang cinta. Anton juga menyelipkan mitos dari budaya Sunda-Jawa dan berbagai isu sosial-politik, menciptakan permainan intertekstual yang menarik bagi pembaca.", "link_buku": "#book2" }, { "ID_books": "Pusta003", "judul": "Where Stories Begin", "url_gambar": "https://cdn.gramedia.com/uploads/items/9786230035463_cover_where_stories.jpg", "sinopsis": "Where Stories Begin adalah sebuah antologi cerpen yang disusun oleh Redaksi Novel Elex Media dari hasil perlombaan yang diadakan oleh Wacaku. Antologi ini memuat cerita pendek dari sepuluh penulis yang terpilih dari perlombaan yang diselenggarakan pada tahun 2022. Karya-karya dari Stanza Alquisha, Maria Perdana, Robin Wijaya, Arata Kim, Kanigara, Meera, Nureesh Vhalega, Ratifa Mazari, Tian Topandi, dan Zaidatul Uyun Akrami menghadirkan cerita-cerita yang menunjukkan bahwa cinta tidak selalu membawa kebahagiaan. Mereka menggambarkan bahwa cinta tidak selalu seindah dan sesederhana yang dibayangkan, tetapi juga bisa penuh dengan penderitaan dan kekecewaan. Karena itulah cerita-cerita ini merupakan awal dari segala cerita...", "link_buku": "#book3" }, { "ID_books": "Pusta004", "judul": "Sagaras", "url_gambar": "https://cdn.gramedia.com/uploads/items/sagaras.jpeg", "sinopsis": "Sagaras adalah buku ke-13 dari serial Bumi yang mengungkap misteri orang tua Ali. Ali telah berusaha bertahun-tahun untuk mengungkap misteri tersebut. Bersama sahabatnya, Paib dan Seli, mereka tidak akan menyerah. Namun, misteri itu semakin rumit ketika mereka dihadapkan pada tembok kokoh SagaraSe. Kini, mereka harus bertarung melawan Ksatria Sagaras dalam lima ronde hidup-mati. Tetapi, kebahagiaan menanti di halaman terakhir buku ini.", "link_buku": "#book4" }, { "ID_books": "Pusta005", "judul": "Layangan Putus", "url_gambar": "https://cdn.gramedia.com/uploads/items/9786020729091_AYANGAN_PUTUS_dpn.jpg", "sinopsis": "Layangan Putus mengisahkan perjalanan Kinan, seorang gadis remaja polos dari desa, yang menemukan cinta di kota besar yang berbeda dari tempat asalnya. Kehidupan Kinan berubah setelah bertemu dengan Aris, seorang lelaki tangguh yang memperkenalkannya pada dunia yang baru. Meskipun awalnya bermimpi untuk menyelesaikan pendidikannya tepat waktu, Kinan menemukan dirinya terjebak dalam ikatan pernikahan dengan Aris. Meskipun awalnya setia mendampingi Aris dalam membangun mimpi mereka, Kinan harus menghadapi pilihan sulit yang mengubah pandangannya tentang kehidupan.", "link_buku": "#book5" }, { "ID_books": "Pusta006", "judul": "Atomic Habits", "url_gambar": "https://jamesclear.com/wp-content/uploads/2023/05/atomic-habits-dots.png", "sinopsis": "Atomic Habits adalah buku karya James Clear yang mendapat banyak rekomendasi dari pembaca. Buku ini membahas tentang kebiasaan-kebiasaan kecil yang berdampak besar dalam kehidupan seseorang. James Clear memaparkan pandangannya tentang perubahan nyata yang berasal dari keputusan-keputusan kecil yang kita ambil setiap hari. Buku ini memberikan panduan praktis untuk membangun dan mempertahankan kebiasaan baik serta mengubah kebiasaan buruk. Dengan kisah-kisah inspiratif dan tips sederhana, Atomic Habits menjadi solusi bagi mereka yang ingin mengubah hidup menjadi lebih positif dan bermakna.", "link_buku": "#book6" }], "about_us": [{ "title": "Tentang Kami", "img_src": "assets/img/founder.png", "description": " didirikan oleh Ahmad Rifqi Maulana atau yang akrab disapa Mas Rifqi, merupakan sebuah platform daring yang bertujuan untuk memperluas akses literasi bagi semua orang. Berawal dari semangatnya yang tulus untuk menyediakan akses mudah dan gratis ke buku elektronik berkualitas, Mas Rifqi ingin membantu mengatasi kendala akses terhadap bahan bacaan yang berkualitas, terutama bagi mereka yang kurang mampu secara finansial. Dengan komitmennya untuk mendukung literasi dan pendidikan, Pustabooks berusaha menjadi sumber bacaan yang dapat dinikmati oleh semua kalangan, tanpa memandang latar belakang sosial atau finansial. <br><br>Pustabooks bukan hanya sekadar sebuah platform, tetapi juga sebuah komitmen untuk membuka pintu literasi bagi semua orang. Dengan semangat yang menggebu-gebu, Ahmad Rifqi Maulana dan tim Pustabooks bergerak maju, menjadikan literasi sebagai hak yang dapat dinikmati oleh semua kalangan." }] };
                callback(fallbackData);
            }
        });
}


function getHeader() {
    if (localStorage.getItem("loginInfo") === null) {
        var signInButton = `<a class="button" href="assets/pages/login.html"><li>Sign In</li></a>`
    } else {
        var loginInformationData = JSON.parse(localStorage.getItem("loginInfo"));
        var username = loginInformationData.username;
        var signInButton = `<a class="button" href="assets/pages/app.html"><li style=" display: flex; align-items: center; column-gap: 0.5rem; "><svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="1em" height="1em" viewBox="796 796 200 200" enable-background="new 796 796 200 200" xml:space="preserve"> <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z"/> </svg><span>${username}</span></li></a>`
    }
    var headerContent = `<div class="container-logo-header tautan" data-tautan="index.html"><img class="logo" src="assets/img/icon.png" alt=""><div class="logo_title">Pusta<span>books</span></div></div><div class="container-navbar"><nav class="navbar scale_font scale_width"><ul><a href="index.html"><li>Beranda</li></a><a href="DaftarBuku"><li>Daftar Buku</li></a><a href="#Kontak"><li>Kontak</li></a><a href="#TentangKami"><li>Tentang Kami</li></a>${signInButton}</ul></nav></div><div class="menu"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
`;
    var header = document.querySelector('header');
    header.insertAdjacentHTML('beforeend', headerContent);
}

function getFooter() {
    var footerContent = `<div class="container full footer"> <div class="container-alamat"> <div class="container-footer-logo"> <img src="assets/img/icon.png" alt="logo"> <h3 class="logo_title">Pusta<span>Books</span></h3> </div> <div class="container-content-alamat"> <div> <h4>Jl. Kaliurang - Yogyakarta - Indonesia</h4> </div> <div> <h4>Telp. 0822 - 8125 - 7152</h4> </div> <div> <h4>customerservice@pustabooks.com</h4> </div> <div class="sosmed"> <a href="https://instagram.com/pustabooks" target="_blank" rel="noopener noreferrer"> <div><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg></div> </a><a href="https://facebook.com/pustabooks" target="_blank" aria-label="facebook" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg></div> </a><a href="https://twitter.com/pustabooks" target="_blank" aria-label="twitter" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"> </path> </svg></div> </a><a href="https://youtube.com/pustabooks" target="_blank" aria-label="youtube" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"> </path> <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon> </svg></div> </a> </div> </div> </div> <div class="container-content-footer"> <div> <h3>Tentang Kami</h3> <a href=""> <div> <h4>Profil</h4> </div> </a> <a href=""> <div> <h4>Informasi</h4> </div> </a> <a href=""> <div> <h4>Kontak</h4> </div> </a> </div> <div> <h3>Layanan</h3> <a href=""> <div> <h4>Berita</h4> </div> </a> <a href=""> <div> <h4>Forum</h4> </div> </a> <a href=""> <div> <h4>Buku</h4> </div> </a> <a href=""> <div> <h4>Kemitraan</h4> </div> </a> </div> <div> <h3>Subscribe</h3> <a href=""> <div> <h4>Dapatkan Informasi terbaru dari kami</h4> </div> </a> <div class="subscribe-input"><input placeholder="Masukkan Email Anda" type="email"> <a href=""> <div><svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.0868 16.2626L7.04411 17.9359C6.92865 17.9552 6.8203 18.0045 6.72995 18.0789C6.63961 18.1534 6.57045 18.2503 6.52944 18.3599L3.06677 27.6372C2.73611 28.4906 3.62811 29.3039 4.44677 28.8932L28.4468 16.8932C28.6127 16.8101 28.7521 16.6824 28.8496 16.5246C28.9471 16.3667 28.9987 16.1848 28.9987 15.9992C28.9987 15.8137 28.9471 15.6318 28.8496 15.4739C28.7521 15.316 28.6127 15.1884 28.4468 15.1052L4.44677 3.10524C3.62811 2.6959 2.73611 3.50924 3.06677 4.36124L6.53077 13.6386C6.57178 13.7482 6.64094 13.8451 6.73129 13.9195C6.82163 13.994 6.92998 14.0433 7.04544 14.0626L17.0881 15.7359C17.1508 15.7459 17.2078 15.7779 17.249 15.8262C17.2901 15.8744 17.3127 15.9358 17.3127 15.9992C17.3127 16.0627 17.2901 16.124 17.249 16.1723C17.2078 16.2206 17.1508 16.2526 17.0881 16.2626H17.0868Z' fill='white' /> </svg> </div> </a> </div> </div> </div></div>`;
    var footer = document.querySelector('footer');
    footer.insertAdjacentHTML('beforeend', footerContent);
}

function addHeroElement(data) {
    var heroes = data.hero;
    $.each(heroes, function (index, item) {
        var Element = `
        <div class="container-greet"><div><h1>${item.title}</h1></div><div><article style="text-align: justify;">${item.subtitle}</article></div><div class="container-greet-button"><a class="button" href="assets/pages/app.html">Menuju Aplikasi <img src="assets/icons/arrow-open-right.svg" style="margin-left: 0.5rem; display: inline-block; width: 1rem; color: var(--main-color);" alt=""></a><a style="display: flex; align-items: center; " href="#"> <img src="assets/icons/play-button.svg" style="margin-right: 0.5rem; display: inline-block; width: 3rem; color: var(--first-color);" alt=""> Apa itu Pustabooks?</a></div></div><div class="container-hero"><img src="assets/img/Book-lover-bro.svg" alt=""></div>
          `;
        $('.greet .container-service').before(Element);
        // console.log(hero);
    });
}

function addLayananElement(data) {
    var layanan = data.layanan;
    $.each(layanan, function (index, item) {
        var newElement = `
      <div class="item reveal"><img src="${item.logo}" alt="Logo"><h2>${item.judul}</h2><h3>${item.subjudul}</h3><a href="${item.linkRef}" title="${item.linkTitle}">${item.linkTitle}</a></div>
        `;
        $('.list-service').append(newElement);
        // console.log(layanan);
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
    // console.log("buku executed")
}

function addAboutUsSection(data) {
    var about_us = data.about_us
    $.each(about_us, function (index, item) {
        var Element = `
      <div class="container container-section"><div class="section-title"><div class="button button-layanan"><h3>${item.title}</h3></div></div><div class="container-about_us"><article><span class="pustabooks-logo"><div class="logo_title">Pusta<span>books</span></div></span>${item.description}</article><aside><img src="${item.img_src}" alt="founder" class="founder_img"></aside></div></div>
        `;
        $('#about_us').append(Element);
        // console.log(about_us)
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
        // console.log(fontSize);
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
        $('.container-login .login-form').css({ 'margin': '5rem 0' })
    } else {
        $('.header').css({ 'flex-direction': '' });
        $('.header .container-navbar').css('justify-content', '');
        $('.header .navbar').css('width', '');
        $('main .container-greet-button').css('font-size', '');
        $('.list-service .item').css({ 'flex': '', 'margin': '' })
        $('.container-login .login-form').css({ 'margin': '' })
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
        $('.menu').css('display', 'block');
        $('.header').addClass('mobile');
        $('.greet').addClass('mobile');
        $('.container-about_us').addClass('mobile');
        $('.footer').addClass('mobile');
        $('.container-login').addClass('mobile');
        $('.container-login .navigation>a>.content_text').text('');
    }
    else {
        $('.menu').css('display', 'none');
        $('.header').removeClass('mobile');
        $('.greet').removeClass('mobile');
        $('.container-about_us').removeClass('mobile');
        $('.footer').removeClass('mobile');
        $('.container-login').removeClass('mobile');
        $('.container-login .navigation>a>.content_text').text('Kembali Ke Beranda');
    }
}

function generalConfirmDialogBuilder() {
    function ConfirmBox(element, params) {
        this.element = element;
        this.params = params || {};
        this.params.ok = params.ok || function () { };
        this.params.cancel = params.cancel || function () { };

        this.init();
    }

    ConfirmBox.prototype = {
        init: function () {
            this.instance = null;
            this.create();
            this.layout();
            this.actions();
        },
        create: function () {
            if (document.querySelector("#confirm-wrapper") === null) {
                var wrapper = document.createElement("div");
                wrapper.id = "confirm-wrapper";
                var html = "<div id='confirm-box'><h2 id='confirm-header-title'></h2><h2 id='confirm-header'></h2>";
                html += "<div id='confirm-buttons'><button id='confirm-ok'>OK</button><button type='button' id='confirm-cancel'>Batal</button></div>";
                html += "</div>";

                wrapper.innerHTML = html;
                document.body.appendChild(wrapper);
            }

            this.instance = document.querySelector("#confirm-wrapper");
        },
        layout: function () {
            var wrapper = this.instance;
            var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            wrapper.style.height = winHeight + "px";
        },
        show: function (element) {
            element.style.display = "flex";
            element.style.opacity = 1;
        },
        hide: function (element) {
            element.style.opacity = 0;
            setTimeout(function () {
                element.remove();
            }, 1000);
        },
        success: function (element) {
            var element_success = "<div id='confirm-box'><svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52' style='margin: 1rem;'><circle class='checkmark__circle2' cx='26' cy='26' r='30' fill='none'></circle><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'></circle><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'></path></svg><h2 id='confirm-header-title' style='font-size: 1.5rem;margin: 1rem;'>Sukses</h2><div id='confirm-buttons'><button id='confirm-ok'>OK</button></div></div>";
            element.innerHTML = element_success;
            element.style.opacity = 1;
            setTimeout(function () {
                element.remove();
            }, 2000);
        },
        actions: function () {
            var self = this;
            console.log("actions button")
            self.instance.querySelector("#confirm-header").innerHTML = self.element.dataset.question;
            self.instance.querySelector("#confirm-header-title").innerHTML = self.element.dataset.tooltip;
            self.show(self.instance);

            self.instance.querySelector("#confirm-ok").
                addEventListener("click", function () {
                    self.success(self.instance);
                    setTimeout(function () {
                        self.params.ok();
                    }, 2000);
                }, false);

            self.instance.querySelector("#confirm-cancel").
                addEventListener("click", function () {
                    self.hide(self.instance);
                    setTimeout(function () {
                        self.params.cancel();
                    }, 1000);
                }, false);
        }
    }

    return ConfirmBox;
}

function SignInFunction() {
    if (localStorage.getItem('loginInfo') === null) {
        let loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let username = document.getElementById("username");
            let password = document.getElementById("password");

            if (username.value == "" || password.value == "") {
                alert("Masukkan Username atau Password");
            } else if (username.value.length >= 10) {
                alert("Maksimal username 8 karakter");
            } else {
                alert("Berhasil Log in!");
                var IsSignedIn = true;
                var loginInformation = { "isSignedIn": IsSignedIn, "username": username.value, "password": password.value };
                localStorage.setItem('loginInfo', JSON.stringify(loginInformation));
                window.location.reload();
            }
        });
    }

}

// ================================================
// BOOK HANDLER
// ================================================

// let book_data_json;

function fetchBookData(callback) {
    $.getJSON('assets/json/book_data.json', function (data) {
        // book_data_json = data;
        callback(data);
    });
    console.log("fetchBookData dieksekusi");
}

function writeBookData(data) {
    const currentActiveElement = document.querySelector('main .rak_buku.tabs div.active');
    const tabContent = currentActiveElement.textContent.trim();
    var element_books = "";
    var button_tambahkan = `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    var button_markAsRead = `<svg fill="#00000" width="1em" height="1em" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0M854.344 1157.975 583.059 886.69l-79.85 79.85 351.135 351.133L1454.4 717.617l-79.85-79.85-520.206 520.208Z" fill-rule="evenodd"/></svg>`
    var button_takeFromBookshelf = `<svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"> <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path> </svg>`
    switch (tabContent) {
        case 'Eksplor':
            var books = data.main;
            var title_tab = "Cari Buku Yang tersedia";
            var tombol_eksekusi = button_tambahkan;
            var class_of_tombol_eksekusi = "button-puttobookshelf";
            var data_tooltip = "Tambahkan ke Rak Buku";
            var data_question = "Apakah anda yakin ingin menambahkan buku ";
            var data_question2 = " ke dalam Rak Buku?";
            break;
        case 'Sedang dibaca':
            var books = data.main.filter(function (book) {
                return book.isInBookshelf === true && book.isComplete === false;
            });
            var title_tab = "Buku Yang Sedang Dibaca";
            var tombol_eksekusi = button_markAsRead;
            var class_of_tombol_eksekusi = "button-putToComplete"
            var data_tooltip = "Tandai Sudah Selesai Dibaca";
            var data_question = "Apakah anda yakin ingin menandai buku ";
            var data_question2 = " sudah selesai dibaca?";
            break;
        case 'Selesai dibaca':
            var books = data.main.filter(function (book) {
                return book.isComplete === true && book.isInBookshelf === true;
            });
            var title_tab = "Buku Yang Selesai Dibaca";
            var tombol_eksekusi = button_takeFromBookshelf;
            var class_of_tombol_eksekusi = "button-takeFromBookshelf"
            var data_tooltip = "Hapus dari Rak Buku";
            var data_question = "Apakah anda yakin ingin menghapus buku ";
            var data_question2 = " dari Rak Buku?";
            break;
        case 'Riwayat':
            var books = data.main.filter(function (book) {
                return book.isComplete === true && book.isInBookshelf === false;
            });
            var title_tab = "Riwayat Buku Yang DIbaca";
            var tombol_eksekusi = button_takeFromBookshelf;
            var class_of_tombol_eksekusi = "button-markAsUnread"
            var data_tooltip = "Hapus dari daftar Riwayat";
            var data_question = "Apakah anda yakin ingin menghapus buku ";
            var data_question2 = " dari daftar riwayat?";
            break;
        default:
            var books = data.main;
            var title_tab = "Daftar Buku yang Tersedia";
            break;
    }
    $.each(books, function (index, item) {
        var element_book = `<div class="item" data-id="${item.id}"> <div><img src="${item.link_cover}" alt=""></div><h3>${item.title}</h3> <h5>${item.author}</h5> <div> <ul class="">
        <li style="width: 33.3333%;" class="${class_of_tombol_eksekusi} tooltip confirm" data-id="${item.id}" data-tooltip="${data_tooltip}" data-position="top" data-question="${data_question} ${item.title} ${data_question2}"><span><span role="img" aria-label="delete" tabindex="-1" class="">${tombol_eksekusi}</span></span></li>
        <li style="width: 33.3333%;"><span><span role="img" aria-label="retweet" tabindex="-1" class=""><svg viewBox="0 0 1024 1024" focusable="false" data-icon="retweet" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0011.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 00-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 00-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"></path></svg></span></span></li>
        <li style="width: 33.3333%;"><span><span role="img" aria-label="share-alt" tabindex="-1" class=""><svg viewBox="64 64 896 896" focusable="false" data-icon="share-alt" width="1em" height="1em" fill="currentColor" aria-hidden="true"> <path d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"> </path></svg></span></span></li>
        </ul></div></div>
        `;
        element_books += element_book;
    });
    var element = `<div class="container"> <div class="title"> <h2>${title_tab}</h2> </div> <div class="content"> ${element_books} </div> </div> `;
    $('.isi_buku').html(element);
    console.log("writeBookData executed")
}

function writeBookDataExec() {
    console.log("writeBookDataExec dieksekusi");
    GeneralLocalStorageHandler();
    if (localStorage.getItem('book_data') === null) {
        console.log('Local storage dengan key "book_data" belum ada.');
        fetchBookData(function (data) {
            writeBookData(data);
            GeneralLocalStorageHandler.saveDataToStorage(data);
        });
        // GeneralLocalStorageHandler.saveDataToStorage(book_data_json);
    } else {
        console.log('Local storage dengan key "book_data" sudah ada.');
        var jsonDataString = GeneralLocalStorageHandler.loadDataFromStorage();
        // book_data_json = jsonDataString;
        writeBookData(jsonDataString);
    }

    GeneralButtonBookHandler();
}

// ================================================
// BOOK HANDLER LOCAL STORAGE
// ================================================

function GeneralLocalStorageHandler() {
    console.log("GeneralLocalStorageExecuted")
    function saveDataToStorage(data) {
        var jsonDataString = JSON.stringify(data);
        localStorage.setItem('book_data', jsonDataString);
        // book_data_json = data;
        console.log("saveDataToStorage: jsonDataString Berhasil Disimpan");
    }

    function loadDataFromStorage() {
        var jsonDataString = JSON.parse(localStorage.getItem('book_data')) || {};
        console.log(jsonDataString + " loaded")
        return jsonDataString;
    }

    function putToBookshelf(book_id) {
        // ubah isInBookshelf jadi True
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isInBookshelf === false) {
            book.isInBookshelf = true;
            saveDataToStorage(jsonDataString);
            console.log('Status isInBookshelf dari buku dengan ID ' + book_id + ' berhasil diubah menjadi true.');
        } else {
            console.error('Buku dengan ID ' + book_id + ' tidak ditemukan.');
        }
        writeBookDataExec();
    }

    function putToComplete(book_id) {
        // ubah isComplete jadi True
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isComplete === false) {
            book.isComplete = true;
            saveDataToStorage(jsonDataString);
            console.log('Status isComplete dari buku dengan ID ' + book_id + ' berhasil diubah menjadi true.');
        } else {
            console.error('Buku dengan ID ' + book_id + ' tidak ditemukan.');
        }
        writeBookDataExec();
    }

    function takeFromBookShelf(book_id) {
        // ubah isInBookshelf jadi False
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isInBookshelf === true) {
            book.isInBookshelf = false;
            saveDataToStorage(jsonDataString);
            console.log('Status isInBookshelf dari buku dengan ID ' + book_id + ' berhasil diubah menjadi false.');
        } else {
            console.error('Buku dengan ID ' + book_id + ' tidak ditemukan.');
        }
        writeBookDataExec();
    }

    function markAsUnread(book_id) {
        // ubah isComplete jadi False
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isComplete === true) {
            book.isComplete = false;
            saveDataToStorage(jsonDataString);
            console.log('Status isComplete dari buku dengan ID ' + book_id + ' berhasil diubah menjadi true.');
        } else {
            console.error('Buku dengan ID ' + book_id + ' tidak ditemukan.');
        }
        writeBookDataExec();
    }

    GeneralLocalStorageHandler.loadDataFromStorage = loadDataFromStorage;
    GeneralLocalStorageHandler.putToBookshelf = putToBookshelf;
    GeneralLocalStorageHandler.saveDataToStorage = saveDataToStorage;
    GeneralLocalStorageHandler.putToComplete = putToComplete;
    GeneralLocalStorageHandler.takeFromBookShelf = takeFromBookShelf;
    GeneralLocalStorageHandler.markAsUnread = markAsUnread;
}

function GeneralButtonBookHandler() {
    console.log("generalButtonHandler dieksekusi")
    var ConfirmBox = generalConfirmDialogBuilder();
    function buttonPutToBookshelf() {
        var parentElements = document.querySelectorAll('.button-puttobookshelf');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                console.log('ok')
                                GeneralLocalStorageHandler.putToBookshelf(book_id);
                            },
                            cancel: function () {
                                console.log('cancel')
                            }
                        });
                        console.log("tombol tambah ditekan" + parentElement + " ID: " + book_id);
                    } else {
                        console.log("tombol selain tambah ditekan" + event.target.className)
                    }
                });
            });
        } else {
            console.log("parentElement putToBookshelf kosong")
        }
    }
    function buttonPutToComplete() {
        var parentElements = document.querySelectorAll('.button-putToComplete');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.putToComplete(book_id);
                            },
                            cancel: function () {
                                console.log('cancel')
                            }
                        });
                        console.log("tombol markAsRead ditekan" + parentElement + " ID: " + book_id);
                    } else {
                        console.log("tombol selain markAsRead ditekan" + event.target.className)
                    }
                });
            });
        } else {
            console.log("parentElement putToComplete kosong")
        }
    }
    function buttonTakeFromBookshelf() {
        var parentElements = document.querySelectorAll('.button-takeFromBookshelf');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.takeFromBookShelf(book_id);
                            },
                            cancel: function () {
                            }
                        });
                        console.log("tombol takeFromBookshelf ditekan" + parentElement + " ID: " + book_id);
                    } else {
                        console.log("tombol selain takeFromBookshelf ditekan" + event.target.className)
                    }
                });
            });
        } else {
            console.log("parentElement takeFromBookshelf kosong")
        }
    }
    function buttonMarkAsUnread() {
        var parentElements = document.querySelectorAll('.button-markAsUnread');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.markAsUnread(book_id);
                            },
                            cancel: function () {
                            }
                        });
                        console.log("tombol markAsUnread ditekan" + parentElement + " ID: " + book_id);
                    } else {
                        console.log("tombol selain markAsUnread ditekan" + event.target.className)
                    }
                });
            });
        } else {
            console.log("parentElement markAsUnread kosong")
        }
    }
    buttonPutToBookshelf();
    buttonPutToComplete();
    buttonTakeFromBookshelf();
    buttonMarkAsUnread();
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
    var revealPoint = 150;
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

function appHtmlTabsHandler(e) {
    if (e.target.classList.contains('tabs')) {
        return;
    }

    const activeElement = document.querySelector('main .rak_buku.tabs div.active');
    if (activeElement !== null) {
        activeElement.classList.remove('active');
    }

    e.target.classList.add('active');
    writeBookDataExec();
    GeneralButtonBookHandler();
}

function formGroupLabelHandler() {
    console.log("formGroupLabelHandler executed");
    document.querySelectorAll('.form-control').forEach(function (input) {
        input.addEventListener('input', function () {
            var field = this.closest('.form-group');
            if (this.value) {
                field.classList.add('field--not-empty');
            } else {
                field.classList.remove('field--not-empty');
            }
        });
    });
}

// ================================================
// START HERE WERE FUNCTION HAS EVENT LISTENER START
// ================================================

function eventListenerRun() {
    console.log("eventListenerRun executed");
    imgTooltip();
    menuNavbarMobileHandler();
    changeFontSizeFunction();
    scrollHeaderSticky();
    $(window).resize(checkWindowWidth);
    window.addEventListener("scroll", scroll_Reveal);
    routingHandler();
}

// ================================================
// HOME HANDLER
// ================================================

function homeHandler() {
    console.log("homeHandler executed")
    fetchDataJson(function (data) {
        getHeader();
        getFooter();
        addHeroElement(data);
        addLayananElement(data);
        addBukuPopulerElement(data);
        addAboutUsSection(data);
        checkWindowWidth();
        scroll_Reveal();
        eventListenerRun();
    });
}

// ================================================
// APP HANDLER
// ================================================

function appHandler() {
    getHeader();
    getFooter();
    writeBookDataExec();
    checkWindowWidth();
    scroll_Reveal();
    eventListenerRun();
}

// ================================================
// LOGIN HANDLER
// ================================================

function loginHandler() {
    console.log("loginHandler executed")
    formGroupLabelHandler();
    SignInFunction();
    checkWindowWidth();
    scroll_Reveal();
    eventListenerRun();
}

// ================================================
// ROUTING HANDLER
// ================================================
function routingHandler() {

    function handleLinkClick(event) {
        event.preventDefault();
        var element_a = event.target.closest('a');
        if (element_a) {
            var url = element_a.getAttribute("href");
        } else {
            var element_tautan = event.target.closest('.tautan');
            var url = element_tautan.getAttribute("data-tautan");
        }
        // console.log(url);
        // console.log(event.target + "TIPE " + typeof (event));
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // console.log(html);
                var newDocument = createNewDocument(html);
                replaceBodyDocument(newDocument);
                console.log("replaced")
                // cloneHead();
                reloadScripts(newDocument);
            })
            .catch(error => console.error('Error loading content:', error));
    }

    function createNewDocument(content) {
        var newBody = document.createElement('body');
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const bodyContent = doc.body.innerHTML;
        newBody.innerHTML = bodyContent;
        return newBody;
    }

    function cloneHead() {
        var currentHead = document.head;
        var newHead = document.createElement('head');
        for (var i = 0; i < currentHead.children.length; i++) {
            var child = currentHead.children[i];
            var newChild = child.cloneNode(true);
            newHead.appendChild(newChild);
        }
        // console.log(typeof(newHead));
        // console.log(newHead);

        return newHead;
    }

    function loadExistingDocumentContent(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }


    function reloadScripts(new_Body) {
        var originalScripts = new_Body.querySelectorAll('script');
        originalScripts.forEach(function (originalScript) {

            var newScript = document.createElement('script');
            if (originalScript.src) {
                newScript.src = originalScript.src;
            } else {
                newScript.innerHTML = originalScript.innerHTML;
            }
            originalScript.remove();
            document.body.appendChild(newScript);
            // return newScript;
        });
    }

    function replaceBodyDocument(html) {
        console.log(typeof (html));
        console.log(html);
        var oldBody = document.getElementsByTagName('body')[0];
        oldBody.replaceWith(html);
    }

    document.querySelectorAll('a , .tautan').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}
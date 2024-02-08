$(window).resize(function () {
  if (window.matchMedia('(max-width: 1200px)').matches) {
    $(".header").css({ "backgroundColor": "black", "color": "white" });
  }
  else {
    $(".header").css({ "backgroundColor": "", "color": "" });
  }
});

$(document).ready(function () {
  // Handle JSON data
  $.getJSON('/assets/json/data.json', function (data) {

    // START - Handle fetch layanan JSON
    var layanan = data.layanan;
    $.each(layanan, function (index, item) {
      var newElement = `
          <div class="item">
            <img src="${item.logo}" alt="Logo">
            <h2>${item.judul}</h2>
            <h3>${item.subjudul}</h3>
            <a href="${item.linkRef}" title="${item.linkTitle}">${item.linkTitle}</a>
          </div>
        `;
      $('.list-service').append(newElement);
    });
    // FINISH - Handle fetch layanan JSON

    // START - Handle fetch buku populer JSON
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
            <h2>${item.judul}</h2>
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
    // FINISH - Handle fetch buku populer JSON

    // START - Animation Background
    var elements = '<style>.area { background: #f9d8e18f; background: -webkit-linear-gradient(to left, #da3a53, #f9d8e18f); width: 100%; height: 100vh; z-index: -2; position: fixed; } .circles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; } .circles li { position: absolute; display: block; list-style: none; width: 20px; height: 20px; background: rgb(225 7 7 / 20%); animation: animate 25s linear infinite; bottom: -150px; } .circles li:nth-child(1) { left: 25%; width: 80px; height: 80px; animation-delay: 0s; } .circles li:nth-child(2) { left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; } .circles li:nth-child(3) { left: 70%; width: 20px; height: 20px; animation-delay: 4s; } .circles li:nth-child(4) { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; } .circles li:nth-child(5) { left: 65%; width: 20px; height: 20px; animation-delay: 0s; } .circles li:nth-child(6) { left: 75%; width: 110px; height: 110px; animation-delay: 3s; } .circles li:nth-child(7) { left: 35%; width: 150px; height: 150px; animation-delay: 7s; } .circles li:nth-child(8) { left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; } .circles li:nth-child(9) { left: 20%; width: 15px; height: 15px; animation-delay: 2s; animation-duration: 35s; } .circles li:nth-child(10) { left: 85%; width: 150px; height: 150px; animation-delay: 0s; animation-duration: 11s; } @keyframes animate { 0%{ transform: translateY(0) rotate(0deg); opacity: 1; border-radius: 0; } 100%{ transform: translateY(-1000px) rotate(720deg); opacity: 0; border-radius: 50%; } }</style>';
    elements += '<div class="area"><ul class="circles">';
    for (var i = 0; i < 10; i++) elements += '<li></li>';
    elements += '</ul></div>';
    $('body').append(elements);
    // FINISH - Animation Background
  });
});
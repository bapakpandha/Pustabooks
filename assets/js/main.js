$(window).resize(function () {
  if (window.matchMedia('(max-width: 1200px)').matches) {
    $(".header").css({ "backgroundColor": "black", "color": "white" });
  }
  else {
    $(".header").css({ "backgroundColor": "", "color": "" });
  }
});

$(document).ready(function () {
  $.getJSON('/assets/json/data.json', function (data) {
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
    var buku_populer = data.daftar_buku_populer;
    $.each(buku_populer, function (index, item) {
      var newElement = `
          <div class="item scale_hover">
            <img src="${item.url_gambar}" alt="Logo">
            <h2>${item.judul}</h2>
            <a href="${item.link_buku}" title="Lihat">Baca</a>
          </div>
        `;
      $('.list-book').append(newElement);
    });
    $('.arrow-left').append('<svg fill="#000000" height="50px" width="50px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M18.7,20.3c0.4,0.4,0.4,1,0,1.4C18.5,21.9,18.3,22,18,22s-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L14.4,16L18.7,20.3z"/></svg>');
    $('.arrow-right').append('<svg fill="#000000" height="50px" width="50px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22 s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"/></svg>');
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
  });
});
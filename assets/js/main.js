$(window).resize(function() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
        $(".header").css({"backgroundColor": "black", "color": "white"});
    }
    else {
        $(".header").css({"backgroundColor": "", "color": ""});
    }
});

$(document).ready(function() {
    $.getJSON('/assets/json/data.json', function(data) {
      var layanan = data.layanan;
      $.each(layanan, function(index, item) {
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
    });
  });
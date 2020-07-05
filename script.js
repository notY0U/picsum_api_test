

function photoLoader() {
  var p = Math.floor(Math.random() * 100) + 1;
  fetch(`https://picsum.photos/v2/list?page=` + p + `&limit=6`).then((response) => {

    return response.json();

  }).then((responseJson) => {

    for (let i = 0; i < responseJson.length; i++) {
      injectInfo(responseJson[i]);
    }

  });
  function injectInfo(responseJson) {
    var table = document.getElementById('photos');

    for (var j = 0; j < 3; j++) {
      var row = table.insertRow(j);
    }

    for (var k = 0; k < 2; k++) {
      var cell = row.insertCell(k);
      cell.id = `cellid_${responseJson.id}_${k}`;
    }

    var photo = document.createElement('img');
    var src = document.querySelector(`#cellid_${responseJson.id}_1`);
    photo.src = responseJson.download_url;
    src.appendChild(photo);
    document.querySelector(`#cellid_${responseJson.id}_0`).innerHTML = responseJson.author;

  }
}
photoLoader();



$(window).on("scroll", function () {
  var scrollHeight = $(document).height();
  var scrollPos = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPos) / scrollHeight == 0) {
    photoLoader();
    
  }
});


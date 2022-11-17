let data1 = {
    photo: 'pictures/pavan-prasad-JZf_0apzhL8-unsplash.jpg',
    title: 'Bird',
    description: 'Flying bird'
  };

  let data2 = {
    photo: 'pictures/2h-media-M1WNQu_4uH8-unsplash.jpg',
    title: 'Boar',
    description: 'Standing boar'
  };

  let data3 = {
    photo: 'pictures/alex-trajilovic-br26jsOEZ9s-unsplash.jpg',
    title: 'Lake',
    description: 'Lake with nature'
  };
  
  let data4 = {
    photo: 'pictures/farid-mardanov-UF7S8kzA-Aw-unsplash.jpg',
    title: 'Desert',
    description: 'Sand storm'
  };

  let data5 = {
    photo: 'pictures/hassan-pasha-pvicQv9Sfk8-unsplash.jpg',
    title: 'Bird',
    description: 'Grey bird'
  };

  let data6 = {
    photo: 'pictures/martin-pedersen-Bho2PAOrWLw-unsplash.jpg',
    title: 'Snow',
    description: 'Snowy mountain peak'
  };

  let data7 = {
    photo: 'pictures/op23-a5uLuYTnnY4-unsplash.jpg',
    title: 'Sea',
    description: 'Desert plus sea'
  };

  let data8 = {
    photo: 'pictures/pavan-prasad-nw1slFnKRYE-unsplash.jpg',
    title: 'Animal',
    description: 'Animal nature'
  };


  let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').attr('src', imagesData[currentPhoto].title);
$('#photo-description').attr('src', imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('#photo-title').attr('src', imagesData[currentPhoto].title);
    $('#photo-description').attr('src', imagesData[currentPhoto].description);
    $('#photo').attr('src', imagesData[photoNumber].photo);
  }
$('.arrow.rev').click(() => {
  currentPhoto++;
  $('#PhotoPlace').text(currentPhoto);
  if(currentPhoto < 8) { 
    loadPhoto(currentPhoto);
  } if (currentPhoto == 0) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(255, 179, 57), -79px -50px 500px -29px 	rgb(165, 109, 32)');
    $('body').css('background', 'linear-gradient(135deg, rgb(255, 179, 57), 	rgb(165, 109, 32)');
  } else if (currentPhoto == 1) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(143, 97, 61), -79px -50px 500px -29px 	rgb(108, 106, 31)');
    $('body').css('background', 'linear-gradient(135deg, rgb(143, 97, 61), 	rgb(108, 106, 31)');
  } else if (currentPhoto == 2) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(106, 151, 148), -79px -50px 500px -29px 	rgb(169, 115, 15)');
    $('body').css('background', 'linear-gradient(135deg, rgb(106, 151, 148), 	rgb(169, 115, 15)');
  } else if (currentPhoto == 3) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(210, 159, 68), -79px -50px 500px -29px 	rgb(223, 222, 201)');
    $('body').css('background', 'linear-gradient(135deg, rgb(210, 159, 68), 	rgb(223, 222, 201)');
  } else if (currentPhoto == 4) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px DarkSlateGrey, -79px -50px 500px -29px 	rgb(84, 99, 80)');
    $('body').css('background', 'linear-gradient(135deg, DarkSlateGrey, 	rgb(84, 99, 80)');
  } else if (currentPhoto == 5) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(132, 96, 80), -79px -50px 500px -29px 	rgb(136, 164, 201)');
    $('body').css('background', 'linear-gradient(135deg, rgb(132, 96, 80), 	rgb(136, 164, 201)');
  } else if (currentPhoto == 6) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(97, 107, 116), -79px -50px 500px -29px 	rgb(196, 151, 122)');
    $('body').css('background', 'linear-gradient(135deg, rgb(97, 107, 116), 	rgb(196, 151, 122)');
  } else if (currentPhoto == 7) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(206, 180, 93), -79px -50px 500px -29px 	rgb(122, 103, 61)');
    $('body').css('background', 'linear-gradient(135deg, rgb(206, 180, 93), 	rgb(122, 103, 61)');
  } 
  else {
        currentPhoto = 0;
        $('#PhotoPlace').text(currentPhoto);
        loadPhoto(currentPhoto);
        $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(255, 179, 57), -79px -50px 500px -29px 	rgb(165, 109, 32)');
        $('body').css('background', 'linear-gradient(135deg, rgb(255, 179, 57), 	rgb(165, 109, 32)');
    } 
  })

$('.arrow.normal').click(() => {
    --currentPhoto;
    $('#PhotoPlace').text(currentPhoto);
    if(-1 < currentPhoto) { 
      loadPhoto(currentPhoto); 
    } if (currentPhoto == 0) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(255, 179, 57), -79px -50px 500px -29px 	rgb(165, 109, 32)');
      $('body').css('background', 'linear-gradient(135deg, rgb(255, 179, 57), 	rgb(165, 109, 32)');
    } else if (currentPhoto == 1) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(143, 97, 61), -79px -50px 500px -29px 	rgb(108, 106, 31)');
      $('body').css('background', 'linear-gradient(135deg, rgb(143, 97, 61), 	rgb(108, 106, 31)');
    } else if (currentPhoto == 2) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(106, 151, 148), -79px -50px 500px -29px 	rgb(169, 115, 15)');
      $('body').css('background', 'linear-gradient(135deg, rgb(106, 151, 148), 	rgb(169, 115, 15)');
    } else if (currentPhoto == 3) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(210, 159, 68), -79px -50px 500px -29px 	rgb(223, 222, 201)');
      $('body').css('background', 'linear-gradient(135deg, rgb(210, 159, 68), 	rgb(223, 222, 201)');
    } else if (currentPhoto == 4) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px DarkSlateGrey, -79px -50px 500px -29px 	rgb(84, 99, 80)');
      $('body').css('background', 'linear-gradient(135deg, DarkSlateGrey, 	rgb(84, 99, 80)');
    } else if (currentPhoto == 5) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(132, 96, 80), -79px -50px 500px -29px 	rgb(136, 164, 201)');
      $('body').css('background', 'linear-gradient(135deg, rgb(132, 96, 80), 	rgb(136, 164, 201)');
    } else if (currentPhoto == 6) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(97, 107, 116), -79px -50px 500px -29px 	rgb(196, 151, 122)');
      $('body').css('background', 'linear-gradient(135deg, rgb(97, 107, 116), 	rgb(196, 151, 122)');
    } else if (currentPhoto == 7) {
      $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(206, 180, 93), -79px -50px 500px -29px 	rgb(122, 103, 61)');
      $('body').css('background', 'linear-gradient(135deg, rgb(206, 180, 93), 	rgb(122, 103, 61)');
    } 
      else {
          currentPhoto = 7;
          $('#PhotoPlace').text(currentPhoto);
          loadPhoto(currentPhoto);
          $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(206, 180, 93), -79px -50px 500px -29px 	rgb(122, 103, 61)');
          $('body').css('background', 'linear-gradient(135deg, rgb(206, 180, 93), 	rgb(122, 103, 61)');
      }
    })

imagesData.forEach((item, index) => {
  $('#ThumbnailContainer').append(`<div class="box" data-index="${index}">
  <img class="photo2 ${index}">
  <h1 class="photo-title ${index}"></h1>
  <p class="photo-description ${index}"></p>
  </div>`);
$(`.photo-title.${index}`).text(imagesData[index].title);
$(`.photo-description.${index}`).text(imagesData[index].description);
$(`.photo2.${index}`).attr('src', imagesData[index].photo);
})

$('.photo2').click((event) => {
});


/*$(document).on("click",'.box', function(){
  console.log(this)
  let proba = $(this).find(`.photo-description`).text();
  console.log(proba)
});*/


$('.box').click((event) => {
  let indexClicked = $(event.currentTarget).attr('data-index');
  let PTitle = $(event.currentTarget).find(`.photo-title`).text();
  let PDescription = $(event.currentTarget).find(`.photo-description`).text();
  $('.inside.h').text(PTitle)
  $('.inside.p').text(PDescription)

  loadPhoto(indexClicked);
  currentPhoto = indexClicked;

  if (currentPhoto == 0) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(255, 179, 57), -79px -50px 500px -29px 	rgb(165, 109, 32)');
    $('body').css('background', 'linear-gradient(135deg, rgb(255, 179, 57), 	rgb(165, 109, 32)');
  } else if (currentPhoto == 1) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(143, 97, 61), -79px -50px 500px -29px 	rgb(108, 106, 31)');
    $('body').css('background', 'linear-gradient(135deg, rgb(143, 97, 61), 	rgb(108, 106, 31)');
  } else if (currentPhoto == 2) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(106, 151, 148), -79px -50px 500px -29px 	rgb(169, 115, 15)');
    $('body').css('background', 'linear-gradient(135deg, rgb(106, 151, 148), 	rgb(169, 115, 15)');
  } else if (currentPhoto == 3) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(210, 159, 68), -79px -50px 500px -29px 	rgb(223, 222, 201)');
    $('body').css('background', 'linear-gradient(135deg, rgb(210, 159, 68), 	rgb(223, 222, 201)');
  } else if (currentPhoto == 4) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px DarkSlateGrey, -79px -50px 500px -29px 	rgb(84, 99, 80)');
    $('body').css('background', 'linear-gradient(135deg, DarkSlateGrey, 	rgb(84, 99, 80)');
  } else if (currentPhoto == 5) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(132, 96, 80), -79px -50px 500px -29px 	rgb(136, 164, 201)');
    $('body').css('background', 'linear-gradient(135deg, rgb(132, 96, 80), 	rgb(136, 164, 201)');
  } else if (currentPhoto == 6) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(97, 107, 116), -79px -50px 500px -29px 	rgb(196, 151, 122)');
    $('body').css('background', 'linear-gradient(135deg, rgb(97, 107, 116), 	rgb(196, 151, 122)');
  } else if (currentPhoto == 7) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(206, 180, 93), -79px -50px 500px -29px 	rgb(122, 103, 61)');
    $('body').css('background', 'linear-gradient(135deg, rgb(206, 180, 93), 	rgb(122, 103, 61)');
  } 
});



$("#PhotoPlace").on('contentchanged', function() {
  console.log("HELLO WORLD!");
});

function valtozas() {
  currentPhoto++
  console.log(currentPhoto)
}
setTimeout('valtozas', 3000);
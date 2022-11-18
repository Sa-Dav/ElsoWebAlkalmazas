let data1 = {
    photo: 'pictures/pavan-prasad-JZf_0apzhL8-unsplash.jpg',
    title: 'Bird',
    description: 'This is the description of the first picture. This is the description of the first picture. This is the description of the first picture.'
  };

  let data2 = {
    photo: 'pictures/2h-media-M1WNQu_4uH8-unsplash.jpg',
    title: 'Boar',
    description: 'This is the description of the second picture. This is the description of the second picture. This is the description of the second picture.'
  };

  let data3 = {
    photo: 'pictures/alex-trajilovic-br26jsOEZ9s-unsplash.jpg',
    title: 'Lake',
    description: 'This is the description of the third picture. This is the description of the third picture. This is the description of the third picture.'
  };
  
  let data4 = {
    photo: 'pictures/farid-mardanov-UF7S8kzA-Aw-unsplash.jpg',
    title: 'Desert',
    description: 'This is the description of the fourth picture. This is the description of the fourth picture. This is the description of the fourth picture.'
  };

  let data5 = {
    photo: 'pictures/hassan-pasha-pvicQv9Sfk8-unsplash.jpg',
    title: 'Pigeon',
    description: 'This is the description of the fifth picture. This is the description of the fifth picture. This is the description of the fifth picture.'
  };

  let data6 = {
    photo: 'pictures/martin-pedersen-Bho2PAOrWLw-unsplash.jpg',
    title: 'Mountain',
    description: 'This is the description of the sixth picture. This is the description of the sixth picture. This is the description of the sixth picture.'
  };

  let data7 = {
    photo: 'pictures/op23-a5uLuYTnnY4-unsplash.jpg',
    title: 'Sea',
    description: 'This is the description of the seventh picture. This is the description of the seventh picture. This is the description of the seventh picture.'
  };

  let data8 = {
    photo: 'pictures/pavan-prasad-nw1slFnKRYE-unsplash.jpg',
    title: 'Lizard',
    description: 'This is the description of the eighth picture. This is the description of the eighth picture. This is the description of the eighth picture.'
  };

  let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').attr(imagesData[currentPhoto].title);
$('#photo-description').attr(imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
$('#photo').attr('src', imagesData[photoNumber].photo);
$('#photo-title').attr(imagesData[photoNumber].title);
$('#photo-description').attr(imagesData[photoNumber].description);
  }
  $('.arrow.rev').click(() => {
    currentPhoto++;
    if(currentPhoto < 8) { 
      loadPhoto(currentPhoto); }
      else {
          currentPhoto = 0;
          loadPhoto(currentPhoto);
      }
    })

  $('.arrow.normal').click(() => {
      --currentPhoto;
      if(-1 < currentPhoto) { 
        loadPhoto(currentPhoto); }
        else {
            currentPhoto = 7;
            loadPhoto(currentPhoto);
        }
      })

imagesData.forEach((item, index) => {
  $('#ThumbnailContainer').append(`<div class="box ${index}"" data-index="${index}">
  <img class="photo2 ${index}">
  <h1 class="photo-title ${index}"></h1>
  <p class="photo-description ${index}"></p>
  </div>`);
$(`.photo-title.${index}`).text(imagesData[index].title);
$(`.photo-description.${index}`).text(imagesData[index].description);
$(`.photo2.${index}`).attr('src', imagesData[index].photo);
$(`.box.${currentPhoto}`).addClass('active');
});

$('.box').click((event) => {
  let indexClicked = $(event.currentTarget).attr('data-index');
  loadPhoto(indexClicked);
  currentPhoto = indexClicked;
});


  /*-------------------------Személyre szabott háttér-------------------------*/
$('#photo').css('box-shadow', '79px 50px 500px -29px rgb(255, 179, 57), -79px -50px 500px -29px 	rgb(165, 109, 32)');
$('html').css('background', 'linear-gradient(135deg, rgb(255, 179, 57), 	rgb(165, 109, 32)');
  /*-------------------------Személyre szabott háttér vége-------------------------*/
$(document).on("click", function(){
  let PTitle = $('.box').find(`.photo-title.${currentPhoto}`).text();
  let PDescription = $('.box').find(`.photo-description.${currentPhoto}`).text();
  /*-------------------------Személyre szabott háttér-------------------------*/
  if (currentPhoto == 0) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(255, 179, 57), -79px -50px 500px -29px 	rgb(165, 109, 32)');
    $('html').css('background', 'linear-gradient(135deg, rgb(255, 179, 57), 	rgb(165, 109, 32)');
  } else if (currentPhoto == 1) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(143, 97, 61), -79px -50px 500px -29px 	rgb(108, 106, 31)');
    $('html').css('background', 'linear-gradient(135deg, rgb(143, 97, 61), 	rgb(108, 106, 31)');
  } else if (currentPhoto == 2) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(106, 151, 148), -79px -50px 500px -29px 	rgb(169, 115, 15)');
    $('html').css('background', 'linear-gradient(135deg, rgb(106, 151, 148), 	rgb(169, 115, 15)');
  } else if (currentPhoto == 3) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(210, 159, 68), -79px -50px 500px -29px 	rgb(223, 222, 201)');
    $('html').css('background', 'linear-gradient(135deg, rgb(210, 159, 68), 	rgb(223, 222, 201)');
  } else if (currentPhoto == 4) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px DarkSlateGrey, -79px -50px 500px -29px 	rgb(84, 99, 80)');
    $('html').css('background', 'linear-gradient(135deg, DarkSlateGrey, 	rgb(84, 99, 80)');
  } else if (currentPhoto == 5) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(132, 96, 80), -79px -50px 500px -29px 	rgb(136, 164, 201)');
    $('html').css('background', 'linear-gradient(135deg, rgb(132, 96, 80), 	rgb(136, 164, 201)');
  } else if (currentPhoto == 6) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(97, 107, 116), -79px -50px 500px -29px 	rgb(196, 151, 122)');
    $('html').css('background', 'linear-gradient(135deg, rgb(97, 107, 116), 	rgb(196, 151, 122)');
  } else if (currentPhoto == 7) {
    $('#photo').css('box-shadow', '79px 50px 500px -29px rgb(206, 180, 93), -79px -50px 500px -29px 	rgb(122, 103, 61)');
    $('html').css('background', 'linear-gradient(135deg, rgb(206, 180, 93), 	rgb(122, 103, 61)');
  }     
  /*-------------------------Személyre szabott háttér vége-------------------------*/
  $('#photo-title').attr('title', PTitle);
  $('#photo-description').attr('title', PDescription);
  $('.inside.h').text(PTitle)
  $('.inside.p').text(PDescription)

  $(`.box`).removeClass('active');
  $(`.box.${currentPhoto}`).addClass('active');
  });

  let PTitle = $('.box').find(`.photo-title.${currentPhoto}`).text();
  let PDescription = $('.box').find(`.photo-description.${currentPhoto}`).text();

  $('.inside.h').text(PTitle);
  $('.inside.p').text(PDescription);


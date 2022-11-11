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
  $('#ThumbnailContainer').append(`<div class="box" data-index="${index}">
  <img class="photo2 ${index}">
  <h1 class="photo-title ${index}"></h1>
  <p class="photo-description ${index}"></p>
  </div>`);
$(`.photo-title.${index}`).text(imagesData[index].title);
$(`.photo-description.${index}`).text(imagesData[index].description);
$(`.photo2.${index}`).attr('src', imagesData[index].photo);
})

$('.box').click((event) => {
  let indexClicked = $(event.currentTarget).attr('data-index');
  
  $('#clicked').text(indexClicked)
  loadPhoto(indexClicked);
  currentPhoto = indexClicked;
});



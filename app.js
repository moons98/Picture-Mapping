const elImage = document.querySelector("#imageFileOpenInput");

function valideImageType(image) {
    const result = ([ 'image/jpeg','image/png','image/jpg' ].indexOf(image.type) > -1);
    return result;
  }


elImage.addEventListener("change", (evt) => {
  const image = evt.target.files[0];
  if(!validImageType(image)) { 
    console.warn("invalide image file type");
    return;
  }
});

document.getElementById('pic-info').innerHTML = 'This photo was taken on ' + myData.exifdata.DateTime + ' with a ' + myData.exifdata.Make + ' ' + myData.exifdata.Model;

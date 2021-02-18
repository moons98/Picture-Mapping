document.getElementById("imgDefault").onclick = function() {
    EXIF.getData(this, function() {
      const myData = this;
      console.log(myData.exifdata);
    });
  }

var latDegree = myData.exifdata.GPSLatitude[0].numerator;
var latMinute = myData.exifdata.GPSLatitude[1].numerator;
var latSecond = myData.exifdata.GPSLatitude[2].numerator;
var latDirection = myData.exifdata.GPSLatitudeRef;

var lonDegree = myData.exifdata.GPSLongitude[0].numerator;
var lonMinute = myData.exifdata.GPSLongitude[1].numerator;
var lonSecond = myData.exifdata.GPSLongitude[2].numerator;
var lonDirection = myData.exifdata.GPSLongitudeRef;

function convertDMSToDD(degrees, minutes, seconds, direction) {
    var dd = degrees + (minutes/60) + (seconds/3600);
    if(direction == "S" || direction == "W") {
        dd = dd * -1;
    }
    return dd;
}

// Calculate latitude decimal
var latFinal = ConvertDMSToDD(latDegree, latMinute, latSecond, latDirection);
console.log(latFinal);

// Calculate longitude decimal
var lonFinal = ConvertDMSToDD(lonDegree, lonMinute, lonSecond, lonDirection);
console.log(lonFinal);

// Create Google Maps link for the location
document.getElementById('map-link').innerHTML = '<a href="http://www.google.com/maps/place/'+latFinal+','+lonFinal+'" target="_blank">Google Maps</a>';
//This is the breeding file
const fs = require("fs-extra");
const util = require("util");
const sharp = require("sharp");
var jimp = require('jimp');



let metadata = JSON.parse(fs.readFileSync('input/metadata.json'));
generate_png(metadata);



async function generate_png(metadata) {

  let images = [];
  var jimps = [];
  
  for (let i = 0; i < metadata.attributes.length; i++) {
    console.log(metadata.attributes[i].value);
    images[i] = 'layers/' + metadata.attributes[i].value+ '.png';
  }

  for (var i = 0; i < images.length; i++) {
    jimps.push(jimp.read(images[i]));
  }

  Promise.all(jimps).then(function (data) {
    return Promise.all(jimps);
  }).then(function (data) {
    data[0].composite(data[1], 0, 0);
    data[0].composite(data[2], 0, 0);
    data[0].composite(data[3], 0, 0);
    data[0].composite(data[4], 0, 0);
    data[0].composite(data[5], 0, 0);
    data[0].composite(data[6], 0, 0);
    data[0].composite(data[7], 0, 0);
    data[0].write('output/0.png', function () {
      console.log("wrote the image");
    });
  });

}




async function generate_metadata() {
  //read parent 1
  //read parent 2
  //Logic to create child metadata
  // save metadata as 0.json

}

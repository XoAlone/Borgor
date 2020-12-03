const fs = require('fs');
const imgur = require('imgur');

function generateBorgor() {
    let imagesArray = [''];
    let directory = fs.readdirSync('./images/', 'UTF-8');

    directory.forEach(image => {
        imagesArray.push(image);
        let randomGenIndex = Math.floor(Math.random() * imagesArray.length);

        if (imagesArray.includes(image)) {
            imgur.uploadFile(`./images/${imagesArray[randomGenIndex]}`).then(url => {
                return console.log(`🍔 \x1b[32mSuccessfully generated a borgor! ${url.data.link}\x1b[0m🍔`);
            }).catch(err => {
                return console.log(`🍔 \x1b[31mWhoops! Failed to generate a borgor! ${err}\x1b[0m🍔`);
            });
        } else {
          return console.log('🍔 \x1b[31m There was an error while trying to check for the image! Please try again.\x1b[0m🍔');
        };
    });
};

module.exports.generateBorgor = generateBorgor;
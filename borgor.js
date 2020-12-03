const fs = require('fs');
const path = require('path');
const imgur = require('imgur');

function generateBorgor() {
    let directory = fs.readdirSync(path.join(__dirname, '/images'), 'UTF-8');
    let randomGenIndex = Math.floor(Math.random() * directory.length);

    imgur.uploadFile(path.join(__dirname, '/images/') + directory[randomGenIndex])
    .then(url => {
        return console.log(`Successfully generated a borgor! ${url.data.link}`);
    }).catch(err => {
        return console.log(`Whoops! Failed to generate a borgor! ${err}`);
    });
};

module.exports.generateBorgor = generateBorgor;
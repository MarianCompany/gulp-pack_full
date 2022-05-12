const fs = require('fs');
const fontDecode = require('./data/fontDecode.json')

let srcFonts = './src/scss/local-fonts.scss';
let appFonts = './dist/fonts/';

module.exports = function fonts(done) {

    fs.writeFile(srcFonts, "@import '_mixins';\r\n", () => {})

    fs.readdir(appFonts, (err, items) => {
        if(items){
            items = items.map((fontName) => fontName.split('.')[0])
            let fontNames = new Set(items);
            fontNames = Array.from(fontNames);

            for(let i = 0;i < fontNames.length; i++){
                let temp = fontNames[i].split('-');
                let fontFamily = temp[0];
                let mod = temp[1];

                try {
                    fs.appendFile(
                        srcFonts,
                        `@include font-face("${fontFamily}", "${fontFamily + '-' + mod}", ${fontDecode[mod].weight}, ${fontDecode[mod].style});\r\n`,
                        () => {}
                    );
                }catch(err){
                    console.log(err);
                }

                console.log(`Added new font: ${fontFamily + '-' + mod + ' ' + fontDecode[mod].weight + ' ' + fontDecode[mod].style}
                .----------------------------------------------------------------------------------`);
            }
        }else {
            console.log('NO FONTS FOUND');
        }

    })

    done();
}
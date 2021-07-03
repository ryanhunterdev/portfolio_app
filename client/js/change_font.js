

// font-family: 'B612', sans-serif;
// font-family: 'BioRhyme', serif;
// font-family: 'Crimson Text', serif;
// font-family: 'IBM Plex Sans', sans-serif;
// font-family: 'Playfair Display', serif;
// font-family: 'Raleway', sans-serif;




const leftHeadingDropDown = document.querySelector('.dropDown-hf-left');
const rightHeadingDropDown = document.querySelector('.dropDown-hf-right');
const leftParagraphDropDowns = document.querySelector('.dropDown-pf-left');
const rightParagraphDropDowns = document.querySelector('.dropDown-pf-right');
const paragraphs = document.querySelectorAll('.para');
const headings = document.querySelectorAll('.headingfont');



addDropDownFonts(leftHeadingDropDown)
addDropDownFonts(rightHeadingDropDown)
addDropDownFonts(leftParagraphDropDowns)
addDropDownFonts(rightParagraphDropDowns)

selectParagraphFont(leftParagraphDropDowns)
selectParagraphFont(rightParagraphDropDowns)
selectHeadingFont(leftHeadingDropDown)
selectHeadingFont(rightHeadingDropDown)

function addDropDownFonts(position) {
    let fonts = ['B612', 'IBM Plex', 'Crimson Text', 'Playfair Display', 'BioRhyme', 'Raleway', 'Defult'];
    
    fonts.forEach(font => {

        let option = document.createElement("option");

        option.text = font
        option.value = font
        position.add(option);
    });
}

function addFontPara(font) {
    paragraphs.forEach( paragraph => {
        paragraph.style.fontFamily = font
    })
}

function addFontHeading(font) {
    headings.forEach( heading => {
        heading.style.fontFamily = font
    })
}

function selectParagraphFont(position) {
    position.addEventListener('change', function() {
        console.log(position.value);

        if (position.value === 'B612') {
            addFontPara(`'B612', sans-serif`)

        } else if (position.value === 'IBM Plex') {
            addFontPara(`'IBM Plex Sans', sans-serif`)

        } else if (position.value === 'Crimson Text') {
            addFontPara(`'Crimson Text', serif`)

        } else if (position.value === 'Playfair Display') {
            addFontPara(`'Playfair Display', serif`)

        } else if (position.value === 'BioRhyme') {
            addFontPara(`'BioRhyme', serif`)

        } else if (position.value === 'Raleway') {
            addFontPara(`'Raleway', sans-serif`)
        } else if (position.value === 'Defult') {
            addFontPara(`Arial, Helvetica, sans-serif`)
        }
    });
}

function selectHeadingFont(position) {
    position.addEventListener('change', function() {
        console.log(position.value);

        if (position.value === 'B612') {
            addFontHeading(`'B612', sans-serif`)

        } else if (position.value === 'IBM Plex') {
            addFontHeading(`'IBM Plex Sans', sans-serif`)

        } else if (position.value === 'Crimson Text') {
            addFontHeading(`'Crimson Text', serif`)

        } else if (position.value === 'Playfair Display') {
            addFontHeading(`'Playfair Display', serif`)

        } else if (position.value === 'BioRhyme') {
            addFontHeading(` 'BioRhyme', serif `)

        } else if (position.value === 'Raleway') {
            addFontHeading(`'Raleway', sans-serif`)
        } else if (position.value === 'Defult') {
            addFontHeading(`Arial, Helvetica, sans-serif`)
        }
    });
}


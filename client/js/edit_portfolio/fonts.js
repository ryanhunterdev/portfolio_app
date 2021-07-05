addDropDownFonts(rightHeadingDropDown)
addDropDownFonts(rightParagraphDropDowns)

selectParagraphFont(rightParagraphDropDowns)
selectHeadingFont(rightHeadingDropDown)

function addDropDownFonts(position) {
    let fonts = ['B612', 'IBM Plex', 'Crimson Text', 'Playfair Display', 'BioRhyme', 'Raleway', 'Work Sans', 'Roboto', 'Yomogi', 'Default'];
    
    fonts.forEach(font => {

        let option = document.createElement("option");

        option.text = font
        option.value = font
        position.add(option);
    });
}

function selectParagraphFont(position) {
    console.log(position.value);
    position.addEventListener('change', function() {
        let font = position.value;
        let reqObj = {
            paragraph_font: font
        }
        axios
        .patch(`/api/portfolios/styles/paragraph-font/${portfolioId}`, reqObj)
        .then(res => {
            let responseFont = res.data.allStyles.styles.paragraph_font
            let paragraphs = document.getElementsByClassName("para");
            for (let i = 0; i < paragraphs.length; i++) {
                let paragraph = paragraphs[i];
                paragraph.style.fontFamily = responseFont;
            } 
        })
    });
}


function selectHeadingFont(position) {
    position.addEventListener('change', function() {

        let font = position.value;
        let reqObj = {
            heading_font: font
        }
        axios
        .patch(`/api/portfolios/styles/heading-font/${portfolioId}`, reqObj)
        .then(res => {
            let responseFont = res.data.allStyles.styles.heading_font
            let headings = document.getElementsByClassName("headingfont");
            for (let i = 0; i < headings.length; i++) {
                let heading = headings[i];
                heading.style.fontFamily = responseFont;
            }
        })
    });
}


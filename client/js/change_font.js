//Font Changing
//--------------------------------------------------------------------------------

// B612 = font-family: 'B612', sans-serif;
// IBM Plex = Sans font-family: 'IBM Plex Sans', sans-serif;
// Crimson Text = font-family: 'Crimson Text', serif;
// Playfair Display = font-family: 'Playfair Display', serif;
// BioRhyme = font-family: 'BioRhyme', serif;


//link

// {/* <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=B612:wght@400;700&family=BioRhyme:wght@200;800&family=Crimson+Text:wght@400;700&family=IBM+Plex+Sans:wght@100;300&family=Playfair+Display:ital,wght@0,400;1,600&display=swap" rel="stylesheet"></link>  */}

//style

// {/* <style>
// @import url('https://fonts.googleapis.com/css2?family=B612:wght@400;700&family=BioRhyme:wght@200;800&family=Crimson+Text:wght@400;700&family=IBM+Plex+Sans:wght@100;300&family=Playfair+Display:ital,wght@0,400;1,600&display=swap');



let headingDropDown = document.querySelector('.dropDown-hf');
let paragraphDropDown = document.querySelector('.dropDown-pf');
let leftHeading = document.querySelector('.left-heading');
let rightHeading = document.querySelector('.right-heading');
let paragraph = document.querySelector('.font');


const fonts = ['B612', 'IBM Plex', 'Crimson Text', 'Playfair Display', 'BioRhyme', 'Raleway'];


fonts.forEach(font => {

    let option = document.createElement("option");

    option.text = font
    option.value = font
    paragraphDropDown.add(option)
    headingDropDown.add(option)

});

document.addEventListener('change', function(font) {

    if (font.target.value === 'B612') {
        paragraph = `'B612', sans-serif`

    } else if (font.target.value === 'IBM Plex') {
        paragraph = `'IBM Plex Sans', sans-serif;`

    } else if (font.target.value === 'Crimson Text') {
        paragraph = `'Crimson Text', serif`

    } else if (font.target.value === 'Playfair Display') {
        paragraph = `'Playfair Display', serif`

    } else if (font.target.value === 'BioRhyme') {
        paragraph = `'BioRhyme', serif`

    } else if (font.target.value === 'Raleway') {
        paragraph = `'Raleway', sans-serif;`
    }
});



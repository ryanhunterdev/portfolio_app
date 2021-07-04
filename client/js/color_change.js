const colorFontPicker = document.querySelector('.color-font-picker');
const headingColorLeft = document.querySelector('.heading-color-left');
const paragraphColorLeft = document.querySelector('.paragraph-color-left');
const backgroundColorLeft = document.querySelector('.background-color-left');
const headingColorRight = document.querySelector('.heading-color-right');
const paragraphColorRight = document.querySelector('.paragraph-color-right');
const backgroundColorRight = document.querySelector('.background-color-right');


const leftHeadings = document.querySelectorAll('.left-heading');
const leftBackground = document.querySelector('.left-column')
const rightBackground = document.querySelector('.right-column')

// live dom from input
headingColorLeft.addEventListener("input", handleColorChange, false)
headingColorRight.addEventListener("input", handleColorChange, false)
paragraphColorLeft.addEventListener("input", handleColorChange, false)
paragraphColorRight.addEventListener("input", handleColorChange, false)
backgroundColorLeft.addEventListener("input", handleColorChange, false)
backgroundColorRight.addEventListener("input", handleColorChange, false)

// db from change
headingColorLeft.addEventListener("change", function(event) {
    let reqObj = {
        heading_color_left: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/left-heading-color/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.headingColorLeft
            headingColorLeft.style.color = responseColor;
            console.log('db color response: ', responseColor);
        })
})

headingColorRight.addEventListener("change", function(event) {
    let reqObj = {
        heading_color_right: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/right-heading-color/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.headingColorRight
            headingColorRight.style.color = responseColor;
            console.log('db color response: ', responseColor);
        })
})

paragraphColorLeft.addEventListener("change", function(event) {
    let reqObj = {
        paragraph_color_left: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/left-paragraph-color/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.paragraphColorLeft
            paragraphColorLeft.style.color = responseColor;
            console.log('db color response: ', responseColor);
        })
})

paragraphColorRight.addEventListener("change", function(event) {
    let reqObj = {
        paragraph_color_right: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/right-paragraph-color/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.paragraphColorRight
            paragraphColorRight.style.color = responseColor;
            console.log('db color response: ', responseColor);
        })
})

backgroundColorLeft.addEventListener("change", function(event) {
    let reqObj = {
        background_color_left: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/left-background/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.bgColorLeft;
            backgroundColorLeft.style.backgroundColor = responseColor;
            console.log('db color response: ', responseColor);
        })
})

backgroundColorRight.addEventListener("change", function(event) {
    let reqObj = {
        background_color_right: event.target.value
    }
    axios
        .patch(`/api/portfolios/styles/right-background/${portfolioId}`, reqObj)
        .then(res => {
            let responseColor = res.data.bgColorRight;
            backgroundColorRight.style.backgroundColor = responseColor;
            console.log('db color response: ', responseColor);
        })
    
})

function changeClassColor(className, event) {
    let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.style.color = event.target.value;
        }
}

function handleColorChange(event) {

    if (event.target.className === 'heading-color-left color-picker') {

        leftHeadings.forEach(heading => {
            heading.style.color = event.target.value;
        })

    } else if (event.target.className === 'paragraph-color-left color-picker') {

        changeClassColor("left-para", event);

    } else if (event.target.className === 'background-color-left color-picker') {

        leftBackground.style.backgroundColor = event.target.value;

        
    } else if (event.target.className === 'heading-color-right color-picker') {

        changeClassColor("right-heading", event)
        
    } else if (event.target.className === 'paragraph-color-right color-picker') {

        changeClassColor("right-para", event);
        
    } else if (event.target.className === 'background-color-right color-picker') {
        
        rightBackground.style.backgroundColor = event.target.value;

    }
}
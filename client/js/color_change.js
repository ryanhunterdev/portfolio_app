var colorFontPicker = document.querySelector('.color-font-picker');
var headingColorLeft = document.querySelector('.heading-color-left');
var paragraphColorLeft = document.querySelector('.paragraph-color-left');
var backgroundColorLeft = document.querySelector('.background-color-left');
var headingColorRight = document.querySelector('.heading-color-right');
var paragraphColorRight = document.querySelector('.paragraph-color-right');
var backgroundColorRight = document.querySelector('.background-color-right');


var leftHeadings = document.querySelectorAll('.left-heading');
var leftBackground = document.querySelector('.left-column')
var rightBackground = document.querySelector('.right-column')


headingColorLeft.addEventListener("input", handleColorChange, false)
headingColorRight.addEventListener("input", handleColorChange, false)
paragraphColorLeft.addEventListener("input", handleColorChange, false)
paragraphColorRight.addEventListener("input", handleColorChange, false)
backgroundColorLeft.addEventListener("input", handleColorChange, false)
backgroundColorRight.addEventListener("input", handleColorChange, false)

function changeClassColor(className, event) {
    let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.style.color = event.target.value;
        }
}

function handleColorChange(event) {

    console.log(event.target.className);

    if (event.target.className === 'heading-color-left') {

        leftHeadings.forEach(heading => {
            heading.style.color = event.target.value;
        })

    } else if (event.target.className === 'paragraph-color-left') {

        changeClassColor("left-para", event);

    } else if (event.target.className === 'background-color-left') {

        leftBackground.style.backgroundColor = event.target.value;

        
    } else if (event.target.className === 'heading-color-right') {

        changeClassColor("right-heading", event)
        
    } else if (event.target.className === 'paragraph-color-right') {

        changeClassColor("right-para", event);
        
    } else if (event.target.className === 'heading-color-right') {
        
        rightBackground.style.backgroundColor = event.target.value;

    }
}
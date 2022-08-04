const leftButton = document.getElementsByClassName("fa-solid fa-angle-left");
const rightButton = document.getElementsByClassName("fa-solid fa-angle-right");

const cardArr = {
    fotomatic: document.getElementById("Fotomatic"),
    fotomaticImg: document.getElementById("fotomaticImg"),
    numberGuesser: document.getElementById("numberGuesser"),
    numberGuesserImg: document.getElementById("numberGuesserImg"),
    teaCozy: document.getElementById("teaCozy"),
    teaCozyImg: document.getElementById("teaCozyImg"),
    rentLux: document.getElementById("rentLux"),
    rentLuxImg: document.getElementById("rentLuxImg")
};

const checkButtons = () => {
    if (cardArr.fotomatic.classList.contains('project-slider')) {
        leftButton[0].style.color = "grey";
        leftButton[0].style.cursor = "default";
    } else {
        leftButton[0].style.color = "var(--primary)";
        leftButton[0].style.cursor = "cursor";
    }

    if (cardArr.rentLux.classList.contains('project-slider')) {
        rightButton[3].style.color = "grey";
        rightButton[3].style.cursor = "default";
    } else {
        rightButton[3].style.color = "var(--primary)";
        rightButton[3].style.cursor = "cursor";
    }
} 

checkButtons();

// Links
const openLink = (url) => {
    window.open(url, '_blank');
}

cardArr.fotomaticImg.onclick = () => {
    openLink("https://github.com/josh-ferguson/fotomatic-responsive_design");
}

cardArr.numberGuesserImg.onclick = () => {
    openLink("https://github.com/josh-ferguson/number-guesser");
}

cardArr.teaCozyImg.onclick = () => {
    openLink("https://github.com/josh-ferguson/tea_cozy-flexbox");
}

cardArr.rentLuxImg.onclick = () => {
    openLink("https://github.com/josh-ferguson/rent_lux-flexbox");
}

// Button clicks
const rightButtonClick = () => {
    let currentCard = document.getElementsByClassName("project-slider")[0];

    if (currentCard.id === "Fotomatic") {
        cardArr.fotomatic.className = "hidden"
        cardArr.numberGuesser.className = "project-slider"
    } else if (currentCard.id === "numberGuesser") {
        cardArr.numberGuesser.className = "hidden"
        cardArr.teaCozy.className = "project-slider"
    } else if (currentCard.id === "teaCozy") {
        cardArr.teaCozy.className = "hidden"
        cardArr.rentLux.className = "project-slider"
    }
    checkButtons();
}

const leftButtonClick = () => {
    let currentCard = document.getElementsByClassName("project-slider")[0];

    if (currentCard.id === "rentLux") {
        cardArr.rentLux.className = "hidden"
        cardArr.teaCozy.className = "project-slider"
    } else if (currentCard.id === "teaCozy") {
        cardArr.teaCozy.className = "hidden"
        cardArr.numberGuesser.className = "project-slider"
    } else if (currentCard.id === "numberGuesser") {
        cardArr.numberGuesser.className = "hidden"
        cardArr.fotomatic.className = "project-slider"
    }
    checkButtons();
}

for(let i = 0; i < rightButton.length; i++) {
    let button = rightButton[i];
    button.onclick = () => {
        rightButtonClick();
    }
}

for(let i = 0; i < leftButton.length; i++) {
    let button = leftButton[i];
    button.onclick = () => {
        leftButtonClick();
    }
}

//contact form confirmation
function clicked(e)
{
    if(!confirm('Sorry, this form does not have any functionality')) {
        e.preventDefault();
    }
}
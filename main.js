
var destinationCards = [
    {
        title: "St. Thomas, USVI",
        image: "http://usvitoday.com/wp-content/uploads/2017/05/USVI-Bluebeards_beach_club-750x500.jpg",
        description: "stthomas"
    },
    {
        title: "Seattle, WA",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg",
        description: "seattle"
    },
    {
        title: "Las Vegas, NV",
        image: "https://www.sportsgamblingpodcast.com/wp-content/uploads/2018/01/guide-to-las-vegas-2018-1.jpg",
        description: "lasvegas"
    },
    {
        title: "Key West, FL",
        image: "https://img.marinas.com/v2/c1cc413c737ba7ba9568094d6a3b3da45933ac2bdd846d69b7c73fac0b0a66ed.jpg",
        description: "keywest"
    },
    {
        title: "Phoenix, AZ",
        image: "https://cdn.moneycrashers.com/wp-content/uploads/2017/07/full-moon-phoenix-arizona-skyline-918x516.jpg",
        description: "phoenix"
    }
];

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (destination) => {
    let domString = '';
    destination.forEach((card) => {
        domString += `<div class="card">`;
        domString += `<h1>${card.title}</h1> <br>`;
        domString += `<img src="${card.image}" class="picture"> <br>`;
        domString += `<input type='text' id='${card.description}' placeholder='Type your entry here...' class='input'> <br>`;
        domString += `<input type='submit' id='submit-button' class="card-button" value='Submit'>`;
        domString += `</div>`;
    });
    printToDom(domString, 'card-holder');
}

// const showInput = () => {
//     const submitButton = document.getElementById('submit-button');
//     submitButton.addEventListener('click', (e) => {
//         // document.getElementById('entries').innerHTML = document.getElementsByClassName('input').value;
//         console.log("hello");
//     })
// }

const addAllEventListeners = () => {
    const allTheButtons = document.getElementsByClassName('card-button');
    for (let i = 0; i < allTheButtons.length; i++) {
        allTheButtons[i].addEventListener('click', printUserInput);
    }
};

const printUserInput = (e) => {
    const userInput = e.target.parentNode.children[4].id;
    if (userInput === 'stthomas') {
        document.getElementById('entries').innerHTML = document.getElementById('stthomas').value;
    }
};

const startApplication = () => {
    buildDomString(destinationCards);
    addAllEventListeners();
};

startApplication();
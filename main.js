var destinationCards = [
    {
        title: "St. Thomas, USVI",
        image: "http://usvitoday.com/wp-content/uploads/2017/05/USVI-Bluebeards_beach_club-750x500.jpg",
        description: "Type your entry here"
    },
    {
        title: "Seattle, WA",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg",
        description: "Type your entry here"
    },
    {
        title: "Las Vegas, NV",
        image: "https://www.sportsgamblingpodcast.com/wp-content/uploads/2018/01/guide-to-las-vegas-2018-1.jpg",
        description: "Type your entry here"
    },
    {
        title: "Key West, FL",
        image: "https://img.marinas.com/v2/c1cc413c737ba7ba9568094d6a3b3da45933ac2bdd846d69b7c73fac0b0a66ed.jpg",
        description: "Type your entry here"
    },
    {
        title: "Phoenix, AZ",
        image: "https://cdn.moneycrashers.com/wp-content/uploads/2017/07/full-moon-phoenix-arizona-skyline-918x516.jpg",
        description: "Type your entry here"
    }
];

var destinationCards = [
    {
        title: "St. Thomas, USVI",
        image: "http://usvitoday.com/wp-content/uploads/2017/05/USVI-Bluebeards_beach_club-750x500.jpg",
        description: "Type your entry here"
    },
    {
        title: "Seattle, WA",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg",
        description: "Type your entry here"
    },
    {
        title: "Las Vegas, NV",
        image: "https://www.sportsgamblingpodcast.com/wp-content/uploads/2018/01/guide-to-las-vegas-2018-1.jpg",
        description: "Type your entry here"
    },
    {
        title: "Key West, FL",
        image: "https://img.marinas.com/v2/c1cc413c737ba7ba9568094d6a3b3da45933ac2bdd846d69b7c73fac0b0a66ed.jpg",
        description: "Type your entry here"
    },
    {
        title: "Phoenix, AZ",
        image: "https://cdn.moneycrashers.com/wp-content/uploads/2017/07/full-moon-phoenix-arizona-skyline-918x516.jpg",
        description: "Type your entry here"
    }
];

const printToDom = (domString, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = domString;
};
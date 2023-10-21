const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    // let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    const detailedPlayers= PLAYERS.map((player,i) => ({
        player_name:player,
        player_image:`images/super-${i+1}.png`,
        player_strength:getRandomStrength(),
        player_type: i % 2 === 0 ? "hero":"villain",
    }))
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.floor(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    const fragment = players.filter(player => player.player_type === type).map(player => `<div class="player">
                <img src="${player.player_image}">
                <p>${player.player_name}</p>
                <h1 style="font-size:25px">${player.player_strength}</h1>
                </div>`).join('');
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
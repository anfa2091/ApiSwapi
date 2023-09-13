import swapiFecth from "./swapiFecth";

const swapi = swapiFecth;
const outputDiv = document.getElementById('output');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton'
function fetchDataAndDisplay(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            outputDiv.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById('btn1').addEventListener('click', () => {
    fetchDataAndDisplay('https://swapi.dev/api/people/?search='+ searchInput.value);
}
document.getElementById('btn2').addEventListener('click', () => {
    fetchDataAndDisplay('https://swapi.dev/api/films/?search=' + searchInput.value);
}
document.getElementById('btn3').addEventListener('click', () => {
    fetchDataAndDisplay('https://swapi.dev/api/starships/?search=' + searchInput.value);
}
document.getElementById('btn4').addEventListener('click', () => {
    fetchDataAndDisplay('https://swapi.dev/api/vehicles?search=' + searchInput.value);
}
document.getElementById('btn5').addEventListener('click', () => {
    fetchDataAndDisplay('https://swapi.dev/api/species/?search=' + searchInput.value);
}
document.getElementById('btn5').addEventListener('click', () => {
    fetchDataAndDisplay('https://swapi.dev/api/planets/?search=' + searchInput.value); 
});

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        fetchDataAndDisplay(`https://swapi.dev/api/?search=${encodeURIComponent(searchTerm)}`);
    }
});
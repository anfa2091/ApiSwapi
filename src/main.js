
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsDiv = document.getElementById("results");

    
    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value;

        if (searchTerm) {
            // Limpiar resultados anteriores
            resultsDiv.innerHTML = "Cargando...";

            // Realizar la solicitud a la API de SWAPI
            fetch(`https://swapi.dev/api/${searchTerm}`) 
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error en la solicitud: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    resultsDiv.innerHTML = ""; // Limpiar el contenido anterior

                    // Mostrar los datos de la respuesta en un formato legible
                    const dataString = JSON.stringify(data, null, 4);
                    resultsDiv.textContent = dataString;
                })
                .catch(error => {
                    resultsDiv.textContent = `Hubo un error al realizar la búsqueda: ${error.message}`;
                    console.error(error);
                });
        } else {
            resultsDiv.textContent = "Por favor, ingresa un término de búsqueda.";
        }
    });
});

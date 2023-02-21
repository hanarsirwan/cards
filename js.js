async function cardF() {
  try {
    const fetchdata = await fetch("https://rickandmortyapi.com/api/character");
    const data = await fetchdata.json();
    const cardsElement = document.querySelector(".cards");
    let cardData = data.results;
    cardData = cardData.map(function (valu, index) {
      if (cardData[index].episode.length >= 25) {
        return {
          ...valu,
          episode: "the main char",
        };
      } else {
        return {
          ...valu,
          episode: " the side char",
        };
      }
    });

    cardData = cardData.filter((valu, index) => {
      return cardData[index].status == "Alive";
    });

    cardData.forEach((valu, index) => {
      cardsElement.innerHTML += `
      
            <div class="card">
            <div class="CardImage">
                <img src="${cardData[index].image}" alt="">
                <p>${cardData[index].status}</p>
            </div>
            <div class="container">
                <h2>${cardData[index].name}</h2>
                 <div> 
                    <p>${cardData[index].gender}</p>
                </div>
                <p> ${cardData[index].episode}</p>
                <div>
                    <p>${cardData[index].species}</p>
                </div>
                <div>
                    <p>${cardData[index].location.name}</p>
                </div>
            </div>
        </div>`;
    });
  } catch (catchError) {
    console.log(catchError);
  }
}

cardF();

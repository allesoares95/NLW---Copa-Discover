function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon.${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon.${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}


function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>  
  </div>
  `
}


//  Criação de HTML interno direto no id.app Template Literals(document.querySelector("#app").innerHTML = `)

document.querySelector("#cards").innerHTML = ` 
         
    ${createCard(
      "24/11",
      "quinta",
      createGame("suica", "07:00", "camaroon") +
      createGame("uruguai", "10:00", "korea") +
      createGame("portugal", "10:00", "ghana") +
      createGame("brazil", "16:00", "servia")
    )} 
    ${createCard(
      "28/11",
      "segunda",
      createGame("camaroon", "07:00", "servia") +
      createGame("korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "suica") +
      createGame("portugal", "16:00", "uruguai")
    )}
    ${createCard(
      "02/12",
      "sexta",
      createGame("korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguai") +
      createGame("servia", "16:00", "suica") +
      createGame("camaroon", "16:00", "brazil")
    )}
`
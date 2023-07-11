function showMovieData(movie) {
  let card = document.createElement("div");
  window.addEventListener("load", () => {
    card.innerHTML = `
     
      <img id="image" src=${movie.poster} alt="" />
      <h3>${movie.title}</h3>
      <h3>${movie.runtime}</h3>
      <h3>${movie.showtime}</h3>
      <h3> Available Tickets:${movie.capacity} -${movie.tickets_sold}</h3>
    
    `;
    //Append the data to the DOM.
    document.querySelector(".movies").appendChild(card);
  });
}
///Fetches the first movie
function fetchMovies() {
  fetch(`http://localhost:3000/films/1`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((data) => showMovieData(data));
  loadFirstMovie();
  allMovies();
}
//loads the first movie
function loadFirstMovie() {
  fetchMovies();
}
// fetches all movies
function allMovies() {
  fetch(`http://localhost:3000/films`)
    .then((res) => res.json())
    .then((data) => data.forEach((all) => createMovieElements(all)));
}
///creates the ordered lists to append to the left section
function createMovieElements(data) {
  const list = document.createElement("ul");
  list.innerHTML = `
      <li>
      <img id="image"src=${data.poster} alt="" />
      <h3>${data.title}</h3>
      <h3>${data.runtime}</h3>
      <h3>${data.capacity}</h3>
      <h3>${data.showtime}</h3>
      <h3>${data.description}</h3>
      <h3>${data.capacity}-${data.tickets_sold}</h3>
      </li> 
        `;
  document.querySelector(".left-section").append(list);
}

///button event listener
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let availableTickets = `${data.capacity}-${data.tickets_sold}`;
  if (availableTickets >= 1) {
    availableTickets--;
  } else {
    alert("Tickets are no longer available");
  }
});
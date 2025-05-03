const formID = document.querySelector("#search-form");
const searchInput = document.querySelector("#inputSearch");
const button = document.querySelector(".button");
const catalogy = document.querySelector("#box-catalogy");

function movieAdd() {
          
  const inputValue = searchInput.value;
  if (!inputValue) return;
  const apiKey = "52c1d6108826cd28aa9ecc6193569d0a";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${inputValue}&page=1&include_adult=false
`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const title = data.results[0].title;
      const img = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
      console.log(data);

      const template = `
       <div class="movie-catalogy">
       <div class="movie-image"> <img src="${img}" alt="${title}"> </div>
       <div class="movie-title"> ${title} </div>
        </div>
       `;
      const domParser = new DOMParser();
      const htmlCatalogy = domParser.parseFromString(template, "text/html");
      const dom = htmlCatalogy.querySelector(".movie-catalogy");
      catalogy.appendChild(dom);
      
    });
}
// eventos
button.addEventListener("click", (e) => {
  e.preventDefault();
  movieAdd();
});

import { getShowDetails, searchShows } from "./tvmaze-api.js";
const lstTvShows = document.getElementById("lstTvShows");

document.getElementById("ara").addEventListener("click", () => {
  const query = document.getElementById("txtSearch").value;

  
    searchShows(query, (shows) => {
      createMovies(shows);
      
    
  });
  document.getElementById("txtSearch").focus();

});

document.getElementById("txtSearch").addEventListener("keyup", (event) => {
  const query = document.getElementById("txtSearch").value;
  if (event.key === "Enter") {
    searchShows(query, (shows) => {
      createMovies(shows);
    
  });
  }
});

const createMovies = (shows) => {
 

  lstTvShows.innerHTML = "";
  shows.forEach((item) => {
    
    const movieCard = createMovieCard(item);
    lstTvShows.insertAdjacentHTML("afterbegin", movieCard);
  });
};

const createMovieCard = (item) => {
  const {id,image, name, genres } = item.show;

  let movieImage = "img/noimage.png";
  if (image) {
    movieImage = image.medium;
  }

  return `
    <div class="col">
        <div class="card h-100" data-show=${id}>
        <img src=${movieImage} class="card-img-top" alt="${name}" />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${genres.join("-")}</p>
        </div>
        </div>
    </div>`;
};

lstTvShows.addEventListener("click",(e)=>{
  let resim=e.target.closest(".card");
  let showId=resim.dataset.show;
  location.href = `107-tvshow-details.html?id=${showId}`;
  console.log(resim)
  console.log(showId)
  
  
})

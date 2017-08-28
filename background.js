function addImage() {
  const clientID = UNSPLASH_APPLICATION_ID;
  const featured = FEATURED_IMAGES;
  const uri = `https://api.unsplash.com/photos/random?orientation=landscape&featured=${featured}&client_id=${clientID}`;
  fetch(uri)
  .then(response => {
    return response.json();
  })
  .then(imageJSON => {
    insertBackgroundImage(imageJSON);
    insertImageCredits(imageJSON);
  })
  .catch(error => {
    console.error(`Fetch error: ${error}`);
  });
}

function insertBackgroundImage(imageJSON) {
  const imageURI = imageJSON.urls.regular;
  const container = document.getElementById("main-container");
  container.style.backgroundImage = `url(${imageURI})`;
}

function insertImageCredits(imageJSON) {
  const utm = "?utm_source=new_tab&utm_medium=referral&utm_campaign=api-credit";
  const author = imageJSON.user;

  const authorLink = document.createElement("a");
  authorLink.setAttribute("href", `${author.links.html}${utm}`);
  authorLink.textContent = author.name;

  const unsplashLink = document.createElement("a");
  unsplashLink.setAttribute("href", `https://unsplash.com${utm}`);
  unsplashLink.textContent = "Unsplash";

  const separator = document.createElement("span");
  separator.textContent = " // ";

  const creditsContainer = document.getElementById("image-credits");
  creditsContainer.appendChild(authorLink);
  creditsContainer.appendChild(separator);
  creditsContainer.appendChild(unsplashLink);
}

document.addEventListener("DOMContentLoaded", addImage());

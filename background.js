function addImage() {
  var clientID = UNSPLASH_APPLICATION_ID;
  var featured = FEATURED_IMAGES;
  var uri = `https://api.unsplash.com/photos/random?orientation=landscape&featured=${featured}&client_id=${clientID}`;
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
  var imageURI = imageJSON.urls.regular;
  var container = document.getElementById("main-container");
  container.style.backgroundImage = `url(${imageURI})`;
}

function insertImageCredits(imageJSON) {
  var utm = "?utm_source=new_tab&utm_medium=referral&utm_campaign=api-credit";
  var author = imageJSON.user;

  var authorLink = document.createElement("a");
  authorLink.setAttribute("href", `${author.links.html}${utm}`);
  authorLink.textContent = author.name;

  var unsplashLink = document.createElement("a");
  unsplashLink.setAttribute("href", `https://unsplash.com${utm}`);
  unsplashLink.textContent = "Unsplash";

  var separator = document.createElement("span");
  separator.textContent = " // ";

  var creditsContainer = document.getElementById("image-credits");
  creditsContainer.appendChild(authorLink);
  creditsContainer.appendChild(separator);
  creditsContainer.appendChild(unsplashLink);
}

document.addEventListener("DOMContentLoaded", addImage());

function addSearchEventListener() {
  var searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", runSearch, false);
}

function runSearch(event) {
  event.preventDefault();
  var query = document.getElementById("search-input").value;
  var encodedQuery = encodeURIComponent(query);
  var baseURI = "https://duckduckgo.com/";
  var searchURI = `${baseURI}?q=${encodedQuery}`;

  window.location = searchURI;
}

document.addEventListener("DOMContentLoaded", addSearchEventListener());

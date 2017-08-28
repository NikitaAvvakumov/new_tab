function addSearchEventListener() {
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", runSearch, false);
}

function runSearch(event) {
  event.preventDefault();
  const query = document.getElementById("search-input").value;
  const encodedQuery = encodeURIComponent(query);
  const baseURI = "https://duckduckgo.com/";
  const searchURI = `${baseURI}?q=${encodedQuery}`;

  window.location = searchURI;
}

document.addEventListener("DOMContentLoaded", addSearchEventListener());

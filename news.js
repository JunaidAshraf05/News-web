const API_KEY = "22b868a4c7274aa584e35344adc484bd";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", ()=> fetchNews("India"));

    
async function fetchNews(query) {
    const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    
}
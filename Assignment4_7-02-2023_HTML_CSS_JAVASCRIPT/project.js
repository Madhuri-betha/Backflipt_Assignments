
const apiKey = "3edbef6cb2dd4f3186ef6ff0736e108a";
const apiURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
let articles = "";
async function getNews() {
    try {
        let response = await fetch(apiURL);
        const data = await response.json();
        articles = data.articles;

        let newsHTML = "";
        articles.forEach(article => {
            newsHTML += `<div class="news-item"">
            <div class="news-image" >
                <img src="${article.urlToImage}" alt="NULL">
            </div>
            <div class="news-info">
              <h2 class="news-title">${article.title}</h2>
              <p class="news-description" >${article.description}</p>
              <span class="news-content">${article.content}</span>
                <button class="btn" onclick="displayCon(event)">read more</button>
            </div>
          </div>`;
    });
    document.querySelector("#news-container").innerHTML = newsHTML;
    } 
    catch (error) {
        console.log(error);
    }
}
function displayCon(event) {
    event.target.parentNode.childNodes[5].classList.toggle("show")
    if (event.target.innerHTML == "read more") {
        event.target.innerHTML = "read less";
    }
    else {
        event.target.innerHTML = "read more"
    }
}
getNews();
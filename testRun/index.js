
const display = document.querySelector("#display");
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener('click', () => {
    fetchData()
})

async function fetchData() {
    return fetch(`https://newsapi.org/v2/everything?q=${search.value}&from=2023-03-20&sortBy=publishedAt&apiKey=9bde1d04c4e44930aa400357aebc6237`)
    .then((res) => {
        return res.json()
    }).then((data) => {
        display.innerHTML = ''
        data.articles.forEach(article => {
            display.innerHTML += returnCard(article,)
        });
        console.log(data.articles);
    })
}

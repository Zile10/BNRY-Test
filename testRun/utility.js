function returnCard(article) {
    return `
        <div class="card col-4" style="width: 18rem;">
            <img src="${article.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.content}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
}
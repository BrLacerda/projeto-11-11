fetch("http://localhost:3000/livros")
.then(req => req.json())
.then(data => showAll(data));

function showAll(livros) {
    const htmlLivros = livros.map(
        (livros) => `
        <h2>${livros.título}</h2>
        <h5>${livros.sinopse}</h6>
        `
    )
};
document.getElementById("app").innerHTML = htmlLivros;
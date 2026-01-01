 // PROMISES 
// GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJokes = () => {
    fetch("https://icanhazdadjoke.com/")
    .then((res) => {
        console.log(res.json());
    }).catch((error) => {
        console.log(error); 
    })
}


jokeBtn.addEventListener("click", generateJokes);
generateJokes();
const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randomWord = "";

let words = [
  "python",
  "javascript",
  "c++",
  "php",
  "java",
  "c#",
  "html",
  "css",
  "reactjs",
  "angular",
  "swift",
  "android",
  "sql",
];

const createNewWords = () => {
  let randomNum = Math.floor(Math.random() * words.length);
  let newTempWord = words[randomNum];
  return newTempWord;
  // words.forEach(word => {})
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    // console.log(temp);
    let j = Math.floor(Math.random() * (i + 1))
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", () => {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randomWord = scrambleWords(newWords.split(""));
    console.log(randomWord);
  }
});

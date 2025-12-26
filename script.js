const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const loginPage = document.getElementById("loginPage");
const navbar = document.getElementById("navbar");

const tabs = document.querySelectorAll(".tabBtn");
const sections = document.querySelectorAll(".tabSection");

const cravingBtn = document.getElementById("cravingBtn");
const comfortBtn = document.getElementById("comfortBtn");

const card = document.getElementById("cravingCard");
const cravingName = document.getElementById("cravingName");
const recipeText = document.getElementById("recipeText");
const calorieText = document.getElementById("calorieText");
const memeText = document.getElementById("memeText");
const nextBtn = document.getElementById("nextBtn");
const memePop = document.getElementById("memePop");

let index = 0;

/* LOGIN */
loginBtn.addEventListener("click", () => {
  if(usernameInput.value.trim() === "") return;
  loginPage.classList.add("hidden");
  navbar.classList.remove("hidden");
});

/* TABS */
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

/* CRAVINGS */
function showCraving(){
  const item = cravings[index];
  cravingName.innerText = item.name;
  recipeText.innerText = item.recipe;
  calorieText.innerText = "Calories Saved: " + item.calories;
  memeText.innerText = item.meme;
  card.classList.remove("flipped");
}

cravingBtn.addEventListener("click", () => {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("cravings").classList.remove("hidden");
  showCraving();
  showMeme("Healthy swap unlocked!");
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % cravings.length;
  showCraving();
  showMeme("Next craving!");
});

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

/* COMFORT */
comfortBtn.addEventListener("click", () => {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("comfort").classList.remove("hidden");
});

/* MEME */
function showMeme(text){
  memePop.innerText = text;
  memePop.style.display = "block";
  setTimeout(() => memePop.style.display = "none", 2000);
}
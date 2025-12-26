const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginPage = document.getElementById("loginPage");
const navbar = document.getElementById("navbar");
const mainContent = document.getElementById("mainContent");

const tabs = document.querySelectorAll("nav li");
const sections = document.querySelectorAll(".section");

const card = document.getElementById("cravingCard");
const cravingName = document.getElementById("cravingName");
const recipeText = document.getElementById("recipeText");
const calorieText = document.getElementById("calorieText");
const memeText = document.getElementById("memeText");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

/* LOGIN */
loginBtn.onclick = () => {
  loginPage.style.display = "none";
  navbar.classList.remove("hidden");
  mainContent.classList.remove("hidden");
};

/* LOGOUT */
logoutBtn.onclick = () => location.reload();

/* TABS */
tabs.forEach(tab => {
  tab.onclick = () => {
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  };
});

/* CRAVINGS */
function showCraving() {
  const c = cravings[index];
  cravingName.innerText = c.name;
  recipeText.innerText = c.recipe;
  calorieText.innerText = "Calories Saved: " + c.calories;
  memeText.innerText = c.meme;
  card.classList.remove("flipped");
}

showCraving();

card.onclick = () => card.classList.toggle("flipped");

nextBtn.onclick = () => {
  index = (index + 1) % cravings.length;
  showCraving();
};

// ====== PAGE ELEMENTS ======
const homepage = document.getElementById('homepage');
const cravingBtn = document.getElementById('cravingBtn');
const comfortBtn = document.getElementById('comfortBtn');
const swipeSection = document.getElementById('swipeSection');
const card = document.getElementById('cravingCard');
const cravingName = document.getElementById('cravingName');
const recipeText = document.getElementById('recipeText');
const calorieText = document.getElementById('calorieText');
const memeText = document.getElementById('memeText');
const nextBtn = document.getElementById('nextBtn');
const memePop = document.getElementById('memePop');
const comfortMode = document.getElementById('comfortMode');
const exitComfort = document.getElementById('exitComfort');

let index = 0;

// ====== PAGE NAVIGATION ======
cravingBtn.addEventListener('click', ()=>{
  homepage.classList.add('hidden');
  swipeSection.classList.remove('hidden');
  showCraving();
  showMeme("Healthy swap unlocked!");
});

comfortBtn.addEventListener('click', ()=>{ comfortMode.style.display='flex'; });
exitComfort.addEventListener('click', ()=>{ comfortMode.style.display='none'; });

// ====== DISPLAY CRAVING ======
function showCraving(){
  cravingName.innerText = cravings[index].name;
  recipeText.innerText = cravings[index].recipe;
  calorieText.innerText = "Calories Saved: "+cravings[index].calories;
  memeText.innerText = "😂 Meme: "+cravings[index].meme;
  card.classList.remove('flipped');
}

// ====== NEXT CRAVING ======
nextBtn.addEventListener('click', ()=>{
  index = (index+1)%cravings.length;
  showCraving();
  showMeme("Next craving unlocked!");
});

// ====== FLIP CARD ======
card.addEventListener('click', ()=>{ card.classList.toggle('flipped'); showMeme("Flip for recipe!"); });

// ====== MEME POP ======
function showMeme(text){
  memePop.innerText = text;
  memePop.style.display = 'block';
  setTimeout(()=>{ memePop.style.display = 'none'; }, 2500);
}
let kittens = []
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  event.preventDefault()
  let form = event.target

  let kitten = {
    id: generateId(),
    name: form.name.value,
    affection: 5,
    mood: setKittenMood(),

  }
  
  kittens.push(kitten)
  saveKittens()
  toggleAddKittenBtn()
  form.reset()
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
 */
function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens))
  drawKittens()
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
  let storedKittens = JSON.parse(window.localStorage.getItem("kittens"))
  if (storedKittens) {
    kittens = storedKittens
    
  }
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
  let kittenListElement = document.getElementById("kittenList")
  let kittensTemplate = ""
  kittens.forEach(kitten => {
    kittensTemplate += `
    <div class="card">
        <h3 class="card">${kitten.name}</h3>
        <div class="dkittenId space-between">
          
            <span>Mood: ${kitten.mood}</span>
          
        </div>
          
          <button  class="give-pet-btn" id="givePetBtn" onclick="pet(${kitten.id})">Pet me!</button>
          
          <button  class="give-nip-btn" id="giveNipBtn" onclick="catnip(${kitten.id})">Nip, mortal!</button>
    </div>
        
      `
    })
    kittenListElement.innerHTML = kittensTemplate
}


/**
 * Find the kitten in the array by its id
 * @param {string} kittenId 
 * @return {Kitten}
 */
function findKittenById(kittenId) {
  let index = kittens.findIndex(kitten => kitten.id === kittenId);
  if (index == -1) {
    console.log('invalid id');
  }

}


/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5 
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} kittenId 
 */
function pet(kittenId) {
  findKittenById(kittenId)
  
  if (Math.random() > .5) {
    kittens.kitten.affection++
  } else {
    kittens.kitten.affection--
  }
  saveKittens()

 
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} kittenId
 */
function catnip(kittenId) {
  // add affection reset
  findKittenById(kittenId)
   console.log(5);
setKittenMood()
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten
 */
function setKittenMood(kitten) {
  findKittenById(kitten)

  if (kitten.affection <= 0) {
    kitten.mood = "Gone"
  }
  if (kitten.affection > 0 + kitten.affection <= 3) {
    kitten.mood = "Angry"
  }
  if (kitten.affection > 3 + kitten.affection <=6) {
    kitten.mood = 'Tolerant'
  }
  if (kitten.affection > 6) {
    kitten.mood = 'Happy'
  }
  kittens.push(kitten.mood)
  saveKittens()
  
}

/**
 * Removes all of the kittens from the array
 * remember to save this change
 */
function clearKittens(){
  
  
  kittens.splice(0, kittens.length)
  saveKittens()
}


/**
 * Removes the welcome content and should probably draw the 
 * list of kittens to the page. Good Luck
 */
function getStarted() {
  
  console.log('Good Luck, Take it away')
  
  toggleWelcome()
  toggleKittenList()
  toggleAdoptBtn()
  }
  
  drawKittens()


function toggleWelcome() {
  document.getElementById('welcome').classList.toggle('hidden')
}

function toggleKittenList() {
  document.getElementById("kittenList").classList.toggle('hidden')
}

function toggleAddKittenBtn() {
  document.getElementById('addKittenBtn').classList.toggle('hidden')
}

function toggleAdoptBtn() {
  document.getElementById('adoptBtn').classList.toggle('hidden')
}


// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{name: string, mood: string, affection: number}} Kitten
 */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

loadKittens();
drawKittens()

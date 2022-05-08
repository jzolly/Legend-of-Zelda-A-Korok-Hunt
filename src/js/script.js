console.log('this is working')

// Variables
// initial pull for MVP urlAll.  Make unique pulls for each other url after MVP.  Maybe use all for a 'you search component' after MVP and styling is done.
// const urlAll = "https://botw-compendium.herokuapp.com/api/v2/all";
// use these after MVP to have each korok find a specific thing
const categoryUrl = "https://botw-compendium.herokuapp.com/api/v2/category/";
// const urlMonsters = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
// const urlEquipment = "https://botw-compendium.herokuapp.com/api/v2/category/equipment";
// const urlCreatures = "https://botw-compendium.herokuapp.com/api/v2/category/creatures";
// const urlMaterials = "https://botw-compendium.herokuapp.com/api/v2/category/materials";
// const urlTreasure = "https://botw-compendium.herokuapp.com/api/v2/category/treasure";

// This map assigns Koroks from html div .korok to a specific catergory.  We will use above array to 
const korokMap = {
    'korok1': 'monsters',
    'korok2': 'equipment',
    'korok3': 'materials',
    'korok4': 'treature',
    // 'korok5': 'creatures',
}

// Element Ids
const nameEl = $('#nameValue');
const categoryEl = $('#categoryValue');
const descriptionEl = $('#descriptionValue');
// const imgEl = $('#imgValue');

// Functions

function getData(category) {
    $.ajax(categoryUrl +category).then(
        // res is response from API
        (res) => {
            console.log('yahahaha');
            const things = res.data;
            const randomIndex = Math.floor(Math.random()*things.length);
            const randomThing = things[randomIndex];
            console.log(randomThing)
            nameEl.text(randomThing.name);
            categoryEl.text(randomThing.category);
            // because this is so long, I need to trouble shoot text wrapping.
            descriptionEl.text(randomThing.description);
            // make sure to empty the image for each Korok click
            $('#appendImg').empty();
            // $('main').append(`<img src="${data.Poster}"/>`)
            $('#appendImg').append(`<img src="${randomThing.image}" alt="${randomThing.name}"></img>`)


        }
    )
    // form the URL with that category DID
    // const url = categoryUrl + category;
    // get random array element (each element is an object) from data
    // get specific key values pairs from object; specifically: name, category, description and img.
    // push data from object to html using jQuery Element Ids
}

// This piece gets category based on the korok that was clicked
$('div.korok').on('click', (event) => {
    // this will be relevant if I do a userInput search. DID
    // event.preventDefault() DID
    // Get korok's element id DID
    const id = event.target.id;
    console.log(id);
    // get category based on korok
    // this variable (below) accesses the korokMap object via id (triggered by element onclick) and gives us the valuem(category) of that korok for url.
    const category = korokMap[id];
    console.log(category)
    getData(category);
})
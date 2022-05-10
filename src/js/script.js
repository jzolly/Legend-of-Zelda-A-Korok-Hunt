

// Variables
// initial pull for MVP urlAll.  Make unique pulls for each other url after MVP.  Maybe use all for a 'you search component' after MVP and styling is done.
// const urlAll = "https://botw-compendium.herokuapp.com/api/v2/all";
// use these after MVP to have each korok find a specific thing
const categoryUrl = "https://botw-compendium.herokuapp.com/api/v2/category/";


// This map assigns Koroks from html div .korok to a specific catergory.  We will use above array to 
const korokMap = {
    'korok1': 'monsters',
    'korok2': 'equipment',
    'korok3': 'materials',
    'korok4': 'treasure',
    // 'korok5': 'creatures', this has two sub objects of edible and non-edible
}

// Element Ids
const compendiumEl = $('#compendiumData');
const nameEl = $('#nameValue');
const categoryEl = $('#categoryValue');
const descriptionEl = $('#descriptionValue');
// const imgEl = $('#imgValue');

// Functions

function getData(category) {
    $.ajax(categoryUrl + category).then(
        // res is response from API
        (res) => {
            // specifically grabs the data objects from the array of objects in API
            const things = res.data;
            // this only igves the index number of the random thing
            const randomIndex = Math.floor(Math.random()*things.length);
            const randomThing = things[randomIndex];
            console.log(randomThing)
            nameEl.text(randomThing.name);
            categoryEl.text(randomThing.category);
            // because this is so long, I need to trouble shoot text wrapping overflow options.
            descriptionEl.text(randomThing.description);
            // make sure to empty the image for each Korok click
            $('#appendImg').empty();
            // $('main').append(`<img src="${data.Poster}"/>`)
            $('#appendImg').append(`<img id="thingImg" src="${randomThing.image}" alt="${randomThing.name}"></img>`)


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
    // event.preventDefault() DID
    // Get korok's element id DID
    const id = event.target.id;
    console.log(id);

    // I'm playing with the idea of having the compendium data appear beside the korok found.  I may just leave it at the bottom of the screen, esp for @media 
    // Get position of korok from event target
    // console.log(event.clientX, event.clientY);
    // console.log(event.offset);
    // compendiumEl.css('top', event.clientY);
    // compendiumEl.css('left', event.clientX);

    // get category based on korok
    // this variable (below) accesses the korokMap object via id (triggered by element onclick) and gives us the valuem(category) of that korok for url.
    const category = korokMap[id];
    console.log(category)
    getData(category);
})
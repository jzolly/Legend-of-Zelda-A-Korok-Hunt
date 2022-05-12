

// Variables

const categoryUrl = "https://botw-compendium.herokuapp.com/api/v2/category/";


// This map assigns Koroks from html div .korok to a specific catergory.  We will use above array to 
const korokMap = {
    'korok1': 'monsters',
    'korok2': 'equipment',
    'korok3': 'materials',
    'korok4': 'treasure',
    // 'korok5': 'creatures', 
//     this has two sub objects of edible and non-edible. Haven't tackled
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
}
// EVENT LISTENERS

// Quest Menu Logic  
$('#questStart').on('click', (evt) => {
    $('#how-to').fadeOut(1000);
    $('#returnMenu').css('visibility', 'visible');
    $('#noNoNo').css('visibility', 'hidden');
    
})
// Return 
$('#returnMenu').on('click', (evt) => {
    // console.log('this button works');
    $('#questStart').html('Continue Quest');
    $('#directions').css('margin-bottom', 0)
    $('#directions').html('Remember, four koroks wait, hidden from sight. Click around the landscape to find them and recieve a fact about the land of Hyrule. When found, Korok will appear and shout, "yahaha!", when found.');
    $('#how-to').fadeIn(1000);
})

// Rock and Korok1
$('#rock1').on('click', (evt) =>{
    $('#rock1').css('visibility', 'hidden');
    $('#korok1').css('visibility', 'visible').click();
    $('#rock2').css('visibility', 'visible');
})

// Apple and Korok2 (drag and drop)
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("div", event.target.id);
}
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("div");
    event.target.appendChild(document.getElementById(data));
    $('#apple').css('left', '145px').css('top', '310px');
    $('#korok2').css('visibility', 'visible').click();
}

// Flower and Korok3
$('#flower1').on('click', (evt) => {
    $('#flower2').css('visibility', 'visible')
})
$('#flower2').on('click', (evt) => {
    $('#flower3').css('visibility', 'visible')
})
$('#flower3').on('click', (evt) => {
    $('#flower4').css('visibility', 'visible')
})
$('#flower4').on('click', (evt) => {
    $('#korok3').css('visibility', 'visible').click();
})

// Pinwheel/Twinkle Balloons and Korok 4
$('#pinwheel1').on('click', (evt) => {
    $('#balloon1').css('visibility', 'visible');
    $('#balloon2').css('visibility', 'visible');
    $('#balloon3').css('visibility', 'visible');
    $('#balloon1').on('click', (evt) => {
        $('#balloon1').css('visibility', 'hidden');
        isItHidden();
    }); 
    $('#balloon2').on('click', (evt) => {
        $('#balloon2').css('visibility', 'hidden');
        isItHidden();
    });
    $('#balloon3').on('click', (evt) => {
        $('#balloon3').css('visibility', 'hidden');
        isItHidden();
    });
    $('#balloon1').fadeOut().fadeIn().delay(750).fadeOut().fadeIn().delay(750).fadeOut().fadeIn().delay(750).fadeOut().fadeIn().delay(750).fadeOut().fadeIn().delay(750).fadeOut().fadeIn().delay(750).fadeOut().fadeIn();
        $('#balloon2').fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn();
        $('#balloon3').fadeOut().fadeIn().delay(500).fadeOut().fadeIn().delay(500).fadeOut().fadeIn().delay(500).fadeOut().fadeIn().delay(500).fadeOut().fadeIn().delay(500).fadeOut().fadeIn().delay(500).fadeOut().fadeIn(); 
    })

function isItHidden () {
    if($('#balloon1').css('visibility') == ('hidden') & $('#balloon2').css('visibility') == ('hidden') & $('#balloon3').css('visibility') == ('hidden')) {
        $('#korok4').css('visibility', 'visible').click()
    }
}

// Display Data from API. 
$('div.korok').on('click', (event) => {
    // event.preventDefault() DID
    // Get korok's element id DID
    const id = event.target.id;
    console.log(id);
    // get category based on korok
    $('#compendiumData').fadeIn()
    $('#compendiumData').css('visibility', 'visible');
    // this variable (below) accesses the korokMap object via id (triggered by element onclick) and gives us the valuem(category) of that korok for url.
    const category = korokMap[id];
    console.log(category)
    getData(category);
})

// Hide compendium
$('#closeButton').on('click', (evt) => {
    $('#compendiumData').fadeOut(1000);
})






// MY NOTES FOR FUTURE SELF
  // For on click methods.  I'm playing with the idea of having the compendium data appear beside the korok found.  I may just leave it at the bottom of the screen, esp for @media 
    // Get position of korok from event target
    // console.log(event.clientX, event.clientY);
    // console.log(event.offset);
    // compendiumEl.css('top', event.clientY);
    // compendiumEl.css('left', event.clientX);
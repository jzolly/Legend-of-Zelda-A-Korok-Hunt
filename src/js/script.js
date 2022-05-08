console.log('this is working')

// Variables
// initial pull for MVP urlAll.  Make unique pulls for each other url after MVP.  Maybe use all for a 'you search component' after MVP and styling is done.
const urlAll = "https://botw-compendium.herokuapp.com/api/v2/all";
// use these after MVP to have each korok find a specific thing
const urlMonsters = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
const urlEquipment = "https://botw-compendium.herokuapp.com/api/v2/category/equipment";
const urlCreatures = "https://botw-compendium.herokuapp.com/api/v2/category/creatures";
const urlMaterials = "https://botw-compendium.herokuapp.com/api/v2/category/creatures";
const urlTreasure = "https://botw-compendium.herokuapp.com/api/v2/category/treasure";

// Element Ids
const name = $('#nameValue');
const category = $('#categoryValue');
const description = $('#descriptionValue');
const img = $('#imgValue');

// Functions

function korokFound {
    
}
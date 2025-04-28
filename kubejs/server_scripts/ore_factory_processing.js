if (global.packmode !== 'hard'){
    (() => {   

const id = global.id;

/*
 * Originally, TheLarkInn added a tag system based on RPM.
 * Since STM removed the Create Ccompatability, there is no point in these tags.
 * General structure remains from their PR
*/

const oreProcessableTiers = {
    'primitive': [
        { material: 'iron', secondary: 'nickel', tertiary: 'tin' },
        { material: 'magnetite', secondary: 'gold', tertiary: 'gold' },
        { material: 'copper', secondary: 'gold', tertiary: 'nickel' },
        { material: 'tin', secondary: 'iron', tertiary: 'zinc' },
        { material: 'sphalerite', secondary: 'gallium', tertiary: 'sulfur' },
        { material: 'galena', secondary: 'silver', tertiary: 'sulfur' },
        { material: 'stibnite', secondary: 'antimony', tertiary: 'sulfur' }
    ],
    
    'lv': [
        { material: 'coal', secondary: 'carbon', tertiary: 'thorium', quaternary: 'graphite' },  // check
        { material: 'sodalite', secondary: 'lazurite', tertiary: 'lapis', quaternary: 'kyanite' },  // check
        { material: 'realgar', secondary: 'sulfur', tertiary: 'antimony', quaternary: 'barite' },  // check
        { material: 'pentlandite', secondary: 'cobalt', tertiary: 'iron', quaternary: 'sulfur' },
        { material: 'silver', secondary: 'gold', tertiary: 'lead', quaternary: 'sulfur' },
        { material: 'gold', secondary: 'silver', tertiary: 'copper', quaternary: 'nickel' },
        { material: 'diamond', secondary: 'carbon', tertiary: 'graphite', quaternary: 'graphite' },  // check
        { material: 'emerald', secondary: 'beryllium', tertiary: 'aluminium', quaternary: 'aluminium' },  // check
        { material: 'ruby', secondary: 'chromium', tertiary: 'red_garnet', quaternary: 'cinnabar' },  // check
        { material: 'green_sapphire', secondary: 'aluminium', tertiary: 'sapphire', quaternary: 'almandine' },  // check
        { material: 'sapphire', secondary: 'aluminium', tertiary: 'green_sapphire', quaternary: 'almandine' },  // check
        { material: 'quartzite', secondary: 'certus_quartz', tertiary: 'opal', quaternary: 'barite' },  // check
        { material: 'certus_quartz', secondary: 'quartzite', tertiary: 'opal', quaternary: 'barite' },  // check
        { material: 'rock_salt', secondary: 'salt', tertiary: 'salt', quaternary: 'borax' },
        { material: 'saltpeter', secondary: 'salt', tertiary: 'potassium', quaternary: 'alunite' }  // check
    ],

    'mv': [
        { material: 'blue_topaz', secondary: 'bastnasite', tertiary: 'topaz', quaternary: 'topaz' },  // check
        { material: 'topaz', secondary: 'bastnasite', tertiary: 'blue_topaz', quaternary: 'blue_topaz' },  // check
        { material: 'spessartine', secondary: 'manganese', tertiary: 'red_garnet', quaternary: 'asbestos' },  // check
        { material: 'monazite', secondary: 'thorium', tertiary: 'thorium', quaternary: 'neodymium' },
        { material: 'apatite', secondary: 'tricalcium_phosphate', tertiary: 'tricalcium_phosphate', quaternary: 'phosphate' },
        { material: 'lepidolite', secondary: 'lithium', tertiary: 'lithium', quaternary: 'caesium' },
        { material: 'pyrochlore', secondary: 'apatite', tertiary: 'apatite', quaternary: 'calcium' },
        { material: 'pyrolusite', secondary: 'manganese', tertiary: 'manganese', quaternary: 'tantalite' }
    ],

    'hv': [
        { material: 'beryllium', secondary: 'emerald', tertiary: 'emerald', quaternary: 'beryllium' },
        { material: 'chalcopyrite', secondary: 'gold', tertiary: 'pyrite', quaternary: 'cobalt' },
        { material: 'bornite', secondary: 'gold', tertiary: 'pyrite', quaternary: 'cobalt' },
        { material: 'barite', secondary: 'pyrite', tertiary: 'pyrite', quaternary: 'chalcopyrite' },  // check
        { material: 'cassiterite', secondary: 'tin', tertiary: 'tin', quaternary: 'bismuth' },
        { material: 'tantalite', secondary: 'manganese', tertiary: 'niobium', quaternary: 'niobium' },
        { material: 'pollucite', secondary: 'caesium', tertiary: 'aluminium', quaternary: 'aluminium' }
    ],

    'ev': [
        { material: 'cooperite', secondary: 'palladium', tertiary: 'nickel', quaternary: 'nickel' },
        { material: 'bastnasite', secondary: 'neodymium', tertiary: 'neodymium', quaternary: 'rare_earth' },
        { material: 'tungstate', secondary: 'silver', tertiary: 'manganese', quaternary: 'lithium' },
        { material: 'bauxite', secondary: 'gallium', tertiary: 'grossular', quaternary: 'rutile' },
        { material: 'pitchblende', secondary: 'thorium', tertiary: 'thorium', quaternary: 'uraninite' },
        { material: 'ilmenite', secondary: 'iron', tertiary: 'iron', quaternary: 'rutile' },
        { material: 'molybdenite', secondary: 'molybdenum', tertiary: 'sulfur', quaternary: 'molybdenum' },
        // mystical agriculture
        { material: 'cobaltite', secondary: 'cobalt', tertiary: 'sulfur', quaternary: 'cobalt' },
        { material: 'chromite', secondary: 'iron', tertiary: 'magnesium', quaternary: 'iron' },
        { material: 'scheelite', secondary: 'manganese', tertiary: 'manganese', quaternary: 'molybdenum' }
    ],

    'iv': [
        { material: 'titanite', secondary: 'rutile', tertiary: 'rare_earth', quaternary: 'bauxite', quinary: 'pyrite' },
        { material: 'zapolite', secondary: 'lautarite', tertiary: 'iodargyrite', quaternary: 'titanite', quinary: 'tungstate' },
        { material: 'lautarite', secondary: 'clausthalite', tertiary: 'stibnite', quaternary: 'calaverite', quinary: 'sylvanite' },
        { material: 'iodargyrite', secondary: 'lautarite', tertiary: 'galena', quaternary: 'tungstate', quinary: 'iodargyrite' },
        { material: 'clausthalite', secondary: 'tiemannite', tertiary: 'klockmannite', quaternary: 'berzelianite', quinary: 'stibiopalladinite' },
        { material: 'crookesite', secondary: 'lautarite', tertiary: 'calaverite', quaternary: 'sylvanite', quinary: 'crookesite' },
        { material: 'calaverite', secondary: 'sylvanite', tertiary: 'clausthalite', quaternary: 'lautarite', quinary: 'calaverite' },
        { material: 'sylvanite', secondary: 'calaverite', tertiary: 'clausthalite', quaternary: 'bauxite', quinary: 'sylvanite' },
        { material: 'tiemannite', secondary: 'clausthalite', tertiary: 'klockmannite', quaternary: 'berzelianite', quinary: 'tiemannite' },
        { material: 'klockmannite', secondary: 'clausthalite', tertiary: 'tiemannite', quaternary: 'stibiopalladinite', quinary: 'klockmannite' },
        { material: 'stibiopalladinite', secondary: 'clausthalite', tertiary: 'berzelianite', quaternary: 'tiemannite', quinary: 'stibiopalladinite' },
        { material: 'berzelianite', secondary: 'umangite', tertiary: 'aguilarite', quaternary: 'polybasite', quinary: 'berzelianite' },
        { material: 'umangite', secondary: 'berzelianite', tertiary: 'aguilarite', quaternary: 'polybasite', quinary: 'umangite' },
        { material: 'aguilarite', secondary: 'berzelianite', tertiary: 'umangite', quaternary: 'polybasite', quinary: 'aguilarite' },
        { material: 'rheniite', secondary: 'molybdenite', tertiary: 'sulfur', quaternary: 'molybdenum', quinary: 'rheniite' }
    ]
};

    

const crushed_ore = (mat, amount) =>  {
    return `${amount}x gtceu:crushed_${mat}_ore`;
};
const dust = (mat, amount) => {
    return `${amount}x gtceu:${mat}_dust`;
};
const fluids = {
    water: 'minecraft:water 100',
    distilled_water: 'gtceu:distilled_water 100',
    sodium_persulfate: 'gtceu:sodium_persulfate 100',
    sodium_persulfate_5x: 'gtceu:sodium_persulfate 500'
};

/*
 * Fuel based ore processing.
 * Blocks 10x the recipe while only 9x the duration.
*/

const primitive_processing = (event, materialObj) => {
    [   { item: '2x #minecraft:coals', duration: 320, multiplier: 1, id: 'coals' },
        { item: '2x #gtceu:coal_dusts', duration: 320, multiplier: 1, id: 'coal_dusts' },
        { item: '2x #gtceu:coal_blocks', duration: 2880, multiplier: 10, id: 'coal_blocks' },
    ].forEach(fuel => {
        event.recipes.gtceu.primitive_ore_processing(id(`${materialObj.material}/${fuel.id}`))
            .itemInputs(crushed_ore(materialObj.material, fuel.multiplier), fuel.item)
            .inputFluids(fluids.water)
            .itemOutputs(dust(materialObj.material, fuel.multiplier))
            .chancedOutput(dust(materialObj.material, fuel.multiplier), 5000, 0)
            .chancedOutput(dust(materialObj.secondary, fuel.multiplier), 2500, 0)
            .chancedOutput(dust(materialObj.tertiary, fuel.multiplier), 1250, 0)
            .duration(fuel.duration);
    });
    
    event.recipes.gtceu.steam_ore_processing(id(`${materialObj.material}`))
            .itemInputs(crushed_ore(materialObj.material,  1))
            .inputFluids(fluids.water)
            .itemOutputs(dust(materialObj.material, 1))
            .chancedOutput(dust(materialObj.material,  1), 5000, 0)
            .chancedOutput(dust(materialObj.secondary,  1), 2500, 0)
            .chancedOutput(dust(materialObj.tertiary,  1), 1250, 0)
            .duration(240)
            .EUt(GTValues.VA[GTValues.ULV]);
};

/*
 * Copies the recipes from primitive ore processing, but without fuels.
 * Much faster than using coke fuel and generates more products per second than using blocks.
 * Chances are bossted.
*/
const electric_primitive_processing = (event, materialObj) => {
    event.recipes.gtceu.electric_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluids.water)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 4500, 0)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 0)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV]);
};

/*
 * Energy based ore processing.
 * Needs distilled water or sodium persulfate.
*/
const electric_processing = (event, materialObj, tier) => {
    const voltages = {
        'lv': GTValues.VA[GTValues.LV],
        'mv': GTValues.VA[GTValues.MV],
        'hv': GTValues.VA[GTValues.HV],
        'ev': GTValues.VA[GTValues.EV]
    }
    const fluid = (tier == 'lv' || tier == 'mv') ? fluids.distilled_water : fluids.sodium_persulfate;
    event.recipes.gtceu.electric_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluid)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 5000, 150)
        .chancedOutput(dust(materialObj.secondary, 1), 2500, 100)
        .chancedOutput(dust(materialObj.tertiary, 1), 1250, 50)
        .chancedOutput(dust(materialObj.quaternary, 1), 750, 100)
        .duration(320)
        .EUt(voltages[tier]);
};

/*
* Improved energy based primitive ore processing.
* Uses less energy and is quicker.
* Chances are boosted.
*/
const plant_primitive_processing = (event, materialObj) => {
   event.recipes.gtceu.plant_ore_processing(id(`${materialObj.material}`))
       .itemInputs(crushed_ore(materialObj.material, 1))
       .inputFluids(fluids.water)
       .itemOutputs(dust(materialObj.material, 1))
       .chancedOutput(dust(materialObj.material, 1), 9500, 50)
       .chancedOutput(dust(materialObj.secondary, 1), 6500, 100)
       .chancedOutput(dust(materialObj.tertiary, 1), 5250, 50)
       .duration(240)
       .EUt(GTValues.VHA[GTValues.LV]);
};

/*
 * Improved energy based ore processing.
 * Uses less energy and is quicker.
 * Chances are boosted.
*/
const plant_electric_processing = (event, materialObj, tier) => {
    const voltages = {
        'lv': GTValues.VHA[GTValues.LV],
        'mv': GTValues.VHA[GTValues.MV],
        'hv': GTValues.VHA[GTValues.HV],
        'ev': GTValues.VHA[GTValues.EV]
    }
    const fluid = (tier == 'lv' || tier == 'mv') ? fluids.distilled_water : fluids.sodium_persulfate;
    event.recipes.gtceu.plant_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluid)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 150)
        .chancedOutput(dust(materialObj.secondary, 1), 5500, 100)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 50)
        .chancedOutput(dust(materialObj.quaternary, 1), 1750, 100)
        .duration(240)
        .EUt(voltages[tier]);
};

/*
 * Final form of 1-step ore processing.
*/
const plant_ore_processing = (event, materialObj) => {
    event.recipes.gtceu.plant_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluids.sodium_persulfate_5x)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 150)
        .chancedOutput(dust(materialObj.secondary, 1), 5500, 100)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 50)
        .chancedOutput(dust(materialObj.quaternary, 1), 1750, 100)
        .chancedOutput(dust(materialObj.quinary, 1), 750, 150)
        .duration(320)
        .EUt(GTValues.VA[GTValues.IV]);
};

/* Final Product */
ServerEvents.recipes(event => {

    // Controllers
    if (global.packmode !== 'hard'){
        (() => {   
    event.shaped(Item.of('gtceu:primitive_ore_factory'), [
        'HRS',
        'PBR',
        'FRS'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:brass_rod',
        S: 'gtceu:brass_screw',
        P: 'gtceu:brass_plate',
        B: 'gtceu:firebricks',
        F: '#forge:tools/screwdrivers'
    }).id('start:shaped/primitive_ore_factory');

    // event.shaped(Item.of('gtceu:steam_ore_factory'), [   //Disabled Until Core Fix
    //     'HRS',
    //     'PBR',
    //     'FRS'
    // ], {
    //     H: '#forge:tools/hammers',
    //     R: 'gtceu:invar_rod',
    //     S: 'gtceu:invar_screw',
    //     P: 'gtceu:invar_plate',
    //     B: 'gtceu:steam_machine_casing',
    //     F: '#forge:tools/screwdrivers'
    // }).id('start:shaped/steam_ore_factory');
    })()
    }

    event.shaped(Item.of('gtceu:electric_ore_factory'), [
        'GCG', 
        'PLP', 
        'WPW'
    ], {
        G: 'gtceu:bronze_gear',
        C: '#gtceu:circuits/lv',
        P: 'gtceu:steel_plate',
        L: 'gtceu:lv_machine_hull',
        W: 'gtceu:tin_single_cable'
    }).id('start:shaped/electric_ore_factory');

    event.shaped(Item.of('gtceu:ore_processing_plant'), [
        'GCG',
        'PLP',
        'WPW'
    ], {
        G: 'gtceu:tungsten_carbide_gear',
        C: '#gtceu:circuits/iv',
        P: 'gtceu:tungsten_carbide_plate',
        L: 'gtceu:iv_machine_hull',
        W: 'gtceu:platinum_single_cable'
    }).id('start:shaped/ore_processing_plant');

    // Iterate over each tier and processable item and register the recipes
    Object.keys(oreProcessableTiers).forEach((tier) => {
        oreProcessableTiers[tier].forEach((item) => {
            if (tier == 'primitive') {
                primitive_processing(event, item);
                electric_primitive_processing(event, item);
                plant_primitive_processing(event, item);
            } else if (tier == 'iv') {
                plant_ore_processing(event, item);
            } else {
                electric_processing(event, item, tier);
                plant_electric_processing(event, item, tier);
            };
        });
    });
});
})()
}
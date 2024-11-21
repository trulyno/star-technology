ServerEvents.recipes(event => {
    
    event.recipes.create.mixing('3x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', '#forge:ingots/tin']).heatRequirement('lowheated');
    event.shapeless('3x gtceu:bronze_dust', ['gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:tin_dust']);

    event.recipes.create.mixing('1x gtceu:red_alloy_ingot', ['minecraft:copper_ingot', '4x minecraft:redstone']).heatRequirement('lowheated');
    event.shapeless('1x gtceu:red_alloy_dust', ['gtceu:copper_dust', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone']);

    event.recipes.create.mixing('3x gtceu:brass_ingot', ['3x minecraft:copper_ingot', '#forge:ingots/zinc']).heatRequirement('lowheated');
    event.shapeless('3x gtceu:brass_dust', ['gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:zinc_dust']);

    event.recipes.create.mixing('2x gtceu:invar_ingot', ['2x minecraft:iron_ingot', '#forge:ingots/nickel']).heatRequirement('lowheated');
    event.shapeless('2x gtceu:invar_dust', ['gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:nickel_dust']);

    event.recipes.create.mixing('1x gtceu:soul_infused_ingot', ['2x thermal_extra:soul_sand_dust', '#forge:ingots/invar']).heatRequirement('lowheated');
    event.shapeless('1x gtceu:soul_infused_dust', ['thermal_extra:soul_sand_dust', 'thermal_extra:soul_sand_dust', 'gtceu:invar_dust']);

})
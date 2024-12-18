
// ServerEvents.recipes(event => {

//     // event.shaped(Item.of('gtceu:primitive_alloy_smelter'), [
//     //     'HRS',
//     //     'PBR',
//     //     'FRS'
//     // ], {
//     //     H: '#forge:tools/hammers',
//     //     R: 'gtceu:bronze_rod',
//     //     S: 'gtceu:bronze_screw',
//     //     P: 'gtceu:bronze_plate',
//     //     B: 'gtceu:firebricks',
//     //     F: '#forge:tools/screwdrivers'
//     // });

//     // Red Alloy
//     event.recipes.gtceu.primitive_alloy_smelter('primitive_red_alloy_ingot_coal')
//         .itemInputs('minecraft:copper_ingot', '4x minecraft:redstone', '2x minecraft:coal')
//         .itemOutputs('gtceu:red_alloy_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(260);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_red_alloy_ingot_charcoal')
//         .itemInputs('minecraft:copper_ingot', '4x minecraft:redstone', '2x minecraft:charcoal')
//         .itemOutputs('gtceu:red_alloy_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(260);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_red_alloy_ingot_coke')
//         .itemInputs('minecraft:copper_ingot', '4x minecraft:redstone', 'gtceu:coke_gem')
//         .itemOutputs('gtceu:red_alloy_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(180);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_red_alloy_dust_coal')
//         .itemInputs('gtceu:copper_dust', '4x minecraft:redstone', '2x minecraft:coal')
//         .itemOutputs('gtceu:red_alloy_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(260);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_red_alloy_dust_charcoal')
//         .itemInputs('gtceu:copper_dust', '4x minecraft:redstone', '2x minecraft:charcoal')
//         .itemOutputs('gtceu:red_alloy_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(260);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_red_alloy_dust_coke')
//         .itemInputs('gtceu:copper_dust', '4x minecraft:redstone', 'gtceu:coke_gem')
//         .itemOutputs('gtceu:red_alloy_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(180);

//     // Invar
//     event.recipes.gtceu.primitive_alloy_smelter('primitive_invar_ingot_coal')
//         .itemInputs('2x minecraft:iron_ingot', 'gtceu:nickel_ingot', '2x minecraft:coal')
//         .itemOutputs('3x gtceu:invar_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(300);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_invar_ingot_charcoal')
//         .itemInputs('2x minecraft:iron_ingot', 'gtceu:nickel_ingot', '2x minecraft:charcoal')
//         .itemOutputs('3x gtceu:invar_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(300);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_invar_ingot_coke')
//         .itemInputs('2x minecraft:iron_ingot', 'gtceu:nickel_ingot', 'gtceu:coke_gem')
//         .itemOutputs('3x gtceu:invar_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(220);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_invar_dust_coal')
//         .itemInputs('2x gtceu:iron_dust', 'gtceu:nickel_dust', '2x minecraft:coal')
//         .itemOutputs('3x gtceu:invar_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(300);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_invar_dust_charcoal')
//         .itemInputs('2x gtceu:iron_dust', 'gtceu:nickel_dust', '2x minecraft:charcoal')
//         .itemOutputs('3x gtceu:invar_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(300);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_invar_dust_coke')
//         .itemInputs('2x gtceu:iron_dust', 'gtceu:nickel_dust', 'gtceu:coke_gem')
//         .itemOutputs('3x gtceu:invar_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(220);

//     // Soul Infused
//     event.recipes.gtceu.primitive_alloy_smelter('primitive_soul_infused_ingot_coal')
//         .itemInputs('gtceu:invar_ingot', '2x thermal_extra:soul_sand_dust', '2x minecraft:coal')
//         .itemOutputs('gtceu:soul_infused_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(300);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_soul_infused_ingot_charcoal')
//         .itemInputs('gtceu:invar_ingot', '2x thermal_extra:soul_sand_dust', '2x minecraft:charcoal')
//         .itemOutputs('gtceu:soul_infused_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(300);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_soul_infused_ingot_coke')
//         .itemInputs('gtceu:invar_ingot', '2x thermal_extra:soul_sand_dust', 'gtceu:coke_gem')
//         .itemOutputs('gtceu:soul_infused_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(260);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_soul_infused_dust_coal')
//         .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust', '2x minecraft:coal')
//         .itemOutputs('gtceu:soul_infused_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(200);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_soul_infused_dust_charcoal')
//         .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust', '2x minecraft:charcoal')
//         .itemOutputs('gtceu:soul_infused_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(300);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_soul_infused_dust_coke')
//         .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust', 'gtceu:coke_gem')
//         .itemOutputs('gtceu:soul_infused_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(260);

//     // Bronze
//     event.recipes.gtceu.primitive_alloy_smelter('primitive_bronze_ingot_coal')
//         .itemInputs('3x minecraft:copper_ingot', 'gtceu:tin_ingot', '2x minecraft:coal')
//         .itemOutputs('4x gtceu:bronze_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(220);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_bronze_ingot_charcoal')
//         .itemInputs('3x minecraft:copper_ingot', 'gtceu:tin_ingot', '2x minecraft:charcoal')
//         .itemOutputs('4x gtceu:bronze_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(220);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_bronze_ingot_coke')
//         .itemInputs('3x minecraft:copper_ingot', 'gtceu:tin_ingot', 'gtceu:coke_gem')
//         .itemOutputs('4x gtceu:bronze_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(200);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_bronze_dust_coal')
//         .itemInputs('3x gtceu:copper_dust', 'gtceu:tin_ingot', '2x minecraft:coal')
//         .itemOutputs('4x gtceu:bronze_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(220);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_bronze_dust_charcoal')
//         .itemInputs('3x gtceu:copper_dust', 'gtceu:tin_ingot', '2x minecraft:charcoal')
//         .itemOutputs('4x gtceu:bronze_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(220);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_bronze_dust_coke')
//         .itemInputs('3x gtceu:copper_dust', 'gtceu:tin_ingot', 'gtceu:coke_gem')
//         .itemOutputs('4x gtceu:bronze_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(200);

//     // Fireclay
//     event.recipes.gtceu.primitive_alloy_smelter('primitive_fireclay_coal')
//         .itemInputs('gtceu:brick_dust', 'gtceu:clay_dust', '2x minecraft:coal')
//         .itemOutputs('2x gtceu:firebrick', 'gtceu:small_dark_ash_dust')
//         .duration(220);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_fireclay_charcoal')
//         .itemInputs('gtceu:brick_dust', 'gtceu:clay_dust', '2x minecraft:charcoal')
//         .itemOutputs('2x gtceu:firebrick', 'gtceu:small_dark_ash_dust')
//         .duration(220);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_fireclay_coke')
//         .itemInputs('gtceu:brick_dust', 'gtceu:clay_dust', 'gtceu:coke_gem')
//         .itemOutputs('2x gtceu:firebrick', '2x gtceu:small_dark_ash_dust')
//         .duration(160);

//     // Brass
//     event.recipes.gtceu.primitive_alloy_smelter('primitive_brass_ingot_coal')
//         .itemInputs('3x minecraft:copper_ingot', 'gtceu:zinc_ingot', '2x minecraft:coal')
//         .itemOutputs('4x gtceu:brass_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(200);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_brass_ingot_charcoal')
//         .itemInputs('3x minecraft:copper_ingot', 'gtceu:zinc_ingot', '2x minecraft:charcoal')
//         .itemOutputs('4x gtceu:brass_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(200);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_brass_ingot_coke')
//         .itemInputs('3x minecraft:copper_ingot', 'gtceu:zinc_ingot', 'gtceu:coke_gem')
//         .itemOutputs('4x gtceu:brass_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(180);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_brass_dust_coal')
//         .itemInputs('3x gtceu:copper_dust', 'gtceu:zinc_ingot', '2x minecraft:coal')
//         .itemOutputs('4x gtceu:brass_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(200);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_brass_dust_charcoal')
//         .itemInputs('3x gtceu:copper_dust', 'gtceu:zinc_ingot', '2x minecraft:charcoal')
//         .itemOutputs('4x gtceu:brass_ingot', 'gtceu:small_dark_ash_dust')
//         .duration(200);

//     event.recipes.gtceu.primitive_alloy_smelter('primitive_brass_dust_coke')
//         .itemInputs('3x gtceu:copper_dust', 'gtceu:zinc_ingot', 'gtceu:coke_gem')
//         .itemOutputs('4x gtceu:brass_ingot', '2x gtceu:small_dark_ash_dust')
//         .duration(180);
// });
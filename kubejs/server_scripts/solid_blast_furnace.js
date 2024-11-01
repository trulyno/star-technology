ServerEvents.tags('item', event => {
    event.add('kubejs:sbf_fuels', [
        'minecraft:coal', 
        'gtceu:coke_gem', 
        'minecraft:charcoal', 
        'gtceu:charcoal_dust', 
        'gtceu:coal_dust',
        'kubejs:sugar_coke'
    ])
})


ServerEvents.recipes(event => {

    event.recipes.gtceu.coke_oven('sugar_coke')
        .itemOutputs('kubejs:sugar_coke')
        .outputFluids(Fluid.of('gtceu:creosote', 250))
        .itemInputs('4x minecraft:sugar_cane')

    event.shaped(Item.of('gtceu:solid_blast_furnace'), [
        'HRS',
        'PBR',
        'FRS'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:steel_rod',
        S: 'gtceu:steel_screw',
        P: 'gtceu:steel_plate',
        B: 'gtceu:solid_machine_casing',
        F: '#forge:tools/screwdrivers'
    });

    // Magnetite-Steel
    event.recipes.gtceu.solid_blast_furnace("sbf/magnetite_dust/silicon_dioxide/silicon")
       .itemInputs("6x gtceu:magnetite_dust", "2x gtceu:silicon_dust", "2x #kubejs:sbf_fuels")
       .itemOutputs("2x minecraft:iron_ingot", "6x gtceu:silicon_dioxide_dust", "2x gtceu:tiny_pile_of_dark_ashes")
       .duration(600)
    event.recipes.gtceu.solid_blast_furnace("sbf/iron_ingot/steel/silicon_dioxide")
       .itemInputs("minecraft:iron_ingot", "3x gtceu:silicon_dioxide_dust", "1x #kubejs:sbf_fuels")
       .itemOutputs("gtceu:steel_ingot", "gtceu:silicon_dust", "1x gtceu:tiny_pile_of_dark_ashes")
       .duration(300)


    // Sphalerite-Sulfur
    event.recipes.gtceu.solid_blast_furnace("sbf/sphalerite/sulfur/andesite")
        .itemInputs("2x gtceu:sphalerite_dust", "4x minecraft:andesite", "1x #kubejs:sbf_fuels")
        .itemOutputs("12x create:andesite_alloy", "1x gtceu:sulfur_dust", "1x gtceu:tiny_pile_of_dark_ashes")
        .duration(200)
});
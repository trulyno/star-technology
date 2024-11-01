
ServerEvents.recipes(event => {

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

    event.recipes.gtceu.solid_blast_furnace('sbf/magnetite_dust/silicon')
        .duration(600)
        .itemInputs(
            '4x gtceu:magnetite_dust',
            '2x gtceu:silicon_dust',
            '1x #kubejs:sbf_fuels'
        )
        .itemOutputs(
            '2x minecraft:iron_ingot',
            '6x gtceu:silicon_dioxide_dust'
        )
    event.recipes.gtceu.solid_blast_furnace('sbf/iron_ingot/silicon_dioxide')
        .duration(300)
        .itemInputs(
            'minecraft:iron_ingot',
            '3x gtceu:silicon_dioxide_dust',
            '1x #kubejs:sbf_fuels'
        )
        .itemOutputs(
            'gtceu:steel_ingot',
            'gtceu:silicon_dust'
        )
});
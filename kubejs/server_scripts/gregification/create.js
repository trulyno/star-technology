
ServerEvents.recipes(event => {

    event.recipes.gtceu.polarizer('energized_gold')
        .itemInputs('minecraft:gold_ingot')
        .itemOutputs('create_new_age:overcharged_gold')
        .duration(32)
        .EUt(16)

    event.recipes.gtceu.polarizer('energized_iron')
        .itemInputs('gtceu:magnetic_iron_ingot')
        .itemOutputs('create_new_age:overcharged_iron')
        .duration(16)
        .EUt(16)

    event.recipes.gtceu.polarizer('energized_diamond')
        .itemInputs('minecraft:diamond')
        .itemOutputs('create_new_age:overcharged_diamond')
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.bender('overcharged_iron_plate')
        .itemInputs('create_new_age:overcharged_iron')
        .itemOutputs('create_new_age:overcharged_iron_sheet')
        .duration(48)
        .EUt(24);

    event.recipes.gtceu.bender('overcharged_gold_plate')
        .itemInputs('create_new_age:overcharged_gold')
        .itemOutputs('create_new_age:overcharged_golden_sheet')
        .duration(196)
        .EUt(24);

    event.recipes.gtceu.wiremill('copper_wire')
        .itemInputs('gtceu:copper_plate')
        .itemOutputs('4x create_new_age:copper_wire')
        .duration(189)
        .EUt(7);

    event.recipes.gtceu.wiremill('iron_wire')
        .itemInputs('create_new_age:overcharged_iron_sheet')
        .itemOutputs('4x create_new_age:overcharged_iron_wire')
        .duration(321)
        .EUt(7);

    event.recipes.gtceu.wiremill('gold_wire')
        .itemInputs('create_new_age:overcharged_golden_sheet')
        .itemOutputs('4x create_new_age:overcharged_golden_wire')
        .duration(588)
        .EUt(7);

    event.recipes.gtceu.wiremill('diamond_wire')
        .itemInputs('create_new_age:overcharged_diamond')
        .itemOutputs('2x create_new_age:overcharged_diamond_wire')
        .duration(764)
        .EUt(7);

    event.remove({output: 'create:andesite_alloy'});
    event.shapeless('2x create:andesite_alloy', ['2x minecraft:iron_nugget', '2x exnihilosequentia:andesite_pebble']);
    event.shapeless('16x create:andesite_alloy', ['4x minecraft:andesite', '5x minecraft:iron_nugget']);
    
    event.shaped('create:precision_mechanism', [
        'NBN',
        'SPS',
        'NBN'
    ], {
        N: 'minecraft:iron_nugget',
        B: 'create:large_cogwheel',
        S: 'create:cogwheel',
        P: 'gtceu:gold_plate'
    });
   
});
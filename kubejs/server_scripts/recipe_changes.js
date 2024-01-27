const $RockBreakerCondition = Java.loadClass('com.gregtechceu.gtceu.common.recipe.RockBreakerCondition')  

ServerEvents.recipes(event => {

    event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust');

    event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot');

    event.campfireCooking('minecraft:glass', 'gtceu:glass_dust');

    event.replaceInput({id: 'create:crafting/kinetics/goggles'}, '#forge:plates/gold', 'gtceu:copper_plate');

    event.replaceInput({ id: 'gtceu:shaped/bronze_primitive_blast_furnace' },
        '#forge:plates/iron',
        'gtceu:wrought_iron_plate'
    );

    event.replaceInput({ id: 'gtceu:shaped/bronze_primitive_blast_furnace' },
        '#forge:rods/iron',
        'gtceu:wrought_iron_rod'
    );

    event.replaceInput({ id: 'gtceu:shaped/bronze_primitive_blast_furnace' },
        'gtceu:iron_screw',
        'gtceu:wrought_iron_screw'
    );

    event.recipes.create.mixing('3x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', '#forge:ingots/tin']).heatRequirement('lowheated');
    event.recipes.create.mixing('3x gtceu:brass_ingot', ['3x minecraft:copper_ingot', '#forge:ingots/zinc']).heatRequirement('lowheated');

    event.shaped(Item.of('gtceu:wood_plate'), [
        'SSS'
    ], {
        S: '#minecraft:wooden_slabs'
    });

    event.shaped(Item.of('gtceu:glass_tube'), [
        '   ',
        'PPP',
        'PPP'
    ], {
        P: '#forge:glass_panes'
    });

    event.recipes.create.mixing('4x thermal:cured_rubber', ['3x thermal:rubber', '#forge:dusts/sulfur']).heatRequirement('lowheated');
    event.recipes.create.pressing('gtceu:rubber_plate', 'thermal:cured_rubber');

    event.recipes.gtceu.fluid_solidifier('gtceu:raw_rubber')
        .inputFluids('thermal:latex 250')
        .itemOutputs('thermal:rubber')
        .duration(120)
        .EUt(8);

    event.recipes.gtceu.extractor('nether_agglomeration')
        .itemInputs('gtceu:netherrack_dust')
        .itemOutputs('mysticalagriculture:nether_agglomeratio')
        .duration(120)
        .EUt(80);

    event.recipes.gtceu.extractor('end_agglomeration')
        .itemInputs('gtceu:endstone_dust')
        .itemOutputs('mysticalagriculture:end_agglomeratio')
        .duration(120)
        .EUt(80);

    event.recipes.gtceu.mixer('nether_air_mix')
        .itemInputs('mysticalagriculture:nether_agglomeratio')
        .inputFluids('gtceu:air 12000')
        .outputFluids('gtceu:nether_air 12000')
        .duration(1200)
        .EUt(256);

    event.recipes.gtceu.mixer('ender_air_mix')
        .itemInputs('mysticalagriculture:end_agglomeratio')
        .inputFluids('gtceu:nether_air 6000')
        .outputFluids('gtceu:ender_air 6000')
        .duration(1200)
        .EUt(256);

    event.recipes.gtceu.large_chemical_reactor('easy_netherrack')
        .itemInputs('16x minecraft:redstone')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('32x minecraft:netherrack')
        .duration(2400)
        .EUt(20)
        .circuit(0);

    event.recipes.gtceu.large_chemical_reactor('easy_endstone')
        .itemInputs('16x minecraft:glowstone_dust')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('32x minecraft:end_stone')
        .duration(2400)
        .EUt(20)
        .circuit(0);

    event.recipes.gtceu.mixer('naquadic_netherite')
        .itemInputs('3x gtceu:naquadah_dust', '5x gtceu:pure_netherite_dust', '2x gtceu:caesium_dust', '5x gtceu:cerium_dust')
        .inputFluids('gtceu:fluorine 12000', 'gtceu:oxygen 32000')
        .itemOutputs('59x gtceu:naquadic_netherite_dust')
        .duration(7600)
        .EUt(6400);

    event.recipes.gtceu.mixer('weapon_grade_naquadah')
        .itemInputs('2x gtceu:pure_netherite_dust', '5x gtceu:neutronium_dust')
        .inputFluids('gtceu:naquadria 7000', 'gtceu:fluorine 16000')
        .itemOutputs('30x gtceu:weapon_grade_naquadah_dust')
        .duration(1200)
        .EUt(346000);

    event.recipes.gtceu.alloy_smelter('rubber_sheet_from_thermal')
        .itemInputs('2x thermal:cured_rubber')
        .notConsumable('gtceu:plate_casting_mold')
        .itemOutputs('gtceu:rubber_plate')
        .duration(10)
        .EUt(7);

    event.recipes.gtceu.extruder('rubber_sheet_from_thermal_extruder')
        .itemInputs('thermal:cured_rubber')
        .notConsumable('gtceu:plate_extruder_mold')
        .itemOutputs('gtceu:rubber_plate')
        .duration(5)
        .EUt(56);

    event.recipes.gtceu.extractor('rubber_fluid_from_thermal')
        .itemInputs('thermal:cured_rubber')
        .outputFluids('gtceu:rubber 144')
        .duration(5)
        .EUt(30);

    const types = ['soul_infused', 'signalum', 'lumium', 'enderium', 'shellite', 'twinite', 'dragonsteel', 'prismalium', 'melodium', 'stellarium', 'austenitic_stainless_steel_304', 'inconel_625'];

    types.forEach(element => {
        event.shaped(Item.of(`2x kubejs:${element}_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:${element}_plate`,
            F: `gtceu:${element}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        });

        event.recipes.gtceu.assembler(`${element}_casing`)
            .itemInputs(`6x gtceu:${element}_plate`, `gtceu:${element}_frame`)
            .itemOutputs(`2x kubejs:${element}_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6);
    });

    event.shaped(Item.of('2x gtceu:atomic_casing'), [
        'PHP',
        'PFP',
        'PWP'
    ], {
        P: 'gtceu:trinaquadalloy_double_plate',
        F: 'gtceu:trinaquadalloy_frame',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    });

    event.recipes.gtceu.assembler('atomic_casing')
        .itemInputs('6x gtceu:trinaquadalloy_double_plate', 'gtceu:trinaquadalloy_frame')
        .itemOutputs('2x gtceu:atomic_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);

    event.recipes.gtceu.rock_breaker('blackstone')
        .notConsumable('minecraft:blackstone')
        .itemOutputs('minecraft:blackstone')
        .duration(16)
        .EUt(7)
        ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
        ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
        .addCondition($RockBreakerCondition.INSTANCE);

    event.shaped(Item.of('create_new_age:carbon_brushes'), [
        'SCS',
        'KsK',
        'SSS'
    ], {
        S: 'gtceu:steel_plate',
        C: '#gtceu:circuits/lv',
        K: 'minecraft:charcoal',
        s: 'create:shaft'
    });

    event.shaped(Item.of('create_new_age:magnetite_block'), [
        'SMS',
        'MSM',
        'SMS'
    ], {
        S: 'minecraft:stone',
        M: 'gtceu:magnetite_dust'
    });

    event.shaped(Item.of('3x create_new_age:redstone_magnet'), [
        'MRM',
        'RBR',
        'MRM'
    ], {
        B: 'create_new_age:magnetite_block',
        R: 'minecraft:redstone',
        M: 'gtceu:magnetite_dust'
    });

    event.recipes.gtceu.assembler('rocket_boots') 
        .itemInputs('minecraft:iron_boots', '8x gtceu:carbon_fiber_plate', '2x gtceu:mv_sodium_battery', '2x gtceu:power_thruster')
        .itemOutputs(Item.of('jetboots:jetboots', '{bml-item-xp:0,energy:0,jetboots-muffled:1b,jetboots-upgrade-muffled:1b,jetboots-upgrade-shock-absorber:1b,jetboots-upgrade-thruster:1b,max_energy:2880000}'))
        .duration(3600)
        .EUt(120);

    event.recipes.gtceu.macerator('plutonium239')
        .itemInputs('nuclearcraft:plutonium_239')
        .itemOutputs('gtceu:plutonium_dust')
        .duration(40)
        .EUt(20);

    event.recipes.gtceu.macerator('plutonium241')
        .itemInputs('nuclearcraft:plutonium_241')
        .itemOutputs('gtceu:plutonium_241_dust')
        .duration(40)
        .EUt(20);

    event.shaped(Item.of('3x create:belt_connector'), [
        'RRR'
    ], {
        R: 'gtceu:rubber_plate'
    });

    event.recipes.create.pressing('gtceu:lead_plate', 'gtceu:lead_ingot');
    event.recipes.create.pressing('gtceu:silver_plate', 'gtceu:silver_ingot');
    event.recipes.create.pressing('gtceu:tin_plate', 'gtceu:tin_ingot');
    event.recipes.create.pressing('gtceu:zinc_plate', 'gtceu:zinc_ingot');
    event.recipes.create.pressing('gtceu:bronze_plate', 'gtceu:bronze_ingot');
  
    event.replaceInput({id: 'enderchests:ender_pouch'}, 'minecraft:leather', 'gtceu:carbon_fiber_plate');
});
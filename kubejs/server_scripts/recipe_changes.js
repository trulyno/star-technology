// const $RockBreakerCondition = Java.loadClass('com.gregtechceu.gtceu.common.recipe.RockBreakerCondition')  

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

    event.replaceInput({ id: 'gtceu:macerator/macerate_nether_star_lens' },
        '#forge:lenses/white',
        'gtceu:nether_star_lens'
    );

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

    event.shaped(Item.of('8x gtceu:compressed_fireclay'), [
        'DDD',
        'DMD',
        'DDD'
    ], {
        'D': 'gtceu:fireclay_dust',
        'M': 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form');

    event.recipes.create.mixing('4x thermal:cured_rubber', ['3x thermal:rubber', '#forge:dusts/sulfur']).heatRequirement('lowheated');

    event.recipes.create.pressing('gtceu:rubber_plate', 'thermal:cured_rubber');

    event.recipes.gtceu.fluid_solidifier('gtceu:raw_rubber')
        .inputFluids('thermal:latex 250')
        .itemOutputs('thermal:rubber')
        .duration(120)
        .EUt(8);

    event.recipes.gtceu.extractor('latex_extraction')
        .itemInputs('thermal:rubber')
        .outputFluids('thermal:latex 250')
        .duration(120)
        .EUt(8);

    event.recipes.gtceu.chemical_reactor('latex_rubber')
        .itemInputs('3x thermal:rubber', 'gtceu:sulfur_dust')
        .outputFluids('gtceu:rubber 576')
        .duration(240)
        .EUt(8);

    //Recipe conflict fix
    //ethane+chlorine
    event.remove({id: 'gtceu:chemical_reactor/vinyl_chloride_from_ethane'})
    event.recipes.gtceu.chemical_reactor('vinyl_chloride_from_ethane')
        .inputFluids('gtceu:chlorine 4000', 'gtceu:ethane 1000')
        .outputFluids('gtceu:vinyl_chloride 1000','gtceu:hydrochloric_acid 3000')
        .duration(160)
        .EUt(30)
        .circuit(1);

    //remove the code above when GT fixes it
    event.remove({id: 'gtceu:chemical_reactor/dichloroethane'})
    event.recipes.gtceu.chemical_reactor('dichloroethane')
        .inputFluids('gtceu:ethane 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:dichloroethane 1000','gtceu:hydrochloric_acid 2000')
        .duration(200)
        .EUt(120)
        .circuit(0);

    event.recipes.gtceu.large_chemical_reactor('latex_rubber')
        .itemInputs('3x thermal:rubber', 'gtceu:sulfur_dust')
        .outputFluids('gtceu:rubber 576')
        .duration(240)
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

    const types = ['soul_infused', 'signalum', 'lumium', 'enderium', 'shellite', 'twinite', 'dragonsteel', 'prismalium', 'melodium', 'stellarium', 'austenitic_stainless_steel_304', 'inconel_625', 'birmabright', 'duralumin', 'hydronalium', 'beryllium_aluminium_alloy', 'elgiloy', 'beryllium_bronze', 'silicon_bronze', 'kovar', 'zamak', 'tumbaga', 'sterling_silver', 'blue_steel', 'red_steel'];

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
        P: 'gtceu:double_trinaquadalloy_plate',
        F: 'gtceu:trinaquadalloy_frame',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    });

    event.recipes.gtceu.assembler('atomic_casing')
        .itemInputs('6x gtceu:double_trinaquadalloy_plate', 'gtceu:trinaquadalloy_frame')
        .itemOutputs('2x gtceu:atomic_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);

    event.recipes.gtceu.rock_breaker('blackstone')
        .notConsumable('minecraft:blackstone')
        .itemOutputs('minecraft:blackstone')
        .duration(16)
        .EUt(7)
        .addDataString("fluidA", "minecraft:lava")
        .addDataString("fluidB", "minecraft:water");
        // .addCondition($RockBreakerCondition.INSTANCE);

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

    //plates
    ['lead','silver','tin','zinc','bronze','red_alloy','nickel','invar','soul_infused','cobalt_brass','wrought_iron'].forEach(type => {
        event.recipes.create.pressing(`gtceu:${type}_plate`,`gtceu:${type}_ingot`);
    });
  
    event.replaceInput({id: 'enderchests:ender_pouch'}, 'minecraft:leather', 'gtceu:carbon_fiber_plate');
    event.shaped(Item.of('create_new_age:netherite_magnet'), [
        'MNM',
        'NEN',
        'MNM'
    ], {
        M: 'create_new_age:fluxuateted_magnetite',
        N: 'gtceu:neodymium_ingot',
        E: 'gtceu:energium_dust'
    });

    event.recipes.thermal.lapidary_fuel('gtceu:diatron_gem', 750000);
    event.recipes.thermal.lapidary_fuel('gtceu:flawless_diatron_gem', 750000 * 2.5);
    event.recipes.thermal.lapidary_fuel('gtceu:exquisite_diatron_gem', 750000 * 6.25);

    event.recipes.gtceu.mixer('diatron_dust')
        .itemInputs('3x gtceu:energium_dust', '2x gtceu:diamond_dust')
        .itemOutputs('5x gtceu:diatron_dust')
        .duration(200)
        .EUt(480);

    event.recipes.gtceu.autoclave('diatron_water')
        .itemInputs('gtceu:diatron_dust')
        .inputFluids('minecraft:water 250')
        .chancedOutput('gtceu:diatron_gem', 7000, 1000)
        .duration(1200)
        .EUt(24);

    event.recipes.gtceu.autoclave('diatron_dis_water')
        .itemInputs('gtceu:diatron_dust')
        .inputFluids('gtceu:distilled_water 50')
        .itemOutputs('gtceu:diatron_gem')
        .duration(600)
        .EUt(24);

    event.recipes.gtceu.mixer('birmabright')
        .itemInputs('7x gtceu:aluminium_dust', '2x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:birmabright_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu.mixer('duralumin')
        .itemInputs('4x gtceu:aluminium_dust', '3x gtceu:copper_dust', '1x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('9x gtceu:duralumin_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu.mixer('beryllium_aluminium_alloy')
        .itemInputs('7x gtceu:beryllium_dust', '1x gtceu:aluminium_dust')
        .itemOutputs('8x gtceu:beryllium_aluminium_alloy_dust')
        .duration(310)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu.mixer('hydronalium')
        .itemInputs('6x gtceu:aluminium_dust', '3x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:hydronalium_dust')
        .duration(410)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(2);

    event.recipes.gtceu.mixer('elgiloy')
        .itemInputs('4x gtceu:cobalt_dust', '2x gtceu:chromium_dust', '1x gtceu:nickel_dust', '1x gtceu:steel_dust', '1x gtceu:molybdenum_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:elgiloy_dust')
        .duration(420)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.mixer('beryllium_bronze')
        .itemInputs('10x gtceu:copper_dust', '1x gtceu:beryllium_dust')
        .itemOutputs('11x gtceu:beryllium_bronze_dust')
        .duration(290)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu.mixer('silicon_bronze')
        .itemInputs('32x gtceu:copper_dust', '2x gtceu:silicon_dust', '1x gtceu:manganese_dust')
        .itemOutputs('35x gtceu:silicon_bronze_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu.mixer('kovar')
        .itemInputs('18x gtceu:iron_dust', '11x gtceu:nickel_dust', '6x gtceu:cobalt_dust')
        .itemOutputs('35x gtceu:kovar_dust')
        .duration(450)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu.mixer('zamak')
        .itemInputs('1x gtceu:zinc_dust', '4x gtceu:aluminium_dust', '3x gtceu:copper_dust')
        .itemOutputs('8x gtceu:zamak_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu.mixer('tumbaga')
        .itemInputs('20x gtceu:copper_dust', '6x gtceu:gold_dust', '1x gtceu:silver_dust')
        .itemOutputs('27x gtceu:tumbaga_dust')
        .duration(470)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(4);

    event.recipes.gtceu.assembler('multiblock_upgrade_kit')
        .itemInputs('thermal:lumium_glass', '#gtceu:circuits/ev', '2x gtceu:double_signalum_plate', '12x gtceu:cobalt_foil')
        .itemOutputs('kubejs:multiblock_upgrade_kit')
        .duration(800)
        .EUt(GTValues.V[GTValues.HV]);

    event.recipes.create.item_application('gtceu:t_large_bender', ['gtceu:hv_bender', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_centrifuge', ['gtceu:hv_centrifuge', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_electrolyzer', ['gtceu:hv_electrolyzer', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_extruder', ['gtceu:hv_extruder', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_forming_press', ['gtceu:hv_forming_press', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_lathe', ['gtceu:hv_lathe', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_mixer', ['gtceu:hv_mixer', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_ore_washer', ['gtceu:hv_ore_washer', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_sifter', ['gtceu:hv_sifter', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_thermal_centrifuge', ['gtceu:hv_thermal_centrifuge', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_wiremill', ['gtceu:hv_wiremill', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:t_large_macerator', ['gtceu:hv_macerator', 'kubejs:multiblock_upgrade_kit']);
    event.recipes.create.item_application('gtceu:large_rock_crusher', ['gtceu:hv_rock_crusher', 'kubejs:multiblock_upgrade_kit']);

    // Mycelium Leather
    event.recipes.create.pressing('kubejs:compressed_mycelium', 'kubejs:mycelium_growth');
    event.smoking('kubejs:smoked_mycelium', 'kubejs:compressed_mycelium');
    event.recipes.create.pressing('minecraft:leather', 'kubejs:smoked_mycelium');

    // Warping recipes
    [{input: 'architects_palette:abyssaline_lamp', output: 'architects_palette:hadaline_lamp'},
        {input: 'architects_palette:abyssaline_pillar', output: 'architects_palette:hadaline_pillar'},
        {input: 'architects_palette:abyssaline_bricks', output: 'architects_palette:hadaline_bricks'},
        {input: 'architects_palette:chiseled_abyssaline_bricks', output: 'chiseled_architects_palette:chiseled_hadaline_bricks'},
        {input: 'architects_palette:sunstone', output: 'architects_palette:moonstone'},
        {input: 'gtceu:steel_ingot', output: 'architects_palette:unobtanium'},
        {input: 'minecraft:granite', output: 'architects_palette:onyx'},
        {input: '#minecraft:logs', output: 'architects_palette:twisted_log'},
        {input: 'architects_palette:abyssaline', output: 'architects_palette:hadaline'},
        {input: 'architects_palette:abyssaline_tiles', output: 'architects_palette:hadaline_tiles'},
        {input: '#minecraft:planks', output: 'architects_palette:twisted_planks'},
        {input: 'minecraft:diorite', output: 'architects_palette:nebulite'},
        {input: 'architects_palette:rotten_flesh_block', output: 'architects_palette:entrails'},
        {input: 'minecraft:blackstone', output: 'architects_palette:craterstone'},
        {input: 'minecraft:andesite', output: 'architects_palette:esoterrack'},
        {input: 'minecraft:polished_blackstone_bricks', output: 'architects_palette:moonshale_bricks'},
        {input: 'minecraft:basalt', output: 'architects_palette:moonshale'},
        {input: '#minecraft:saplings', output: 'architects_palette:twisted_sapling'},
        {input: '#minecraft:leaves', output: 'architects_palette:twisted_leaves'}
    ].forEach((prop) => {
        event.recipes.create.haunting(Item.of(prop.output), Item.of(prop.input));
    });

});

BlockEvents.rightClicked('minecraft:grass_block', event => {
    if (event.player.isCrouching() && event.player.getMainHandItem() == null) {
        if (Math.random() < 0.75) {
            event.block.popItemFromFace(Item.of('exnihilosequentia:stone_pebble'), 'up');
        }
        if (Math.random() < 0.5) {
            event.block.popItemFromFace(Item.of('exnihilosequentia:andesite_pebble'), 'up');
        }
        if (Math.random() < 0.5) {
            event.block.popItemFromFace(Item.of('exnihilosequentia:granite_pebble'), 'up');
        }
        if (Math.random() < 0.5) {
            event.block.popItemFromFace(Item.of('exnihilosequentia:diorite_pebble'), 'up');
        }
    }
});

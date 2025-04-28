// const $RockBreakerCondition = Java.loadClass('com.gregtechceu.gtceu.common.recipe.RockBreakerCondition')  

ServerEvents.recipes(event => {
    const id = global.id;

    if (global.packmode !== 'hard'){
        (() => {   
    
    event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust').id('start:pressing/compressed_fireclay');

    event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot');

    event.campfireCooking('minecraft:glass', 'gtceu:glass_dust');

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
    })()
    }


    event.replaceInput({id: 'create:crafting/kinetics/goggles'}, '#forge:plates/gold', 'gtceu:copper_plate');

    event.replaceInput({ id: 'gtceu:macerator/macerate_nether_star_lens' },
        '#forge:lenses/white',
        'gtceu:nether_star_lens'
    );

    event.replaceInput({ input: 'farmersdelight:onion'},
        'farmersdelight:onion',
        '#forge:crops/onion'
    );

    event.replaceInput({ id: 'thermal:tools/satchel'},
        '#thermal:rockwool',
        '#minecraft:wool'
    );

    event.replaceInput({ input: 'farmersdelight:onion'},
        'farmersdelight:onion',
        '#forge:crops/onion'
    );

    event.replaceInput({ id: 'thermal:tools/satchel'},
        '#thermal:rockwool',
        '#minecraft:wool'
    );

    ['tiled','framed','horizontal_framed','vertical_framed'].forEach(type => {
        event.remove({ id: `create:smelting/glass_pane_from_${type}_glass_pane`})
    });

    event.remove({ id: 'create:splashing/stained_glass'});

    if (global.packmode !== 'hard'){
        (() => {   
   event.shaped(Item.of('gtceu:wood_plate'), [
        'SSS'
    ], {
        S: '#minecraft:wooden_slabs'
    }).id('start:shaped/wood_plate');

    // glass tube shenanigans
    event.shaped(Item.of('2x gtceu:glass_tube'), [
        '   ',
        'PPP',
        'PPP'
    ], {
        P: 'minecraft:glass_pane'
    }).id('start:shaped/glass_tube');

    event.shaped(Item.of('8x gtceu:compressed_fireclay'), [
        'DDD',
        'DMD',
        'DDD'
    ], {
        'D': 'gtceu:fireclay_dust',
        'M': 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form').id('start:shaped/compressed_fireclay');

    event.recipes.create.pressing('gtceu:rubber_plate', 'thermal:cured_rubber').id('start:pressing/rubber_plate');

    event.recipes.gtceu.fluid_solidifier(id('raw_rubber'))
        .inputFluids('thermal:latex 250')
        .itemOutputs('thermal:rubber')
        .duration(120)
        .EUt(8);

    event.recipes.gtceu.extractor(id('latex_extraction'))
        .itemInputs('thermal:rubber')
        .outputFluids('thermal:latex 250')
        .duration(120)
        .EUt(8);

    event.recipes.gtceu.chemical_reactor(id('latex_rubber'))
        .itemInputs('3x thermal:rubber', 'gtceu:sulfur_dust')
        .outputFluids('gtceu:rubber 576')
        .duration(240)
        .EUt(8);
    })()
    }    

    //Recipe conflict fix: ethane+chlorine
    event.remove({id: 'gtceu:chemical_reactor/vinyl_chloride_from_ethane'})
    event.recipes.gtceu.chemical_reactor(id('vinyl_chloride_from_ethane'))
        .inputFluids('gtceu:chlorine 4000', 'gtceu:ethane 1000')
        .outputFluids('gtceu:vinyl_chloride 1000','gtceu:hydrochloric_acid 3000')
        .duration(160)
        .EUt(30)
        .circuit(2);

    if (global.packmode !== 'hard'){
        (() => {   
    event.recipes.gtceu.large_chemical_reactor(id('latex_rubber'))
        .itemInputs('3x thermal:rubber', 'gtceu:sulfur_dust')
        .outputFluids('gtceu:rubber 576')
        .duration(240)
        .EUt(8);
    })()
    }

    event.recipes.gtceu.extractor(id('nether_agglomeration'))
        .itemInputs('gtceu:netherrack_dust')
        .itemOutputs('mysticalagriculture:nether_agglomeratio')
        .duration(120)
        .EUt(80);

    event.recipes.gtceu.extractor(id('end_agglomeration'))
        .itemInputs('gtceu:endstone_dust')
        .itemOutputs('mysticalagriculture:end_agglomeratio')
        .duration(120)
        .EUt(80);

    event.recipes.gtceu.mixer(id('nether_air_mix'))
        .itemInputs('mysticalagriculture:nether_agglomeratio')
        .inputFluids('gtceu:air 12000')
        .outputFluids('gtceu:nether_air 12000')
        .duration(1200)
        .EUt(256);

    event.recipes.gtceu.mixer(id('ender_air_mix'))
        .itemInputs('mysticalagriculture:end_agglomeratio')
        .inputFluids('gtceu:nether_air 6000')
        .outputFluids('gtceu:ender_air 6000')
        .duration(1200)
        .EUt(256);

    event.recipes.gtceu.large_chemical_reactor(id('easy_netherrack'))
        .itemInputs('16x minecraft:redstone')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('32x minecraft:netherrack')
        .duration(2400)
        .EUt(20)
        .circuit(0);

    event.recipes.gtceu.large_chemical_reactor(id('easy_endstone'))
        .itemInputs('16x minecraft:glowstone_dust')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('32x minecraft:end_stone')
        .duration(2400)
        .EUt(20)
        .circuit(0);

    event.recipes.gtceu.mixer(id('naquadic_netherite'))
        .itemInputs('3x gtceu:naquadah_dust', '5x gtceu:pure_netherite_dust', '2x gtceu:caesium_dust', '5x gtceu:cerium_dust')
        .inputFluids('gtceu:fluorine 12000', 'gtceu:oxygen 32000')
        .itemOutputs('59x gtceu:naquadic_netherite_dust')
        .duration(7600)
        .EUt(6400);

    event.recipes.gtceu.mixer(id('weapon_grade_naquadah'))
        .itemInputs('2x gtceu:pure_netherite_dust', '5x gtceu:neutronium_dust')
        .inputFluids('gtceu:naquadria 1008', 'gtceu:fluorine 16000')
        .itemOutputs('30x gtceu:weapon_grade_naquadah_dust')
        .duration(1200)
        .EUt(346000);

    event.recipes.gtceu.alloy_smelter(id('rubber_sheet_from_thermal'))
        .itemInputs('2x thermal:cured_rubber')
        .notConsumable('gtceu:plate_casting_mold')
        .itemOutputs('gtceu:rubber_plate')
        .duration(10)
        .EUt(7);

    event.recipes.gtceu.extruder(id('rubber_sheet_from_thermal_extruder'))
        .itemInputs('thermal:cured_rubber')
        .notConsumable('gtceu:plate_extruder_mold')
        .itemOutputs('gtceu:rubber_plate')
        .duration(5)
        .EUt(56);

    event.recipes.gtceu.extractor(id('rubber_fluid_from_thermal'))
        .itemInputs('thermal:cured_rubber')
        .outputFluids('gtceu:rubber 144')
        .duration(5)
        .EUt(30);

    if (global.packmode !== 'hard'){
        (() => {   
    event.shaped(Item.of('gtceu:rubber_plate'), [
        'H',
        'R',
        'R'
    ], {
        H: '#forge:tools/hammers',
        R: 'thermal:cured_rubber'
    }).id('start:shaped/rubber_plate');
    })()
    }

    const casing = (type,material,casing_id) => {
        event.shaped(Item.of(`2x ${casing_id}:${type}_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:${material}_plate`,
            F: `gtceu:${material}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:shaped/${type}_casing`);

        event.recipes.gtceu.assembler(id(`${type}_casing`))
            .itemInputs(`6x gtceu:${material}_plate`, `gtceu:${material}_frame`)
            .itemOutputs(`2x ${casing_id}:${type}_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6);
    };

    casing('soul_infused','soul_infused' ,'kubejs');
    casing('signalum','signalum' ,'kubejs');
    casing('lumium','lumium' ,'kubejs');
    casing('enderium','enderium' ,'kubejs');
    casing('shellite','shellite' ,'kubejs');
    casing('twinite','twinite' ,'kubejs');
    casing('dragonsteel','dragonsteel' ,'kubejs');
    casing('prismalium','prismalium' ,'kubejs');
    casing('melodium','melodium' ,'kubejs');
    casing('stellarium','stellarium' ,'kubejs');
    casing('ancient_runicalium','ancient_runicalium' ,'kubejs');
    casing('austenitic_stainless_steel_304','austenitic_stainless_steel_304' ,'kubejs');
    casing('inconel_625','inconel_625' ,'kubejs');
    casing('birmabright','birmabright' ,'kubejs');
    casing('duralumin','duralumin' ,'kubejs');
    casing('hydronalium','hydronalium' ,'kubejs');
    casing('beryllium_aluminium_alloy','beryllium_aluminium_alloy' ,'kubejs');
    casing('elgiloy','elgiloy' ,'kubejs');
    casing('beryllium_bronze','beryllium_bronze' ,'kubejs');
    casing('silicon_bronze','silicon_bronze' ,'kubejs');
    casing('kovar','kovar' ,'kubejs');
    casing('zamak','zamak' ,'kubejs');
    casing('tumbaga','tumbaga' ,'kubejs');
    casing('sterling_silver','sterling_silver' ,'kubejs');
    casing('blue_steel','blue_steel' ,'kubejs');
    casing('red_steel','red_steel' ,'kubejs');
    casing('enriched_naquadah_machine','enriched_naquadah' ,'kubejs');

    const casingDouble = (type,material,casing_id) => {
        event.shaped(Item.of(`${casing_id}:${type}_casing`,2), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:double_${material}_plate`,
            F: `gtceu:${material}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:shaped/${type}_casing`);

        event.recipes.gtceu.assembler(id(`${type}_casing`))
            .itemInputs(`6x gtceu:double_${material}_plate`, `gtceu:${material}_frame`)
            .itemOutputs(`2x ${casing_id}:${type}_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6);
    };

    casingDouble('atomic','trinaquadalloy','gtceu');
    casingDouble('noble_mixing','astrenalloy_nx','kubejs');
    casingDouble('quake_proof','thacoloy_nq_42x','kubejs');

    event.recipes.gtceu.assembler(id('silicone_rubber_casing'))
        .itemInputs('gtceu:solid_machine_casing') 
        .inputFluids('gtceu:silicone_rubber 216')
        .itemOutputs('kubejs:silicone_rubber_casing')
        .duration(50)
        .EUt(GTValues.VH[GTValues.MV])
        .circuit(6);

    const firebox = (type,material,casing_id) => {
        event.shaped(Item.of(`2x ${casing_id}:${type}_firebox_casing`), [
            'PRP',
            'RFR',
            'PRP'
        ], {
            P: `gtceu:${material}_plate`,
            F: `gtceu:${material}_frame`,
            R: `gtceu:${material}_rod`
        }).id(`start:${type}_firebox_casing`);
    };

    firebox('enriched_naquadah','enriched_naquadah','start_core')

    const gearbox = (type,material,casing_id) => {
        event.shaped(Item.of(`2x ${casing_id}:${type}_gearbox`), [
            'PHP',
            'GFG',
            'PWP'
        ], {
            P:  `gtceu:${material}_plate`,
            F:  `gtceu:${material}_frame`,
            G:  `gtceu:${material}_gear`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:${type}_gearbox`);
    
        event.recipes.gtceu.assembler(id(`${material}_gearbox`))
            .itemInputs(`4x gtceu:${material}_plate`,`2x gtceu:${material}_gear`,`gtceu:${material}_frame`)
            .itemOutputs(`2x ${casing_id}:${type}_gearbox`)
            .duration(50)
            .EUt(16)
            .circuit(4);
    };

    gearbox('enriched_naquadah','enriched_naquadah','kubejs')

    const pipe = (type,material,pipe,casing_id) => {
        event.shaped(Item.of(`2x ${casing_id}:${type}_pipe_casing`), [
            'PLP',
            'LFL',
            'PLP'
        ], {
            P:  `gtceu:${material}_plate`,
            F:  `gtceu:${material}_frame`,
            L:  `gtceu:${pipe}_normal_fluid_pipe`
        }).id(`start:${type}_pipe_casing`);
    };

    pipe('enriched_naquadah','enriched_naquadah','naquadah','kubejs');

    const engine_intake = (type,material,pipe,casing_id,used_casing) => {
        event.shaped(Item.of(`2x ${casing_id}:${type}_engine_intake_casing`), [
            'PHP',
            'RFR',
            'PWP'
        ], {
            P:  `gtceu:${pipe}_normal_fluid_pipe`,
            F:  `${used_casing}_casing`,
            R:  `gtceu:${material}_rotor`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:${type}_engine_intake_casing`);

        event.recipes.gtceu.assembler(id( `${type}_engine_intake_casing`))
            .itemInputs(`2x gtceu:${material}_rotor`,`4x gtceu:${pipe}_normal_fluid_pipe`,`${used_casing}_casing`)
            .itemOutputs(`2x ${casing_id}:${type}_engine_intake_casing`)
            .duration(50)
            .EUt(16);
    };

    engine_intake('enriched_naquadah','enriched_naquadah','naquadah','start_core','kubejs:enriched_naquadah_machine');

    ['blackstone','calcite','tuff','dripstone_block'].forEach(stone => {
    event.recipes.gtceu.rock_breaker(id(`${stone}`))
        .notConsumable(`minecraft:${stone}`)
        .itemOutputs(`minecraft:${stone}`)
        .duration(16)
        .EUt(7)
        .addDataString('fluidA', 'minecraft:lava')
        .addDataString('fluidB', 'minecraft:water');
        // .addCondition($RockBreakerCondition.INSTANCE);
    });

    if (global.packmode !== 'hard'){
        (() => {   
       
    event.shaped(Item.of('create_new_age:carbon_brushes'), [
        'SCS',
        'KsK',
        'SSS'
    ], {
        S: 'gtceu:steel_plate',
        C: '#gtceu:circuits/lv',
        K: 'minecraft:charcoal',
        s: 'create:shaft'
    }).id('start:shaped/carbon_brushes');

    event.shaped(Item.of('create_new_age:magnetite_block'), [
        'SMS',
        'MSM',
        'SMS'
    ], {
        S: 'minecraft:stone',
        M: 'gtceu:magnetite_dust'
    }).id('start:shaped/magnetite_block');

    event.shaped(Item.of('3x create_new_age:redstone_magnet'), [
        'MRM',
        'RBR',
        'MRM'
    ], {
        B: 'create_new_age:magnetite_block',
        R: 'minecraft:redstone',
        M: 'gtceu:magnetite_dust'
    }).id('start:shaped/redstone_magnet');

    event.shaped(Item.of('3x create:belt_connector'), [
        'RRR'
    ], {
        R: 'gtceu:rubber_plate'
    }).id('start:shaped/belt_connector');

    event.shaped(Item.of('4x create_new_age:netherite_magnet'), [
        'MNM',
        'NEN',
        'MNM'
    ], {
        M: 'create_new_age:fluxuated_magnetite',
        N: 'gtceu:neodymium_ingot',
        E: 'gtceu:energium_dust'
    }).id('start:shaped/neodymium_magnet');

    //plates
    [
        {mod: 'gtceu', metals: ['lead','silver','tin','zinc', 'brass','bronze','red_alloy','nickel','invar','soul_infused','cobalt_brass','wrought_iron','potin']},
        {mod: 'minecraft', metals: ['iron', 'gold', 'copper']}
    ].forEach(type => {
        type.metals.forEach(foo => {
            event.recipes.create.pressing(`gtceu:${foo}_plate`,`${type.mod}:${foo}_ingot`).id(`start:pressing/${foo}_plate`);
        });
    });
    
    })()
    } 

    event.replaceInput({id: 'enderchests:ender_pouch'}, 'minecraft:leather', 'gtceu:carbon_fiber_plate');

    event.recipes.thermal.lapidary_fuel('gtceu:diatron_gem', 750000);
    event.recipes.thermal.lapidary_fuel('gtceu:flawless_diatron_gem', 750000 * 2.5);
    event.recipes.thermal.lapidary_fuel('gtceu:exquisite_diatron_gem', 750000 * 6.25);
    event.remove({type: 'thermal:lapidary_fuel', input: 'minecraft:diamond'});
    event.recipes.thermal.lapidary_fuel('minecraft:diamond', 300000);
    event.remove({mod: 'systeams'});
    const SteamBoil = (boiling,volume,boiled,power) => {
        if(boiled == 'steam')
        event.custom({
            'type': 'systeams:steam',
            'ingredient': {
                'fluid_tag': `forge:steam`,
                'amount': 1000
            },
            'energy': power
            });
        else
        event.custom({
            'type': 'systeams:steam',
            'ingredient': {
                'fluid': `systeams:${boiled}`,
                'amount': 1000
            },
            'energy': power
            });
        event.remove({id: `systeams:boiling/${boiling}`});
        if(boiling == 'water')
        event.custom({
            'type': 'systeams:boiling',
            'ingredient': {
                'fluid': `minecraft:water`,
                'amount': 100
            },
            'result': {
                'fluid': `systeams:${boiled}`,
                'amount': volume
            }
            });
        if(boiling == 'steam')
        event.custom({
            'type': 'systeams:boiling',
            'ingredient': {
            'fluid_tag': 'forge:steam',
            'amount': 100
            },
            'result': {
            'fluid': `systeams:${boiled}`,
            'amount': volume
            }
        });
        else
        event.custom({
            'type': 'systeams:boiling',
            'ingredient': {
              'fluid': `systeams:${boiling}`,
              'amount': 100
            },
            'result': {
              'fluid': `systeams:${boiled}`,
              'amount': volume
            }
          });
    }
    SteamBoil('water',100,'steam',2000);
    SteamBoil('steam',80,'steamier',4000);
    SteamBoil('steamier',60,'steamiest',10000);
    SteamBoil('steamiest',40,'steamiester',30000);
    SteamBoil('steamiester',20,'steamiestest',80000);

    event.recipes.gtceu.mixer(id('diatron_dust'))
        .itemInputs('3x gtceu:energium_dust', '2x gtceu:diamond_dust')
        .itemOutputs('5x gtceu:diatron_dust')
        .duration(200)
        .EUt(480);

    event.recipes.gtceu.autoclave(id('diatron_water'))
        .itemInputs('gtceu:diatron_dust')
        .inputFluids('minecraft:water 250')
        .chancedOutput('gtceu:diatron_gem', 7000, 1000)
        .duration(1200)
        .EUt(24);

    event.recipes.gtceu.autoclave(id('diatron_dis_water'))
        .itemInputs('gtceu:diatron_dust')
        .inputFluids('gtceu:distilled_water 50')
        .itemOutputs('gtceu:diatron_gem')
        .duration(600)
        .EUt(24);

    event.recipes.gtceu.mixer(id('birmabright'))
        .itemInputs('7x gtceu:aluminium_dust', '2x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:birmabright_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu.mixer(id('duralumin'))
        .itemInputs('4x gtceu:aluminium_dust', '3x gtceu:copper_dust', '1x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('9x gtceu:duralumin_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(2);

    event.recipes.gtceu.mixer(id('beryllium_aluminium_alloy'))
        .itemInputs('7x gtceu:beryllium_dust', '1x gtceu:aluminium_dust')
        .itemOutputs('8x gtceu:beryllium_aluminium_alloy_dust')
        .duration(310)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu.mixer(id('hydronalium'))
        .itemInputs('6x gtceu:aluminium_dust', '3x gtceu:magnesium_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:hydronalium_dust')
        .duration(410)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(2);

    event.recipes.gtceu.mixer(id('elgiloy'))
        .itemInputs('4x gtceu:cobalt_dust', '2x gtceu:chromium_dust', '1x gtceu:nickel_dust', '1x gtceu:steel_dust', '1x gtceu:molybdenum_dust', '1x gtceu:manganese_dust')
        .itemOutputs('10x gtceu:elgiloy_dust')
        .duration(420)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.mixer(id('beryllium_bronze'))
        .itemInputs('10x gtceu:copper_dust', '1x gtceu:beryllium_dust')
        .itemOutputs('11x gtceu:beryllium_bronze_dust')
        .duration(290)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu.mixer(id('silicon_bronze'))
        .itemInputs('32x gtceu:copper_dust', '2x gtceu:silicon_dust', '1x gtceu:manganese_dust')
        .itemOutputs('35x gtceu:silicon_bronze_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(1);

    event.recipes.gtceu.mixer(id('kovar'))
        .itemInputs('18x gtceu:iron_dust', '11x gtceu:nickel_dust', '6x gtceu:cobalt_dust')
        .itemOutputs('35x gtceu:kovar_dust')
        .duration(450)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu.mixer(id('zamak'))
        .itemInputs('1x gtceu:zinc_dust', '4x gtceu:aluminium_dust', '3x gtceu:copper_dust')
        .itemOutputs('8x gtceu:zamak_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(3);

    event.recipes.gtceu.mixer(id('tumbaga'))
        .itemInputs('20x gtceu:copper_dust', '6x gtceu:gold_dust', '1x gtceu:silver_dust')
        .itemOutputs('27x gtceu:tumbaga_dust')
        .duration(470)
        .EUt(GTValues.VHA[GTValues.HV])
        .circuit(4);

    event.recipes.gtceu.assembler(id('multiblock_upgrade_kit'))
        .itemInputs('thermal:lumium_glass', '#gtceu:circuits/ev', '2x gtceu:double_signalum_plate', '12x gtceu:cobalt_foil')
        .itemOutputs('kubejs:multiblock_upgrade_kit')
        .duration(800)
        .EUt(GTValues.V[GTValues.HV]);

    [
        'bender', 'centrifuge', 'electrolyzer', 'extruder', 'forming_press', 'lathe', 'mixer', 'ore_washer', 'sifter', 'thermal_centrifuge', 'wiremill', 'macerator', 'autoclave'
    ].forEach(machine=> {
        event.recipes.create.item_application(`gtceu:t_large_${machine}`, [`gtceu:hv_${machine}`, 'kubejs:multiblock_upgrade_kit']).id(`start:item_application/large_${machine}`);
    });
    event.recipes.create.item_application('gtceu:large_rock_crusher', ['gtceu:hv_rock_crusher', 'kubejs:multiblock_upgrade_kit']).id('start:item_application/large_rock_crusher');

    // Mycelium Leather
    event.recipes.create.pressing('kubejs:compressed_mycelium', 'kubejs:mycelium_growth').id('start:pressing/compressed_mycelium');
    event.smoking('kubejs:smoked_mycelium', 'kubejs:compressed_mycelium').id('start:smoking/smoked_mycelium');
    event.recipes.create.pressing('minecraft:leather', 'kubejs:smoked_mycelium').id('start:pressing/mycelium_leather');

    // Warping recipes
    [{input: 'architects_palette:abyssaline_lamp', output: 'architects_palette:hadaline_lamp'},
        {input: 'architects_palette:abyssaline_pillar', output: 'architects_palette:hadaline_pillar'},
        {input: 'architects_palette:abyssaline_bricks', output: 'architects_palette:hadaline_bricks'},
        {input: 'architects_palette:chiseled_abyssaline_bricks', output: 'architects_palette:chiseled_hadaline_bricks'},
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
    ].forEach(prop => {
        event.recipes.create.haunting(Item.of(prop.output), Item.of(prop.input)).id(`start:haunting/${prop.output.split(':')[1]}`);
    });

    event.recipes.gtceu.circuit_assembler(id('data_dna_disk'))
        .itemInputs('kubejs:draconic_wetware_printed_circuit_board','2x #gtceu:circuits/uhv','24x kubejs:qram_chip', 
            '16x kubejs:3d_nor_chip','16x kubejs:3d_nand_chip','32x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 144')
        .itemOutputs('start_core:data_dna_disk')
        .duration(400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.V[GTValues.UHV]);

    event.remove({id: 'gtceu:macerator/macerate_naquadah_refined_ore_to_dust'});
    event.recipes.gtceu.macerator(id('macerate_refined_naquadah_ore_to_dust'))
        .itemInputs('gtceu:refined_naquadah_ore')
        .itemOutputs('gtceu:naquadah_dust')
        .chancedOutput('gtceu:enriched_naquadah_dust', 350, 125)
        .duration(400)
        .EUt(2);

    //rutile fix
    event.remove({ id: 'gtceu:electric_blast_furnace/rutile_from_ilmenite' })
    event.recipes.gtceu.electric_blast_furnace(id('electric_blast_furnace/rutile_from_ilmenite'))
        .itemInputs('10x gtceu:ilmenite_dust', '2x gtceu:carbon_dust')
        .itemOutputs('2x gtceu:wrought_iron_ingot','2x gtceu:rutile_dust')
        .outputFluids('gtceu:carbon_monoxide 2000')
        .blastFurnaceTemp(1700)
        .duration(1600)
        .EUt(480);

    //Indium Line Fix (DONT TOUCH VALUES)
    const InRemoval = ['gtceu:mixer/indium_concentrate','gtceu:chemical_reactor/indium_concentrate_separation','gtceu:large_chemical_reactor/indium_concentrate_separation',
        'gtceu:chemical_reactor/indium_concentrate_separation_4x','gtceu:large_chemical_reactor/indium_concentrate_separation_4x']
    
    InRemoval.forEach(RecipeId => {
        event.remove({id: RecipeId})
    });

    event.recipes.gtceu.mixer(id('indium_concentrate_fix'))
        .itemInputs('gtceu:purified_sphalerite_ore', 'gtceu:purified_galena_ore')
        .inputFluids('gtceu:sulfuric_acid 2000')
        .outputFluids('gtceu:indium_concentrate 1000')
        .duration(60)
        .EUt(150);

    event.recipes.gtceu.chemical_reactor(id('indium_concentrate_separation_fix'))
        .itemInputs('2x gtceu:aluminium_dust')
        .inputFluids('gtceu:indium_concentrate 2000', 'gtceu:oxygen 6000')
        .itemOutputs('5x gtceu:indium_oxide_dust', '14x gtceu:aluminium_sulfite_dust')
        .outputFluids('gtceu:lead_zinc_solution 1000', 'gtceu:diluted_sulfuric_acid 1000')
        .duration(240)
        .EUt(600);

    event.recipes.create.item_application('minecraft:mycelium', ['minecraft:grass_block', 'exnihilosequentia:mycelium_spores']).id('start:item_application/mycelium');

    // StarT Core Cell* Emptying
    ['drum','fluid_cell'].forEach(container=>{
        ['enriched_naquadah','neutronium'].forEach(type=>{

            event.shapeless(Item.of(`start_core:${type}_${container}`), [
                Item.of(`start_core:${type}_${container}`).ignoreNBT()
            ]);

        });
    });

    //NPK Re-add

    event.recipes.gtceu.large_chemical_reactor(id('npk_solution'))
        .itemInputs('15x gtceu:apatite_dust', '5x gtceu:potassium_dust')
        .inputFluids('gtceu:sulfur_trioxide 288', 'gtceu:nitrogen 1000', 'gtceu:distilled_water 2200')
        .circuit(24)
        .outputFluids('gtceu:npk_solution 6400')
        .EUt(280)
        .duration(120);

    //Tom's / Chipped Fixes

    event.replaceInput({id: 'chipped:benches/mechanist_workbench'}, 'minecraft:tnt', 'minecraft:red_concrete');

    event.shaped('toms_storage:ts.adv_wireless_terminal', [
        ' P ',
        'PTP',
        ' P '
    ], {
        P: 'gtceu:steel_plate',
        T: 'toms_storage:ts.wireless_terminal'
    }).id('start:shaped/advanced_wireless_terminal');

    //Treated Wood Fixes/Additions
    event.remove({id: 'gtceu:macerator/macerate_treated_wood_chest_boat'})
    event.recipes.gtceu.macerator(id('treated_wood_chest_boat'))
        .itemInputs('gtceu:treated_wood_chest_boat')
        .itemOutputs('5x gtceu:treated_wood_dust', '8x gtceu:wood_dust')
        .duration(1274)
        .EUt(2);
    event.recipes.gtceu.macerator(id('treated_wood_planks'))
        .itemInputs('gtceu:treated_wood_planks')
        .itemOutputs('gtceu:treated_wood_dust')
        .duration(98)
        .EUt(2);
    event.recipes.create.filling('gtceu:treated_wood_planks', [Fluid.of('gtceu:creosote', 125), '#minecraft:planks']).id('start:filling/treated_wood_planks');

    event.replaceOutput({ type: 'gtceu:cutter'}, 'ae2:certus_quartz_crystal', '2x ae2:certus_quartz_crystal');

    const nuggetFixMod = (mod) => {
    event.replaceOutput({output: `${mod}:copper_nugget`},`${mod}:copper_nugget`,`gtceu:copper_nugget`);
    event.replaceOutput({output: `${mod}:zinc_nugget`},`${mod}:zinc_nugget`,`gtceu:zinc_nugget`);
    event.replaceOutput({output: `${mod}:brass_nugget`},`${mod}:brass_nugget`,`gtceu:brass_nugget`);
    event.replaceInput({input: `${mod}:copper_nugget`},`${mod}:copper_nugget`,`gtceu:copper_nugget`);
    event.replaceInput({input: `${mod}:zinc_nugget`},`${mod}:zinc_nugget`,`gtceu:zinc_nugget`);
    event.replaceInput({input: `${mod}:brass_nugget`},`${mod}:brass_nugget`,`gtceu:brass_nugget`);
    }
    nuggetFixMod('create');nuggetFixMod('thermal');nuggetFixMod('exnihilosequentia');

});

if (global.packmode == 'default'){ //To easy in HM (has its own thing) and for Abydos makes player switch it upa bit
    (() => {   

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
})()
}

ServerEvents.tags('block', event => {
    event.remove('mineable/pickaxe', [
        'gtceu:ulv_barrel'
    ]);
    event.add('mineable/axe', [
        'gtceu:ulv_barrel'
    ]);
    event.add('mineable/pickaxe', [
        'travelanchors:travel_anchor'
    ]);
});

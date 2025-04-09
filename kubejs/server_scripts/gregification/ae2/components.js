ServerEvents.recipes(event => {

    ['sky', 'fluix'].forEach(alloy => {
        event.recipes.gtceu.alloy_smelter(`${alloy}_steel_ingot`)
            .itemInputs(`ae2:${alloy}_dust`, '2x gtceu:steel_ingot')
            .itemOutputs(`3x gtceu:${alloy}_steel_ingot`)
            .duration(160)
            .EUt(56);

        event.recipes.gtceu.alloy_smelter(`${alloy}_steel_dust`)
            .itemInputs(`ae2:${alloy}_dust`, '2x gtceu:steel_dust')
            .itemOutputs(`3x gtceu:${alloy}_steel_ingot`)
            .duration(160)
            .EUt(56);

        event.recipes.gtceu.mixer(`${alloy}_steel`)
            .itemInputs(`ae2:${alloy}_dust`, '2x gtceu:steel_dust')
            .itemOutputs(`3x gtceu:${alloy}_steel_dust`)
            .duration(160)
            .EUt(56);
    });

    ['gold', 'certus_quartz'].forEach(mat => {
        event.recipes.gtceu.mixer(`netherite_${mat}_skystone_alloy`)
            .itemInputs('4x gtceu:pure_netherite_dust', '2x gtceu:diamond_skystone_alloy_dust', `gtceu:${mat}_skystone_alloy_dust`)
            .itemOutputs(`3x gtceu:netherite_${mat}_skystone_alloy_dust`)
            .duration(160)
            .EUt(2048);
    });

    event.recipes.gtceu.extractor('skystone')
        .itemInputs('ae2:sky_dust')
        .outputFluids('gtceu:skystone 144')
        .duration(200)
        .EUt(128);

    [
        {chip: 'silicon', voltage: 'mv', n: 2},
        {chip: 'phosphorus', voltage: 'hv', n: 4},
        {chip: 'naquadah', voltage: 'ev', n: 8},
        {chip: 'neutronium', voltage: 'iv', n: 16}
    ].forEach(tier => {
        event.recipes.gtceu.cutter(`${tier.chip}_chip`)
            .itemInputs(`gtceu:${tier.chip}_wafer`)
            .itemOutputs(`8x kubejs:${tier.chip}_chip`)
            .duration(900)
            .EUt(global.va[tier.voltage]);

        ['logic', 'engineering', 'calculation'].forEach(type => {
            event.recipes.gtceu.me_circuit_assembler(`${type}_processor_${tier.chip}`)
                .itemInputs(`kubejs:${tier.chip}_chip`, `ae2:printed_${type}_processor`)
                .inputFluids('gtceu:skystone 144')
                .itemOutputs(`${tier.n}x ae2:${type}_processor`)
                .duration(400)
                .EUt(global.va['mv']);
        });
    
    });

    [
        {circuit: 'logic', material: 'gold'},
        {circuit: 'engineering', material: 'diamond'},
        {circuit: 'calculation', material: 'certus_quartz'}
    ].forEach(type => {
        event.recipes.gtceu.mixer(`${type.material}_skystone_alloy`)
            .itemInputs(`gtceu:${type.material}_dust`)
            .inputFluids('gtceu:skystone 72')
            .itemOutputs(`gtceu:${type.material}_skystone_alloy_dust`)
            .duration(400)
            .EUt(global.va['mv']);

        event.recipes.gtceu.compressor(`${type.material}_skystone_plate`)
            .itemInputs(`gtceu:${type.material}_skystone_alloy_dust`)
            .itemOutputs(`gtceu:${type.material}_skystone_alloy_plate`)
            .duration(200)
            .EUt(global.va['mv']);

        event.recipes.gtceu.forming_press(`${type.circuit}_press`)
            .itemInputs('gtceu:double_sky_steel_plate', `gtceu:${type.material}_dust`)
            .itemOutputs(`ae2:${type.circuit}_processor_press`)
            .duration(600)
            .EUt(65);

        event.recipes.gtceu.forming_press(`printed_${type.circuit}_processor`)
            .itemInputs(`gtceu:${type.material}_skystone_alloy_plate`)
            .inputFluids('gtceu:skystone 144')
            .notConsumable(`ae2:${type.circuit}_processor_press`)
            .itemOutputs(`ae2:printed_${type.circuit}_processor`)
            .duration(400)
            .EUt(global.va['mv']);
    });

    [
        {type: 'formation', catalyst: 'ae2:certus_quartz_crystal'},
        {type: 'annihilation', catalyst: 'minecraft:quartz'}
    ].forEach(tier => {
        event.remove({output: `ae2:${tier.type}_core`})
        event.recipes.gtceu.me_core_assembler(`${tier.type}_core`)
            .itemInputs('ae2:logic_processor', `${tier.catalyst}`, '6x gtceu:fluix_steel_foil')
            .itemOutputs(`ae2:${tier.type}_core`)
            .duration(400)
            .EUt(128);
    });

    [// free lenses: white, l_gray, lime
        {type: 'naquadah', n: 1, time: 900, volt: 'ev'},
        {type: 'neutronium', n: 4, time: 500, volt: 'iv'}
    ].forEach(wafer => {
        event.recipes.gtceu.laser_engraver(`engrave_ae2_soc_${wafer.type}`)
            .itemInputs(`gtceu:${wafer.type}_wafer`)
            .notConsumable('#forge:lenses/magenta')
            .itemOutputs(`${wafer.n}x kubejs:ae2_soc_wafer`)
            .duration(wafer.time)
            .EUt(global.va[wafer.volt]);
    });

    event.recipes.gtceu.cutter('ae2_soc')
        .itemInputs('kubejs:ae2_soc_wafer')
        .itemOutputs('6x kubejs:ae2_soc')
        .duration(900)
        .EUt(global.va['ev']);

    ['logic', 'engineering', 'calculation'].forEach(type => {
        event.recipes.gtceu.me_circuit_assembler(`${type}_processor_soc`)
            .itemInputs('kubejs:ae2_soc', `ae2:printed_${type}_processor`)
            .inputFluids('gtceu:skystone 144')
            .itemOutputs(`8x ae2:${type}_processor`)
            .duration(400)
            .EUt(global.va['iv']);
    });

});
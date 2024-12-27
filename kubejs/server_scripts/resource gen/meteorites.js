ServerEvents.recipes(event => {

    //reflective metal
    event.recipes.gtceu.mixer('reflective_metal_dust')
        .itemInputs('5x gtceu:aluminium_dust', '3x gtceu:steel_dust', '2x gtceu:star_steel_dust')
        .itemOutputs('10x gtceu:reflective_metal_dust')
        .duration(240)
        .EUt(60);

    event.recipes.gtceu.chemical_bath('reflective_metal_cool_down_water')
        .itemInputs('gtceu:hot_reflective_metal_ingot')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:reflective_metal_ingot')
        .duration(400)
        .EUt(60);

    event.recipes.gtceu.chemical_bath('reflective_metal_cool_down_distilled_water')
        .itemInputs('gtceu:hot_reflective_metal_ingot')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('gtceu:reflective_metal_ingot')
        .duration(250)
        .EUt(60);

    event.shaped('kubejs:reflective_casing',[
        'ABA',
        'ACA',
        'ADA'
      ],{
        A: 'gtceu:reflective_metal_plate',
        B: '#forge:tools/hammers',
        C: 'gtceu:reflective_metal_frame',
        D: '#forge:tools/wrenches'
    });

    //scan files
    event.recipes.gtceu.assembler('undetermined_scan_file')
        .itemInputs('gtceu:phenolic_printed_circuit_board', 'gtceu:data_stick', '#forge:dyes/blue')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('kubejs:undetermined_scan_file')
        .duration(200)
        .EUt(60);

    //scanner
    function scan(type, catalyst, coolant, duration, energy){
        event.recipes.gtceu.deep_space_scanner(type)
            .itemInputs('kubejs:undetermined_scan_file', catalyst)
            .inputFluids(`gtceu:${coolant} 1000`)
            .itemOutputs(`kubejs:${type}_scan_file`)
            .duration(duration)
            .EUt(energy);
    };

    scan('skystone', 'ae2:fluix_block', 'nitrogen', 600, 80);

});
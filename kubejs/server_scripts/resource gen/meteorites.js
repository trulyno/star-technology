ServerEvents.recipes(event => {

    /*/reflective metal
    event.recipes.gtceu.mixer('reflective_metal_dust')
        .itemInputs('5x gtceu:aluminium_dust', '3x gtceu:steel_dust', '2x minecraft:glowstone')
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
    });*/
    //reflective casing
    event.shaped('kubejs:reflective_casing',[
        'ABA',
        'ACA',
        'ADA'
      ],{
        A: 'gtceu:double_silver_plate',
        B: '#forge:tools/hammers',
        C: 'gtceu:steel_frame',
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

    event.recipes.gtceu.assembler('cargo_drone')
        .itemInputs('gtceu:power_thruster', '2x #gtceu:circuits/mv', 'gtceu:plastic_printed_circuit_board', '5x gtceu:double_stainless_steel_plate')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('kubejs:cargo_drone')
        .duration(200)
        .EUt(100);

    function drone(meteorite, file, fuel, duration, energy){
        event.recipes.gtceu.drone_pad(`${meteorite}`)
            .itemInputs('kubejs:cargo_drone', `kubejs:${file}_scan_file`)
            .inputFluids(`gtceu:rocket_fuel ${fuel}`)
            .itemOutputs(`3x kubejs:${meteorite}`)
            .duration(duration)
            .EUt(energy);

        event.recipes.gtceu.docking_station(meteorite)
            .itemInputs('kubejs:cargo_drone', `kubejs:${meteorite}_scan_file`)
            .inputFluids(`gtceu:rocket_fuel ${fuel}`)
            .itemOutputs(`3x kubejs:${meteorite}`)
            .duration(duration)
            .EUt(energy);
    };

    drone('skystone_meteorite', 'skystone', 4000, 6000, 120);

    event.recipes.gtceu.macerator('skystone_meteorite')
        .itemInputs('kubejs:skystone_meteorite')
        .itemOutputs('64x ae2:sky_stone_block', '5x gtceu:crushed_certus_quartz_ore', '2x gtceu:boron_dust')
        .duration(1200)
        .EUt(110);

    event.recipes.gtceu.macerator('sky_stone_block')
        .itemInputs('ae2:sky_dust')
        .itemOutputs('ae2:sky_stone_block')
        .duration(1200)
        .EUt(110);

    event.remove({ id: 'ae2:inscriber/sky_stone_dust'});
    event.remove({ id: 'create:milling/compat/ae2/sky_stone_block'});

});
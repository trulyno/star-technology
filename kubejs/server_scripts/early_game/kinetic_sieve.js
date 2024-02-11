ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:kinetic_sieve'), [
        'ESE',
        'PDP',
        'BMB'
    ], {
        E: 'create:electron_tube',
        S: '#exnihilosequentia:sieves',
        D: 'create:deployer',
        P: 'gtceu:brass_plate',
        B: 'create:precision_mechanism',
        M: 'gtceu:lv_machine_hull'
    });

    // Wood Casing & Mesh crafting recipe

    event.shaped(Item.of('2x kubejs:wood_casing'), [

        'SDS',
        'WFW',
        'SHS'
    ], {
        S: 'gtceu:brass_screw',
        D: '#forge:tools/screwdrivers',
        W: 'gtceu:treated_wood_plate',
        F: 'gtceu:treated_wood_frame',
        H: '#forge:tools/hammers'
    });

    event.recipes.gtceu.assembler('start:assembler_wood_casing')
        .itemInputs('4x gtceu:brass_screw', '2x gtceu:treated_wood_plate', 'gtceu:treated_wood_frame')
        .itemOutputs('2x kubejs:wood_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)

        event.shaped(Item.of('kubejs:meshblock'), [

            'SMS',
            'MMM',
            'SMS'
        ], {
            M: 'exnihilosequentia:string_mesh',
            S: 'gtceu:treated_wood_rod'
        });
    
        event.recipes.gtceu.assembler('start:assembler_meshblock')
            .itemInputs('5x exnihilosequentia:string_mesh', '4x gtceu:treated_wood_rod')
            .itemOutputs('kubejs:meshblock')
            .circuit(6)
            .duration(50)
            .EUt(16)

    function kineticsieve(mesh, input, outputs) {

        event.recipes.gtceu.kinetic_sieve(`${mesh}_${input.path}_kinetic_sieve`)
            .itemInputs(`${input}`)
            .notConsumable(`exnihilosequentia:${mesh}_mesh`)
            .itemOutputs(outputs)
            .duration(1800)
            .inputStress(256)
            .rpm(128)

    }

    kineticsieve("string", "256x minecraft:gravel", ['64x gtceu:crushed_copper_ore', '64x gtceu:crushed_iron_ore', '64x gtceu:crushed_tin_ore', '64x gtceu:crushed_sphalerite_ore', '64x gtceu:crushed_magnetite_ore']);
    kineticsieve("string", "256x #forge:sand", ['64x minecraft:quartz', '64x minecraft:diamond', '64x minecraft:lapis_lazuli', '64x minecraft:amethyst_shard', '64x minecraft:emerald']);
    kineticsieve("string", "192x exnihilosequentia:dust", ['64x minecraft:redstone', '16x minecraft:ender_pearl', '64x minecraft:glowstone_dust', '16x gtceu:sulfur_dust ']);
    kineticsieve("string", "64x exnihilosequentia:crushed_blackstone", ['64x gtceu:crushed_galena_ore', '64x gtceu:crushed_stibnite_ore']);


});
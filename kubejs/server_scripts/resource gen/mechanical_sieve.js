ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:mechanical_sieve'), [
        'ESE',
        'PDP',
        'BMB'
    ], {
        E: '#gtceu:circuits/ulv',
        S: '#exnihilosequentia:sieves',
        D: 'gtceu:lv_electric_piston',
        P: 'gtceu:brass_plate',
        B: 'gtceu:lv_electric_motor',
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

    function mechsieve(mesh, input, outputs) {

        event.recipes.gtceu.mechanical_sieve(`${input.path}_mechanical_sieve`)
            .itemInputs(`${input}`)
            .notConsumable(`exnihilosequentia:${mesh}_mesh`)
            .itemOutputs(outputs)
            .duration(1600)
            .EUt(GTValues.VA[GTValues.LV])
            //.inputStress(256)
            //.rpm(128)

    }

    mechsieve("string", "128x minecraft:gravel", ['64x gtceu:crushed_copper_ore', '64x gtceu:crushed_iron_ore', '64x gtceu:crushed_tin_ore', '64x gtceu:crushed_sphalerite_ore', '64x gtceu:crushed_magnetite_ore']);
    mechsieve("string", "128x #forge:sand", ['64x minecraft:quartz', '64x minecraft:diamond', '64x minecraft:lapis_lazuli', '64x minecraft:amethyst_shard', '64x minecraft:emerald']);
    mechsieve("string", "128x exnihilosequentia:dust", ['64x minecraft:redstone', '16x minecraft:ender_pearl', '64x minecraft:glowstone_dust', '16x gtceu:sulfur_dust']);
    mechsieve("string", "128x exnihilosequentia:crushed_blackstone", ['64x gtceu:crushed_galena_ore', '64x gtceu:crushed_stibnite_ore']);

   //Parallel Version
    event.recipes.gtceu.assembler('large_sieve')
    .itemInputs('gtceu:iv_machine_hull', '2x #gtceu:circuits/iv', '2x gtceu:double_tungsten_steel_plate' ,'4x gtceu:pure_netherite_gear')
    .itemOutputs('gtceu:large_sieve')
    .duration(1200)
    .EUt(1240);

    function largesieve(input, outputs) {

        event.recipes.gtceu.large_sieve(`${input.path}_large_sieve`)
            .itemInputs(`${input}`)
            .itemOutputs(outputs)
            .duration(400)
            .EUt(GTValues.VA[GTValues.IV])

    }

    largesieve("64x minecraft:gravel", ['64x gtceu:crushed_copper_ore', '64x gtceu:crushed_iron_ore', '64x gtceu:crushed_tin_ore', '64x gtceu:crushed_sphalerite_ore', '64x gtceu:crushed_magnetite_ore']);
    largesieve("64x #forge:sand", ['64x minecraft:quartz', '64x minecraft:diamond', '64x minecraft:lapis_lazuli', '64x minecraft:amethyst_shard', '64x minecraft:emerald']);
    largesieve("64x exnihilosequentia:dust", ['64x minecraft:redstone', '16x minecraft:ender_pearl', '64x minecraft:glowstone_dust', '16x gtceu:sulfur_dust']);
    largesieve("64x exnihilosequentia:crushed_blackstone", ['64x gtceu:crushed_galena_ore', '64x gtceu:crushed_stibnite_ore']);

});
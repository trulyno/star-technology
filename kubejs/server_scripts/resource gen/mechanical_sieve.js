ServerEvents.recipes(event => {
    const id = global.id;

    //Controllers
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
    }).id('start:shaped/mechanical_sieve');

    event.recipes.gtceu.assembler(id('large_sieve'))
        .itemInputs('gtceu:iv_machine_hull', '2x #gtceu:circuits/iv', '2x gtceu:double_tungsten_steel_plate' ,'4x gtceu:pure_netherite_gear')
        .itemOutputs('gtceu:large_sieve')
        .duration(1200)
        .EUt(1240);

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
    }).id('start:shaped/wood_casing');

    event.recipes.gtceu.assembler(id('wood_casing'))
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
    }).id('start:shaped/mesh_block');

    event.recipes.gtceu.assembler(id('meshblock'))
        .itemInputs('5x exnihilosequentia:string_mesh', '4x gtceu:treated_wood_rod')
        .itemOutputs('kubejs:meshblock')
        .circuit(6)
        .duration(50)
        .EUt(16)

    const MechanicalSieving = (input, outputs) => {

        event.recipes.gtceu.mechanical_sieve(id(`${input.path}_mechanical_sieve`))
            .itemInputs(`64x ${input}`)
            .notConsumable(`exnihilosequentia:string_mesh`)
            .itemOutputs(outputs)
            .duration(800)
            .EUt(GTValues.VA[GTValues.LV])
            
        event.recipes.gtceu.large_sieve(id(`${input.path}_mechanical_sieve`))
            .itemInputs(`48x ${input}`)
            .itemOutputs(outputs)
            .duration(800)
            .EUt(GTValues.VA[GTValues.LV])
    }

    MechanicalSieving('minecraft:gravel', ['16x gtceu:crushed_copper_ore', '16x gtceu:crushed_iron_ore', '16x gtceu:crushed_tin_ore', '16x gtceu:crushed_sphalerite_ore', '16x gtceu:crushed_magnetite_ore']);
    MechanicalSieving('#forge:sand', ['16x minecraft:quartz', '16x minecraft:diamond', '16x minecraft:lapis_lazuli', '16x minecraft:amethyst_shard', '16x minecraft:emerald']);
    MechanicalSieving('exnihilosequentia:dust', ['16x minecraft:redstone', '4x minecraft:ender_pearl', '16x minecraft:glowstone_dust', '4x gtceu:sulfur_dust']);
    MechanicalSieving('exnihilosequentia:crushed_blackstone', ['16x gtceu:crushed_galena_ore', '16x gtceu:crushed_stibnite_ore']);

});
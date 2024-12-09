ServerEvents.recipes(event => {
    //electro-kinetic filtrator
    event.shaped(
        Item.of('gtceu:electro_kinetic_filtrator'),[
          'ABC',
          'DEF',
          'ABA'
        ],{
          A: 'gtceu:tin_single_cable',
          B: '#gtceu:circuits/lv',
          C: 'gtceu:lv_electric_pump',
          D: 'gtceu:lv_electric_piston',
          E: 'gtceu:lv_machine_hull',
          F: 'gtceu:steel_rotor'
    });

    event.recipes.gtceu.electro_kinetic_filtrator('iron_mixture_filtration_e_kinetic')
        .inputFluids('kubejs:iron_mixture 1000')
        .itemOutputs(['2x gtceu:crushed_iron_ore', 'gtceu:crushed_tin_ore', 'gtceu:crushed_magnetite_ore'])
        .duration(320)
        .inputStress(32)
        .rpm(128)
        .EUt(28);
    
    event.recipes.gtceu.electro_kinetic_filtrator('copper_mixture_filtration_e_kinetic')
        .inputFluids('kubejs:copper_mixture 1000')
        .itemOutputs(['2x gtceu:crushed_copper_ore', 'minecraft:glowstone_dust', 'minecraft:redstone'])
        .duration(320)
        .inputStress(32)
        .rpm(128)
        .EUt(28);
    
    event.recipes.gtceu.electro_kinetic_filtrator('quartz_mixture_filtration_e_kinetic')
        .inputFluids('kubejs:quartz_mixture 1000')
        .itemOutputs(['2x minecraft:quartz', 'minecraft:diamond'])
        .duration(320)
        .inputStress(32)
        .rpm(128)
        .EUt(28);

    event.recipes.gtceu.electro_kinetic_filtrator('lava_filtration_e_kinetic')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs(['2x gtceu:sulfur_dust', 'gtceu:crushed_sphalerite_ore', 'gtceu:crushed_galena_ore'])
        .duration(320)
        .inputStress(32)
        .rpm(128)
        .EUt(28);

});
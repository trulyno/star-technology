ServerEvents.recipes(event => {
    //kinetic filtrator
    event.shaped(
        Item.of('gtceu:kinetic_filtrator'),[
          'ABA',
          'CDE',
          'ABA'
        ],{
          A: 'gtceu:soul_infused_double_wire',
          B: '#gtceu:circuits/ulv',
          C: 'kubejs:meshblock',
          D: 'gtceu:bronze_machine_casing',
          E: 'gtceu:bronze_rotor'
    });      

    event.recipes.gtceu.kinetic_filtrator('iron_mixture_filtration_kinetic')
        .inputFluids('kubejs:iron_mixture 1000')
        .itemOutputs(['2x gtceu:crushed_iron_ore', 'gtceu:crushed_tin_ore', 'gtceu:crushed_magnetite_ore'])
        .duration(320)
        .inputStress(128)
        .rpm(128);
    
    event.recipes.gtceu.kinetic_filtrator('copper_mixture_filtration_kinetic')
        .inputFluids('kubejs:copper_mixture 1000')
        .itemOutputs(['2x gtceu:crushed_copper_ore', 'minecraft:glowstone_dust', 'minecraft:redstone'])
        .duration(320)
        .inputStress(128)
        .rpm(128);
    
    event.recipes.gtceu.kinetic_filtrator('quartz_mixture_filtration_kinetic')
        .inputFluids('kubejs:quartz_mixture 1000')
        .itemOutputs(['2x minecraft:quartz', 'minecraft:diamond'])
        .duration(320)
        .inputStress(128)
        .rpm(128);

    event.recipes.gtceu.kinetic_filtrator('lava_filtration_kinetic')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs(['2x gtceu:sulfur_dust', 'gtceu:crushed_sphalerite_ore', 'gtceu:crushed_galena_ore'])
        .duration(320)
        .inputStress(128)
        .rpm(128);
})
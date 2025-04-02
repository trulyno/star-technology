ServerEvents.recipes(event => {

    //greg compat
    event.recipes.gtceu.wiremill('quartz_fiber_cables')
        .itemInputs('minecraft:quartz')
        .itemOutputs('3x ae2:quartz_fiber')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.wiremill('fluix_glass_cables')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('4x ae2:fluix_glass_cable')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.macerator('fluix_dust')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(88)
        .EUt(2);

    event.replaceOutput({output: '#forge:gems/certus_quartz'},
        '#forge:gems/certus_quartz',
        'ae2:certus_quartz_crystal'
    );

    event.replaceInput({input: '#forge:gems/certus_quartz'},
        '#forge:gems/certus_quartz',
        'ae2:certus_quartz_crystal'
    );

    event.recipes.gtceu.polarizer('charged_certus')
        .itemInputs('ae2:certus_quartz_crystal')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(10);

    event.recipes.gtceu.mixer('fluix_crystal')
        .itemInputs('ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz')
        .inputFluids('minecraft:water 250')
        .itemOutputs('2x ae2:fluix_crystal')
        .duration(200)
        .EUt(65);

});
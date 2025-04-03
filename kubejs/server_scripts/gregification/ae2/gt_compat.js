ServerEvents.recipes(event => {

    //greg compat
    event.recipes.gtceu.wiremill('quartz_fiber_cables')
        .itemInputs('minecraft:quartz')
        .itemOutputs('3x ae2:quartz_fiber')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.macerator('fluix_dust')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(88)
        .EUt(2);

    event.replaceInput({id: 'create:mixing/compat/ae2/fluix_crystal'},
        'ae2:certus_quartz_crystal',
        'ae2:charged_certus_quartz_crystal'
    );

    [
        {filter: '#forge:dusts/certus_quartz', replacement: 'gtceu:certus_quartz_dust'},
        {filter: '#forge:gems/certus_quartz', replacement: 'ae2:certus_quartz_crystal'}
    ].forEach(type => {
        event.replaceInput({input: type.filter},
            type.filter,
            type.replacement
        );

        event.replaceOutput({output: type.filter},
            type.filter,
            type.replacement
        );
    });

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
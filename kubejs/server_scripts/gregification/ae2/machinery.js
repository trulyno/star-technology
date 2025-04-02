ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('crafting_unit')
        .itemInputs('gtceu:steel_frame', '4x ae2:calculation_processor', '6x gtceu:star_steel_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:crafting_unit')
        .duration(400)
        .EUt(128);

    ['1', '4', '16', '64', '256'].forEach(tier => {
        event.recipes.gtceu.canner(`${tier}_crafting_storage`)
            .itemInputs('ae2:crafting_unit', `ae2:cell_component_${tier}k`)
            .itemOutputs(`ae2:${tier}k_crafting_storage`)
            .duration(200)
            .EUt(128);
    });

    event.recipes.gtceu.canner('crafting_accelerator')
        .itemInputs('ae2:crafting_unit', 'ae2:engineering_processor')
        .itemOutputs('ae2:crafting_accelerator')
        .duration(200)
        .EUt(128);

    event.recipes.gtceu.canner('crafting_monitor')
        .itemInputs('ae2:crafting_unit', 'ae2:storage_monitor')
        .itemOutputs('ae2:crafting_monitor')
        .duration(200)
        .EUt(128);

});
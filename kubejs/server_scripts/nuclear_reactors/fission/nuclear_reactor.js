ServerEvents.recipes(event => {

    //controller
    event.recipes.gtceu.assembler('nuclear_reactor')
        .itemInputs('3x #gtceu:circuits/ev', 'gtceu:high_temperature_smelting_casing','gtceu:hv_emitter')
        .itemOutputs('gtceu:nuclear_reactor')
        .inputFluids('gtceu:soldering_alloy 288')
        .duration(50)
        .EUt(16);

});
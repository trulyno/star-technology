ServerEvents.recipes(event => {
    const id = global.id;

    //controller
    event.recipes.gtceu.assembler(id('nuclear_reactor'))
        .itemInputs('3x #gtceu:circuits/ev', 'gtceu:high_temperature_smelting_casing','gtceu:hv_emitter',
            '2x gtceu:hv_electric_pump','gtceu:hv_robot_arm')
        .itemOutputs('gtceu:nuclear_reactor')
        .inputFluids('gtceu:soldering_alloy 576')
        .duration(1800)
        .EUt(400);

});
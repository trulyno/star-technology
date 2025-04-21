ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembly_line(id('bacterial_runic_mutator'))
        .itemInputs('gtceu:uhv_machine_hull', '4x gtceu:uhv_electric_motor', 'gtceu:zircalloy_4_gear', '2x gtceu:uhv_emitter', '4x #gtceu:circuits/uhv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1872', 'gtceu:naquadria 576')
        .itemOutputs('start_core:bacterial_runic_mutator')
        .duration(1200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uhv_fermenter'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('bacterial_breeding_vat'))
        .itemInputs('gtceu:uhv_machine_hull', '4x gtceu:uhv_electric_pump', '4x gtceu:zircalloy_4_rotor', '2x gtceu:uhv_fluid_regulator', '4x #gtceu:circuits/uhv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1872', 'gtceu:naquadria 576')
        .itemOutputs('start_core:bacterial_breeding_vat')
        .duration(1200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uhv_brewery'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('bacterial_hydrocarbon_harvester'))
        .itemInputs('gtceu:uhv_machine_hull', '4x gtceu:uhv_electric_pump', 'gtceu:zircalloy_4_rotor', '2x gtceu:uhv_field_generator', '8x #gtceu:circuits/uhv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1872', 'gtceu:naquadria 1158')
        .itemOutputs('start_core:bacterial_hydrocarbon_harvester')
        .duration(1200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uhv_distillery'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VHA[GTValues.UV]);


});
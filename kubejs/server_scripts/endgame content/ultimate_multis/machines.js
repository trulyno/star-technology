ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembly_line(id('cyclonic_sifter'))
        .itemInputs('gtceu:uhv_machine_hull', '12x #gtceu:circuits/uhv','56x kubejs:uepic_chip', '16x gtceu:stellarium_gear',
            '8x gtceu:uhv_electric_pump', '4x gtceu:uhv_electric_motor', '2x gtceu:uhv_field_generator', '6x gtceu:pure_netherite_gear')
        .inputFluids('gtceu:polyether_ether_ketone 4000','gtceu:gritty_akreyrium 280000')
        .itemOutputs('gtceu:cyclonic_sifter')
        .duration(24000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_sifting_funnel'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 

    event.recipes.gtceu.assembly_line(id('manifold_centrifuge'))
        .itemInputs(
            'gtceu:uhv_machine_hull', '24x #gtceu:circuits/uhv','64x kubejs:uepic_chip', '32x kubejs:uepic_chip',
            '18x gtceu:double_thacoloy_nq_42x_plate','16x gtceu:neutronium_large_fluid_pipe','16x gtceu:pure_netherite_foil',
            '6x kubejs:uhv_super_magnetic_core','4x gtceu:uhv_electric_pump', '6x gtceu:uhv_emitter')
        .inputFluids('gtceu:polyether_ether_ketone 4000','gtceu:utopian_akreyrium 1250')
        .itemOutputs('gtceu:manifold_centrifuge')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_centrifuge'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 

    event.recipes.gtceu.assembly_line(id('injection_mixer'))
        .itemInputs(
            'gtceu:uhv_machine_hull', '24x #gtceu:circuits/uhv', '12x gtceu:double_astrenalloy_nx_plate','64x kubejs:uepic_chip','8x gtceu:neutronium_huge_fluid_pipe',
            '4x gtceu:pure_netherite_rotor','4x gtceu:small_zalloy_gear','6x gtceu:uhv_electric_pump')
        .inputFluids('gtceu:polyether_ether_ketone 4000','gtceu:utopian_akreyrium 1250')
        .itemOutputs('gtceu:injection_mixer')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_mixer'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 

    event.recipes.gtceu.assembly_line(id('molten_destabilizer'))
        .itemInputs(
            'gtceu:uhv_machine_hull', '6x #gtceu:circuits/uhv', '4x gtceu:dense_naquadria_plate','64x gtceu:uhpic_chip','4x gtceu:neutronium_huge_fluid_pipe',
            '4x gtceu:pure_netherite_rotor','4x gtceu:small_pure_netherite_gear','24x gtceu:uv_electric_pump')
        .inputFluids('gtceu:polyether_ether_ketone 8000','gtceu:neutronium 7200')
        .itemOutputs('gtceu:molten_destabilizer')
        .duration(18000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_distillery'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 
    
});
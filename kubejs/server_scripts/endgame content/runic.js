ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.mixer(id('runic_laser_source_base_dust'))
    .itemInputs('2x gtceu:naquadic_netherite_dust', '10x gtceu:tritanium_dust', '5x gtceu:trinium_dust')
    .itemOutputs('17x gtceu:runic_laser_source_base_dust')
    .duration(12000)
    .EUt(GTValues.VHA[GTValues.UV]);

    const singularity_materials = ['aluminium', 'silver', 'tin', 'platinum', 'copper', 'iron', 'lead', 'nickel', 'gold'];

    singularity_materials.forEach(element => {
        event.recipes.gtceu.large_quantum_compressor(`${element}_singularity`)
            .itemInputs(`64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `32x #forge:storage_blocks/${element}`)
            .itemOutputs(Item.of('extendedcrafting:singularity', `{Id:'extendedcrafting:${element}'}`))
            .duration(24000)
            .EUt(GTValues.VHA[GTValues.ZPM]);
    });
        
    runicEngraving('aluminium','1','.8')
    runicEngraving('tin','1','1')
    runicEngraving('iron','2','1.8')
    runicEngraving('nickel','2','1.6')
    runicEngraving('copper','2','1.8')
    runicEngraving('silver','3','2.6')
    runicEngraving('lead','3','2.4')
    runicEngraving('gold','3','2.5')
    runicEngraving('platinum','4','3')

    function runicEngraving(material,amount,dur){

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_engraved`)
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', `{Id:'extendedcrafting:${material}'}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_engraved_plating`)
        .blastFurnaceTemp(10500)
        .duration(4000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_pathway_engraved`)
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', `{Id:'extendedcrafting:${material}'}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_pathway_engraved_plating`)
        .blastFurnaceTemp(10500)
        .duration(3000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_stabilization`)
        .itemInputs('gtceu:dense_naquadah_alloy_plate', Item.of('extendedcrafting:singularity', `{Id:'extendedcrafting:${material}'}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_stabilization_plating`)
        .blastFurnaceTemp(11500)
        .duration(4000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_energized`)
        .itemInputs('gtceu:dense_naquadria_plate', Item.of('extendedcrafting:singularity', `{Id:'extendedcrafting:${material}'}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_energized_plating`)
        .blastFurnaceTemp(11500)
        .duration(4000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_transportation_engraved`)
        .itemInputs('gtceu:dense_trinaquadalloy_plate', Item.of('extendedcrafting:singularity', `{Id:'extendedcrafting:${material}'}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_transportation_engraved_plating`)
        .blastFurnaceTemp(11500)
        .duration(5000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UHV]);

    }

    event.recipes.gtceu.assembler(id('runic_tablet'))
        .itemInputs('kubejs:runic_tablet_1','kubejs:runic_tablet_2','kubejs:runic_tablet_3','kubejs:runic_tablet_4','kubejs:runic_tablet_5','kubejs:runic_tablet_6')
        .inputFluids('gtceu:naquadria 11520')
        .itemOutputs('kubejs:runic_tablet_complete')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UHV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    const runicChange = [
        {current: 1, new: 2},
        {current: 2, new: 3},
        {current: 3, new: 4},
        {current: 4, new: 5},
        {current: 5, new: 6},
        {current: 6, new: 1},
    ]
    runicChange.forEach(tablet => {
    event.recipes.gtceu.scanner(`runic_tablet_${tablet.current}_to_${tablet.new}`)
        .itemInputs(`gtceu:ancient_runicalium_foil`,`2x kubejs:runic_tablet_${tablet.current}`)
        .itemOutputs(`kubejs:runic_tablet_${tablet.new}`)
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UV]);
    })
    event.recipes.gtceu.runic_inscribe_manipulate(id('runic_energized_transportation_plating'))
        .itemInputs('3x kubejs:runic_engraved_plating', 'kubejs:runic_energized_plating', 'kubejs:runic_transportation_engraved_plating')
        .inputFluids('gtceu:dense_electron_akreyrium 1000', 'gtceu:dense_muon_akreyrium 1000', 'gtceu:dense_tau_akreyrium 1000')
        .itemOutputs('kubejs:runic_energized_transportation_plating')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_inscribe_manipulate(id('runic_energized_pathway_plating'))
        .itemInputs('3x kubejs:runic_engraved_plating', 'kubejs:runic_energized_plating', 'kubejs:runic_pathway_engraved_plating')
        .inputFluids('gtceu:dense_electron_akreyrium 1000', 'gtceu:dense_muon_akreyrium 1000', 'gtceu:dense_tau_akreyrium 1000')
        .itemOutputs('kubejs:runic_energized_pathway_plating')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_inscribe_manipulate(id('runic_pathway_casing'))
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadah_plate', '6x kubejs:runic_pathway_engraved_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_pathway_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_inscribe_manipulate(id('runic_stabilization_casing'))
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadah_alloy_plate', '6x kubejs:runic_stabilization_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_stabilization_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_inscribe_manipulate(id('runic_transportation_casing'))
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_trinaquadalloy_plate', '6x kubejs:runic_transportation_engraved_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_transportation_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line(id('runic_inscribe_manipulate'))
        .itemInputs('gtceu:ancient_runicalium_frame', '2x kubejs:uhv_catalyst_core','16x kubejs:uhv_high_strength_panel', '4x #gtceu:circuits/uev', '64x kubejs:uepic_chip', '64x kubejs:uepic_chip',
             '64x kubejs:uepic_chip', '8x gtceu:uhv_field_generator', '8x gtceu:uhv_electric_piston', '16x gtceu:uhv_emitter', '12x kubejs:uhv_precision_drive_mechanism','2x gtceu:uhv_fluid_regulator')
        .inputFluids('gtceu:hsse 25920', 'gtceu:hssg 25920', 'gtceu:hsss 25920')
        .itemOutputs('gtceu:runic_inscribe_manipulate')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:runic_tablet_complete'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
            )
        .EUt(GTValues.VHA[GTValues.UHV]);
 
});
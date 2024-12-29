
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('screret_dust')
    .itemInputs('2x gtceu:naquadic_netherite_dust', '10x gtceu:tritanium_dust', '5x gtceu:trinium_dust')
    .itemOutputs('17x gtceu:screret_runic_laser_source_base_dust')
    .duration(12000)
    .EUt(GTValues.VHA[GTValues.UV]);

    const singularity_materials = ['aluminium', 'silver', 'tin', 'platinum', 'copper', 'iron', 'lead', 'nickel', 'gold'];

    singularity_materials.forEach(element => {
        event.recipes.gtceu.large_quantum_compressor(`${element}_singularity`)
            .itemInputs(`64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `64x #forge:storage_blocks/${element}`, `32x #forge:storage_blocks/${element}`)
            .itemOutputs(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${element}"}`))
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
        .itemInputs('gtceu:dense_enriched_naquadah_plate', Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${material}"}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_engraved_plating`)
        .blastFurnaceTemp(10500)
        .duration(4000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_pathway_engraved`)
        .itemInputs('gtceu:dense_naquadah_plate', Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${material}"}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_pathway_engraved_plating`)
        .blastFurnaceTemp(10500)
        .duration(3000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_stabilization`)
        .itemInputs('gtceu:dense_naquadah_alloy_plate', Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${material}"}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_stabilization_plating`)
        .blastFurnaceTemp(11500)
        .duration(4000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_energized`)
        .itemInputs('gtceu:dense_naquadria_plate', Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${material}"}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_energized_plating`)
        .blastFurnaceTemp(11500)
        .duration(4000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.runic_circuitry_assembling_station(`${material}_rune_transportation_engraved`)
        .itemInputs('gtceu:dense_trinaquadalloy_plate', Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${material}"}`).strongNBT())
        .itemOutputs(`${amount}x kubejs:runic_transportation_engraved_plating`)
        .blastFurnaceTemp(11500)
        .duration(5000*`${dur}`)
        .EUt(GTValues.VHA[GTValues.UHV]);

    }

    event.recipes.gtceu.assembler('runic_tablet')
        .itemInputs('kubejs:runic_tablet_1','kubejs:runic_tablet_2','kubejs:runic_tablet_3','kubejs:runic_tablet_4','kubejs:runic_tablet_5','kubejs:runic_tablet_6')
        .inputFluids('gtceu:naquadria 1152')
        .itemOutputs('kubejs:runic_tablet_complete')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.runic_enscibe_manipulate('runic_energized_transportation_plating')
        .itemInputs('3x kubejs:runic_engraved_plating', 'kubejs:runic_energized_plating', 'kubejs:runic_transportation_engraved_plating')
        .inputFluids('gtceu:dense_electron_akreyrium 1000', 'gtceu:dense_muon_akreyrium 1000', 'gtceu:dense_tau_akreyrium 1000')
        .itemOutputs('kubejs:runic_energized_transportation_plating')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_enscibe_manipulate('runic_energized_pathway_plating')
        .itemInputs('3x kubejs:runic_engraved_plating', 'kubejs:runic_energized_plating', 'kubejs:runic_pathway_engraved_plating')
        .inputFluids('gtceu:dense_electron_akreyrium 1000', 'gtceu:dense_muon_akreyrium 1000', 'gtceu:dense_tau_akreyrium 1000')
        .itemOutputs('kubejs:runic_energized_pathway_plating')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_enscibe_manipulate('runic_pathway_casing')
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadah_plate', '6x kubejs:runic_pathway_engraved_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_pathway_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_enscibe_manipulate('runic_stabilization_casing')
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadah_alloy_plate', '6x kubejs:runic_stabilization_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_stabilization_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_enscibe_manipulate('runic_transportation_casing')
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_trinaquadalloy_plate', '6x kubejs:runic_transportation_engraved_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_transportation_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_enscibe_manipulate('runic_energized_transportation_casing')
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadria_plate', '6x kubejs:runic_energized_transportation_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_energized_transportation_casing')
        .duration(5000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.runic_enscibe_manipulate('runic_energized_pathway_casing')
        .itemInputs('gtceu:void_frame', '12x gtceu:dense_naquadria_plate', '6x kubejs:runic_energized_pathway_plating')
        .inputFluids('gtceu:naquadria 2592', 'gtceu:utopian_akreyrium 864')
        .itemOutputs('kubejs:runic_energized_pathway_casing')
        .duration(5000)
        .EUt(GTValues.VA[GTValues.UHV]);

});
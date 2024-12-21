ServerEvents.recipes(event => {
    
    event.shaped('gtceu:heated_cracking_unit',[
            'ABC',
            'DEA',
            'ABF'
        ],{
            A: '#gtceu:circuits/lv',
            B: 'gtceu:lv_electric_motor',
            C: 'gtceu:tempered_glass',
            D: 'gtceu:cupronickel_coil_block',
            E: 'gtceu:heatproof_machine_casing',
            F: 'gtceu:lv_conveyor_module'
    });    

    ['diamond', 'emerald', 'ruby', 'green_sapphire', 'sapphire', 'quartzite', 'certus_quartz', 'blue_topaz', 'topaz', 'amethyst'].forEach(type => {
        event.recipes.gtceu.heated_cracking_unit(`${type}_cracking`)
            .itemInputs(`kubejs:${type}_geode`)
            .itemOutputs(`kubejs:cracked_${type}_geode`)
            .blastFurnaceTemp(1800)
            .duration(600)
            .EUt(60);
    });
})
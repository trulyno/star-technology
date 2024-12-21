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
            E: 'gtceu:solid_machine_casing',
            F: 'gtceu:lv_conveyor_module'
    });

    event.shaped('gtceu:pressure_cracker',[
            'ABC',
            'DEA',
            'ABF'
        ],{
            A: '#gtceu:circuits/luv',
            B: 'gtceu:luv_electric_motor',
            C: 'gtceu:laminated_glass',
            D: 'gtceu:hssg_coil_block',
            E: 'gtceu:heatproof_machine_casing',
            F: 'gtceu:luv_conveyor_module'
    });

    ['diamond', 'emerald', 'ruby', 'green_sapphire', 'sapphire', 'quartzite', 'certus_quartz', 'blue_topaz', 'topaz', 'amethyst'].forEach(type => {
        event.recipes.gtceu.heated_cracking_unit(`${type}_cracking`)
            .itemInputs(`kubejs:${type}_geode`)
            .itemOutputs(`kubejs:cracked_${type}_geode`)
            .blastFurnaceTemp(1800)
            .duration(600)
            .EUt(60);

        event.recipes.gtceu.pressure_cracker(`${type}_cracking`)
            .itemInputs(`kubejs:${type}_geode`)
            .itemOutputs(`kubejs:cracked_${type}_geode`)
            .blastFurnaceTemp(1800)
            .duration(600)
            .EUt(60);
    });
})
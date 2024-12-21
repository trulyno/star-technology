ServerEvents.recipes(event => {

    event.shaped('gtceu:void_miner',[
        'ABC',
        'ADE',
        'FGC'],{
        A: 'gtceu:soul_infused_hex_wire',
        B: 'gtceu:prospector.lv',
        C: 'gtceu:lv_electric_piston',
        D: 'gtceu:lv_miner',
        E: '#gtceu:circuits/lv',
        F: 'gtceu:lv_robot_arm',
        G: 'gtceu:lv_item_magnet'
    });

    event.shaped('gtceu:void_excavator',[
        'ABC',
        'ADE',
        'FBC'],{
        A: 'gtceu:twinite_hex_wire',
        B: 'gtceu:luv_field_generator',
        C: 'gtceu:luv_electric_piston',
        D: 'gtceu:luv_large_miner',
        E: '#gtceu:circuits/luv',
        F: 'gtceu:luv_robot_arm'
    });

    ['coal', 'gold', 'lapis', 'pentlandite', 'realgar', 'silver', 'stibnite'].forEach(type => {
        event.recipes.gtceu.macerator(`${type}_cluster`)
            .itemInputs(`kubejs:${type}_cluster`)
            .itemOutputs(`gtceu:crushed_${type}_ore`)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 1000)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 2500, 500)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 1250, 200)
            .duration(240)
            .EUt(24);
    });

    event.recipes.gtceu.void_miner(`mining`)
        .inputFluids(`gtceu:drilling_fluid 10000`)
        .chancedOutput(`5x kubejs:coal_cluster`, 5000, 1000)
        .chancedOutput(`2x kubejs:gold_cluster`, 4000, 750)
        .chancedOutput(`5x kubejs:lapis_cluster`, 4000, 1000)
        .chancedOutput(`3x kubejs:pentlandite_cluster`, 2000, 500)
        .chancedOutput(`4x kubejs:realgar_cluster`, 4000, 800)
        .chancedOutput(`2x kubejs:silver_cluster`, 4000, 750)
        .chancedOutput(`3x kubejs:stibnite_cluster`, 3000, 500)
        .duration(720)
        .EUt(24);

    event.recipes.gtceu.void_excavator(`mining`)
        .inputFluids(`gtceu:drilling_fluid 10000`)
        .chancedOutput(`5x kubejs:coal_cluster`, 5000, 1000)
        .chancedOutput(`2x kubejs:gold_cluster`, 4000, 750)
        .chancedOutput(`5x kubejs:lapis_cluster`, 4000, 1000)
        .chancedOutput(`3x kubejs:pentlandite_cluster`, 2000, 500)
        .chancedOutput(`4x kubejs:realgar_cluster`, 4000, 800)
        .chancedOutput(`2x kubejs:silver_cluster`, 4000, 750)
        .chancedOutput(`3x kubejs:stibnite_cluster`, 3000, 500)
        .duration(720)
        .EUt(24);

});
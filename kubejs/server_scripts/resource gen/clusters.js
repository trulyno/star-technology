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

    event.recipes.gtceu.void_miner('mining')
        .inputFluids('gtceu:drilling_fluid 10000')
        .chancedOutput('5x gtceu:raw_coal', 5000, 1000)
        .chancedOutput('2x minecraft:raw_gold', 4000, 750)
        .chancedOutput('5x gtceu:raw_lapis', 4000, 1000)
        .chancedOutput('3x gtceu:raw_pentlandite', 2000, 500)
        .chancedOutput('4x gtceu:raw_realgar', 4000, 800)
        .chancedOutput('2x gtceu:raw_silver', 4000, 750)
        .chancedOutput('3x gtceu:raw_stibnite', 3000, 500)
        .outputFluids('gtceu:rare_ore_residue 100', 'gtceu:raw_ore_slurry 900')
        .duration(720)
        .EUt(24);

    event.recipes.gtceu.void_excavator('mining')
        .inputFluids('gtceu:drilling_fluid 10000')
        .chancedOutput('5x gtceu:raw_coal', 5000, 1000)
        .chancedOutput('2x minecraft:raw_gold', 4000, 750)
        .chancedOutput('5x gtceu:raw_lapis', 4000, 1000)
        .chancedOutput('3x gtceu:raw_pentlandite', 2000, 500)
        .chancedOutput('4x gtceu:raw_realgar', 4000, 800)
        .chancedOutput('2x gtceu:raw_silver', 4000, 750)
        .chancedOutput('3x gtceu:raw_stibnite', 3000, 500)
        .outputFluids('gtceu:rare_ore_residue 100', 'gtceu:raw_ore_slurry 900')
        .duration(720)
        .EUt(24);

});
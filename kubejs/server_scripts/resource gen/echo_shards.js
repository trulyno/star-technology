ServerEvents.recipes(event => {

    event.recipes.gtceu.heat_chamber("tiny_purified_naquadah")
        .itemInputs('gtceu:tiny_naquadah_dust')
        .inputFluids('gtceu:neon 1000')
        .itemOutputs('gtceu:tiny_purified_naquadah_dust')
        .blastFurnaceTemp(10000)
        .duration(640)
        .EUt(524288);

    event.recipes.gtceu.vibration_laser_engraver('test')
        .itemInputs('gtceu:exquisite_purified_naquadah_gem', '#forge:lenses/white')
        .inputFluids('gtceu:lubricant 2000', 'gtceu:pcb_coolant 16000')
        .itemOutputs('minecraft:echo_shard')
        .outputFluids('gtceu:hot_pcb_coolant 19200')
        .duration(400)
        .EUt(524288);

});
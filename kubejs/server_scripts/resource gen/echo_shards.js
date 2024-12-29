ServerEvents.recipes(event => {

    event.recipes.gtceu.vibration_laser_engraver('test')
        .itemInputs('gtceu:exquisite_purified_naquadah_gem')
        .inputFluids('gtceu:pcb_coolant 16000', 'gtceu:lubricant 2000')
        .itemOutputs('minecraft:echo_shard')
        .outputFluids('gtceu:hot_pcb_coolant 19200')
        .duration(400)
        .EUt(524288);

});
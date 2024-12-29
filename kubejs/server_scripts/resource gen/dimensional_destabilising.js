ServerEvents.recipes(event => {

    event.recipes.gtceu.vacuum_freezer('pcb_cooling')
        .inputFluids('gtceu:hot_pcb_coolant 1200')
        .outputFluids('gtceu:pcb_coolant 1000')
        .duration(140)
        .EUt(512);

    event.recipes.gtceu.dimensional_destabiliser('naquadah_mining')
        .itemInputs('mysticalagradditions:nether_star_shard')
        .inputFluids('gtceu:pcb_coolant 8000')
        .itemOutputs('64x gtceu:raw_naquadah', '64x gtceu:raw_naquadah')
        .outputFluids('gtceu:hot_pcb_coolant 9600')
        .duration(2400)
        .EUt(4096);

});

ServerEvents.recipes(event => {
    
    const th_rod = 'kubejs:thorium_fuel_rod';
    const u_rod = 'kubejs:low_enriched_uranium_fuel_rod';
    const u_enriched_rod = 'kubejs:highly_enriched_uranium_fuel_rod';
    const th_rod_dep = 'kubejs:depleted_thorium_fuel_rod';
    const u_rod_dep = 'kubejs:depleted_low_enriched_uranium_fuel_rod';
    const u_enriched_rod_dep = 'kubejs:depleted_highly_enriched_uranium_fuel_rod';

    const wotah = 'gtceu:distilled_water 4'
    const n_steam = 'gtceu:nuclear_steam 16';
    const nak = 'gtceu:sodium_potassium 2';
    const hot_nak = 'gtceu:hot_sodium_potassium 8';
    const pcb_coolant = 'gtceu:pcb_coolant 1';
    const hot_pcb_coolant = 'gtceu:hot_pcbcoolant 4';

    function nuc_fiss(rod, dep_rod, time_in_min) {
        event.recipes.gtceu.nuclear_reactor(`${rod}_1`)
            .itemInputs(rod)
            .itemOutputs(dep_rod)
            .perTick(true)
            .inputFluids(wotah)
            .outputFluids(n_steam)
            .perTick(false)
            .duration(time_in_min * 60 * 20)
            .EUt(-512);

        event.recipes.gtceu.nuclear_reactor(`${rod}_2`)
            .itemInputs(rod)
            .itemOutputs(dep_rod)
            .perTick(true)
            .inputFluids(nak)
            .outputFluids(hot_nak)
            .perTick(false)
            .duration(time_in_min * 60 * 10)
            .EUt(-2048);

        event.recipes.gtceu.nuclear_reactor(`${rod}_3`)
            .itemInputs(rod)
            .itemOutputs(dep_rod)
            .perTick(true)
            .inputFluids(pcb_coolant)
            .outputFluids(hot_pcb_coolant)
            .perTick(false)
            .duration(time_in_min * 60 * 5)
            .EUt(-8192);
    }

    nuc_fiss(th_rod, th_rod_dep, 20);
    nuc_fiss(u_rod, u_rod_dep, 10);
    nuc_fiss(u_enriched_rod, u_enriched_rod_dep, 15);

    function nuc_turb(id, hot_coolant, coolant, rate) {
        event.recipes.gtceu.nuclear_turbine(id)
            .inputFluids(hot_coolant)
            .outputFluids(coolant)
            .duration(1)
            .EUt(-rate);
    }

    nuc_turb('nuc_turbine_1', n_steam, wotah, 512);
    nuc_turb('nuc_turbine_2',hot_nak, nak, 2048);
    nuc_turb('nuc_turbine_3',hot_pcb_coolant, pcb_coolant, 8192);

    // event.shaped(Item.of('gtceu:nuclear_reactor'), [
    //     'EGR',
    //     'CFC',
    //     'DGD'
    // ], {
    //     E: 'gtceu:hv_emitter',
    //     G: 'gtceu:black_bronze_gear',
    //     R: 'gtceu:hv_sensor',
    //     C: '#gtceu:circuits/ev',
    //     F: 'gtceu:stainless_steel_frame',
    //     D: 'gtceu:double_steel_plate'
    // });

    // event.shaped(Item.of('gtceu:nuclear_turbine'), [
    //     'CGC',
    //     'GHG',
    //     'PGP'
    // ], {
    //     C: '#gtceu:circuits/ev',
    //     G: 'gtceu:black_bronze_gear',
    //     H: 'gtceu:hv_machine_hull',
    //     P: 'gtceu:aluminium_large_fluid_pipe'
    // });

    event.shapeless(th_rod, ['9x gtceu:thorium_dust']);
    event.shapeless(u_rod, ['gtceu:uranium_235_dust', '8x gtceu:uranium_dust']);
    event.shapeless(u_enriched_rod, ['4x gtceu:uranium_235_dust', '5x gtceu:uranium_dust']);

    event.recipes.gtceu.centrifuge('th_centrifuging')
        .itemInputs(th_rod_dep)
        .itemOutputs('3x gtceu:lead_dust', '2x gtceu:bismuth_dust')
        .outputFluids('gtceu:radon 4000')
        .duration(1200)
        .EUt(420);

    event.recipes.gtceu.centrifuge('u_centrifuging')
        .itemInputs(u_rod_dep)
        .itemOutputs('3x gtceu:plutonium_dust', '2x gtceu:barium_dust')
        .outputFluids('gtceu:krypton 4000')
        .duration(1200)
        .EUt(420);

    event.recipes.gtceu.centrifuge('u_plus_centrifuging')
        .itemInputs(u_enriched_rod_dep)
        .itemOutputs('5x gtceu:plutonium_dust', '1x gtceu:barium_dust')
        .outputFluids('gtceu:krypton 2000')
        .duration(1200)
        .EUt(420);

});
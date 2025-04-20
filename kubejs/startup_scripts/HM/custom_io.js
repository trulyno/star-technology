const $FluidHatchPartMachine = Java.loadClass(
    'com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine'
)

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fluid_input','custom')
        .machine((holder, tier) => new $FluidHatchPartMachine(holder, tier, 'in', 2000, 1))   
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>{
            builder
                .workableCasingRenderer('gtceu:block/casings/gcym/industrial_steam_casing', 'gtceu:block/multiblock/tank_valve', false)
            });
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fluid_output','custom')
        .machine((holder, tier) => new $FluidHatchPartMachine(holder, tier, 'out', 2000, 1))   
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>{
            builder
                .workableCasingRenderer('gtceu:block/casings/gcym/industrial_steam_casing', 'gtceu:block/multiblock/tank_valve', false)
            });
});
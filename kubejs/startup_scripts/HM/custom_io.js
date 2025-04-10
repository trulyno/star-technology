// packmode: hard

const $FluidHatchPartMachine = Java.loadClass(
    'com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine'
)

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fluid_input','custom')
        .machine((holder, tier) => new $FluidHatchPartMachine(holder, tier, 'in', 1000, 1))   
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>{
            builder
                .workableCasingRenderer('gtceu:block/casings/gcym/industrial_steam_casing', 'gtceu:block/multiblock/tank_valve', false)
                .abilities(PartAbility.IMPORT_FLUIDS)
            });
});
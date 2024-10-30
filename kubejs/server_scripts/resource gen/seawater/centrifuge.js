ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('sea_water')
    .inputFluids('exnihilosequentia:sea_water 1500')
    .outputFluids('gtceu:salt_water 1000')
    .itemOutputs('gtceu:saltpeter_dust', 'gtceu:rock_salt_dust', 'gtceu:small_borax_dust')
    .duration(50)
    .EUt(16);
})
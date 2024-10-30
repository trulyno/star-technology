ServerEvents.recipes(event => {

    //large barrel
    event.recipes.gtceu.large_barrel('sea_water')
    .notConsumable('minecraft:sand')
    .inputFluids('minecraft:water 1000')
    .outputFluids('exnihilosequentia:sea_water 1000')
    .duration(80);
});
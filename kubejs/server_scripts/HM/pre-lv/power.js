// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.stirling_generator(id('bulk'))
        .itemInputs('#gtceu:coal_blocks')
        .inputFluids('minecraft:water 100')
        .outputFluids('gtceu:distilled_water 10')
        .duration(200)
        .EUt(-8);

    event.recipes.gtceu.stirling_generator(id('basic'))
        .itemInputs('#minecraft:coals')
        .inputFluids('minecraft:water 10')
        .outputFluids('gtceu:distilled_water 1')
        .duration(20)
        .EUt(-8);

    event.recipes.gtceu.stirling_generator(id('better_bulk'))
        .itemInputs('gtceu:coke_block')
        .inputFluids('minecraft:water 150')
        .outputFluids('gtceu:distilled_water 15')
        .duration(300)
        .EUt(-8);

    event.recipes.gtceu.stirling_generator(id('better_basic'))
        .itemInputs('2x gtceu:coke_gem')
        .inputFluids('minecraft:water 30')
        .outputFluids('gtceu:distilled_water 3')
        .duration(60)
        .EUt(-8);

});
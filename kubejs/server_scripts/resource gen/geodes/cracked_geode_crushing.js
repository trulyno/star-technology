ServerEvents.recipes(event => {
    
    ['diamond', 'emerald', 'ruby', 'green_sapphire', 'sapphire', 'quartzite', 'certus_quartz', 'blue_topaz', 'topaz', 'amethyst'].forEach(type => {
        event.recipes.gtceu.macerator(`cracked_${type}_geode_crushing`)
            .itemInputs(`kubejs:cracked_${type}_geode`)
            .itemOutputs(`2x gtceu:crushed_${type}_ore`)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 5000, 1500)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 3000, 500)
            .chancedOutput(`gtceu:crushed_${type}_ore`, 1000, 250)
            .duration(100)
            .EUt(24);
    });
    
})

ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:large_barrel'), [
        'PSP',
        'IBI',
        'PSP'
    ], {
        P: 'gtceu:treated_wood_planks',
        S: 'gtceu:treated_wood_rod',
        B: '#exnihilosequentia:barrels',
        I: 'gtceu:wrought_iron_plate'
    });

    event.recipes.gtceu.large_barrel('witch_water')
        .notConsumable('exnihilosequentia:mycelium_spores')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:witch_water 1000')
        .duration(80);

    event.recipes.gtceu.large_barrel('to_clay')
        .itemInputs('exnihilosequentia:dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('minecraft:clay')
        .duration(1);

    event.recipes.gtceu.large_barrel('to_ssand')
        .itemInputs('minecraft:sand')
        .inputFluids('exnihilosequentia:witch_water 100')
        .itemOutputs('minecraft:soul_sand')
        .duration(1);

    event.recipes.gtceu.large_barrel('to_slime')
        .itemInputs('#forge:mushrooms')
        .inputFluids('exnihilosequentia:witch_water 1000')
        .itemOutputs('minecraft:slime_block')
        .duration(1);

    event.recipes.gtceu.large_barrel('to_bshroom')
        .itemInputs('exnihilosequentia:mycelium_spores')
        .inputFluids('exnihilosequentia:witch_water 1000')
        .itemOutputs('minecraft:brown_mushroom_block')
        .duration(1);

    event.recipes.gtceu.large_barrel('to_rshroom')
        .itemInputs('minecraft:brown_mushroom_block')
        .inputFluids('exnihilosequentia:witch_water 1000')
        .itemOutputs('minecraft:red_mushroom_block')
        .duration(1);

    event.recipes.gtceu.large_barrel('slimeshroom_dupe')
        .notConsumable('thermal:slime_mushroom_spores')
        .inputFluids('exnihilosequentia:witch_water 100')
        .chancedOutput('thermal:slime_mushroom_spores', 9500, 0)
        .duration(20);

    event.shapeless(Item.of('3x minecraft:brown_mushroom'), ['minecraft:brown_mushroom_block', '#forge:tools/mortars']);
    event.recipes.gtceu.macerator('brown_mushrooms')
        .itemInputs('minecraft:brown_mushroom_block')
        .itemOutputs('3x minecraft:brown_mushroom')
        .chancedOutput('minecraft:brown_mushroom', 5000, 0)
        .duration(45)
        .EUt(8);

    event.shapeless(Item.of('3x minecraft:red_mushroom'), ['minecraft:red_mushroom_block', '#forge:tools/mortars']);
    event.recipes.gtceu.macerator('red_mushrooms')
        .itemInputs('minecraft:red_mushroom_block')
        .itemOutputs('3x minecraft:red_mushroom')
        .chancedOutput('minecraft:red_mushroom', 5000, 0)
        .duration(45)
        .EUt(8);

    // Credit: Schrubbls
    function concreteRecipe(event, color) {
        event.recipes.gtceu.large_barrel(`start:vanilla_concrete_and_dye_${color}`)
            .itemInputs(`minecraft:${color}_concrete_powder`)
            .inputFluids('gtceu:distilled_water 500')
            .itemOutputs(`minecraft:${color}_concrete`)
            .outputFluids(`gtceu:${color}_dye 9`)
            .duration(10)
    
        event.recipes.gtceu.large_barrel(`start:vanilla_concrete_${color}`)
            .itemInputs(`minecraft:${color}_concrete_powder`)
            .inputFluids('minecraft:water 1000')
            .itemOutputs(`minecraft:${color}_concrete`)
            .duration(1)
    }

    concreteRecipe(event, "black");
    concreteRecipe(event, "blue");
    concreteRecipe(event, "brown");
    concreteRecipe(event, "cyan");
    concreteRecipe(event, "green");
    concreteRecipe(event, "gray");
    concreteRecipe(event, "lime");
    concreteRecipe(event, "light_blue");
    concreteRecipe(event, "light_gray");
    concreteRecipe(event, "magenta");
    concreteRecipe(event, "orange");
    concreteRecipe(event, "purple");
    concreteRecipe(event, "red");
    concreteRecipe(event, "white");
    concreteRecipe(event, "yellow");
    concreteRecipe(event, "pink");

    // Mycelium Growths

    event.recipes.gtceu.large_barrel('mycelium_growth_compost')
        .duration(400)
        .itemInputs('thermal:compost', 'exnihilosequentia:mycelium_spores')
        .itemOutputs('kubejs:mycelium_growth')
    event.recipes.gtceu.large_barrel('mycelium_growth_bonemeal')
        .duration(600)
        .itemInputs('minecraft:bone_meal', 'exnihilosequentia:mycelium_spores')
        .itemOutputs('kubejs:mycelium_growth')
    event.recipes.gtceu.large_barrel('mycelium_growth_sawdust')
        .duration(400)
        .itemInputs('gtceu:wood_dust', 'exnihilosequentia:mycelium_spores')
        .itemOutputs('kubejs:mycelium_growth')

    // Mycelium Spores
    event.recipes.gtceu.large_barrel('mycelium_spores')
        .duration(300)
        .notConsumable('minecraft:red_mushroom_block')
        .itemInputs('4x minecraft:dirt')
        .inputFluids('exnihilosequentia:witch_water 750')
        .chancedOutput('exnihilosequentia:mycelium_spores', 8500, 0)
});

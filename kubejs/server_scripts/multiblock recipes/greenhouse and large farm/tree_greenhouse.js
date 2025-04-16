ServerEvents.recipes(event => {
    const id = global.id;

    [
        { name: 'oak', sapling: 'oak_sapling', namespace: 'minecraft'},
        { name: 'dark_oak', sapling: 'dark_oak_sapling', namespace: 'minecraft'},
        { name: 'birch', sapling: 'birch_sapling', namespace: 'minecraft'},
        { name: 'spruce', sapling: 'spruce_sapling', namespace: 'minecraft'},
        { name: 'acacia', sapling: 'acacia_sapling', namespace: 'minecraft'},
        { name: 'jungle', sapling: 'jungle_sapling', namespace: 'minecraft'},
        { name: 'cherry', sapling: 'cherry_sapling', namespace: 'minecraft'},
        { name: 'mangrove', sapling: 'mangrove_propagule', namespace: 'minecraft'},
        { name: 'twisted', sapling: 'twisted_sapling', namespace: 'architects_palette'},
    ].forEach(type => {
        event.recipes.gtceu.tree_greenhouse(id(`${type.name}_growing`))
            .notConsumable(`${type.namespace}:${type.sapling}`)
            .itemOutputs(`16x ${type.namespace}:${type.name}_log`)
            .inputFluids('minecraft:water 100')
            .duration(600)
            .circuit(0)
            .EUt(global.va['lv']);

        event.recipes.gtceu.tree_greenhouse(id(`${type.name}_co2_growing`))
            .notConsumable(`${type.namespace}:${type.sapling}`)
            .itemOutputs(`64x ${type.namespace}:${type.name}_log`)
            .outputFluids('gtceu:oxygen 1000')
            .inputFluids('minecraft:water 100', 'gtceu:carbon_dioxide 500')
            .duration(600)
            .circuit(1)
            .EUt(global.va['lv']);

        event.recipes.gtceu.tree_greenhouse(id(`${type.name}_npkco2_growing`))
            .notConsumable(`${type.namespace}:${type.sapling}`)
            .itemOutputs(`64x ${type.namespace}:${type.name}_log`, `64x ${type.namespace}:${type.name}_log`)
            .outputFluids('gtceu:oxygen 2500')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000', 'gtceu:npk_solution 150')
            .duration(600)
            .circuit(2)
            .EUt(global.va['lv']);
    })

    event.shaped(Item.of('gtceu:greenhouse'), [
        'WAW',
        'MHM',
        'SCS'
    ], {
        W: 'gtceu:fertilizer',
        A: 'gtceu:iron_axe',
        M: 'gtceu:lv_electric_motor',
        H: 'gtceu:lv_machine_hull',
        S: 'gtceu:steel_plate',
        C: '#gtceu:circuits/mv'
    }).id('start:shaped/greenhouse');

});

ServerEvents.recipes(event => {

    function treeGrowing(type) {
        event.recipes.gtceu.tree_greenhouse(`${type}_growing`)
            .notConsumable(`minecraft:${type}_sapling`)
            .itemOutputs(`32x minecraft:${type}_log`)
            .chancedOutput(`minecraft:${type}_sapling`, 1000, 0)
            .inputFluids('minecraft:water 100')
            .duration(200)
            .EUt(20);
    }

    treeGrowing('oak');
    treeGrowing('birch');
    treeGrowing('spruce');
    treeGrowing('dark_oak');
    treeGrowing('jungle');
    treeGrowing('acacia');

    event.recipes.gtceu.tree_greenhouse(`mangrove_growing`)
            .notConsumable(`minecraft:mangrove_propagule`)
            .itemOutputs(`32x minecraft:mangrove_log`)
            .chancedOutput(`minecraft:mangrove_propagule`, 1000, 0)
            .inputFluids('minecraft:water 100')
            .duration(400)
            .EUt(20);

    event.shaped(Item.of('gtceu:tree_greenhouse'), [
        'WAW',
        'MHM',
        'SCS'
    ], {
        W: 'gtceu:wrought_iron_plate',
        A: 'gtceu:iron_axe',
        M: 'gtceu:lv_electric_motor',
        H: 'gtceu:lv_machine_hull',
        S: 'gtceu:steel_plate',
        C: '#forge:circuits/mv'
    });

});
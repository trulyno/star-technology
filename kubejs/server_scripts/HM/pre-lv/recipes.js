ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:shaped/axe_flint'});
    event.shaped(Item.of('gtceu:flint_axe'), [
        'FT',
        'ST'
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });
   
    event.shaped(Item.of('minecraft:bowl', 2 ),
    [
        'A',
        'B'
    ], {
        A: '#forge:tools/knives',
        B: '#minecraft:planks'
    });
   
    event.remove({ id: 'minecraft:bowl'});
    event.shapeless(Item.of('kubejs:plant_fibers'),[
        '#forge:tools/knives',
        'farmersdelight:straw'
    ]);
    event.shapeless(Item.of('kubejs:plant_fibers'),[
        '#forge:tools/knives',
        'farmersdelight:tree_bark'
    ]);

})
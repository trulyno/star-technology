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

});
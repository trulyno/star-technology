BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
    if (event.player.isCrouching() && event.player.getMainHandItem() == null) {
        if (Math.random() < 0.002) {
            event.block.popItemFromFace(Item.of('minecraft:cookie'), 'up');
        }
        if (Math.random() < 0.25) {
            event.block.popItemFromFace(Item.of('kubejs:flint_shard'), 'up');
        }
    } 
});

ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:flint'), [
        'SS',
        'SS'
    ], {
        S: 'kubejs:flint_shard'
    });

});
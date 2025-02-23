ServerEvents.tags('block', event => {

    ['oak','birch','acacia','cherry','dark_oak','jungle','mangrove','spruce'].forEach (log => {
        event.add('minecraft:needs_stone_tool', `minecraft:stripped_${log}_log`);
        event.add('minecraft:needs_stone_tool', `minecraft:stripped_${log}_wood`);
        event.add('minecraft:needs_iron_tool', `minecraft:${log}_wood`);
        event.add('minecraft:needs_iron_tool', `minecraft:${log}_log`)});
    
});

ServerEvents.tags('item', event => {

    event.add('forge:string', 'kubejs:plant_fibers');
    event.remove('forge:tools/mortars','gtceu:flint_mortar');
    event.add('forge:tools/axes', /gtceu:.*axe/);
    event.add('kubejs:canvas', 'farmersdelight:canvas');
});

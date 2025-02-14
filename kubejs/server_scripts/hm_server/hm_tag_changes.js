ServerEvents.tags('block', event => {

    ['oak','birch','acacia','cherry','dark_oak','jungle','mangrove','spruce'].forEach (log => {
        event.add('minecraft:needs_stone_tool', `minecraft:stripped_`+log+`_log`);
        event.add('minecraft:needs_stone_tool', `minecraft:stripped_`+log+`_wood`);
        event.add('minecraft:needs_iron_tool', `minecraft:`+log+`_wood`);
        event.add('minecraft:needs_iron_tool', `minecraft:`+log+`_log`)});

});

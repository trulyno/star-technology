StartupEvents.registry('item', event => {
    event.create('flint_shard')
        .displayName('Flint Shard')
        .rarity('common');
    
    event.create('plant_fibers')
        .displayName('Plant Fibers')
        .rarity('common');

    const oreType=['Hematite','Cassiterite','Chalcopyrite','Sphalerite','Pyrite','Magnetite','Galena']

    oreType.forEach(type => {
        event.create(`${type.toLowerCase()}_crushed_ore_chunk`)
            .displayName(`Crushed ${type} Ore Chunk`)
    });
});

StartupEvents.registry('block', event => {
    event.create('reinforced_stone_bricks')
        .displayName('Reinforced Stone Bricks')
            .hardness(5)
            .resistance(1)
            .soundType('stone')
            .requiresTool(true)
            .tagBlock("mineable/pickaxe")
            .tagBlock('minecraft:needs_iron_tool');
});
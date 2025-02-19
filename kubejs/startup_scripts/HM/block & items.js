StartupEvents.registry('item', event => {
    event.create('flint_shard')
        .displayName('Flint Shard')
        .rarity('common');

    const oreType=['Hematite','Cassiterite','Chalcopyrite','Sphalerite','Pyrite','Magnetite','Galena']

    oreType.forEach(type => {
        event.create(`${type.toLowerCase()}_crushed_ore_chunk`)
            .displayName(`Crushed ${type} Ore Chunk`)
    });
});

StartupEvents.registry('block', event => {

    event.create('ancient_stargate_ring_block')
        .displayName('Ancient Stargate Ring Block')
        .hardness(5)
        .resistance(10)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .texture('up', 'kubejs:block/ancient_stargate_block_tops')
        .texture('down', 'kubejs:block/ancient_stargate_block_tops')
        .texture('north', 'kubejs:block/ancient_stargate_block_ring')
        .texture('east', 'kubejs:block/ancient_stargate_block_ring')
        .texture('west', 'kubejs:block/ancient_stargate_block_ring')
        .texture('south', 'kubejs:block/ancient_stargate_block_ring');

    event.create('ancient_stargate_base_block')
        .displayName('Ancient Stargate Base Block')
        .hardness(5)
        .resistance(10)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .texture('up', 'kubejs:block/ancient_stargate_block_tops')
        .texture('down', 'kubejs:block/ancient_stargate_block_tops')
        .texture('south', 'kubejs:block/ancient_stargate_block_ring')
        .texture('east', 'kubejs:block/ancient_stargate_block_ring')
        .texture('west', 'kubejs:block/ancient_stargate_block_ring')
        .texture('north', 'kubejs:block/ancient_stargate_block_base');

    event.create('ancient_stargate_chevron_block')
        .displayName('Ancient Stargate Chevron Block')
        .hardness(5)
        .resistance(10)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .texture('up', 'kubejs:block/ancient_stargate_block_tops')
        .texture('down', 'kubejs:block/ancient_stargate_block_tops')
        .texture('north', 'kubejs:block/ancient_stargate_block_chevron')
        .texture('east', 'kubejs:block/ancient_stargate_block_chevron')
        .texture('west', 'kubejs:block/ancient_stargate_block_chevron')
        .texture('south', 'kubejs:block/ancient_stargate_block_chevron');

});
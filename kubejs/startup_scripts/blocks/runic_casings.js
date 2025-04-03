
StartupEvents.registry('block', event => {

    event.create('runic_stabilization_casing')
        .displayName('Stabilization Enscribed Runically Infused Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .textureAll('kubejs:block/casings/runic_stabilization_casing');

    event.create('runic_transportation_casing')
        .displayName('Transportation Enscribed Runically Infused Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .textureAll('kubejs:block/casings/runic_transportation_casing');

    event.create('runic_pathway_casing')
        .displayName('Pathway Enscribed Runically Infused Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .textureAll('kubejs:block/casings/runic_pathway_casing');

});
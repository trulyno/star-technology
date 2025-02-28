
StartupEvents.registry('block', event => {

    // reference casings
    event.create('laser_casing')
        .displayName('Schrubblaser Beam Concentrator & Emmiter Capable Stellarium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/laser_casing');

    event.create('inscribe_casing')
        .displayName('Keelagraver Manipulator & Acuancentrator Capable Runicalium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/inscribe_casing');

    // Extras
    event.create('meshblock')
        .displayName('Treated Wood Reinforced Mesh')
        .hardness(2)
        .resistance(2)
        .material('wood')
        .transparent(true)
        .defaultTranslucent() 
        .requiresTool(false)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/multiblock/meshblock');

});
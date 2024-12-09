StartupEvents.registry('block', event => {
    
    //Coagulated blocks
    event.create('coagulated_iron_mixture')
        .displayName('Coagulated Iron Mixture')
        .hardness(5)
        .resistance(5)
        .material('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureAll('kubejs:block/coagulated_iron_mixture');

    event.create('coagulated_copper_mixture')
        .displayName('Coagulated Copper Mixture')
        .hardness(5)
        .resistance(5)
        .material('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureAll('kubejs:block/coagulated_copper_mixture');

    event.create('coagulated_quartz_mixture')
        .displayName('Coagulated Quartz Mixture')
        .hardness(5)
        .resistance(5)
        .material('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureAll('kubejs:block/coagulated_quartz_mixture');

    event.create('coagulated_lava')
        .displayName('Coagulated Lava')
        .hardness(5)
        .resistance(5)
        .material('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureAll('kubejs:block/coagulated_lava');
        
});
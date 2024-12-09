StartupEvents.registry('block', event => {
    
    //Coagulated blocks
    ['iron', 'copper', 'quartz'].forEach(type => {
        event.create(`coagulated_${type}_mixture`)
            .displayName(`Coagulated ${type.charAt(0).toUpperCase() + type.slice(1)} Mixture`)
            .hardness(5)
            .resistance(5)
            .material('stone')
            .requiresTool(true)
            .tagBlock("mineable/pickaxe")
            .textureAll(`kubejs:block/resource_gen/coagulated_${type}_mixture`);
    });

    event.create('coagulated_lava')
        .displayName('Coagulated Lava')
        .hardness(5)
        .resistance(5)
        .material('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureAll('kubejs:block/resource_gen/coagulated_lava');
        
});

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('essence', -1, -1, -1, null, '?', false);
});

GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('essence')
        .element(GTElements.get('essence'));

    event.create('inferium_steel')
        .ingot()
        .components('1x steel', '1x essence')
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x66ff33)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('prudentium_steel')
        .ingot()
        .components('1x inferium_steel', '1x essence')
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x336600)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('tertium_steel')
        .ingot()
        .components('1x prudentium_steel', '1x essence')
        .iconSet(GTMaterialIconSet.DULL)
        .color(0xff6600)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('imperium_steel')
        .ingot()
        .components('1x tertium_steel', '1x essence')
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x0099ff)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('supremium_steel')
        .ingot()
        .components('1x imperium_steel', '1x essence')
        .iconSet(GTMaterialIconSet.DULL)
        .color(0xff0000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('awakened_supremium_steel')
        .ingot()
        .components('1x supremium_steel', '1x essence')
        .iconSet(GTMaterialIconSet.DULL)
        .color(0xff3300)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('insanium_steel')
        .ingot()
        .components('1x awakened_supremium_steel', '1x essence')
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x9900cc)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);

});

StartupEvents.registry('block', event => {
    event.create('soul_infused_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-soul-infused') });
    event.create('signalum_casing', 'gtceu:renderer')
        .displayName('Ultra High Pressure and Temperature Resistant Signalum Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-signalum') });
    event.create('lumium_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-lumium') });
    event.create('enderium_casing', 'gtceu:renderer')
        .displayName('Thermal Fluctuation Proof Enderium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-enderium') });
    event.create('shellite_casing', 'gtceu:renderer')
        .displayName('Ultra-Resistant Shellite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-shellite') });
    event.create('twinite_casing', 'gtceu:renderer')
        .displayName('Bend-Resistant Twinite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-twinite') });
    event.create('dragonsteel_casing', 'gtceu:renderer')
        .displayName('Unbendable Dragonsteel Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-dragonsteel') });
    event.create('prismalium_casing', 'gtceu:renderer')
        .displayName('Transportation Prismalium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-prismalium') });
    event.create('melodium_casing', 'gtceu:renderer')
        .displayName('Reinforced Melodium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-melodium') });
    event.create('stellarium_casing', 'gtceu:renderer')
        .displayName('Structurally Integral Stellarium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-stellarium') });

    event.create('austenitic_stainless_steel_304_casing', 'gtceu:renderer')
        .displayName('Austenitic Stainless Steel 304 Nuclear Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-austenitic-stainless-steel-304') });

    event.create('inconel_625_casing', 'gtceu:renderer')
        .displayName('Inconel 625 Thermal Fluctuation Resistant Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-inconel-625') });

    event.create('laser_casing')
        .displayName('Schrubblaser Beam Concentrator & Emmiter Capable Stellarium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/laser_casing')
});
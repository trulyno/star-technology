priority: 1

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('debris', -1, -1, -1, null, '?', false);
    event.create('pure_netherite', 124, 345, -1, null, '*Nr*', false);
});

// const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('debris')
        .dust()
        .element(GTElements.get('debris'))
        .color(0x804000);

    event.create('purified_debris')
        .dust()
        .components('debris')
        .color(0xcc0000);

    event.create('netherite')
        .dust()
        .components('4x debris', '4x gold')
        .color(0x1a0d00)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
    
    event.create('chlorine_trifluoride')
        .fluid()
        .components('1x chlorine', '3x fluorine')
        .color(0xb3ff99);

    event.create('dichloroethane')
        .fluid()
        .components('2x carbon', '4x hydrogen', '2x chlorine')
        .color(0x99ccff);

    event.create('tetrachloroethylene')
        .fluid()
        .components('2x carbon', '4x chlorine')
        .color(0xd966ff);

    event.create('pure_netherite')
        .ingot()
        .element(GTElements.get('pure_netherite'))
        .color(0x1a0d00)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(3300, $BlastProperty.GasTier.LOW, GTValues.V[GTValues.EV], 1200)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING);

    event.create('naquadic_netherite')
        .gem(0)
        .components('3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen')
        .color(0xffd966)
        .iconSet(GTMaterialIconSet.DIAMOND);

    event.create('weapon_grade_naquadah')
        .ingot()
        .components('7x naquadria', '2x pure_netherite', '5x neutronium', '16x fluorine')
        .color(0xccff33)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(24000, $BlastProperty.GasTier.HIGHEST, GTValues.V[GTValues.UHV], 6000)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME);

    event.create('screret_runic_laser_source_base')
        .gem(0)
        .components('2x naquadic_netherite', '10x tritanium', '2x trinium')
        .color(0x00ff00)
        .iconSet(GTMaterialIconSet.OPAL);
});
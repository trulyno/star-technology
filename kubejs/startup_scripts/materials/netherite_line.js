// priority: 150

GTCEuStartupEvents.registry('gtceu:material', event => {

    const va = global.va;
    const magnetic = global.iconSets.magnetic;
    const dull = global.iconSets.dull;
    const opal = global.iconSets.opal;
    const flags = global.flags;
    const diamond = global.iconSets.diamond;
    

    // Netherite Line
    event.create('debris')
        .dust()
        .element(GTElements.get('debris'))
        .color(0x804000);

    event.create('purified_debris')
        .dust()
        .components('debris')
        .color(0xcc0000);

    // event.create('netherite')
    //     .dust()
    //     .components('4x debris', '4x gold')
    //     .color(0x1a0d00)
    //     .iconSet(dull
    //     .flags(no_decomp);
    
    event.create('chlorine_trifluoride')
        .fluid()
        .components('1x chlorine', '3x fluorine')
        .color(0xb3ff99);

    event.create('tetrachloroethylene')
        .fluid()
        .components('2x carbon', '4x chlorine')
        .color(0xd966ff);

    // Netherite Derivatives/Alloys
    event.create('pure_netherite')
        .ingot()
        .element(GTElements.get('pure_netherite'))
        .color(0x1a0d00)
        .iconSet(dull)
        .blastTemp(3300, 'low', va.ev, 1200)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring);

    event.create('magnetic_pure_netherite')
        .ingot()
        .element(GTElements.get('pure_netherite'))
        .color(0x1a0d00)
        .iconSet(magnetic)
        .flags(flags.rod, flags.long_rod, flags.magnetic);

    event.create('naquadic_netherite')
        .gem(0)
        .components('3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen')
        .color(0xffd966)
        .iconSet(diamond);

    event.create('weapon_grade_naquadah')
        .ingot()
        .fluid()
        .components('7x naquadria', '2x pure_netherite', '5x neutronium', '16x fluorine')
        .color(0xccff33)
        .iconSet(dull)
        .blastTemp(10500, 'low', va.zpm, 6000)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame);

    event.create('screret_runic_laser_source_base')
        .gem(0)
        .components('2x naquadic_netherite', '10x tritanium', '2x trinium')
        .color(0x00ff00)
        .iconSet(opal);

});
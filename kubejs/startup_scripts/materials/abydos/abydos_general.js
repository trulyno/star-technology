// priority: 100

GTCEuStartupEvents.registry('gtceu:material', event => {

    const va = global.va;
    const v = global.v;
    const flags = global.flags;
    const dull = global.iconSets.dull;
    const metallic = global.iconSets.metallic;
    const magnetic = global.iconSets.magnetic;

    event.create('magnetic_zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(magnetic)
        .flags(flags.rod, flags.long_rod, flags.magnetic);

    event.create('zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(dull)
        .blastTemp(10799, 'highest', va.uhv, 1600)
        .flags(flags.plates, flags.rod, flags.frame)
        .fluidPipeProperties(18000, 7200, true, true, true, true);

    // Alloys and other compounds
    event.create('zalloy')
        .ingot()
        .fluid()
        .components('3x zapolgium', '4x duranium', '2x europium')
        .color(0xff66ff)
        .iconSet(metallic)
        .blastTemp(10799, 'highest', va.luv, 6000)
        .flags(flags.plates, flags.frame, flags.rod, flags.bolt_and_screw, flags.round, flags.long_rod, flags.gear, flags.small_gear, flags.ring)
        .cableProperties(v.uv, 2, 4, false);

    event.create('zirconium_selenide_diiodide')
        .ingot()
        .fluid()
        .components('1x zirconium', '1x selenium', '2x iodine')
        .color(0x6600cc)
        .iconSet(dull)
        .flags(flags.spring)
        .blastTemp(8900, 'higher', va.luv, 4000)
        .cableProperties(v.uhv, 8, 16, false);

    event.create('cerium_tritelluride')
        .ingot()
        .components('1x cerium', '3x tellurium')
        .color(0x6D8B5D)
        .iconSet(dull)
        .blastTemp(11699, 'highest', va.uhv, 1800)
        .flags(flags.bolt_and_screw)
        .cableProperties(v.uev, 6, 16, false);

    event.create('indium_tin_lead_cadmium_soldering_alloy')
        .ingot()
        .fluid()
        .components('14x indium', '3x tin', '2x lead', '1x cadmium')
        .color(0xa6a6a6)
        .iconSet(dull);

    event.create('zircalloy_4')
        .ingot()
        .fluid()
        .components('251x zirconium', '3x tin', '2x chromium', '1x iron')
        .color(0xff9999)
        .iconSet(dull)
        .blastTemp(8900, 'higher', va.luv, 2000)
        .flags(flags.gear, flags.small_gear, flags.rotor);

    event.create('iron_selenide_over_strontium_titanium_oxide')
        .ingot()
        .components('1x iron_selenide', '1x strontium_titanium_oxide')
        .color(0x66ff33)
        .iconSet(dull)
        .flags(flags.fine_wire, flags.bolt_and_screw)
        .blastTemp(10299, 'highest', va.uv, 2500)
        .cableProperties(v.uhv, 4, 12, false);

});
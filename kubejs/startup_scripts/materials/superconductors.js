
GTCEuStartupEvents.registry('gtceu:material', event => {

    const va = global.va;
    const v = global.v;
    const flags = global.flags;
    const shiny = global.iconSets.shiny;

    // Thermal Superconductors (twinite and higher rotor values by @richie3366
    event.create('soul_infused')
        .ingot(1)
        .fluid()
        .components('1x invar', '2x mystery') // invar and soul sand
        .color(0xcc9966)
        .iconSet(shiny)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.lv, 4, 0, true)
        .rotorStats(150, 130, 3, 37600);

    event.create('signalum')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x copper', '4x redstone')
        .color(0xff3300)
        .iconSet(shiny)
        .blastTemp(1700, 'low', va.mv, 1200)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.mv, 16, 0, true)
        .rotorStats(190, 150, 3, 24000);

    event.create('lumium')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x tin', '2x glowstone')
        .color(0xffffb3)
        .iconSet(shiny)
        .blastTemp(1700, 'low', va.hv, 1500)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.hv, 16, 0, true)
        .rotorStats(220, 170, 3, 24000);

    event.create('enderium')
        .ingot(1)
        .fluid()
        .components('3x lead', '1x diamond', '2x ender_pearl')
        .color(0x006666)
        .iconSet(shiny)
        .blastTemp(3500, 'low', va.ev, 1500)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.ev, 32, 0, true)
        .rotorStats(300, 190, 3, 45600);

    event.create('shellite')
        .ingot(1)
        .fluid()
        .components('1x black_bronze', '3x signalum')
        .color(0x9933ff)
        .iconSet(shiny)
        .blastTemp(4400, 'mid', va.iv, 1800)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.iv, 64, 0, true)
        .rotorStats(450, 220, 3, 37600);

    event.create('twinite')
        .ingot(1)
        .fluid()
        .components('3x enderium', '2x amethyst', '1x lumium')
        .color(0xf66999)
        .iconSet(shiny)
        .blastTemp(5300, 'mid', va.luv, 2100)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.luv, 64, 0, true)
        .rotorStats(700, 260, 3, 24000);

    event.create('dragonsteel')
        .ingot(1)
        .fluid()
        .components('4x tungsten', '8x shellite', '2x twinite')
        .color(0x3333cc)
        .iconSet(shiny)
        .blastTemp(7100, 'high', va.zpm, 2400)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.zpm, 64, 0, true)
        .rotorStats(1100, 380, 3, 32000);

    event.create('prismalium')
        .ingot(1)
        .fluid()
        .components('8x naquadah', '4x shellite', '7x tungsten_carbide')
        .color(0x66ffff)
        .iconSet(shiny)
        .blastTemp(9000, 'high', va.zpm, 2700)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.uv, 32, 0, true)
        .rotorStats(1600, 470, 3, 48000);

    event.create('melodium')
        .ingot(1)
        .fluid()
        .components('2x mercury_barium_calcium_cuprate', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium')
        .color(0xd9b3ff)
        .iconSet(shiny)
        .blastTemp(10000, 'higher', va.uv, 3000)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.uv, 256, 0, true)
        .rotorStats(2000, 550, 3, 64000);

    event.create('stellarium')
        .ingot(1)
        .fluid()
        .components('12x neutronium', '4x melodium', '1x dragonsteel')
        .color(0xccffff)
        .iconSet(shiny)
        .blastTemp(10799, 'highest', va.uhv, 6000)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.uhv, 512, 0, true)
        .rotorStats(3200, 660, 3, 96000);

    event.create('ancient_runicalium')
        .ingot(2)
        .fluid()
        .components('5x zapolgium', '18x stellarium', '8x zirconium')
        .color(0xFAB922)
        .iconSet(shiny)
        .blastTemp(11749, 'highest', va.uev, 6200)
        .flags(flags.foil, flags.gear, flags.long_rod, flags.plates,
            flags.rod, flags.rotor, flags.small_gear, flags.ring, flags.frame)
        .cableProperties(v.uev, 1024, 0, true)
        .rotorStats(6400, 720, 3, 128000);

});
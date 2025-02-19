// priority 500

GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;
    const plates = global.flags.plates;
    const rod = global.flags.rod;
    const frame = global.flags.frame;
    const fine_wire = global.flags.fine_wire;
    const foil = global.flags.foil;
    const dense_plate = global.flags.dense_plate;
    const va = global.va;
    const iconSets = global.iconSets;

    // This material is meant to place a ? symbol in a material's chemical formula
    event.create('mystery')
        .element(GTElements.get('mystery'));

    // Diatrons
    event.create('diatron')
        .gem()
        .color(0x6699ff)
        .iconSet(iconSets.lapis)
        .flags(no_decomp);

    // Extras
    event.create('trinaquadalloy')
        .ingot().fluid()
        .color(0x281832)
        .iconSet(iconSets.bright)
        .flags(plates, rod, frame, fine_wire, foil, dense_plate)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', va.zpm, 1200);

    event.create('sodium_fluoride')
        .dust()
        .components('1x sodium', '1x fluorine')
        .color(0x6600ff);

    event.create('npk_solution')
        .fluid()
        .color(0xb8c3f5);

    event.create('copper_chloride')
        .dust()
        .components('1x copper', '1x chlorine');

    event.create('cupric_chloride_solution')
        .fluid()
        .components('1x copper_chloride', '1x hydrochloric_acid')
        .color(0x336600);

    event.create('perchloric_acid')
        .fluid()
        .components('1x hydrogen', '1x chlorine', '4x oxygen')
        .color(0xffe6e6);

    // event.create('iodic_acid')
    //     .fluid()
    //     .components('1x hydrogen', '1x iodine', '3x oxygen')
    //     .color(0xcc33ff);

    event.create('calcium_perchlorate')
        .dust()
        .components('1x calcium', '2x chlorine', '8x oxygen')
        .color(0xffff99);

    event.create('silica_gel')
        .fluid()
        .components('1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon')
        .color(0xe6e6e6)
        .flags(no_decomp);

    event.create('calcium_sulfate')
        .dust()
        .components('1x calcium', '1x sulfur', '4x oxygen')
        .color(0xffbf80);

    event.create('sodium_oxide')
        .dust()
        .components('2x sodium', '1x oxygen')
        .color(0x6666ff);

    event.create('iron_selenide')
        .dust()
        .components('1x iron', '1x selenium')
        .color(0xb3ff66);

    event.create('strontium_oxide')
        .dust()
        .components('1x strontium', '1x oxygen')
        .color(0xffcc99);

    event.create('titanium_oxide')
        .dust()
        .components('1x titanium', '2x oxygen')
        .color(0xff66cc);

    event.create('strontium_titanium_oxide')
        .dust()
        .components('1x strontium', '1x titanium', '3x oxygen')
        .color(0xff0000);

    event.create('star_steel')
        .ingot()
        .fluid()
        .components('2x steel', '1x mystery')
        .color(0xccffcc)
        .flags(no_decomp, plates, rod, frame)
        .iconSet(iconSets.metallic);

    event.create('thorium_plut_duranide_241')
        .ingot()
        .fluid()
        .components('4x thorium', '1x duranium', '3x plutonium_241')
        .color(0xEC342A)
        .flags(fine_wire, no_decomp, foil)
        .blastTemp(10199, 'highest', va.uv, 850);

    event.create('indium_oxide')
        .dust()
        .color(0xE3D28E)
        .components('2x indium', '3x oxygen');
});
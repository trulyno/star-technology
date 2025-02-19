
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;
    const gem_horizontal = global.iconSets.gem_horizontal;
    const gem_vertical = global.iconSets.gem_vertical;

    event.create('titanite')
        .dust()
        .ore(4, 3)
        .components('1x calcium', '1x titanium', '1x silicon', '5x oxygen')
        .color(0x66ffff);

    event.create('zapolite')
        .dust()
        .ore(4, 3)
        .components('2x zapolgium', '4x iodine', '2x aluminium', '5x oxygen')
        .color(0xcc0099)
        .flags(no_decomp);

    event.create('lautarite')
        .dust()
        .ore(4, 3)
        .components('1x calcium', '2x iodine', '6x oxygen')
        .color(0x6666ff);

    event.create('iodargyrite')
        .dust()
        .ore(4, 3)
        .components('1x silver', '1x iodine')
        .color(0x8080ff);

    event.create('clausthalite')
        .dust()
        .ore(4, 3)
        .components('1x lead', '1x selenium')
        .color(0x666633);

    event.create('crookesite')
        .dust()
        .ore(4, 3)
        .components('7x copper', '1x thallium', '4x selenium')
        .color(0x00ff99)

    event.create('calaverite')
        .dust()
        .ore(4, 3)
        .components('1x gold', '2x tellurium')
        .color(0xcc9900);

    event.create('sylvanite')
        .dust()
        .ore(4, 3)
        .components('1x silver', '2x tellurium')
        .color(0xff5050);

    event.create('tiemannite')
        .dust()
        .ore(4, 3)
        .components('1x mercury', '1x selenium')
        .color(0xcc0066);

    event.create('klockmannite')
        .dust()
        .ore(4, 3)
        .components('1x copper', '1x selenium')
        .color(0x009999);

    event.create('stibiopalladinite')
        .dust()
        .ore(4, 3)
        .components('5x palladium', '2x antimony')
        .color(0x333399);

    event.create('berzelianite')
        .dust()
        .ore(4, 3)
        .components('2x copper', '1x selenium')
        .color(0x990000);

    event.create('umangite')
        .dust()
        .ore(4, 3)
        .components('3x copper', '2x selenium')
        .color(0x006699);

    event.create('aguilarite')
        .dust()
        .ore(4, 3)
        .components('3x silver', '1x selenium', '1x sulfur')
        .color(0xff5050);

    event.create('polybasite')
        .dust()
        .components('12x silver', '4x copper', '2x arsenic', '13x sulfur')
        .color(0xcc6600);

    event.create('strontianite')
        .gem()
        .ore(4, 3)
        .components('1x strontium', '1x carbon', '3x oxygen')
        .color(0xe6ffff)
        .iconSet(gem_horizontal);

    event.create('celestine')
        .gem()
        .ore(4, 3)
        .components('1x strontium', '1x carbon', '4x oxygen')
        .color(0xe6ffff)
        .iconSet(gem_vertical);

});
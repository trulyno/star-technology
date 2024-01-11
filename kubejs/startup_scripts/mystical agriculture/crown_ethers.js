
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('sulfur_dichloride')
        .fluid()
        .components('1x sulfur', '2x chlorine')
        .color(0xcc0000);

    event.create('thionyl_chloride')
        .fluid()
        .components('1x sulfur', '1x oxygen', '2x chlorine')
        .color(0xffffcc);

    event.create('sulfuryl_chloride')
        .fluid()
        .components('1x sulfur', '2x oxygen', '2x chlorine')
        .color(0xffffcc);

    event.create('triglycol_dichloride')
        .fluid()
        .components('6x carbon', '12x hydrogen', '2x oxygen', '2x chlorine')
        .color(0xffffcc);

    event.create('ethylene_glycol')
        .fluid()
        .components('2x carbon', '6x hydrogen', '2x oxygen')
        .color(0xf2f2f2);

    event.create('diethylene_glycol')
        .fluid()
        .components('4x carbon', '10x hydrogen', '3x oxygen')
        .color(0xf2f2f2);

    event.create('triethylene_glycol')
        .fluid()
        .components('6x carbon', '14x hydrogen', '4x oxygen')
        .color(0xf2f2f2);

    event.create('ethylene_oxide')
        .fluid()
        .components('2x carbon', '4x hydrogen', '1x oxygen')
        .color(0xd9d9d9);

    event.create('potassium_hydroxide')
        .dust()
        .components('1x potassium', '1x oxygen', '1x hydrogen')
        .color(0xffcc99);

    event.create('lithium_perchlorate')
        .dust()
        .components('1x lithium', '1x chlorine', '4x oxygen')
        .color(0xe6f2ff);

    event.create('sodium_perchlorate')
        .dust()
        .components('1x sodium', '1x chlorine', '4x oxygen')
        .color(0xccf2ff);

    event.create('sodium_chlorate')
        .dust()
        .components('1x sodium', '1x chlorine', '3x oxygen')
        .color(0xccf2ff);

    // event.create('potassium_permanganate')
    //     .fluid()
    //     .components('1x potassium', '1x manganese', '4x oxygen')
    //     .color(0xff66ff);

    // event.create('potassium_manganate')
    //     .dust()
    //     .components('2x potassium', '1x manganese', '4x oxygen')
    //     .color(0x333300);

    // event.create('manganese_dioxide')
    //     .dust()
    //     .components('1x manganese', '2x oxygen')
    //     .color(0x0d0d0d);

    event.create('silver_oxide')
        .dust()
        .components('2x silver', '1x oxygen')
        .color(0xffffff);

    event.create('12_crown_4')
        .fluid()
        .components('8x carbon', '16x hydrogen', '4x oxygen')
        .color(0xcc6699);

    event.create('15_crown_5')
        .fluid()
        .components('10x carbon', '20x hydrogen', '5x oxygen')
        .color(0x0099cc);

    event.create('18_crown_6')
        .fluid()
        .components('12x carbon', '24x hydrogen', '6x oxygen')
        .color(0x99ff33);

    event.create('12_crown_4_li')
        .fluid()
        .components('1x lithium', '8x carbon', '16x hydrogen', '4x oxygen')
        .color(0x993366)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('15_crown_5_na')
        .fluid()
        .components('1x sodium', '10x carbon', '20x hydrogen', '5x oxygen')
        .color(0x006080)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('18_crown_6_k')
        .fluid()
        .components('1x potassium', '12x carbon', '24x hydrogen', '6x oxygen')
        .color(0x4d9900)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('4_toluenesulfonyl_chloride')
        .dust()
        .components('7x carbon', '7x hydrogen', '2x chlorine', '2x oxygen', '1x sulfur')
        .color(0xffcccc);

    event.create('triethylene_glycol_ditosylate')
        .dust()
        .components('20x carbon', '26x hydrogen', '8x oxygen', '2x sulfur')
        .color(0xb8b894);

    event.create('sodium_azide')
        .dust()
        .components('1x sodium', '3x nitrogen')
        .color(0xcc6699);

    event.create('palladium_on_carbon')
        .dust()
        .components('1x palladium', '1x carbon')
        .color(0xff9900);

    event.create('sodium_p_toluenesulfonate')
        .dust()
        .components('7x carbon', '7x hydrogen', '1x sodium', '3x oxygen', '1x sulfur')
        .color(0x00cc00);

    event.create('triethylene_glycol_diazide')
        .dust()
        .components('6x carbon', '12x hydrogen', '2x oxygen', '6x nitrogen')
        .color(0x6666ff);

    event.create('triethylene_glycol_diamine')
        .dust()
        .components('6x carbon', '16x hydrogen', '2x oxygen', '2x nitrogen')
        .color(0xcc00cc);

    event.create('cryptand')
        .fluid()
        .components('18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x993333);

    event.create('cryptand_k')
        .fluid()
        .components('1x potassium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x602020)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('cryptand_na')
        .fluid()
        .components('1x sodium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x602020)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('cryptand_li')
        .fluid()
        .components('1x lithium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x602020)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
});
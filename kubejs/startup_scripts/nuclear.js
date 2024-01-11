priority: 1

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('unknown', -1, -1, -1, null, '?', false);
});

GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('austenitic_stainless_steel_304')
        .ingot(1)
        .fluid()
        .components('35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon')
        .color(0x800040)
        .blastTemp(3500, $BlastProperty.GasTier.LOW, GTValues.V[GTValues.EV], 1500)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME);

    event.create('inconel_625')
        .ingot()
        .fluid()
        .components('7x nickel', '2x chromium', '1x steel')
        .color(0xa3a375)
        .blastTemp(3500, $BlastProperty.GasTier.LOW, GTValues.V[GTValues.EV], 1500)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME);

    event.create('unknown')
        .element(GTElements.get('unknown'));

    event.create('nuclear_steam')
        .fluid()
        .components('1x steam', '1x unknown')
        .color(0xcccccc)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('hot_sodium_potassium')
        .fluid()
        .components('1x sodium_potassium', '1x unknown')
        .color(0x82fcc3)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('hot_pcbcoolant')
        .fluid()
        .components('1x pcb_coolant', '1x unknown')
        .color(0xc9ca81)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
});
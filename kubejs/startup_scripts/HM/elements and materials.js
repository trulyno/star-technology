
materialRegistry(event => {

    event.create('raw_electrum')
        .ingot(1)
        .components('2x gold', '3x silver')
        .color(0xeddda5)
        .iconSet(SHINY)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame, bolt_and_screw);

    event.create('pig_iron')
        .ingot(1)
        .dust()
        .components('iron')
        .color(0x8E8385)
        .iconSet(DULL)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame, bolt_and_screw);

    event.create('flisnt')
        .color(0x888B8C)
        .toolStats(ToolProperty.Builder.of(1, 1, 96, 1,[GTToolType.SAW,GTToolType.HARD_HAMMER,GTToolType.PICKAXE, GTToolType.SHOVEL,
              GTToolType.AXE, GTToolType.SWORD, GTToolType.KNIFE, GTToolType.FILE]).build());

    GTMaterials.Iron.addFlags(foil);
    GTMaterials.Brass.addFlags(ring, foil);


});
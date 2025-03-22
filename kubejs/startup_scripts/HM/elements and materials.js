
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

materialRegistry(event => {

    event.create('raw_electrum')
        .ingot(1)
        .ore(1,1)
        .components('2x gold', '3x silver')
        .color(0xeddda5)
        .iconSet(SHINY)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame, bolt_and_screw,fine_wire,no_decomp);

    event.create('pig_iron')
        .ingot(1)
        .dust()
        .components('iron')
        .color(0x8E8385)
        .iconSet(DULL)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame, bolt_and_screw,no_decomp);

    event.create('flisnt')
        .color(0x888B8C)
        .toolStats(ToolProperty.Builder.of(1, 1, 96, 1,[GTToolType.SAW,GTToolType.HARD_HAMMER,GTToolType.PICKAXE, GTToolType.SHOVEL,
              GTToolType.AXE, GTToolType.SWORD, GTToolType.KNIFE, GTToolType.FILE]).build());

    event.create('coke_clay')
        .dust()
        .color(0xD7D2AA)
        .secondaryColor(0xA09C78);

    GTMaterials.Iron.addFlags(foil);
    GTMaterials.Brass.addFlags(ring, foil);
    GTMaterials.TinAlloy.addFlags(ring);
    GTMaterials.Potin.addFlags(ring);
    GTMaterials.Cupronickel.addFlags(ring);
    GTMaterials.Nickel.addFlags(ring);


});

};//if end
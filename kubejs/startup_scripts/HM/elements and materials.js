// packmode: hard

materialRegistry(event => {
	event.create('pig_iron')
		.ingot(1)
		.dust()
		.components('iron')
		.color(0x8E8385)
		.iconSet(DULL)
		.flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, bolt_and_screw, no_decomp);

	event.create('flisnt')
		.color(0x888B8C)
		.toolStats(ToolProperty.Builder.of(1, 1, 96, 1, [
			GTToolType.SAW,
			GTToolType.HARD_HAMMER,
			GTToolType.PICKAXE,
			GTToolType.SHOVEL,
			GTToolType.AXE,
			GTToolType.SWORD,
			GTToolType.KNIFE,
			GTToolType.FILE
		]).build());

	event.create('coke_clay')
		.dust()
		.color(0xD7D2AA)
		.secondaryColor(0xA09C78);

	GTMaterials.Iron.addFlags(foil);
	GTMaterials.Brass.addFlags(ring, foil);
	GTMaterials.TinAlloy.addFlags(ring, foil);
	GTMaterials.Potin.addFlags(foil);
	GTMaterials.Potin.addFlags(ring);
	GTMaterials.Cupronickel.addFlags(ring);
	GTMaterials.Nickel.addFlags(ring);
});
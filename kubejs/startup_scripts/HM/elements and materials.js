GTCEuStartupEvents.registry('gtceu:material', event => {
	event.create('pig_iron')
		.ingot(1)
		.dust()
		.components('1x iron')
		.color(0x8E8385)
		.iconSet(DULL)
		.flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, bolt_and_screw, no_decomp, no_smelt);

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
			GTToolType.FILE,
			GTToolType.SCYTHE
		]).build());

	event.create('coke_clay')
		.dust()
		.color(0xD7D2AA)
		.secondaryColor(0xA09C78);

	event.create('crude_cast_iron')
		.ingot()
		.components('1x pig_iron')
		.color(0x3D413F)
		.iconSet(DULL)
		.flags(no_decomp, no_smelt);

	event.create('crude_wrought_iron')
		.ingot()
		.liquid(new GTFluidBuilder().temperature(1700))
		.components('1x wrought_iron')
		.color(0x7A6E69)
		.iconSet(DULL)
		.flags(no_decomp, no_smelt);

	event.create('cast_iron')
        .ingot(1)
		.liquid(new GTFluidBuilder().temperature(1450))
        .components('18x crude_cast_iron', '1x bismuth', '2x copper')
        .color(0x696E6C)
		.secondaryColor(0x4C5052)
        .iconSet(METALLIC)
        .flags(no_abs_recipe, not_alloy, foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, bolt_and_screw, no_decomp, no_smelt);

	GTMaterials.Iron.addFlags(foil, fine_wire);
	GTMaterials.Brass.addFlags(ring, foil);
	GTMaterials.TinAlloy.addFlags(ring, foil, rotor);
	GTMaterials.Potin.addFlags(foil, ring, small_gear);
	GTMaterials.Cupronickel.addFlags(ring);
	GTMaterials.Nickel.addFlags(foil);
	GTMaterials.WroughtIron.addFlags(frame, small_gear);
	GTMaterials.RedAlloy.addFlags(spring);
	GTMaterials.Lead.addFlags(small_gear);

});
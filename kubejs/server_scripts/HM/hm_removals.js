// packmode: hard

ServerEvents.recipes(event => {
	[
		/^gtceu:.*flisnt.*/,
		/^gtceu:shapeless.*_planks/,
		/^exnihilosequentia:crushing.*/,
		/^gtceu:shaped.plate/,
		// [^(?!^rubber$)] <- rubber sheet recipe is kjs and other rubbers is solidifier and bender only, wood is compressor for treated and crafting for regular
		/^gtceu:shaped.ring.*[^(?!^rubber$)]/,
		/^gtceu:shaped.stick.*[^(?!^.*_rubber_.*$)]/,
		// poly rubbers and other rubbers are being wierd but you have solidifier by the time you get to pvc/ptfe so :3
		/^gtceu:shaped\/.*_wire_single/,
		/^gtceu:shapeless.fine.*/,
		/^gtceu:shaped.screw_.*/,
		/^gtceu:shaped.*gear.*/,
		/^gtceu:shaped.bolt.*/,
		/^gtceu:shaped.rotor.*/,
		/^gtceu:shaped.spring.*/,
		/^gtceu:shaped.*pipe.*/,
		/^gtceu:shaped.foil.*/,
		/^gtceu:shapeless.*cable.*/,
		/^gtceu:shaped.buzzsaw.*/,
		/^gtceu:shaped.round.*/,
		// plates -> single and double, stick -> long and short rod, gear -> both small and normal, pipe -> exclusion of quad and non dont work, all pipes + constricting, cable-> just a sweep on all cable crafting table recipie
		/^farmersdelight:.*knife/,
		/^create:crafting.*cogwheel.*/,
		'create:crafting/kinetics/shaft',
		'create:crafting/kinetics/belt_connector',
		'minecraft:crafting_table',
		'gtceu:shaped/iron_wire_single'
	].forEach(id => event.remove({ id: id }));

	// removes silkworm obtainability
	[
		'#minecraft:leaves',
		'exnihilosequentia:infested_leaves',
	].forEach(input => event.remove({ type: 'exnihilosequentia:harvest', input: input }));

	[
		'exnihilosequentia:silkworm',
		'#exnihilosequentia:crook',
		'#exnihilosequentia:hammer',
	].forEach(output => event.remove({ output: output }));

	[
		'minecraft:enchantment',
		'exnihilosequentia:sifting',
	].forEach(type => event.remove({ type: type }));

	event.remove({ input: /^exnihilosequentia:.*_pebble/ });

	event.remove({ output: 'create:zinc_ingot' });
})
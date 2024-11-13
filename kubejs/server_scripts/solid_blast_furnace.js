ServerEvents.recipes(event => {
    event.recipes.gtceu.coke_oven('sugar_coke')
        .itemOutputs('minecraft:charcoal')
        .outputFluids(Fluid.of('gtceu:creosote', 50))
        .itemInputs('8x minecraft:sugar_cane')
        .duration(1200)

    event.shaped(Item.of('gtceu:solid_blast_furnace'), [
        'HRS',
        'PBR',
        'FRS'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:steel_rod',
        S: 'gtceu:steel_screw',
        P: 'gtceu:steel_plate',
        B: 'gtceu:solid_machine_casing',
        F: '#forge:tools/screwdrivers'
    });

    const fuel = [
        "gtceu:charcoal_dust",
        "gtceu:coal_dust",
        "minecraft:coal",
        "minecraft:charcoal"
    ];

    const goodFuel = [
        "gtceu:coke_gem",
        "gtceu:coke_dust"
    ];

    fuel.forEach(fuel => {
        var cutFuel = fuel.slice(fuel.indexOf(":")+1)

        event.recipes.gtceu.solid_blast_furnace(`silicon_from_silicon_dioxide/${cutFuel}`)
            .itemInputs("6x gtceu:silicon_dioxide_dust", "4x gtceu:carbon_dust", `2x ${fuel}`)
            .itemOutputs("2x gtceu:silicon_dust", "2x gtceu:tiny_dark_ash_dust")
            .duration(1000);

        event.recipes.gtceu.solid_blast_furnace(`steel_from_magnetite_dust/${cutFuel}`)
            .itemInputs("7x gtceu:magnetite_dust", "2x gtceu:silicon_dust", `2x ${fuel}`)
            .itemOutputs("3x gtceu:steel_ingot", "6x gtceu:silicon_dioxide_dust", "2x gtceu:tiny_dark_ash_dust")
            .duration(1500);

        event.recipes.gtceu.solid_blast_furnace(`sulfur_from_sphalerite/${cutFuel}`)
            .itemInputs("2x gtceu:sphalerite_dust", "4x minecraft:andesite", `2x ${fuel}`)
            .itemOutputs("12x create:andesite_alloy", "1x gtceu:sulfur_dust", "2x gtceu:tiny_dark_ash_dust")
            .duration(200);
    });

    goodFuel.forEach(fuel => {
        var cutFuel = fuel.slice(fuel.indexOf(":")+1)

        event.recipes.gtceu.solid_blast_furnace(`silicon_from_silicon_dioxide/${cutFuel}`)
            .itemInputs("6x gtceu:silicon_dioxide_dust", "4x gtceu:carbon_dust", `2x ${fuel}`)
            .itemOutputs("2x gtceu:silicon_dust", "2x gtceu:tiny_dark_ash_dust")
            .duration(750);

        event.recipes.gtceu.solid_blast_furnace(`steel_from_magnetite_dust/${cutFuel}`)
            .itemInputs("7x gtceu:magnetite_dust", "2x gtceu:silicon_dust", `2x ${fuel}`)
            .itemOutputs("3x gtceu:steel_ingot", "6x gtceu:silicon_dioxide_dust", "2x gtceu:tiny_dark_ash_dust")
            .duration(1125);

        event.recipes.gtceu.solid_blast_furnace(`sulfur_from_sphalerite/${cutFuel}`)
            .itemInputs("2x gtceu:sphalerite_dust", "4x minecraft:andesite", `2x ${fuel}`)
            .itemOutputs("12x create:andesite_alloy", "1x gtceu:sulfur_dust", "2x gtceu:tiny_dark_ash_dust")
            .duration(150);
    });
});

if (global.packmode !== 'hard'){
    (() => {   

ServerEvents.recipes(event => {
    const id = global.id;

   event.recipes.gtceu.coke_oven(id('sugar_coke'))
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
    }).id('start:shaped/solid_blast_furnace');

    const fuel = [
        'gtceu:charcoal_dust',
        'gtceu:coal_dust',
        'minecraft:coal',
        'minecraft:charcoal'
    ]; 

    const goodFuel = [
        'gtceu:coke_gem',
        'gtceu:coke_dust'
    ];

    fuel.forEach(fuel => {
        const cutFuel = fuel.split(':')[1]
        event.recipes.gtceu.solid_blast_furnace(id(`silicon_from_silicon_dioxide/${cutFuel}`))
            .itemInputs('6x gtceu:silicon_dioxide_dust', `2x ${fuel}`)
            .itemOutputs('2x gtceu:silicon_dust', '2x gtceu:tiny_dark_ash_dust')
            .duration(1000);

       event.recipes.gtceu.solid_blast_furnace(id(`steel_from_magnetite_dust/${cutFuel}`))
            .itemInputs('7x gtceu:magnetite_dust', '2x gtceu:silicon_dust', `2x ${fuel}`)
            .itemOutputs('3x gtceu:steel_ingot', '6x gtceu:silicon_dioxide_dust', '2x gtceu:tiny_dark_ash_dust')
            .duration(1500);

        event.recipes.gtceu.solid_blast_furnace(id(`sulfur_from_sphalerite/${cutFuel}`))
            .itemInputs('2x gtceu:sphalerite_dust', '4x minecraft:andesite', `2x ${fuel}`)
            .itemOutputs('12x create:andesite_alloy', '1x gtceu:sulfur_dust', '2x gtceu:tiny_dark_ash_dust')
            .duration(200);
    });

    goodFuel.forEach(fuel => {
        const cutFuel = fuel.split(':')[1]
        event.recipes.gtceu.solid_blast_furnace(id(`silicon_from_silicon_dioxide/${cutFuel}`))
            .itemInputs('6x gtceu:silicon_dioxide_dust', `2x ${fuel}`)
            .itemOutputs('2x gtceu:silicon_dust', '2x gtceu:tiny_ash_dust')
            .duration(750);

        event.recipes.gtceu.solid_blast_furnace(id(`steel_from_magnetite_dust/${cutFuel}`))
            .itemInputs('7x gtceu:magnetite_dust', '2x gtceu:silicon_dust', `2x ${fuel}`)
            .itemOutputs('3x gtceu:steel_ingot', '6x gtceu:silicon_dioxide_dust', '2x gtceu:tiny_ash_dust')
            .duration(1125);

        event.recipes.gtceu.solid_blast_furnace(id(`sulfur_from_sphalerite/${cutFuel}`))
            .itemInputs('2x gtceu:sphalerite_dust', '4x minecraft:andesite', `2x ${fuel}`)
            .itemOutputs('12x create:andesite_alloy', '1x gtceu:sulfur_dust', '2x gtceu:tiny_ash_dust')
            .duration(150);
    });

    //Bessemer Steel
    const coalType = ['coal','charcoal']

    const ironType = (FeType, baseTime, cokeScaler) => {
        const naming = FeType.split(':')[1]
        coalType.forEach(coal => {
            event.recipes.gtceu.bessemer_blast_furnace(id(`${naming}_${coal}_to_steel_dust`))
                .itemInputs(`${FeType}_ingot`,`2x gtceu:${coal}_dust`)
                .itemOutputs('gtceu:steel_ingot',`gtceu:tiny_dark_ash_dust`)
                .duration(baseTime); 

            event.recipes.gtceu.bessemer_blast_furnace(id(`${naming}_${coal}_to_steel`))
                .itemInputs(`${FeType}_ingot`,`2x minecraft:${coal}`)
                .itemOutputs('gtceu:steel_ingot',`gtceu:tiny_dark_ash_dust`)
                .duration(baseTime);  
        })

        event.recipes.gtceu.bessemer_blast_furnace(id(`${naming}_coal_to_steel_block`))
            .itemInputs(`${FeType}_block`,`2x minecraft:coal_block`)
            .itemOutputs('gtceu:steel_block',`gtceu:dark_ash_dust`)
            .duration(baseTime*9);

        event.recipes.gtceu.bessemer_blast_furnace(id(`${naming}_charcoal_to_steel_block`))
            .itemInputs(`${FeType}_block`,`2x gtceu:charcoal_block`)
            .itemOutputs('gtceu:steel_block',`gtceu:dark_ash_dust`)
            .duration(baseTime*9);

        event.recipes.gtceu.bessemer_blast_furnace(id(`${naming}_coke_to_steel_block`))
            .itemInputs(`${FeType}_block`,`gtceu:coke_block`)
            .itemOutputs('gtceu:steel_block',`gtceu:ash_dust`)
            .duration(baseTime*9*cokeScaler);
            
        event.recipes.gtceu.bessemer_blast_furnace(id(`${naming}_coke_to_steel_dust`))
            .itemInputs(`${FeType}_ingot`,`gtceu:coke_dust`)
            .itemOutputs('gtceu:steel_ingot',`gtceu:ash_dust`)
            .duration(baseTime*cokeScaler);

        event.recipes.gtceu.bessemer_blast_furnace(id(`${naming}_coke_to_steel`))
            .itemInputs(`${FeType}_ingot`,`gtceu:coke_gem`)
            .itemOutputs('gtceu:steel_ingot',`gtceu:ash_dust`)
            .duration(baseTime*cokeScaler);

    }
    ironType('minecraft:iron', 720, 5/6)
    ironType('gtceu:wrought_iron', 320, 3/4)
});
})()
}
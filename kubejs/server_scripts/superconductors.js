
ServerEvents.recipes(event => {

    event.recipes.gtceu.macerator('soul_sand_dust')
        .itemInputs('minecraft:soul_sand')
        .itemOutputs('thermal_extra:soul_sand_dust')
        .duration(20)
        .EUt(8);
    
    event.shapeless(
        Item.of('thermal_extra:soul_sand_dust', 1),
        [
            'minecraft:soul_sand',
            '#forge:tools/mortars'
        ]
    );

    event.recipes.gtceu.mixer('soul_infused_dust')
        .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_dust')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.alloy_smelter('soul_infused_from_dust')
        .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_ingot')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.alloy_smelter('soul_infused_from_ingot')
        .itemInputs('gtceu:invar_ingot', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_ingot')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.mixer('signalum_dust')
        .itemInputs('gtceu:silver_dust', '3x gtceu:copper_dust', '4x minecraft:redstone')
        .itemOutputs('4x gtceu:signalum_dust')
        .duration(300)
        .EUt(20);

    event.recipes.gtceu.mixer('lumium_dust')
        .itemInputs('gtceu:silver_dust', '3x gtceu:tin_dust', '2x minecraft:glowstone_dust')
        .itemOutputs('4x gtceu:lumium_dust')
        .duration(400)
        .EUt(80);

    event.recipes.gtceu.mixer('enderium_dust')
        .itemInputs('3x gtceu:lead_dust', '1x gtceu:diamond_dust', '2x gtceu:ender_pearl_dust')
        .itemOutputs('4x gtceu:enderium_dust')
        .duration(600)
        .EUt(400);

    event.recipes.gtceu.mixer('shellite_dust')
        .itemInputs('gtceu:black_bronze_dust', '3x gtceu:signalum_dust')
        .itemOutputs('4x gtceu:shellite_dust')
        .duration(700)
        .EUt(1024);

    event.recipes.gtceu.mixer('twinite_dust')
        .itemInputs('3x gtceu:enderium_dust', '2x gtceu:amethyst_dust', 'gtceu:lumium_dust')
        .itemOutputs('6x gtceu:twinite_dust')
        .duration(800)
        .EUt(6400);

    event.recipes.gtceu.mixer('dragonsteel_dust')
        .itemInputs('4x gtceu:tungsten_dust', '8x gtceu:shellite_dust', '2x gtceu:twinite_dust')
        .inputFluids('thermal_extra:refined_sunflower_oil 1000')
        .itemOutputs('14x gtceu:dragonsteel_dust')
        .duration(900)
        .EUt(16000);

    event.recipes.gtceu.mixer('prismalium_dust')
        .itemInputs('8x gtceu:naquadah_dust', '4x gtceu:shellite_dust', '7x gtceu:tungsten_carbide_dust')
        .itemOutputs('19x gtceu:prismalium_dust')
        .duration(1000)
        .EUt(65536);

    event.recipes.gtceu.mixer('melodium_dust')
        .itemInputs('14x gtceu:electrum_dust', '3x gtceu:amethyst_dust', '4x gtceu:darmstadtium_dust', '7x gtceu:europium_dust')
        .inputFluids('gtceu:mercury_barium_calcium_cuprate 288')
        .itemOutputs('30x gtceu:melodium_dust')
        .duration(1100)
        .EUt(100000);

    event.recipes.gtceu.mixer('stellarium_dust')
        .itemInputs('4x gtceu:melodium_dust', '1x gtceu:dragonsteel_dust')
        .inputFluids('gtceu:neutronium 1728')
        .itemOutputs('17x gtceu:stellarium_dust')
        .duration(1200)
        .EUt(456000);

    // Replaces
    event.replaceInput({input: '#forge:ingots/lumium'},
    '#forge:ingots/lumium',
    'gtceu:lumium_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/lumium'},
    '#forge:ingots/lumium',
    'gtceu:lumium_ingot'
    );
    event.replaceInput({input: '#forge:dusts/lumium'},
    '#forge:dusts/lumium',
    'gtceu:lumium_dust'
    );
    event.replaceOutput({output: '#forge:dusts/lumium'},
    '#forge:dusts/lumium',
    'gtceu:lumium_dust'
    );
    event.replaceInput({input: '#forge:gears/lumium'},
    '#forge:gears/lumium',
    'gtceu:lumium_gear'
    );
    event.replaceOutput({output: '#forge:gears/lumium'},
    '#forge:gears/lumium',
    'gtceu:lumium_gear'
    );

    event.replaceInput({input: '#forge:ingots/signalum'},
    '#forge:ingots/signalum',
    'gtceu:signalum_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/signalum'},
    '#forge:ingots/signalum',
    'gtceu:signalum_ingot'
    );
    event.replaceInput({input: '#forge:dusts/signalum'},
    '#forge:dusts/signalum',
    'gtceu:signalum_dust'
    );
    event.replaceOutput({output: '#forge:dusts/signalum'},
    '#forge:dusts/signalum',
    'gtceu:signalum_dust'
    );
    event.replaceInput({input: '#forge:gears/signalum'},
    '#forge:gears/signalum',
    'gtceu:signalum_gear'
    );
    event.replaceOutput({output: '#forge:gears/signalum'},
    '#forge:gears/lumium',
    'gtceu:signalum_gear'
    );

    event.replaceInput({input: '#forge:ingots/enderium'},
    '#forge:ingots/enderium',
    'gtceu:enderium_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/enderium'},
    '#forge:ingots/enderium',
    'gtceu:enderium_ingot'
    );
    event.replaceInput({input: '#forge:dusts/enderium'},
    '#forge:dusts/enderium',
    'gtceu:enderium_dust'
    );
    event.replaceOutput({output: '#forge:dusts/enderium'},
    '#forge:dusts/enderium',
    'gtceu:enderium_dust'
    );
    event.replaceInput({input: '#forge:gears/enderium'},
    '#forge:gears/enderium',
    'gtceu:enderium_gear'
    );
    event.replaceOutput({output: '#forge:gears/enderium'},
    '#forge:gears/enderium',
    'gtceu:enderium_gear'
    );

    event.replaceInput({input: '#forge:ingots/soul_infused'},
    '#forge:ingots/soul_infused',
    'gtceu:soul_infused_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/soul_infused'},
    '#forge:ingots/soul_infused',
    'gtceu:soul_infused_ingot'
    );
    event.replaceInput({input: '#forge:dusts/soul_infused'},
    '#forge:dusts/soul_infused',
    'gtceu:soul_infused_dust'
    );
    event.replaceOutput({output: '#forge:dusts/soul_infused'},
    '#forge:dusts/soul_infused',
    'gtceu:soul_infused_dust'
    );
    event.replaceInput({input: '#forge:gears/soul_infused'},
    '#forge:gears/soul_infused',
    'gtceu:soul_infused_gear'
    );
    event.replaceOutput({output: '#forge:gears/soul_infused'},
    '#forge:gears/soul_infused',
    'gtceu:soul_infused_gear'
    );

    event.replaceInput({input: '#forge:ingots/shellite'},
    '#forge:ingots/shellite',
    'gtceu:shellite_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/shellite'},
    '#forge:ingots/shellite',
    'gtceu:shellite_ingot'
    );
    event.replaceInput({input: '#forge:dusts/shellite'},
    '#forge:dusts/shellite',
    'gtceu:shellite_dust'
    );
    event.replaceOutput({output: '#forge:dusts/shellite'},
    '#forge:dusts/shellite',
    'gtceu:shellite_dust'
    );
    event.replaceInput({input: '#forge:gears/shellite'},
    '#forge:gears/shellite',
    'gtceu:shellite_gear'
    );
    event.replaceOutput({output: '#forge:gears/shellite'},
    '#forge:gears/shellite',
    'gtceu:shellite_gear'
    );

    event.replaceInput({input: '#forge:ingots/twinite'},
    '#forge:ingots/twinite',
    'gtceu:twinite_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/twinite'},
    '#forge:ingots/twinite',
    'gtceu:twinite_ingot'
    );
    event.replaceInput({input: '#forge:dusts/twinite'},
    '#forge:dusts/twinite',
    'gtceu:twinite_dust'
    );
    event.replaceOutput({output: '#forge:dusts/twinite'},
    '#forge:dusts/twinite',
    'gtceu:twinite_dust'
    );
    event.replaceInput({input: '#forge:gears/twinite'},
    '#forge:gears/twinite',
    'gtceu:twinite_gear'
    );
    event.replaceOutput({output: '#forge:gears/twinite'},
    '#forge:gears/twinite',
    'gtceu:twinite_gear'
    );

    event.replaceInput({input: '#forge:ingots/dragonsteel'},
    '#forge:ingots/twinite',
    'gtceu:dragonsteel_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/dragonsteel'},
    '#forge:ingots/twinite',
    'gtceu:dragonsteel_ingot'
    );
    event.replaceInput({input: '#forge:dusts/dragonsteel'},
    '#forge:dusts/twinite',
    'gtceu:dragonsteel_dust'
    );
    event.replaceOutput({output: '#forge:dusts/dragonsteel'},
    '#forge:dusts/twinite',
    'gtceu:dragonsteel_dust'
    );
    event.replaceInput({input: '#forge:gears/dragonsteel'},
    '#forge:gears/dragonsteel',
    'gtceu:dragonsteel_gear'
    );
    event.replaceOutput({output: '#forge:gears/dragonsteel'},
    '#forge:gears/dragonsteel',
    'gtceu:dragonsteel_gear'
    );

    event.replaceInput({input: '#forge:ingots/prismalium'},
    '#forge:ingots/prismalium',
    'gtceu:prismalium_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/prismalium'},
    '#forge:ingots/prismalium',
    'gtceu:prismalium_ingot'
    );
    event.replaceInput({input: '#forge:dusts/prismalium'},
    '#forge:dusts/prismalium',
    'gtceu:prismalium_dust'
    );
    event.replaceOutput({output: '#forge:dusts/prismalium'},
    '#forge:dusts/prismalium',
    'gtceu:prismalium_dust'
    );
    event.replaceInput({input: '#forge:gears/prismalium'},
    '#forge:gears/prismalium',
    'gtceu:prismalium_gear'
    );
    event.replaceOutput({output: '#forge:gears/prismalium'},
    '#forge:gears/prismalium',
    'gtceu:prismalium_gear'
    );

    event.replaceInput({input: '#forge:ingots/melodium'},
    '#forge:ingots/melodium',
    'gtceu:melodium_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/melodium'},
    '#forge:ingots/melodium',
    'gtceu:melodium_ingot'
    );
    event.replaceInput({input: '#forge:dusts/melodium'},
    '#forge:dusts/melodium',
    'gtceu:melodium_dust'
    );
    event.replaceOutput({output: '#forge:dusts/melodium'},
    '#forge:dusts/melodium',
    'gtceu:melodium_dust'
    );
    event.replaceInput({input: '#forge:gears/melodium'},
    '#forge:gears/melodium',
    'gtceu:melodium_gear'
    );
    event.replaceOutput({output: '#forge:gears/melodium'},
    '#forge:gears/melodium',
    'gtceu:melodium_gear'
    );

    event.replaceInput({input: '#forge:ingots/stellarium'},
    '#forge:ingots/stellarium',
    'gtceu:stellarium_ingot'
    );
    event.replaceOutput({output: '#forge:ingots/stellarium'},
    '#forge:ingots/stellarium',
    'gtceu:stellarium_ingot'
    );
    event.replaceInput({input: '#forge:dusts/stellarium'},
    '#forge:dusts/stellarium',
    'gtceu:stellarium_dust'
    );
    event.replaceOutput({output: '#forge:dusts/stellarium'},
    '#forge:dusts/stellarium',
    'gtceu:stellarium_dust'
    );
    event.replaceInput({input: '#forge:gears/stellarium'},
    '#forge:gears/stellarium',
    'gtceu:stellarium_gear'
    );
    event.replaceOutput({output: '#forge:gears/stellarium'},
    '#forge:gears/stellarium',
    'gtceu:stellarium_gear'
    );
});
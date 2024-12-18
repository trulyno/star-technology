ServerEvents.recipes(event => {

    event.recipes.gtceu.laser_engraver('coordinate_crystal')
        .itemInputs('2x gtceu:exquisite_echo_shard_gem')
        .notConsumable('gtceu:black_glass_lens')
        .itemOutputs('kubejs:coordinate_crystal')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    //Dimensional Finder Controller
    
    // Machine recipes
    
    event.recipes.gtceu.assembly_line('dimensional_finder')
        .itemInputs(
            'gtceu:uv_scanner','16x gtceu:uv_scanner','16x gtceu:uv_scanner','16x gtceu:uv_scanner','16x gtceu:uv_scanner',
            '64x gtceu:fine_trinaquadalloy_wire','64x gtceu:fine_trinaquadalloy_wire', '8x #gtceu:circuits/uv', '3x gtceu:fusion_glass'
        )
        .inputFluids(
            'gtceu:naquadria 34992',
            'gtceu:neutronium 13248',
            'gtceu:echo_r 11520'
        )
        .itemOutputs('kubejs:dimensional_finder')
        .duration(36000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("kubejs:coordinate_crystal"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
            .EUt(GTValues.VHA[GTValues.UV]); 

    //Coordinate Crystals
    
    event.recipes.gtceu.dimensional_finder('abydos_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:sand', 'gtceu:uv_sensor')
        .inputFluids('gtceu:naquadria 9072')
        .chancedOutput('kubejs:abydos_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV])
        .dimensionWhitelist("minecraft:overworld");

    event.recipes.gtceu.dimensional_finder('nether_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:netherrack', 'gtceu:uhv_sensor')
        .inputFluids('kubejs:utopian_akerium 9072')
        .chancedOutput('kubejs:nether_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UHV])
        .dimensionWhitelist("sgjourney:abydos");

    event.recipes.gtceu.dimensional_finder('end_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:end_stone', 'gtceu:uhv_sensor')
        .inputFluids('kubejs:utopian_akerium 9072')
        .chancedOutput('kubejs:end_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UHV])
        .dimensionWhitelist("sgjourney:abydos");

    event.recipes.gtceu.dimensional_finder('lantea_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:prismarine', 'gtceu:uev_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:lantea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UEV])
        .dimensionWhitelist("minecraft:nether");

    event.recipes.gtceu.dimensional_finder('cavum_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:obsidian', 'gtceu:uiv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:cavum_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UIV])
        .dimensionWhitelist("minecraft:end");
        
    event.recipes.gtceu.dimensional_finder('sea_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:water_bucket', 'gtceu:uxv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:sea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UXV])
        .dimensionWhitelist("minecraft:lantea");

    event.recipes.gtceu.dimensional_finder('void_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:stone', 'gtceu:opv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:void_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.OPV])
        .dimensionWhitelist("minecraft:cavum");

});
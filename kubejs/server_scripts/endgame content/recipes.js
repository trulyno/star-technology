ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembler(id('netherite_reinforced_mesh'))
        .itemInputs('1x gtceu:carbon_fiber_mesh', '4x gtceu:netherite_rod', '1x minecraft:netherite_ingot')
        .inputFluids('gtceu:epoxy 288')
        .itemOutputs('kubejs:netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.mixer(id('new_soldering_alloy'))
        .itemInputs('14x gtceu:indium_dust', '3x gtceu:tin_dust', '2x gtceu:lead_dust', 'gtceu:cadmium_dust')
        .itemOutputs('20x gtceu:indium_tin_lead_cadmium_soldering_alloy_dust')
        .duration(400)
        .EUt(45000);
    
    event.recipes.gtceu.chemical_reactor(id('strontium_oxide'))
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor(id('strontium_oxide'))
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.chemical_reactor(id('titanium_oxide'))
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor(id('titanium_oxide'))
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.mixer(id('strontium_titanium_oxide'))
        .itemInputs('gtceu:strontium_oxide_dust', 'gtceu:titanium_oxide_dust')
        .itemOutputs('2x gtceu:strontium_titanium_oxide_dust')
        .duration(400)
        .EUt(420);

    event.recipes.gtceu.chemical_reactor(id('iron_selenide'))
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.large_chemical_reactor(id('iron_selenide'))
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.mixer(id('iron_selenide_over_strontium_titanium_oxide'))
        .itemInputs('gtceu:iron_selenide_dust', 'gtceu:strontium_titanium_oxide_dust')
        .itemOutputs('2x gtceu:iron_selenide_over_strontium_titanium_oxide_dust')
        .duration(1200)
        .EUt(240000);

    event.recipes.gtceu.large_chemical_reactor(id('iron_titanium_oxide'))
        .itemInputs('15x gtceu:ferrosilite_dust', '6x gtceu:titanium_oxide_dust')
        .itemOutputs('gtceu:iron_titanium_oxide_dust', '9x gtceu:silicon_dioxide_dust')
        .duration(4800)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('astatine_bis_tritelluride_cobo_selenium'))
        .itemInputs('gtceu:astatine_dust', 'gtceu:bismuth_tritelluride_dust', '4x gtceu:cobalt_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:astatine_bis_tritelluride_cobo_selenium_dust')
        .duration(360)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.mixer(id('astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide_dust'))
        .itemInputs('gtceu:astatine_bis_tritelluride_cobo_selenium_dust', 'gtceu:iron_titanium_oxide_dust')
        .itemOutputs('gtceu:astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide_dust')
        .duration(480)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.polarizer(id('magnetic_zapolgium'))
        .itemInputs('gtceu:zapolgium_ingot')
        .itemOutputs('gtceu:magnetic_zapolgium_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.polarizer(id('magnetic_pure_netherite'))
        .itemInputs('gtceu:pure_netherite_ingot')
        .itemOutputs('gtceu:magnetic_pure_netherite_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.mixer(id('cerium_tritelluride'))
        .itemInputs('gtceu:cerium_dust', '3x gtceu:tellurium_dust')
        .itemOutputs('4x gtceu:cerium_tritelluride_dust')
        .duration(900)
        .circuit(4)
        .EUt((GTValues.VHA[GTValues.UHV]));

    event.recipes.gtceu.mixer(id('polonium_bismide'))
        .itemInputs('gtceu:polonium_dust', 'gtceu:bismuth_dust')
        .itemOutputs('2x gtceu:polonium_bismide_dust')
        .duration(600)
        .circuit(2)
        .EUt((GTValues.VHA[GTValues.UEV]));

    event.recipes.gtceu.assembler(id('zalloy_coil'))
        .itemInputs('8x gtceu:zalloy_double_wire', '8x gtceu:neutronium_foil')
        .inputFluids('gtceu:tritanium 144')
        .itemOutputs('kubejs:zalloy_coil_block')
        .duration(1000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembler(id('magmada_alloy'))
        .itemInputs('8x gtceu:magmada_alloy_double_wire', '8x gtceu:lepton_coalescing_superalloy_foil')
        .inputFluids('gtceu:zalloy 144')
        .itemOutputs('kubejs:magmada_alloy_coil_block')
        .duration(1100)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.chemical_reactor(id('uepic_wafer'))
        .itemInputs('gtceu:uhpic_wafer','4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:neutronium 576')
        .itemOutputs('kubejs:uepic_wafer')
        .duration(1200)
        .EUt((GTValues.VA[GTValues.UV]))
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter(id('uepic_chip'))
        .itemInputs('kubejs:uepic_wafer')
        .itemOutputs('2x kubejs:uepic_chip')
        .duration(900)
        .EUt((GTValues.VA[GTValues.UV]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.circuit_assembler(id('3d_nand_chip'))
        .itemInputs('64x gtceu:nand_memory_chip', '12x gtceu:cerium_tritelluride_bolt', '2x #gtceu:circuits/iv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 216')
        .itemOutputs('6x kubejs:3d_nand_chip')
        .duration(600)
        .EUt((GTValues.VA[GTValues.ZPM]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.circuit_assembler(id('3d_nor_chip'))
        .itemInputs('64x gtceu:nor_memory_chip', '12x gtceu:cerium_tritelluride_bolt', '2x #gtceu:circuits/iv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 216')
        .itemOutputs('6x kubejs:3d_nor_chip')
        .duration(600)
        .EUt((GTValues.VA[GTValues.ZPM]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.chemical_reactor(id('qram'))
        .itemInputs('gtceu:ram_wafer','2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:radon 250')
        .itemOutputs('kubejs:qram_wafer')
        .duration(1500)
        .EUt((GTValues.VA[GTValues.UV]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.cutter(id('qram_chip'))
        .itemInputs('kubejs:qram_wafer')
        .itemOutputs('12x kubejs:qram_chip')
        .duration(900)
        .EUt((GTValues.VA[GTValues.UHV]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.chemical_plant(id('borax'))
        .itemInputs('12x gtceu:boron_dust', '6x gtceu:sodium_bisulfate_dust')
        .inputFluids('minecraft:water 39000')
        .itemOutputs('3x gtceu:borax_dust')
        .outputFluids('gtceu:sulfuric_acid 6000')
        .duration(400)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.mixer(id('thorium_plut_duranide_241'))
        .itemInputs('4x gtceu:thorium_dust', 'gtceu:duranium_dust', '3x gtceu:plutonium_241_dust')
        .itemOutputs('8x gtceu:thorium_plut_duranide_241_dust')
        .circuit(4)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV]);
    
    //UHV,UEV Rotor Holder

    event.shaped(Item.of('gtceu:uhv_rotor_holder'), [
            'NZN',
            'ZCZ',
            'NZN'
        ], {
            N: 'gtceu:small_neutronium_gear',
            Z: 'gtceu:zalloy_gear',
            C: 'gtceu:uhv_machine_hull'
    }).id('start:shaped/uhv_rotor_holder');

    event.shaped(Item.of('gtceu:uev_rotor_holder'), [
        'NZN',
        'ZCZ',
        'NZN'
    ], {
        N: 'gtceu:small_mythrolic_alloy_gear',
        Z: 'gtceu:starium_alloy_gear',
        C: 'gtceu:uev_machine_hull'
    }).id('start:shaped/uev_rotor_holder');

});

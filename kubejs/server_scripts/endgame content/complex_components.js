
ServerEvents.recipes(event => {
    
    //Controller Blocks
    
    event.recipes.gtceu.assembly_line('component_part_assembly')
        .itemInputs('gtceu:uv_assembler','8x gtceu:uv_robot_arm','8x gtceu:uv_conveyor_module',
            '8x gtceu:uv_electric_pump', '4x #gtceu:circuits/uhv', '6x #gtceu:circuits/uv', '8x #gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 12528', 'gtceu:lubricant 750')
        .itemOutputs('gtceu:component_part_assembly')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:uv_assembler"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(96)
            )
        .EUt(GTValues.VHA[GTValues.UV]);

    ComponentMats('uhv', 'zalloy', 'zircalloy_4', 'neutronium', 'uv', 'zpm', 'styrene_butadiene_rubber', 'polyether_ether_ketone', 'zirconium', 'iron_selenide_over_strontium_titanium_oxide', 'zirconium_selenide_diiodide', 'fusion_glass', 'gravi_star', 'pure_netherite', 'samarium', 'tritanium', 'naquadria', GTValues.VHA[GTValues.UHV], GTValues.VHA[GTValues.UV],128, 'uranium_rhodium_dinaquadide')
    //uev through opv material list to be update after epsilon, additionally need to add a scaler for maintained fluids
    ComponentMats('uev', 'zalloy', 'zircalloy_4', 'neutronium', 'uhv', 'uv', 'styrene_butadiene_rubber', 'polyether_ether_ketone', 'zirconium', 'iron_selenide_over_strontium_titanium_oxide', 'zirconium_selenide_diiodide', 'fusion_glass', 'gravi_star', 'zapolgium', 'pure_netherite', 'tritanium', 'naquadria', GTValues.VHA[GTValues.UEV], GTValues.VHA[GTValues.UHV],160, 'uranium_rhodium_dinaquadide')
    ComponentMats('uiv', 'zalloy', 'zircalloy_4', 'neutronium', 'uev', 'uhv', 'styrene_butadiene_rubber', 'polyether_ether_ketone', 'zirconium', 'iron_selenide_over_strontium_titanium_oxide', 'zirconium_selenide_diiodide', 'fusion_glass', 'gravi_star', 'zapolgium', 'pure_netherite', 'tritanium', 'naquadria', GTValues.VHA[GTValues.UIV], GTValues.VHA[GTValues.UEV],192, 'uranium_rhodium_dinaquadide')
    ComponentMats('uxv', 'zalloy', 'zircalloy_4', 'neutronium', 'uiv', 'uev', 'styrene_butadiene_rubber', 'polyether_ether_ketone', 'zirconium', 'iron_selenide_over_strontium_titanium_oxide', 'zirconium_selenide_diiodide', 'fusion_glass', 'gravi_star', 'zapolgium', 'pure_netherite', 'tritanium', 'naquadria', GTValues.VHA[GTValues.UXV], GTValues.VHA[GTValues.UIV],224, 'uranium_rhodium_dinaquadide')
    ComponentMats('opv', 'zalloy', 'zircalloy_4', 'neutronium', 'uxv', 'uiv', 'styrene_butadiene_rubber', 'polyether_ether_ketone', 'zirconium', 'iron_selenide_over_strontium_titanium_oxide', 'zirconium_selenide_diiodide', 'fusion_glass', 'gravi_star', 'zapolgium', 'pure_netherite', 'tritanium', 'naquadria', 4*GTValues.VHA[GTValues.UXV], GTValues.VHA[GTValues.UXV],256, 'uranium_rhodium_dinaquadide')


    function ComponentMats(tier, prim_material, secnd_material, main_material, tier1Under, tier2Under, rubber, plastic, wire1, wire2, cable, glass, catalyst, magnetic1, magnetic2, material1under, liquid, eu, eu1under,cwu, vcoil){
        
        //Component Parts
        event.recipes.gtceu.component_part_assembly(`kubejs:${tier}_voltage_coil`)
            .itemInputs(`gtceu:${main_material}_tiny_fluid_pipe`,`2x gtceu:magnetic_${magnetic1}_rod`, `16x gtceu:fine_${vcoil}_wire`, `kubejs:${tier1Under}_super_magnetic_core`)
            .itemOutputs(`kubejs:${tier}_voltage_coil`)
            .duration(200)
            .EUt(eu)

        event.recipes.gtceu.component_part_assembly(`${tier}_computational_matrix`)
            .itemInputs(`gtceu:${prim_material}_frame`, `2x #gtceu:circuits/${tier}`, `4x #gtceu:circuits/${tier1Under}`, `6x #gtceu:circuits/${tier2Under}`,
                `32x gtceu:fine_${wire1}_wire`, `2x gtceu:${cable}_single_cable`)
            .inputFluids(`gtceu:sterilized_growth_medium 500`, `gtceu:indium_tin_lead_cadmium_soldering_alloy 144`)
            .itemOutputs(`kubejs:${tier}_computational_matrix`) 
            .duration(700)
            .EUt(eu);

        event.recipes.gtceu.component_part_assembly(`${tier}_transmission_assembly`)
            .itemInputs(`gtceu:${prim_material}_frame`, `gtceu:${prim_material}_gear`, `3x gtceu:small_${secnd_material}_gear`, `2x gtceu:${tier1Under}_electric_motor`,
                `2x gtceu:${prim_material}_rod`, `8x gtceu:${prim_material}_round`)
            .inputFluids(`gtceu:lubricant 500`)
            .itemOutputs(`kubejs:${tier}_transmission_assembly`) 
            .duration(400)
            .EUt(eu);

        event.recipes.gtceu.component_part_assembly(`${tier}_precision_drive_mechanism`)
            .itemInputs(`gtceu:${prim_material}_frame`, `gtceu:${tier1Under}_robot_arm`, `2x gtceu:${tier1Under}_electric_motor`, `#gtceu:circuits/${tier1Under}`,
                `2x gtceu:${secnd_material}_gear`, `8x gtceu:${prim_material}_round`)
            .inputFluids(`gtceu:lubricant 500`, `gtceu:${rubber} 1152`)
            .itemOutputs(`kubejs:${tier}_precision_drive_mechanism`) 
            .duration(600)
            .EUt(eu);

        event.recipes.gtceu.component_part_assembly(`${tier}_microfluidic_flow_valve`)
            .itemInputs(`gtceu:${tier1Under}_fluid_regulator`, `gtceu:${main_material}_normal_fluid_pipe`, `4x gtceu:${prim_material}_plate`, `6x gtceu:${prim_material}_round`,
                `4x gtceu:${rubber}_ring`, `6x gtceu:${prim_material}_ring`)
            .inputFluids(`gtceu:${plastic} 432`)
            .itemOutputs(`kubejs:${tier}_microfluidic_flow_valve`) 
            .duration(400)
            .EUt(eu);

        event.recipes.gtceu.component_part_assembly(`${tier}_super_magnetic_core`)
            .itemInputs(`gtceu:long_magnetic_${magnetic1}_rod`,  `4x gtceu:magnetic_${magnetic2}_rod`, `6x gtceu:${wire2}_single_wire`,
            `2x gtceu:long_${prim_material}_rod`, `64x gtceu:fine_${wire1}_wire`, `2x gtceu:${main_material}_tiny_fluid_pipe`)
            .inputFluids(`gtceu:${magnetic2} 288`, `gtceu:liquid_helium 2500`)
            .itemOutputs(`kubejs:${tier}_super_magnetic_core`) 
            .duration(500)
            .EUt(eu);

        event.recipes.gtceu.component_part_assembly(`${tier}_catalyst_core`)
            .itemInputs(`gtceu:${glass}`, `gtceu:${catalyst}`, `gtceu:${tier1Under}_field_generator`, `2x gtceu:${tier1Under}_sensor`,
                `2x gtceu:${tier1Under}_emitter`, `4x gtceu:${prim_material}_rod`)
            .inputFluids(`gtceu:${liquid} 576`, `gtceu:radon 1000`)
            .itemOutputs(`kubejs:${tier}_catalyst_core`) 
            .duration(800)
            .EUt(eu);

        event.recipes.gtceu.component_part_assembly(`${tier}_high_strength_panel`)
            .itemInputs(`gtceu:${material1under}_frame`, `2x gtceu:double_${prim_material}_plate`, `gtceu:${tier1Under}_electric_piston`, `8x gtceu:${secnd_material}_screw`)
            .inputFluids(`gtceu:${main_material} 576`)
            .itemOutputs(`kubejs:${tier}_high_strength_panel`) 
            .duration(300)
            .EUt(eu);

        event.recipes.gtceu.component_part_assembly(`${tier}_micropower_router`)
            .itemInputs(`gtceu:${cable}_double_cable`, `4x gtceu:${cable}_single_cable`, `gtceu:${prim_material}_rod`,
            `32x gtceu:fine_${wire2}_wire`, `#gtceu:circuits/${tier1Under}`)
            .inputFluids(`gtceu:${rubber} 720`)
            .itemOutputs(`kubejs:${tier}_micropower_router`) 
            .duration(400)
            .EUt(eu);
      
    //Components

        event.recipes.gtceu.assembly_line(`${tier}_electric_motor`)
            .itemInputs(`kubejs:${tier}_super_magnetic_core`, `2x kubejs:${tier}_high_strength_panel`, `kubejs:${tier}_transmission_assembly`, `4x gtceu:${prim_material}_plate`, `4x gtceu:${prim_material}_screw`, `2x gtceu:long_${prim_material}_rod`, `kubejs:${tier}_micropower_router`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy 576`, `gtceu:lubricant 1000`, `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_electric_motor`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_electric_motor`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);

        event.recipes.gtceu.assembly_line(`${tier}_electric_pump`)
            .itemInputs(`gtceu:${tier}_electric_motor`, `gtceu:${secnd_material}_rotor`, `kubejs:${tier}_microfluidic_flow_valve`, `gtceu:${main_material}_large_fluid_pipe`, `16x gtceu:${rubber}_ring`, `kubejs:${tier}_high_strength_panel`, `4x gtceu:${prim_material}_screw`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:lubricant 1000', `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_electric_pump`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_electric_pump`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);

        event.recipes.gtceu.assembler(`${tier}_fluid_regulator`)
            .itemInputs(`gtceu:${tier}_electric_pump`, `2x #gtceu:circuits/${tier}`)
            .itemOutputs(`gtceu:${tier}_fluid_regulator`)
            .duration(50)
            .EUt(eu)
            .circuit(1);

        event.recipes.gtceu.assembly_line(`${tier}_conveyor_module`)
            .itemInputs(`2x gtceu:${tier}_electric_motor`, `kubejs:${tier}_high_strength_panel`, `kubejs:${tier}_precision_drive_mechanism`, `kubejs:${tier}_transmission_assembly`, `2x kubejs:${tier}_micropower_router`, `2x gtceu:${prim_material}_plate`, `4x gtceu:${prim_material}_screw`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:lubricant 1000', `gtceu:${rubber} 3456`, `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_conveyor_module`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_conveyor_module`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);

        event.recipes.gtceu.assembly_line(`${tier}_electric_piston`)
            .itemInputs(`gtceu:${tier}_electric_motor`, `2x kubejs:${tier}_precision_drive_mechanism`, `kubejs:${tier}_transmission_assembly`, `gtceu:${secnd_material}_gear`, `gtceu:small_${prim_material}_gear`, `2x gtceu:${prim_material}_rod`, `kubejs:${tier}_micropower_router`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:lubricant 1000', `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_electric_piston`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_electric_piston`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);

        event.recipes.gtceu.assembly_line(`${tier}_robot_arm`)
            .itemInputs(`4x gtceu:long_${prim_material}_rod`, `2x kubejs:${tier}_transmission_assembly`, `2x gtceu:${tier}_electric_motor`, `2x kubejs:${tier}_precision_drive_mechanism`, `gtceu:${tier}_electric_piston`, `kubejs:${tier}_high_strength_panel`, `3x kubejs:${tier}_computational_matrix`, `3x kubejs:${tier}_micropower_router`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1728', 'gtceu:lubricant 1000', `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_robot_arm`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_robot_arm`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);

        event.recipes.gtceu.assembly_line(`${tier}_field_generator`)
            .itemInputs(`gtceu:${prim_material}_frame`, `2x kubejs:${tier}_catalyst_core`, `2x kubejs:${tier}_computational_matrix`, `2x gtceu:${tier}_emitter`, `64x gtceu:fine_${wire2}_wire`, `64x gtceu:fine_${wire2}_wire`, `2x kubejs:${tier}_micropower_router`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1728', `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_field_generator`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_field_generator`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);

        event.recipes.gtceu.assembly_line(`${tier}_emitter`)
            .itemInputs(`gtceu:${prim_material}_frame`, `gtceu:${tier}_electric_motor`, `kubejs:${tier}_catalyst_core`, `2x gtceu:long_${prim_material}_rod`, `64x gtceu:${main_material}_foil`, `2x kubejs:${tier}_micropower_router`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152', `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_emitter`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_emitter`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);

        event.recipes.gtceu.assembly_line(`${tier}_sensor`)
            .itemInputs(`gtceu:${prim_material}_frame`, `gtceu:${tier}_electric_motor`, `kubejs:${tier}_catalyst_core`, `2x gtceu:${prim_material}_plate`, `64x gtceu:${main_material}_foil`, `2x kubejs:${tier}_micropower_router`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152', `gtceu:${liquid} 576`)
            .itemOutputs(`gtceu:${tier}_sensor`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${tier1Under}_sensor`))
                    .EUt(eu1under)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu1under);
    };
});

    
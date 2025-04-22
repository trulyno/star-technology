// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({ id: 'gtceu:shapeless/iron_magnetic_stick'});
    event.custom({
        'type': 'create_new_age:energising',
        'energy_needed': 7500,
        'ingredients': [
          {
            'item': 'gtceu:iron_rod'
          }
        ],
        'results': [
          {
            'item': 'gtceu:magnetic_iron_rod'
          }
        ]
    }).id('start:energising/magnetic_iron_rod');
    
    event.remove({output: 'gtceu:vacuum_tube'})
    event.recipes.create.mechanical_crafting(Item.of(`gtceu:vacuum_tube`,2), [
      'BEVEB',
      'PWRWP',
      'BEVEB'
    ], {
      B: 'gtceu:copper_bolt',
      E: 'create:electron_tube',
      V: 'gtceu:glass_tube',
      W: 'gtceu:copper_double_wire',
      P: 'gtceu:double_wrought_iron_plate',
      R: 'thermal:redstone_servo'
    }).id('start:mechanical_crafting/vacuum_tube');

    event.recipes.create.mechanical_crafting(Item.of('thermal:redstone_servo',2), [
      'TPT',
      ' F ',
      'TPT'
    ], {
      P: 'gtceu:steel_plate',
      T: 'create:electron_tube',
      F: 'gtceu:fine_red_alloy_wire'
    }).id('start:mechanical_crafting/redstone_servo_better');

    let inter = 'gtceu:glass_tube'
    event.recipes.create.sequenced_assembly([
        Item.of(`create:electron_tube`,2),
    ], inter, [
        event.recipes.createDeploying(inter, [inter, 'create:polished_rose_quartz']),
        event.recipes.createDeploying(inter, [inter, `gtceu:copper_bolt`]),
        event.recipes.createDeploying(inter, [inter, `gtceu:iron_ring`]),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1).id('start:sequenced_assembly/electron_tube');

    ['cinder_block','polished_cinder_block','cinder_bricks'].forEach(t=>{
        event.remove({id: `dustrial_decor:${t}`});
    });

    event.recipes.gtceu.fluid_solidifier(id('cinder_block'))
      .itemInputs('gtceu:wrought_iron_frame')
      .inputFluids('gtceu:concrete 1000')
      .itemOutputs('dustrial_decor:cinder_block')
      .duration(400)
      .EUt(4);

    event.recipes.create.splashing('dustrial_decor:polished_cinder_block','dustrial_decor:cinder_block').id('start:splashing/polished_cinder_block');

    event.recipes.gtceu.assembler(id('cinder_bricks'))
      .itemInputs('4x dustrial_decor:polished_cinder_block')
      .inputFluids('gtceu:concrete 100')
      .itemOutputs('4x dustrial_decor:cinder_bricks')
      .duration(80)
      .EUt(2);

    event.recipes.gtceu.assembler(id('iron_mesh'))
      .itemInputs('16x gtceu:steel_foil','exnihilosequentia:flint_mesh','8x gtceu:wrought_iron_ring')
      .inputFluids('gtceu:tin_alloy 432')
      .itemOutputs('exnihilosequentia:iron_mesh')
      .duration(600)
      .EUt(6);

    event.recipes.gtceu.assembler(id('flint_mesh'))
      .itemInputs('16x minecraft:flint','exnihilosequentia:string_mesh','8x gtceu:tin_ring')
      .inputFluids('gtceu:tin 144')
      .itemOutputs('exnihilosequentia:flint_mesh')
      .duration(400)
      .EUt(4);

    const UlvMachine = (output,inputs) => {
      event.recipes.create.mechanical_crafting(Item.of(`gtceu:ulv_${output}`), [
          'ABC','DEF','GHI'
      ], {
          A: inputs[0],B: inputs[1],C: inputs[2],D: inputs[3],E: inputs[4],F: inputs[5],G: inputs[6],H: inputs[7],I: inputs[8]
      }).id(`start:mechanical_crafting/ulv_${output}`);
    } 
    UlvMachine('circuit_assembler',['kubejs:ulv_robot_arm','#gtceu:circuits/lv','kubejs:ulv_emitter','kubejs:ulv_conveyor_module','gtceu:ulv_machine_hull','kubejs:ulv_conveyor_module','gtceu:red_alloy_single_cable','#gtceu:circuits/lv','gtceu:red_alloy_single_cable']);
    UlvMachine('assembler',['kubejs:ulv_robot_arm','#gtceu:circuits/ulv','kubejs:ulv_robot_arm','kubejs:ulv_conveyor_module','gtceu:ulv_machine_hull','kubejs:ulv_conveyor_module','gtceu:red_alloy_single_cable','#gtceu:circuits/ulv','gtceu:red_alloy_single_cable']);
    UlvMachine('centrifuge',['#gtceu:circuits/ulv','kubejs:ulv_electric_motor','#gtceu:circuits/ulv','gtceu:red_alloy_single_cable','gtceu:ulv_machine_hull','gtceu:red_alloy_single_cable','#gtceu:circuits/ulv','kubejs:ulv_electric_motor','#gtceu:circuits/ulv']);
    UlvMachine('mixer',['#forge:glass','gtceu:cast_iron_rotor','#forge:glass','#forge:glass','kubejs:ulv_electric_motor','#forge:glass','#gtceu:circuits/ulv','gtceu:ulv_machine_hull','#gtceu:circuits/ulv']);
    UlvMachine('stirling_generator',['gtceu:tin_alloy_normal_fluid_pipe','#gtceu:circuits/ulv','gtceu:tin_alloy_normal_fluid_pipe','gtceu:cast_iron_rotor','gtceu:ulv_machine_hull','gtceu:cast_iron_rotor','kubejs:ulv_electric_motor','gtceu:red_alloy_single_cable','kubejs:ulv_electric_motor']);
    UlvMachine('charger_4x',['gtceu:lead_quadruple_wire','minecraft:chest','gtceu:lead_quadruple_wire','gtceu:lead_quadruple_wire','gtceu:ulv_machine_hull','gtceu:lead_quadruple_wire','gtceu:red_alloy_single_cable','#gtceu:circuits/ulv','gtceu:red_alloy_single_cable']);
    UlvMachine('battery_buffer_4x',['gtceu:lead_quadruple_wire','minecraft:chest','gtceu:lead_quadruple_wire','gtceu:lead_quadruple_wire','gtceu:ulv_machine_hull','gtceu:lead_quadruple_wire','','','']);
    UlvMachine('battery_buffer_8x',['gtceu:lead_octal_wire','minecraft:chest','gtceu:lead_octal_wire','gtceu:lead_octal_wire','gtceu:ulv_machine_hull','gtceu:lead_octal_wire','','','']);
    UlvMachine('battery_buffer_16x',['gtceu:lead_hex_wire','minecraft:chest','gtceu:lead_hex_wire','gtceu:lead_hex_wire','gtceu:ulv_machine_hull','gtceu:lead_hex_wire','','','']);
    UlvMachine('transformer_1a',['','gtceu:red_alloy_single_cable','gtceu:red_alloy_single_cable','gtceu:tin_single_cable','gtceu:ulv_machine_hull','#gtceu:circuits/ulv','','gtceu:red_alloy_single_cable','gtceu:red_alloy_single_cable']);
    UlvMachine('transformer_2a',['','gtceu:red_alloy_double_cable','gtceu:red_alloy_double_cable','gtceu:tin_double_cable','gtceu:ulv_machine_hull','#gtceu:circuits/ulv','','gtceu:red_alloy_double_cable','gtceu:red_alloy_double_cable']);
    UlvMachine('transformer_4a',['','gtceu:red_alloy_quadruple_cable','gtceu:red_alloy_quadruple_cable','gtceu:tin_quadruple_cable','gtceu:ulv_machine_hull','#gtceu:circuits/ulv','','gtceu:red_alloy_quadruple_cable','gtceu:red_alloy_quadruple_cable']);
    UlvMachine('transformer_16a',['','gtceu:red_alloy_hex_cable','gtceu:red_alloy_hex_cable','gtceu:tin_hex_cable','gtceu:ulv_machine_hull','#gtceu:circuits/ulv','','gtceu:red_alloy_hex_cable','gtceu:red_alloy_hex_cable']);
    UlvMachine('machine_casing',['gtceu:wrought_iron_plate','gtceu:wrought_iron_plate','gtceu:wrought_iron_plate','gtceu:wrought_iron_plate','','gtceu:wrought_iron_plate','gtceu:wrought_iron_plate','gtceu:wrought_iron_plate','gtceu:wrought_iron_plate']);
    UlvMachine('machine_hull',['gtceu:red_alloy_single_cable','gtceu:wrought_iron_plate','gtceu:red_alloy_single_cable','gtceu:wrought_iron_plate','gtceu:ulv_machine_casing','gtceu:wrought_iron_plate','gtceu:red_alloy_single_cable','gtceu:wrought_iron_plate','gtceu:red_alloy_single_cable']);

    event.recipes.gtceu.assembler(id('ulv_machine_casing'))
      .itemInputs('8x gtceu:wrought_iron_plate')
      .itemOutputs('gtceu:ulv_machine_casing')
      .circuit(8)
      .duration(100)
      .EUt(2);

    event.recipes.gtceu.assembler(id('lv_machine_casing'))
      .itemInputs('8x gtceu:steel_plate')
      .itemOutputs('gtceu:lv_machine_casing')
      .circuit(8)
      .duration(100)
      .EUt(8);

    event.recipes.gtceu.assembler(id('ulv_machine_hull'))
      .itemInputs('gtceu:ulv_machine_casing','4x gtceu:red_alloy_single_cable')
      .inputFluids('gtceu:glue 576')
      .itemOutputs('gtceu:ulv_machine_hull')
      .duration(100)
      .EUt(2);

    event.recipes.gtceu.assembler(id('lv_machine_hull'))
      .itemInputs('gtceu:lv_machine_casing','4x gtceu:tin_single_cable')
      .inputFluids('gtceu:glue 576')
      .itemOutputs('gtceu:lv_machine_hull')
      .duration(100)
      .EUt(8);

    let cable = 'gtceu:red_alloy_single_wire'
    event.recipes.create.sequenced_assembly([
        Item.of(`gtceu:red_alloy_single_cable`),
    ], cable, [
        event.recipes.createFilling(cable, [cable, Fluid.of('gtceu:rubber 72')]),
        event.recipes.createPressing(cable, cable)
    ]).transitionalItem(cable).loops(3).id('start:sequenced_assembly/red_alloy_single_cable');

    let motor = 'gtceu:magnetic_iron_rod'
    event.recipes.create.sequenced_assembly([
        Item.of(`kubejs:ulv_electric_motor`),
    ], motor, [
        event.recipes.createDeploying(motor, [motor, 'gtceu:iron_rod']),
        event.recipes.createDeploying(motor, [motor, `gtceu:lead_single_wire`]),
        event.recipes.createDeploying(motor, [motor, `gtceu:red_alloy_single_cable`]),
        event.recipes.createDeploying(motor, [motor, `gtceu:lead_single_wire`]),
        event.recipes.createPressing(motor, motor)
    ]).transitionalItem(motor).loops(2).id('start:sequenced_assembly/ulv_electric_motor');

    let conv = 'gtceu:red_alloy_single_cable'
    event.recipes.create.sequenced_assembly([
        Item.of(`kubejs:ulv_conveyor_module`),
    ], conv, [
        event.recipes.createDeploying(conv, [conv, 'create:belt_connector']),
        event.recipes.createDeploying(conv, [conv, `kubejs:ulv_electric_motor`]),
        event.recipes.createDeploying(conv, [conv, `create:belt_connector`]),
        event.recipes.createDeploying(conv, [conv, 'gtceu:potin_rod']),
        event.recipes.createDeploying(conv, [conv, `create:belt_connector`])
    ]).transitionalItem(conv).loops(2).id('start:sequenced_assembly/ulv_conveyor_module');

    let arm = 'kubejs:ulv_electric_piston'
    event.recipes.create.sequenced_assembly([
        Item.of(`kubejs:ulv_robot_arm`),
    ], arm, [
      event.recipes.createDeploying(arm, [arm, 'gtceu:potin_rod']),
      event.recipes.createDeploying(arm, [arm, `kubejs:ulv_electric_motor`]),
      event.recipes.createDeploying(arm, [arm, `gtceu:red_alloy_single_cable`]),
      event.recipes.createDeploying(arm, [arm, `#gtceu:circuits/ulv`]),
      event.recipes.createDeploying(arm, [arm, `gtceu:red_alloy_single_cable`])
    ]).transitionalItem(arm).loops(2).id('start:sequenced_assembly/ulv_robot_arm');

    let pist = 'kubejs:ulv_electric_motor'
    event.recipes.create.sequenced_assembly([
        Item.of(`kubejs:ulv_electric_piston`),
    ], pist, [
        event.recipes.createDeploying(pist, [pist, 'gtceu:potin_rod']),
        event.recipes.createDeploying(pist, [pist, 'gtceu:small_potin_gear']),
        event.recipes.createDeploying(pist, [pist, 'gtceu:potin_plate']),
        event.recipes.createPressing(pist, pist),
        event.recipes.createDeploying(pist, [pist, `gtceu:red_alloy_single_cable`]),
        event.recipes.createDeploying(pist, [pist, 'gtceu:potin_plate'])
    ]).transitionalItem(pist).loops(2).id('start:sequenced_assembly/ulv_electric_piston');

    const UlvComponent = (output,inputs,fluid) => {
      if(output == 'electric_motor')
      event.recipes.gtceu.assembler(id(`ulv_${output}`))
        .itemInputs(inputs[0],inputs[1],inputs[2],inputs[3])
        .itemOutputs(`kubejs:ulv_${output}`)
        .duration(100)
        .EUt(6);
    if(output == 'electric_piston')
      event.recipes.gtceu.assembler(id(`ulv_${output}`))
        .itemInputs(inputs[0],inputs[1],inputs[2],inputs[3],inputs[4])
        .itemOutputs(`kubejs:ulv_${output}`)
        .duration(100)
        .circuit(1)
        .EUt(6);
    if(output == 'robot_arm')
      event.recipes.gtceu.assembler(id(`ulv_${output}`))
        .itemInputs(inputs[0],inputs[1],inputs[2],inputs[3],inputs[4])
        .itemOutputs(`kubejs:ulv_${output}`)
        .duration(100)
        .circuit(1)
        .EUt(6);
    if(output == 'electric_pump')
      event.recipes.gtceu.assembler(id(`ulv_${output}`))
        .itemInputs(inputs[0],inputs[1],inputs[2],inputs[3],inputs[4],inputs[5])
        .itemOutputs(`kubejs:ulv_${output}`)
        .duration(100)
        .EUt(6);
    if(output == 'emitter')
      event.recipes.gtceu.assembler(id(`ulv_${output}`))
        .itemInputs(inputs[0],inputs[1],inputs[2],inputs[3])
        .itemOutputs(`kubejs:ulv_${output}`)
        .duration(100)
        .circuit(1)
        .EUt(6);
      if(output == 'conveyor_module')
      event.recipes.gtceu.assembler(id(`${output}_ulv`))
        .itemInputs(inputs[0],inputs[1])
        .inputFluids(fluid)
        .itemOutputs(`kubejs:ulv_${output}`)
        .duration(100)
        .circuit(1)
        .EUt(6);
    }
    UlvComponent('electric_motor',['2x gtceu:red_alloy_single_cable','2x gtceu:iron_rod','1x gtceu:magnetic_iron_rod','4x gtceu:lead_single_wire'],'');
    UlvComponent('conveyor_module',['1x gtceu:red_alloy_single_cable','2x kubejs:ulv_electric_motor'],'gtceu:rubber 864');
    UlvComponent('electric_piston',['2x gtceu:potin_rod','2x gtceu:red_alloy_single_cable','3x gtceu:potin_plate','1x gtceu:small_potin_gear','1x kubejs:ulv_electric_motor'],'');
    UlvComponent('robot_arm',['3x gtceu:red_alloy_single_cable','2x gtceu:potin_rod','2x kubejs:ulv_electric_motor','1x kubejs:ulv_electric_piston','1x #gtceu:circuits/ulv'],'');
    UlvComponent('electric_pump',['1x gtceu:red_alloy_single_cable','1x gtceu:tin_alloy_normal_fluid_pipe','1x gtceu:cast_iron_screw','1x gtceu:cast_iron_rotor','2x gtceu:rubber_ring','1x kubejs:ulv_electric_motor'],'');
    UlvComponent('emitter',['4x gtceu:tin_rod','2x gtceu:red_alloy_single_cable','2x #gtceu:circuits/ulv','1x minecraft:prismarine_crystals'],'');

    event.recipes.gtceu.assembler(id('ulv_battery'))
      .itemInputs('4x gtceu:copper_foil', '4x minecraft:paper', '2x gtceu:iron_single_wire')
      .inputFluids('gtceu:glue 100')
      .itemOutputs('3x gtceu:tantalum_capacitor')
      .duration(120)
      .EUt(4);

    event.remove({ output: /^gtceu:.*firebox_casing/ });
    event.remove({ output: /^gtceu:.*gearbox/ });
    event.remove({ output: /^gtceu:.*pipe_casing/ });

    const SpecialCasing = (material, tier) => {
      event.recipes.gtceu.assembler(id(`${material}_gearbox`))
        .itemInputs(`4x gtceu:${material}_plate`, `2x gtceu:${material}_gear`, `2x gtceu:small_${material}_gear`, `gtceu:${material}_frame`)
        .circuit(4)
        .itemOutputs(`gtceu:${material}_gearbox`)
        .duration(100)
        .EUt(2 * (4 ** tier));

      event.recipes.gtceu.assembler(id(`${material}_firebox_casing`))
        .itemInputs(`4x gtceu:${material}_plate`, `4x gtceu:${material}_rod`, `gtceu:${material}_frame`)
        .circuit(2)
        .itemOutputs(`gtceu:${material}_firebox_casing`)
        .duration(100)
        .EUt(2 * (4 ** tier));

      event.recipes.gtceu.assembler(id(`${material}_pipe_casing`))
        .itemInputs(`4x gtceu:${material}_plate`, `4x gtceu:${material}_small_fluid_pipe`, `gtceu:${material}_frame`)
        .circuit(3)
        .itemOutputs(`gtceu:${material}_pipe_casing`)
        .duration(100)
        .EUt(2 * (4 ** tier));
    }
    SpecialCasing('bronze',0);
    SpecialCasing('steel',1);

    event.recipes.create.mechanical_crafting('2x gtceu:resistor', [
      ' PPP ',
      'WRCRW',
      ' PPP '
    ], {
      P: 'minecraft:paper',
      W: 'gtceu:copper_single_wire',
      R: 'gtceu:sticky_resin',
      C: 'gtceu:coke_dust'
    }).id('start:mechanical_crafter/resistor');

    //ulv removals
    ['charger_4x','battery_buffer_4x','battery_buffer_8x','battery_buffer_16x','transformer_1a','transformer_2a',
      'transformer_4a','transformer_16a','machine_casing','machine_hull'].forEach(UlvRemove=>{
      event.remove({output: `gtceu:ulv_${UlvRemove}`});
    });
    //other removals
    ['lv_machine_hull','lv_machine_casing','tantalum_capacitor'].forEach(OtherRemove=>{
      event.remove({output: `gtceu:${OtherRemove}`});
    });
    event.remove({id: /^gtceu:shaped\/energy_hatch/});
    event.remove({id: /^gtceu:shaped\/dynamo_hatch/});
    event.remove({output: /^gtceu:lv_.*/});

});
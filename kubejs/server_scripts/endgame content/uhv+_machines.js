ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({not: {output: 'gtceu:uhv_ultimate_battery'},output: /gtceu:uhv.*/});
    event.remove({not: {input: 'gtceu:uhv_ultimate_battery'},input: /gtceu:uhv.*/})
    event.remove({output: /gtceu:uev.*/})
    event.remove({input: /gtceu:uev.*/})
    event.remove({output: /gtceu:uiv.*/})
    event.remove({input: /gtceu:uiv.*/})
    event.remove({output: /gtceu:uxv.*/})
    event.remove({input: /gtceu:uxv.*/})
    event.remove({output: /gtceu:opv.*/})
    event.remove({input: /gtceu:opv.*/})
    event.remove({not: {output: 'gtceu:max_battery'},output: /gtceu:max.*/})
    event.remove({not: {input: 'gtceu:max_battery'},input: /gtceu:max.*/})

const input = [
    {tier:'uhv',tier1under:'uv',main:'neutronium',cable:'europium',wire:'zirconium_selenide_diiodide',glass:'fusion_glass',plastic:'polyether_ether_ketone',cable1up:'cerium_tritelluride',mag:'pure_netherite',pipe:'neutronium',buzz:'neutronium',elctrlyzWire:'iron_selenide_over_strontium_titanium_oxide',chip:'gtceu:uhpic',math:'1'},
    {tier:'uev',tier1under:'uhv',main:'mythrolic_alloy',cable:'cerium_tritelluride',wire:'astatium_bioselex_carbonite',glass:'fusion_glass',plastic:'polyether_ether_ketone',cable1up:'polonium_bismide',mag:'zapolgium',pipe:'mythrolic_alloy',buzz:'neutronium',elctrlyzWire:'astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide',chip:'kubejs:uepic',math:'2'}
    //UIV will be last single block machine tier
]

input.forEach(i=>{

    //Machines
    event.shaped(Item.of(`gtceu:${i.tier}_machine_casing`), 
        ['PPP','PWP','PPP'], 
        {P: `gtceu:${i.main}_plate`,W: '#forge:tools/wrenches'}).id(`start:shaped/${i.tier}_machine_casing`);
    event.recipes.gtceu.assembler(`${i.tier}_machine_casing`) 
        .itemInputs(`8x gtceu:${i.main}_plate`) 
        .circuit(8) 
        .itemOutputs(`gtceu:${i.tier}_machine_casing`) 
        .duration(50) 
        .EUt(16);
    event.shaped(Item.of(`gtceu:${i.tier}_machine_hull`),
        ['   ','LPL','CMC'],
        {P: `gtceu:${i.main}_plate`,L: `gtceu:${i.plastic}_plate`,C: `gtceu:${i.cable}_single_cable`, M: `gtceu:${i.tier}_machine_casing`}).id(`start:shaped/${i.tier}_machine_hull`);
    event.recipes.gtceu.assembler(`${i.tier}_machine_hull`) 
        .itemInputs(`gtceu:${i.tier}_machine_casing`, `2x gtceu:${i.cable}_single_cable`) 
        .inputFluids(`gtceu:${i.plastic} 288`) 
        .itemOutputs(`gtceu:${i.tier}_machine_hull`) 
        .duration(50) 
        .EUt(16);
    event.shaped(Item.of(`gtceu:${i.tier}_electric_furnace`),
        ['IWI','WHW','CWC'], 
        {I: `#gtceu:circuits/${i.tier}`, W: `gtceu:${i.wire}_double_wire`, C: `gtceu:${i.cable}_single_cable`, H: `gtceu:${i.tier}_machine_hull`}).id(`start:shaped/${i.tier}_electric_furnace`);
    event.shaped(Item.of(`gtceu:${i.tier}_alloy_smelter`), 
        ['IWI','WHW','CWC'], 
        {I: `#gtceu:circuits/${i.tier}`, W: `gtceu:${i.wire}_quadruple_wire`, C: `gtceu:${i.cable}_single_cable`, H: `gtceu:${i.tier}_machine_hull`}).id(`start:shaped/${i.tier}_alloy_smelter`);
    event.shaped(Item.of(`gtceu:${i.tier}_arc_furnace`), 
        ['CGC','IHI','PPP'], 
        {I: `#gtceu:circuits/${i.tier}`, G: `gtceu:graphite_dust`, C: `gtceu:${i.cable}_quadruple_cable`, H: `gtceu:${i.tier}_machine_hull`, P: `gtceu:${i.main}_plate`}).id(`start:shaped/${i.tier}_arc_furnace`);
    event.shaped(Item.of(`gtceu:${i.tier}_assembler`), 
        ['AIA','VHV','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, C: `gtceu:${i.cable}_single_cable`, H: `gtceu:${i.tier}_machine_hull`, A: `gtceu:${i.tier}_robot_arm`, V: `gtceu:${i.tier}_conveyor_module`}).id(`start:shaped/${i.tier}_assembler`);
    event.shaped(Item.of(`gtceu:${i.tier}_autoclave`), 
        ['PGP','PHP','IUI'], 
        {I: `#gtceu:circuits/${i.tier}`, G: `gtceu:${i.glass}`, H: `gtceu:${i.tier}_machine_hull`,P: `gtceu:${i.main}_plate`, U: `gtceu:${i.tier}_electric_pump`}).id(`start:shaped/${i.tier}_autoclave`);
    event.shaped(Item.of(`gtceu:${i.tier}_bender`), 
        ['SPS','IHI','MCM'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`, C: `gtceu:${i.cable}_single_cable`,P: `gtceu:${i.main}_plate`, M: `gtceu:${i.tier}_electric_motor`, S: `gtceu:${i.tier}_electric_piston`}).id(`start:shaped/${i.tier}_bender`);
    event.shaped(Item.of(`gtceu:${i.tier}_brewery`), 
        ['GUG','CHC','ISI'], 
        {G: `gtceu:${i.glass}`, I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`, C: `gtceu:${i.cable}_single_cable`, U: `gtceu:${i.tier}_electric_pump`, S: `gtceu:${i.wire}_spring`}).id(`start:shaped/${i.tier}_brewery`);
    event.shaped(Item.of(`gtceu:${i.tier}_canner`), 
        ['CUC','IHI','GGG'], 
        {G: `gtceu:${i.glass}`, I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`, C: `gtceu:${i.cable}_single_cable`, U: `gtceu:${i.tier}_electric_pump`}).id(`start:shaped/${i.tier}_canner`);
    event.shaped(Item.of(`gtceu:${i.tier}_centrifuge`), 
        ['IMI','CHC','IMI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, M: `gtceu:${i.tier}_electric_motor`}).id(`start:shaped/${i.tier}_centrifuge`);
    event.shaped(Item.of(`gtceu:${i.tier}_chemical_bath`), 
        ['VGC','UGV','IHI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, U: `gtceu:${i.tier}_electric_pump`, V: `gtceu:${i.tier}_conveyor_module`, G: `gtceu:${i.glass}`}).id(`start:shaped/${i.tier}_chemical_bath`);
    event.shaped(Item.of(`gtceu:${i.tier}_chemical_reactor`), 
        ['ERE','CMC','IHI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, E: `gtceu:${i.plastic}_large_fluid_pipe`, R: `gtceu:${i.main}_rotor`, M: `gtceu:${i.tier}_electric_motor`}).id(`start:shaped/${i.tier}_chemical_reactor`);
    event.shaped(Item.of(`gtceu:${i.tier}_compressor`), 
        [' I ','SHS','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, S: `gtceu:${i.tier}_electric_piston`}).id(`start:shaped/${i.tier}_compressor`);
    event.shaped(Item.of(`gtceu:${i.tier}_cutter`), 
        ['CIG','VHB','ICM'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, V: `gtceu:${i.tier}_conveyor_module`, M: `gtceu:${i.tier}_electric_motor`, G: `gtceu:${i.glass}`, B: `gtceu:${i.buzz}_buzz_saw_blade`}).id(`start:shaped/${i.tier}_cutter`);
    event.shaped(Item.of(`gtceu:${i.tier}_distillery`), 
        ['GSG','IHI','CUC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, G: `gtceu:${i.glass}`, S: `gtceu:${i.wire}_spring`, U: `gtceu:${i.tier}_electric_pump`}).id(`start:shaped/${i.tier}_distillery`);
    event.shaped(Item.of(`gtceu:${i.tier}_electrolyzer`), 
        ['WGW','WHW','ICI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, G: `gtceu:${i.glass}`, W: `gtceu:${i.elctrlyzWire}_single_wire`}).id(`start:shaped/${i.tier}_electrolyzer`);
    event.shaped(Item.of(`gtceu:${i.tier}_electromagnetic_separator`), 
        ['VCW','CHG','ICW'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, G: `gtceu:${i.mag}_rod`, W: `gtceu:${i.cable}_octal_wire`, V: `gtceu:${i.tier}_conveyor_module`}).id(`start:shaped/${i.tier}_electromagnetic_separator`);
    event.shaped(Item.of(`gtceu:${i.tier}_extractor`), 
        ['GIG','SHU','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, G: `gtceu:${i.glass}`, U: `gtceu:${i.tier}_electric_pump`, S: `gtceu:${i.tier}_electric_piston`}).id(`start:shaped/${i.tier}_extractor`);
    event.shaped(Item.of(`gtceu:${i.tier}_extruder`), 
        ['WWI','SHE','WWI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,S: `gtceu:${i.tier}_electric_piston`, W: `gtceu:${i.wire}_quadruple_wire`, E: `gtceu:${i.pipe}_normal_fluid_pipe`}).id(`start:shaped/${i.tier}_extruder`);
    event.shaped(Item.of(`gtceu:${i.tier}_fermenter`), 
        ['CUC','GHG','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, G: `gtceu:${i.glass}`, U: `gtceu:${i.tier}_electric_pump`}).id(`start:shaped/${i.tier}_fermenter`);
    event.shaped(Item.of(`gtceu:${i.tier}_fluid_heater`), 
        ['WGW','UHU','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, G: `gtceu:${i.glass}`, U: `gtceu:${i.tier}_electric_pump`, W: `gtceu:${i.wire}_quadruple_wire`}).id(`start:shaped/${i.tier}_fluid_heater`);
    event.shaped(Item.of(`gtceu:${i.tier}_fluid_solidifier`), 
        ['UGU','CHC','IRI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`,G: `gtceu:${i.glass}`,R: 'minecraft:chest', U: `gtceu:${i.tier}_electric_pump`}).id(`start:shaped/${i.tier}_fluid_solidifier`);
    event.shaped(Item.of(`gtceu:${i.tier}_forge_hammer`), 
        ['CSC','IHI','CRC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`,S: `gtceu:${i.tier}_electric_piston`,R: 'minecraft:anvil'}).id(`start:shaped/${i.tier}_forge_hammer`);
    event.shaped(Item.of(`gtceu:${i.tier}_forming_press`), 
        ['CSC','IHI','CSC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`,S: `gtceu:${i.tier}_electric_piston`}).id(`start:shaped/${i.tier}_forming_press`);
    event.shaped(Item.of(`gtceu:${i.tier}_lathe`), 
        ['CIC','MHR','ICS'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, S: `gtceu:${i.tier}_electric_piston`, M: `gtceu:${i.tier}_electric_motor`, R: 'gtceu:tungsten_grinding_head'}).id(`start:shaped/${i.tier}_lathe`);
    event.shaped(Item.of(`gtceu:${i.tier}_scanner`), 
        ['IEI','CHC','ISI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, E: `gtceu:${i.tier}_emitter`, S: `gtceu:${i.tier}_sensor`}).id(`start:shaped/${i.tier}_scanner`);
    event.shaped(Item.of(`gtceu:${i.tier}_mixer`), 
        ['GRG','GMG','IHI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`, G: `gtceu:${i.glass}`, R: `gtceu:${i.main}_rotor`, M: `gtceu:${i.tier}_electric_motor`}).id(`start:shaped/${i.tier}_mixer`);
    event.shaped(Item.of(`gtceu:${i.tier}_ore_washer`), 
        ['RGR','IMI','CHC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, G: `gtceu:${i.glass}`, R: `gtceu:${i.main}_rotor`, M: `gtceu:${i.tier}_electric_motor`}).id(`start:shaped/${i.tier}_ore_washer`);
    event.shaped(Item.of(`gtceu:${i.tier}_packer`), 
        ['RIR','AHV','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, A: `gtceu:${i.tier}_robot_arm`, V: `gtceu:${i.tier}_conveyor_module`, R: 'minecraft:chest'}).id(`start:shaped/${i.tier}_packer`);
    event.shaped(Item.of(`gtceu:${i.tier}_polarizer`), 
        ['WGW','CHC','WGW'], 
        {H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`,G: `gtceu:${i.mag}_rod`,W: `gtceu:${i.cable}_octal_wire`}).id(`start:shaped/${i.tier}_polarizer`);
    event.shaped(Item.of(`gtceu:${i.tier}_laser_engraver`), 
        ['SES','IHI','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, E: `gtceu:${i.tier}_emitter`, S: `gtceu:${i.tier}_electric_piston`}).id(`start:shaped/${i.tier}_laser_engraver`);
    event.shaped(Item.of(`gtceu:${i.tier}_sifter`), 
        ['CFC','SHS','IFI'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, F: `gtceu:item_filter`, S: `gtceu:${i.tier}_electric_piston`}).id(`start:shaped/${i.tier}_sifter`);
    event.shaped(Item.of(`gtceu:${i.tier}_thermal_centrifuge`), 
        ['IMI','WHW','CMC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, M: `gtceu:${i.tier}_electric_motor`, W: `gtceu:${i.wire}_quadruple_wire`}).id(`start:shaped/${i.tier}_thermal_centrifuge`);
    event.shaped(Item.of(`gtceu:${i.tier}_wiremill`), 
        ['MCM','IHI','MCM'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, M: `gtceu:${i.tier}_electric_motor`}).id(`start:shaped/${i.tier}_wiremill`);
    event.shaped(Item.of(`gtceu:${i.tier}_circuit_assembler`), 
        ['AIE','VHV','CIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, A: `gtceu:${i.tier}_robot_arm`, V: `gtceu:${i.tier}_conveyor_module`, E: `gtceu:${i.tier}_emitter`}).id(`start:shaped/${i.tier}_circuit_assembler`);
    event.shaped(Item.of(`gtceu:${i.tier}_macerator`), 
        ['SMR','CCH','IIC'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, S: `gtceu:${i.tier}_electric_piston`, M: `gtceu:${i.tier}_electric_motor`, R: 'gtceu:tungsten_grinding_head'}).id(`start:shaped/${i.tier}_macerator`);
    event.shaped(Item.of(`gtceu:${i.tier}_gas_collector`), 
        ['BFB','UHU','BIB'], 
        {I: `#gtceu:circuits/${i.tier}`, H: `gtceu:${i.tier}_machine_hull`, U: `gtceu:${i.tier}_electric_pump`, F: 'gtceu:fluid_filter', B: 'minecraft:iron_bars'}).id(`start:shaped/${i.tier}_gas_collector`);
    event.shaped(Item.of(`gtceu:${i.tier}_rock_crusher`), 
        ['SMR','CHC','GGG'], 
        {H: `gtceu:${i.tier}_machine_hull`,C: `gtceu:${i.cable}_single_cable`, S: `gtceu:${i.tier}_electric_piston`, M: `gtceu:${i.tier}_electric_motor`, R: 'gtceu:tungsten_grinding_head',G: `gtceu:${i.glass}`}).id(`start:shaped/${i.tier}_rock_crusher`);
    event.shaped(Item.of(`gtceu:${i.tier}_muffler_hatch`), 
        ['HM','PR'], 
        {H: `gtceu:${i.tier}_machine_hull`, M: `gtceu:${i.tier}_electric_motor`, P: `gtceu:${i.pipe}_normal_fluid_pipe`, R: `gtceu:${i.main}_rotor`}).id(`start:shaped/${i.tier}_muffler_hatch`);
   
    const transformer = [{amps:'1a',cableThickness:'single'},{amps:'2a',cableThickness:'double'},{amps:'4a',cableThickness:'quadruple'},{amps:'16a',cableThickness:'hex'}]
    transformer.forEach(r => {
    event.shaped(Item.of(`gtceu:${i.tier}_transformer_${r.amps}`), 
        ['CLL','UH ','CLL'], 
        {H: `gtceu:${i.tier}_machine_hull`,L: `gtceu:${i.cable}_${r.cableThickness}_cable`,U: `gtceu:${i.cable1up}_${r.cableThickness}_cable`,C: `${i.chip}_chip`}).id(`start:shaped/${i.tier}_transformer_${r.amps}`);
    });

    const buffer = [{size:'4x',cbleThickness:'quadruple'},{size:'8x',cbleThickness:'octal'},{size:'16x',cbleThickness:'hex'}]
    buffer.forEach(b=>{
    event.shaped(Item.of(`gtceu:${i.tier}_battery_buffer_${b.size}`), 
        ['   ','WCW','WHW'], 
        {H: `gtceu:${i.tier}_machine_hull`,W: `gtceu:${i.wire}_${b.cbleThickness}_wire`, C: 'minecraft:chest'}).id(`start:shaped/${i.tier}_battery_buffer_${b.size}`);
    });

    event.shaped(Item.of(`gtceu:${i.tier}_charger_4x`), 
        ['WRW','WHW','CIC'], 
        {H: `gtceu:${i.tier}_machine_hull`,W: `gtceu:${i.wire}_quadruple_wire`, R: 'minecraft:chest',I: `#gtceu:circuits/${i.tier}`,C: `gtceu:${i.cable}_single_cable`}).id(`start:shaped/${i.tier}_charger_4x`);

    const energyIO = [{type:'input',powerTr:'single_cable',math4a:'4',laserType:'target',laserPart:'sensor'},{type:'output',powerTr:'spring',math4a:'1',laserType:'source',laserPart:'emitter'}]
    energyIO.forEach(e=>{
    event.recipes.gtceu.assembly_line(`${i.tier}_energy_${e.type}_hatch`)
        .itemInputs(`gtceu:${i.tier}_machine_hull`,`4x gtceu:${i.cable}_${e.powerTr}`,`2x ${i.chip}_chip`,`#gtceu:circuits/${i.tier}`,`2x kubejs:${i.tier}_voltage_coil`)
        .inputFluids(`gtceu:sodium_potassium ${i.math*4000+12000}`, `gtceu:indium_tin_lead_cadmium_soldering_alloy ${1440*(2**i.math)}`)
        .itemOutputs(`gtceu:${i.tier}_energy_${e.type}_hatch`)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:${i.tier1under}_energy_${e.type}_hatch`))
                .EUt(122880*(4**i.math))
                .CWUt(i.math*64+64))
        .duration(800)
        .EUt(491520*(4**i.math));
    event.recipes.gtceu.assembler(`${i.tier}_energy_${e.type}_hatch_4a`)
        .itemInputs(`gtceu:${i.tier}_energy_${e.type}_hatch`,`2x gtceu:${i.cable}_quadruple_wire`,`2x gtceu:${i.main}_plate`)
        .itemOutputs(`gtceu:${i.tier}_energy_${e.type}_hatch_4a`)
        .duration(100)
        .EUt(122880*e.math4a*(4**i.math));
    event.recipes.gtceu.assembler(`${i.tier}_energy_${e.type}_hatch_16a`)
        .itemInputs(`gtceu:${i.tier}_transformer_1a`,`gtceu:${i.tier}_energy_${e.type}_hatch_4a`,`2x gtceu:${i.cable}_octal_wire`,`4x gtceu:${i.main}_plate`)
        .itemOutputs(`gtceu:${i.tier}_energy_${e.type}_hatch_16a`)
        .duration(200)
        .EUt(491520*(4**i.math));
    event.recipes.gtceu.assembler(`${i.tier}_substation_${e.type}_hatch_64a`)
        .itemInputs(`gtceu:${i.tier}_transformer_16a`,`gtceu:${i.tier}_energy_${e.type}_hatch_16a`,`2x gtceu:${i.cable}_hex_wire`,`6x gtceu:${i.main}_plate`)
        .itemOutputs(`gtceu:${i.tier}_substation_${e.type}_hatch_64a`)
        .duration(400)
        .EUt(491520*(4**i.math));
    event.recipes.gtceu.assembler(`${i.tier}_256a_laser_${e.laserType}_hatch`)
        .itemInputs(`gtceu:${i.tier}_machine_hull`,'gtceu:diamond_lens',`gtceu:${i.tier}_${e.laserPart}`,`gtceu:${i.tier}_electric_pump`,`4x gtceu:${i.cable}_single_cable`)
        .itemOutputs(`gtceu:${i.tier}_256a_laser_${e.laserType}_hatch`)
        .duration(300) .circuit(1)
        .EUt(491520*(4**i.math));
    event.recipes.gtceu.assembler(`${i.tier}_1024a_laser_${e.laserType}_hatch`)
        .itemInputs(`gtceu:${i.tier}_machine_hull`,'2x gtceu:diamond_lens',`2x gtceu:${i.tier}_${e.laserPart}`,`2x gtceu:${i.tier}_electric_pump`,`4x gtceu:${i.cable}_double_cable`)
        .itemOutputs(`gtceu:${i.tier}_1024a_laser_${e.laserType}_hatch`)
        .duration(600) .circuit(2)
        .EUt(491520*(4**i.math));
    event.recipes.gtceu.assembler(`${i.tier}_4096a_laser_${e.laserType}_hatch`)
        .itemInputs(`gtceu:${i.tier}_machine_hull`,'4x gtceu:diamond_lens',`4x gtceu:${i.tier}_${e.laserPart}`,`4x gtceu:${i.tier}_electric_pump`,`4x gtceu:${i.cable}_quadruple_cable`)
        .itemOutputs(`gtceu:${i.tier}_4096a_laser_${e.laserType}_hatch`)
        .duration(1200) .circuit(3)
        .EUt(491520*(4**i.math));
    });
    });
    
    //UHV Regular IO, No UEV or higher as they all scale the same as UHV as of current

    const io = [{typeIO:'input',circ:'1'},{typeIO:'output',circ:'2'}]
    io.forEach(n=>{
    event.recipes.gtceu.assembler(`uhv_${n.typeIO}_bus`)
        .itemInputs(`gtceu:uhv_machine_hull`, `gtceu:mv_super_chest`)
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .itemOutputs(`gtceu:uhv_${n.typeIO}_bus`)
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(n.circ);
    event.recipes.gtceu.assembler(`uhv_${n.typeIO}_hatch`)
        .itemInputs(`gtceu:uhv_machine_hull`, `gtceu:mv_super_tank`)
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .itemOutputs(`gtceu:uhv_${n.typeIO}_hatch`)
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(n.circ);
    event.recipes.gtceu.assembler(`uhv_dual_${n.typeIO}_hatch`)
        .itemInputs(`gtceu:uhv_${n.typeIO}_bus`,`gtceu:uhv_${n.typeIO}_hatch`,'gtceu:zapolgium_nonuple_fluid_pipe', '3x gtceu:neutronium_frame')
        .inputFluids('gtceu:polyether_ether_ketone 864')
        .itemOutputs(`gtceu:uhv_dual_${n.typeIO}_hatch`)
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(n.circ);
    });

    const hatchScale=[{type:'4x',pipe:'quadruple'},{type:'9x',pipe:'nonuple'}]

    hatchScale.forEach(h=>{
    event.shaped(Item.of(`gtceu:uhv_input_hatch_${h.type}`), 
        ['P','H'], 
        {H: `gtceu:uhv_input_hatch`, P: `gtceu:zapolgium_${h.pipe}_fluid_pipe`}).id(`start:shaped/uhv_input_hatch_${h.type}`);
    event.shaped(Item.of(`gtceu:uhv_input_hatch_${h.type}`), 
        ['S','H'], 
        {S: `#forge:tools/screwdrivers`, H: `gtceu:uhv_output_hatch_${h.type}`}).id(`start:shaped/uhv_input_hatch_${h.type}_flip`);
    event.shaped(Item.of(`gtceu:uhv_output_hatch_${h.type}`), 
        ['H','P'], 
        {H: `gtceu:uhv_output_hatch`, P: `gtceu:zapolgium_${h.pipe}_fluid_pipe`}).id(`start:shaped/uhv_output_hatch_${h.type}`);
    event.shaped(Item.of(`gtceu:uhv_output_hatch_${h.type}`), 
        ['S','H'], 
        {S: `#forge:tools/screwdrivers`, H: `gtceu:uhv_input_hatch_${h.type}`}).id(`start:shaped/uhv_output_hatch_${h.type}_flip`);
    });
    event.shaped(Item.of('gtceu:uhv_dual_input_hatch'), 
        ['S','H'], 
        {S: '#forge:tools/screwdrivers', H: 'gtceu:uhv_dual_output_hatch'}).id('start:shaped/uhv_dual_input_hatch_flip');
    event.shaped(Item.of('gtceu:uhv_dual_output_hatch'), 
        ['S','H'], 
        {S: '#forge:tools/screwdrivers', H: 'gtceu:uhv_dual_input_hatch'}).id('start:shaped/uhv_dual_output_hatch_flip');
    event.shaped(Item.of('gtceu:uhv_input_hatch'), 
        ['S','H'], 
        {S: '#forge:tools/screwdrivers', H: 'gtceu:uhv_output_hatch'}).id('start:shaped/uhv_input_hatch');
    event.shaped(Item.of('gtceu:uhv_output_hatch'), 
        ['S','H'], 
        {S: '#forge:tools/screwdrivers', H: 'gtceu:uhv_input_hatch'}).id('start:shaped/uhv_output_hatch');
    event.shaped(Item.of('gtceu:uhv_input_bus'), 
        ['S','H'], 
        {S: '#forge:tools/screwdrivers', H: 'gtceu:uhv_output_bus'}).id('start:shaped/uhv_input_bus');
    event.shaped(Item.of('gtceu:uhv_output_bus'), 
        ['S','H'], 
        {S: '#forge:tools/screwdrivers', H: 'gtceu:uhv_input_bus'}).id('start:shaped/uhv_output_bus');

    //Parallel Hatches
    const ParaTier = [
        {tier: 'uhv', tier1up: 'uev', cable: 'europium', pwr: 1, liquid: 'naquadria', chip: 'uepic'},
        {tier: 'uev', tier1up: 'uiv', cable: 'cerium_tritelluride', pwr: 4, liquid: 'isovol', chip: 'uepic'},
        {tier: 'uiv', tier1up: 'uxv', cable: 'cerium_tritelluride', pwr: 16, liquid: 'calamatium', chip: 'uipic'}];

    ParaTier.forEach(t=>{
        event.shaped(Item.of(`start_core:${t.tier}_parallel_hatch`),
        ['SCE','CHC','BCB'], 
        {S: `gtceu:${t.tier}_sensor`, E: `gtceu:${t.tier}_emitter`, C: `#gtceu:circuits/${t.tier1up}`, H: `gtceu:${t.tier}_machine_hull`, B: `gtceu:${t.cable}_double_cable`}).id(`start:shaped/${t.tier}_parallel_hatch`);
    
        event.recipes.gtceu.assembler(`${t.tier}_absolute_parallel_hatch`)
            .itemInputs(
                `start_core:${t.tier}_parallel_hatch`,
                `4x gtceu:${t.tier}_sensor`, 
                `4x gtceu:${t.tier}_emitter`,
                `2x #gtceu:circuits/${t.tier1up}`,
                `4x kubejs:${t.chip}_chip`)
            .inputFluids(`gtceu:${t.liquid} 576`)
            .itemOutputs(`start_core:${t.tier}_absolute_parallel_hatch`)
            .duration(320)
            .EUt(GTValues.VA[GTValues.UHV]*t.pwr)    
    });

});
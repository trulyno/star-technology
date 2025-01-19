ServerEvents.recipes(event => {

    event.remove({output: /gtceu:uhv.*/})
    event.remove({output: /gtceu:uev.*/})
    event.remove({output: /gtceu:uiv.*/})
    event.remove({output: /gtceu:uxv.*/})
    event.remove({output: /gtceu:opv.*/})

inputTypes('uhv', 'uv', 'neutronium', 'europium', 'zirconium_selenide_diiodide','fusion_glass', 'polyether_ether_ketone', 'cerium_tritelluride', 'pure_netherite', 'zapolgium','neutronium','iron_selenide_over_strontium_titanium_oxide','uhpic','1')

function inputTypes(tier,tier1under,main,cable,wire,glass,plastic,cable1up,mag,pipe,buzz,elctrlyzWire,chip,math){

//Machines
    event.shaped(Item.of(`gtceu:${tier}_machine_casing`), 
        ['PPP','PWP','PPP'], 
        {P: `gtceu:${main}_plate`,W: '#forge:tools/wrenches'});
    event.recipes.gtceu.assembler(`${tier}_machine_casing`) 
        .itemInputs(`8x gtceu:${main}_plate`) 
        .circuit(8) 
        .itemOutputs(`gtceu:${tier}_machine_casing`) 
        .duration(50) 
        .EUt(16);
    event.shaped(Item.of(`gtceu:${tier}_machine_hull`),
        ['   ','LPL','CMC'],
        {P: `gtceu:${main}_plate`,L: `gtceu:${plastic}_plate`,C: `gtceu:${cable}_single_cable`, M: `gtceu:${tier}_machine_casing`});
    event.recipes.gtceu.assembler(`${tier}_machine_hull`) 
        .itemInputs(`gtceu:${tier}_machine_casing`, `2x gtceu:${cable}_single_cable`) 
        .inputFluids(`gtceu:${plastic} 288`) 
        .itemOutputs(`gtceu:${tier}_machine_hull`) 
        .duration(50) 
        .EUt(16);
    event.shaped(Item.of(`gtceu:${tier}_electric_furnace`),
        ['IWI','WHW','CWC'], 
        {I: `#gtceu:circuits/${tier}`, W: `gtceu:${wire}_double_wire`, C: `gtceu:${cable}_single_cable`, H: `gtceu:${tier}_machine_hull`});
    event.shaped(Item.of(`gtceu:${tier}_alloy_smelter`), 
        ['IWI','WHW','CWC'], 
        {I: `#gtceu:circuits/${tier}`, W: `gtceu:${wire}_quadruple_wire`, C: `gtceu:${cable}_single_cable`, H: `gtceu:${tier}_machine_hull`});
    event.shaped(Item.of(`gtceu:${tier}_arc_furnace`), 
        ['CGC','IHI','PPP'], 
        {I: `#gtceu:circuits/${tier}`, G: `gtceu:graphite_dust`, C: `gtceu:${cable}_quadruple_cable`, H: `gtceu:${tier}_machine_hull`, P: `gtceu:${main}_plate`});
    event.shaped(Item.of(`gtceu:${tier}_assembler`), 
        ['AIA','VHV','CIC'], 
        {I: `#gtceu:circuits/${tier}`, C: `gtceu:${cable}_single_cable`, H: `gtceu:${tier}_machine_hull`, A: `gtceu:${tier}_robot_arm`, V: `gtceu:${tier}_conveyor_module`});
    event.shaped(Item.of(`gtceu:${tier}_autoclave`), 
        ['PGP','PHP','IUI'], 
        {I: `#gtceu:circuits/${tier}`, G: `gtceu:${glass}`, H: `gtceu:${tier}_machine_hull`,P: `gtceu:${main}_plate`, U: `gtceu:${tier}_electric_pump`});
    event.shaped(Item.of(`gtceu:${tier}_bender`), 
        ['SPS','IHI','MCM'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`, C: `gtceu:${cable}_single_cable`,P: `gtceu:${main}_plate`, M: `gtceu:${tier}_electric_motor`, S: `gtceu:${tier}_electric_piston`});
    event.shaped(Item.of(`gtceu:${tier}_brewery`), 
        ['GUG','CHC','ISI'], 
        {G: `gtceu:${glass}`, I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`, C: `gtceu:${cable}_single_cable`, U: `gtceu:${tier}_electric_pump`, S: `gtceu:${wire}_spring`});
    event.shaped(Item.of(`gtceu:${tier}_canner`), 
        ['CUC','IHI','GGG'], 
        {G: `gtceu:${glass}`, I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`, C: `gtceu:${cable}_single_cable`, U: `gtceu:${tier}_electric_pump`});
    event.shaped(Item.of(`gtceu:${tier}_centrifuge`), 
        ['IMI','CHC','IMI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, M: `gtceu:${tier}_electric_motor`});
    event.shaped(Item.of(`gtceu:${tier}_chemical_bath`), 
        ['VGC','UGV','IHI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, U: `gtceu:${tier}_electric_pump`, V: `gtceu:${tier}_conveyor_module`, G: `gtceu:${glass}`});
    event.shaped(Item.of(`gtceu:${tier}_chemical_reactor`), 
        ['ERE','CMC','IHI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, E: `gtceu:${plastic}_large_fluid_pipe`, R: `gtceu:${main}_rotor`, M: `gtceu:${tier}_electric_motor`});
    event.shaped(Item.of(`gtceu:${tier}_compressor`), 
        [' I ','SHS','CIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, S: `gtceu:${tier}_electric_piston`});
    event.shaped(Item.of(`gtceu:${tier}_cutter`), 
        ['CIG','VHB','ICM'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, V: `gtceu:${tier}_conveyor_module`, M: `gtceu:${tier}_electric_motor`, G: `gtceu:${glass}`, B: `gtceu:${buzz}_buzz_saw_blade`});
    event.shaped(Item.of(`gtceu:${tier}_distillery`), 
        ['GSG','IHI','CUC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, G: `gtceu:${glass}`, S: `gtceu:${wire}_spring`, U: `gtceu:${tier}_electric_pump`});
    event.shaped(Item.of(`gtceu:${tier}_electrolyzer`), 
        ['WGW','WHW','ICI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, G: `gtceu:${glass}`, W: `gtceu:${elctrlyzWire}_single_wire`});
    event.shaped(Item.of(`gtceu:${tier}_electromagnetic_separator`), 
        ['VCW','CHG','ICW'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, G: `gtceu:${mag}_rod`, W: `gtceu:${cable}_octal_wire`, V: `gtceu:${tier}_conveyor_module`});
    event.shaped(Item.of(`gtceu:${tier}_extractor`), 
        ['GIG','SHU','CIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, G: `gtceu:${glass}`, U: `gtceu:${tier}_electric_pump`, S: `gtceu:${tier}_electric_piston`});
    event.shaped(Item.of(`gtceu:${tier}_extruder`), 
        ['WWI','SHE','WWI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,S: `gtceu:${tier}_electric_piston`, W: `gtceu:${wire}_quadruple_wire`, E: `gtceu:${pipe}_normal_fluid_pipe`});
    event.shaped(Item.of(`gtceu:${tier}_fermenter`), 
        ['CUC','GHG','CIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, G: `gtceu:${glass}`, U: `gtceu:${tier}_electric_pump`});
    event.shaped(Item.of(`gtceu:${tier}_fluid_heater`), 
        ['WGW','UHU','CIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, G: `gtceu:${glass}`, U: `gtceu:${tier}_electric_pump`, W: `gtceu:${wire}_quadruple_wire`});
    event.shaped(Item.of(`gtceu:${tier}_fluid_solidifier`), 
        ['UGU','CHC','IRI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`,G: `gtceu:${glass}`,R: 'minecraft:chest'});
    event.shaped(Item.of(`gtceu:${tier}_forge_hammer`), 
        ['CSC','IHI','CRC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`,S: `gtceu:${tier}_electric_piston`,R: 'minecraft:anvil'});
    event.shaped(Item.of(`gtceu:${tier}_forming_press`), 
        ['CSC','IHI','CSC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`,S: `gtceu:${tier}_electric_piston`});
    event.shaped(Item.of(`gtceu:${tier}_lathe`), 
        ['CIC','MHR','ICS'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, S: `gtceu:${tier}_electric_piston`, M: `gtceu:${tier}_electric_motor`, R: 'gtceu:tungsten_grinding_head'});
    event.shaped(Item.of(`gtceu:${tier}_scanner`), 
        ['IEI','CHC','ISI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, E: `gtceu:${tier}_emitter`, S: `gtceu:${tier}_sensor`});
    event.shaped(Item.of(`gtceu:${tier}_mixer`), 
        ['GRG','GMG','IHI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`, G: `gtceu:${glass}`, R: `gtceu:${main}_rotor`, M: `gtceu:${tier}_electric_motor`});
    event.shaped(Item.of(`gtceu:${tier}_ore_washer`), 
        ['RGR','IMI','CHC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, G: `gtceu:${glass}`, R: `gtceu:${main}_rotor`, M: `gtceu:${tier}_electric_motor`});
    event.shaped(Item.of(`gtceu:${tier}_packer`), 
        ['RIR','AHV','CIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, A: `gtceu:${tier}_robot_arm`, V: `gtceu:${tier}_conveyor_module`, R: 'minecraft:chest'});
    event.shaped(Item.of(`gtceu:${tier}_polarizer`), 
        ['WGW','CHC','WGW'], 
        {H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`,G: `gtceu:${mag}_rod`,W: `gtceu:${cable}_octal_wire`});
    event.shaped(Item.of(`gtceu:${tier}_laser_engraver`), 
        ['SES','IHI','CIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, E: `gtceu:${tier}_emitter`, S: `gtceu:${tier}_electric_piston`});
    event.shaped(Item.of(`gtceu:${tier}_sifter`), 
        ['CFC','SHS','IFI'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, F: `gtceu:item_filter`, S: `gtceu:${tier}_electric_piston`});
    event.shaped(Item.of(`gtceu:${tier}_thermal_centrifuge`), 
        ['IMI','WHW','CMC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, M: `gtceu:${tier}_electric_motor`, W: `gtceu:${wire}_quadruple_wire`});
    event.shaped(Item.of(`gtceu:${tier}_wiremill`), 
        ['MCM','IHI','MCM'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, M: `gtceu:${tier}_electric_motor`});
    event.shaped(Item.of(`gtceu:${tier}_circuit_assembler`), 
        ['AIE','VHV','CIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, A: `gtceu:${tier}_robot_arm`, V: `gtceu:${tier}_conveyor_module`, E: `gtceu:${tier}_emitter`});
    event.shaped(Item.of(`gtceu:${tier}_macerator`), 
        ['SMR','CCH','IIC'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, S: `gtceu:${tier}_electric_piston`, M: `gtceu:${tier}_electric_motor`, R: 'gtceu:tungsten_grinding_head'});
    event.shaped(Item.of(`gtceu:${tier}_gas_collector`), 
        ['BFB','UHU','BIB'], 
        {I: `#gtceu:circuits/${tier}`, H: `gtceu:${tier}_machine_hull`, U: `gtceu:${tier}_electric_pump`, F: 'gtceu:fluid_filter', B: 'minecraft:iron_bars'});
    event.shaped(Item.of(`gtceu:${tier}_rock_crusher`), 
        ['SMR','CHC','GGG'], 
        {H: `gtceu:${tier}_machine_hull`,C: `gtceu:${cable}_single_cable`, S: `gtceu:${tier}_electric_piston`, M: `gtceu:${tier}_electric_motor`, R: 'gtceu:tungsten_grinding_head',G: `gtceu:${glass}`});
    event.shaped(Item.of(`gtceu:${tier}_muffler_hatch`), 
        ['HM','PR'], 
        {H: `gtceu:${tier}_machine_hull`, M: `gtceu:${tier}_electric_motor`, P: `gtceu:${pipe}_normal_fluid_pipe`, R: `gtceu:${main}_rotor`});

//Energy
    transformer('1a','single'),transformer('2a','double'),transformer('4a','quadruple'),transformer('16a','hex')
    function transformer(amps,cableThickness){
        event.shaped(Item.of(`gtceu:${tier}_transformer_${amps}`), ['CLL','UH ','CLL'], {H: `gtceu:${tier}_machine_hull`,L: `gtceu:${cable}_${cableThickness}_cable`,U: `gtceu:${cable1up}_${cableThickness}_cable`,C: `gtceu:${chip}_chip`});}

    buffer('4x','quadruple'),buffer('8x','octal'),buffer('16x','hex')
    function buffer(size,cbleThickness){
        event.shaped(Item.of(`gtceu:${tier}_battery_buffer_${size}`), ['   ','WCW','WHW'], {H: `gtceu:${tier}_machine_hull`,W: `gtceu:${wire}_${cbleThickness}_wire`, C: 'minecraft:chest'});}

    event.shaped(Item.of(`gtceu:${tier}_charger_4x`), ['WRW','WHW','CIC'], {H: `gtceu:${tier}_machine_hull`,W: `gtceu:${wire}_quadruple_wire`, R: 'minecraft:chest',I: `#gtceu:circuits/${tier}`,C: `gtceu:${cable}_single_cable`});

    energyIO('input','single_cable','4','target','sensor'),energyIO('output','spring','1','source','emitter')
    function energyIO(type,powerTr,math4a,laserType,laserPart){
    event.recipes.gtceu.assembly_line(`${tier}_energy_${type}_hatch`)
        .itemInputs(`gtceu:${tier}_machine_hull`,`4x gtceu:${cable}_${powerTr}`,`2x gtceu:${chip}_chip`,`#gtceu:circuits/${tier}`,`2x kubejs:${tier}_voltage_coil`)
        .inputFluids(`gtceu:sodium_potassium ${math*4000+12000}`, `gtceu:indium_tin_lead_cadmium_soldering_alloy ${1440*(2**math)}`)
        .itemOutputs(`gtceu:${tier}_energy_${type}_hatch`)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:${tier1under}_energy_${type}_hatch`))
                .EUt(122880*(4**math))
                .CWUt(math*32+96))
        .duration(800)
        .EUt(491520*(4**math));
    event.recipes.gtceu.assembler(`${tier}_energy_${type}_hatch_4a`)
        .itemInputs(`gtceu:${tier}_energy_${type}_hatch`,`2x gtceu:${cable}_quadruple_wire`,`2x gtceu:${main}_plate`)
        .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_4a`)
        .duration(100)
        .EUt(122880*math4a*(4**math));
    event.recipes.gtceu.assembler(`${tier}_energy_${type}_hatch_16a`)
        .itemInputs(`gtceu:${tier}_transformer_1a`,`gtceu:${tier}_energy_${type}_hatch_4a`,`2x gtceu:${cable}_octal_wire`,`4x gtceu:${main}_plate`)
        .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_16a`)
        .duration(200)
        .EUt(491520*(4**math));
    event.recipes.gtceu.assembler(`${tier}_substation_${type}_hatch_64a`)
        .itemInputs(`gtceu:${tier}_transformer_16a`,`gtceu:${tier}_energy_${type}_hatch_16a`,`2x gtceu:${cable}_hex_wire`,`6x gtceu:${main}_plate`)
        .itemOutputs(`gtceu:${tier}_substation_${type}_hatch_64a`)
        .duration(400)
        .EUt(491520*(4**math));
    event.recipes.gtceu.assembler(`${tier}_256a_laser_${laserType}_hatch`)
        .itemInputs(`gtceu:${tier}_machine_hull`,'gtceu:diamond_lens',`gtceu:${tier}_${laserPart}`,`gtceu:${tier}_electric_pump`,`4x gtceu:${cable}_single_cable`)
        .itemOutputs(`gtceu:${tier}_256a_laser_${laserType}_hatch`)
        .duration(300) .circuit(1)
        .EUt(491520*(4**math));
    event.recipes.gtceu.assembler(`${tier}_1024a_laser_${laserType}_hatch`)
        .itemInputs(`gtceu:${tier}_machine_hull`,'2x gtceu:diamond_lens',`2x gtceu:${tier}_${laserPart}`,`2x gtceu:${tier}_electric_pump`,`4x gtceu:${cable}_double_cable`)
        .itemOutputs(`gtceu:${tier}_1024a_laser_${laserType}_hatch`)
        .duration(600) .circuit(2)
        .EUt(491520*(4**math));
    event.recipes.gtceu.assembler(`${tier}_4096a_laser_${laserType}_hatch`)
        .itemInputs(`gtceu:${tier}_machine_hull`,'4x gtceu:diamond_lens',`4x gtceu:${tier}_${laserPart}`,`4x gtceu:${tier}_electric_pump`,`4x gtceu:${cable}_quadruple_cable`)
        .itemOutputs(`gtceu:${tier}_4096a_laser_${laserType}_hatch`)
        .duration(1200) .circuit(3)
        .EUt(491520*(4**math));
    }
}

//UHV Regular IO

    io('input','1'),io('output','2')
    function io(typeIO,circ){
    event.recipes.gtceu.assembler(`uhv_${typeIO}_bus`)
        .itemInputs(`gtceu:uhv_machine_hull`, `gtceu:mv_super_chest`)
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .itemOutputs(`gtceu:uhv_${typeIO}_bus`) .circuit(circ)
    event.recipes.gtceu.assembler(`uhv_${typeIO}_hatch`)
        .itemInputs(`gtceu:uhv_machine_hull`, `gtceu:mv_super_tank`)
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .itemOutputs(`gtceu:uhv_${typeIO}_hatch`) .circuit(circ)
    event.recipes.gtceu.assembler(`uhv_dual_${typeIO}_hatch`)
        .itemInputs(`gtceu:uhv_${typeIO}_bus`,`gtceu:uhv_${typeIO}_hatch`,'gtceu:zapolgium_nonuple_fluid_pipe', '3x gtceu:zapolgium_frame')
        .inputFluids('gtceu:polyether_ether_ketone 864')
        .itemOutputs(`gtceu:uhv_dual_${typeIO}_hatch`) .circuit(circ)
    }
    event.shaped(Item.of(`gtceu:uhv_input_hatch_4x`), 
        [' P ',' H ','   '], 
        {H: `gtceu:uhv_machine_hull`, P: `gtceu:zapolgium_quadruple_fluid_pipe`});
    event.shaped(Item.of(`gtceu:uhv_input_hatch_9x`), 
        [' P ',' H ','   '], 
        {H: `gtceu:uhv_machine_hull`, P: `gtceu:zapolgium_nonuple_fluid_pipe`});
    event.shaped(Item.of(`gtceu:uhv_output_hatch_4x`), 
        [' H ',' P ','   '], 
        {H: `gtceu:uhv_machine_hull`, P: `gtceu:zapolgium_quadruple_fluid_pipe`});
    event.shaped(Item.of(`gtceu:uhv_output_hatch_9x`), 
        [' H ',' P ','   '], 
        {H: `gtceu:uhv_machine_hull`, P: `gtceu:zapolgium_nonuple_fluid_pipe`});
});
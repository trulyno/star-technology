// packmode: hard

ServerEvents.recipes(event => {

    event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:iron_ingot', 'gtceu:iron_plate');
	event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:smooth_stone', 'kubejs:reinforced_stone_bricks');
    event.remove({id: 'gtceu:shapeless/potin_dust'});
    const noSmeltDustToIngot = (output) => {
        event.remove({id: `gtceu:smelting/smelt_dust_${output}_to_ingot`});

    }
    noSmeltDustToIngot('potin');
    noSmeltDustToIngot('red_alloy')

    const CreateMixing = (output,inputs,heat) => {
        event.recipes.create.mixing(output, inputs).heatRequirement(`${heat}`);
    }
    CreateMixing('2x gtceu:pig_iron_dust', ['2x gtceu:iron_dust', 'gtceu:charcoal_dust'], 'lowheated');
    CreateMixing(Fluid.of('gtceu:cast_iron', 288), ['2x gtceu:crude_cast_iron_dust', 'gtceu:tiny_bismuth_dust', '2x gtceu:tiny_copper_dust'], 'superheated');
    CreateMixing('9x gtceu:potin_dust', ['6x gtceu:copper_dust','2x gtceu:tin_dust', 'gtceu:lead_dust'], 'lowheated');
    CreateMixing(Fluid.of('gtceu:crude_wrought_iron', 288), ['2x gtceu:pig_iron_ingot', 'gtceu:charcoal_dust'], 'superheated');
    CreateMixing(Fluid.of('gtceu:red_alloy', 720), ['gtceu:copper_dust', '4x minecraft:redstone'], 'superheated');

    ['brass', 'bronze', 'pig_iron'].forEach(dust => {
		event
			.blasting(`gtceu:${dust}_ingot`, `gtceu:${dust}_dust`)
			.id(`kubejs:${dust}_dust_blasting_manual_only`);
	});

    event.remove({output: 'gtceu:primitive_blast_furnace'});
    event.recipes.create.mechanical_crafting('gtceu:primitive_blast_furnace', [
		'BPB',
		'RFR',
		'SBS'
	], {
		R: 'gtceu:iron_rod',
		S: 'gtceu:iron_screw',
		P: 'gtceu:iron_plate',
		B: 'gtceu:firebricks',
		F: 'minecraft:blast_furnace'
	});

    event.recipes.gtceu.assembler('reinforced_blast_furnace')
        .itemInputs('gtceu:primitive_blast_furnace', '4x dustrial_decor:cinder_bricks', '6x gtceu:double_wrought_iron_plate', 
            '2x gtceu:cast_iron_gear', 'createlowheated:basic_burner', '8x gtceu:wrought_iron_screw')
        .inputFluids('gtceu:concrete 3000')
        .itemOutputs('gtceu:reinforced_blast_furnace')
        .duration(300)
        .EUt(6);

    event.remove({type: 'gtceu:primitive_blast_furnace'});
    
    const PrimBlasting = (input,output,Duration,FuelID,FuelType,ashType,FuelIDBlock,FuelTypeBlock,inputType) => {
        if(inputType == 'dust')
        event.recipes.gtceu.primitive_blast_furnace(`${output}_${FuelType}`)
            .itemInputs(input+'_dust',`${FuelID}:${FuelType}`)
            .itemOutputs(output+'_ingot',`gtceu:tiny_${ashType}ash_dust`)
            .duration(Duration);
        else        
        event.recipes.gtceu.primitive_blast_furnace(`${output}_${FuelType}`)
            .itemInputs(input+'_ingot',`${FuelID}:${FuelType}`)
            .itemOutputs(output+'_ingot',`gtceu:tiny_${ashType}ash_dust`)
            .duration(Duration);
        if(inputType == 'ingot')
        event.recipes.gtceu.primitive_blast_furnace(`${output}_block_${FuelTypeBlock}`)
            .itemInputs(input+'_block',`${FuelIDBlock}:${FuelTypeBlock}`)
            .itemOutputs(output+'_block',`gtceu:${ashType}ash_dust`)
            .duration(9 * Duration);
    }    
    PrimBlasting('gtceu:pig_iron','gtceu:crude_cast_iron',400,'#minecraft','coals','','#gtceu','coal_blocks','ingot');
    PrimBlasting('gtceu:pig_iron','gtceu:wrought_iron',480,'gtceu','coke_gem','dark_','gtceu','coke_block','ingot');
    PrimBlasting('gtceu:crude_wrought_iron','gtceu:wrought_iron',600,'#minecraft','coals','','#gtceu','coal_blocks','ingot');
    PrimBlasting('gtceu:potin','gtceu:potin',240,'#minecraft','coals','','#gtceu','coal_blocks','dust');
    PrimBlasting('gtceu:potin','gtceu:potin',160,'gtceu','coke_gem','dark_','gtceu','coke_block','dust');

    const CoalType = (id,type,ash,blockID,blockType,DurationMultiplier,amount) => {
    event.recipes.gtceu.reinforced_blast_furnace(`steel_ingot_${type}`)
        .itemInputs('gtceu:wrought_iron_ingot', `${amount}x ${id}:${type}`)
        .itemOutputs('gtceu:steel_ingot', `${amount}x gtceu:tiny_${ash}ash_dust`)
        .duration(600 * DurationMultiplier);
    event.recipes.gtceu.reinforced_blast_furnace(`steel_block_${blockType}`)
        .itemInputs('gtceu:wrought_iron_block', `${amount}x ${blockID}:${blockType}`)
        .itemOutputs('gtceu:steel_block', `${amount}x gtceu:${ash}ash_dust`)
        .duration(9 * 600 * DurationMultiplier);
    }
    CoalType('#minecraft','coals','','#gtceu','coal_blocks',1.2,2);
    CoalType('gtceu','coke_gem','dark_','gtceu','coke_block',1,1);

});
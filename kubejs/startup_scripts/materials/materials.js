// Ignore this
const $IngotProperty = global.IngotProperty;
const $DustProperty = global.DustProperty;
const $FluidProperty = global.FluidProperty;
const $BlastProperty = global.BlastProperty;
const $FluidPipeProperties = global.FluidPipeProperties;

// Icon Sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

// Useful functions
const V = (voltage) => {
    return global.v[voltage];
}

const VA = (voltage) => {
    return global.va[voltage];
}

const VH = (voltage) => {
    return global.vh[voltage];
}

const VHA = (voltage) => {
    return global.vha[voltage];
}

// Moving all of this ( ^ ) to helpers is ideal

/*
    Materials are in-game items or fluids. They can be dusts, ingots, gems, fluids and all their derivatives.
    To make a new material(NOTE: to add a material that is present on the periodic table, but 
        it doesn't have any in-game items/fluids, look below for how to do it),
    write an `event.create()` call in the bellow registering function.
    Write inside the parantheses the name of the material inside '' or "".
    You can change the properties of the material by adding any combination of the following calls:
        .ingot() -> this will make the material have both an ingot and dust form.
        .dust() -> this will make the material have a dust form. Don't use this together with .dust().
        .gem() -> this will make the material have both a gem form and a dust form. Don't use thos together with .dust() or .ingot()
        .fluid() -> this will make the material have a fluid form. 
        .gas() -> this will make the material have a gas(fluid) form with gas properties. 
        .plasma() -> this will make the material have a plasma(fluid) form with plasma properties.
        .polymer() -> this will make the material have a dust form with polymer properties.
            For .ingot(), .dust() and .gem(), optionally you can put inside the parantheses any of these sets of parameters:
                1. harvest level (ex. .ingot(2) will make the material have the harvest level of iron tools)
                2. harvest level, burn time (2x. ingot(2, 2000) will make the material have the harvest level of iron tools and will burn in furnaces as fuel for 2000 ticks or 100 seconds).
        .burnTime(burn time in ticks) -> this will turn the material into a furnace fuel.
        .fluidBurnTime(burn time in ticks) -> how long the fluid of the material will burn.
        .color(color code) -> gives the material a color. The colo must be providen in the following form: 0xNNNNNN, where N are digits.
            To chose a color for your material, you can checkout https://www.w3schools.com/colors/colors_picker.asp
            After you select a color with the above tool, copy the 6 digits that follow the # under the color preview.
        .secondaryColor(color code) -> gives the material a secondary color. If this is not being called, the secondary value will default to white(0xffffff).
        .iconSet(set) -> gives the material an icon set. View line 9 to see the posible icon sets.
        .components(component1, component2, ...) -> describes the composition. The components are a list of elements of the following form: 'Kx material_name', where K is a positive integer.
            Depending on the composition, gt will autogenerate an electrolyzer or centrifuge recipe to decompose the material. You can block that by adding the disable decomposition flag.
        .flags(flag1, flag2, ...) -> flags can be used to select certain properties of the material, like generating gears, or disabling decomposition.
        .element(element) -> similar to .components(), but is used when the material represents an element. 
            See line X for a list of posible flags.
        .rotorStats(speed, damage, durability) -> this will create a turbine rotor from this material.
        blastTemp() -> this is meant to be paired together with .ingot(). Will generate a EBF recipe(and an ABS recipe) based on the parameters you give it:
            1. temperature -> dictates what coil tier it will require(check the coil tooltips for their max temperature). 
                If the temperature is below 1000, it will also generate a PBF recipe.
                If temperature is above 1750, a hot ingot will be generated, this requiring a Vacuum Freezer.
            2. (optional) gas tier -> can be null for none, 'low' for nitrogen, 'mid' for helium, 'high' for argon, 'higher' for neon or 'highest' for krypton.
            3. (optional) EU per tick -> the recipe voltage
                (USEFUL NOTE: gt has some inbuilt functions to ease chosing the voltages, you can use V('tier') for full amp, VA('tier') for full amp, but adjusted for cable loss, VH('tier) for half an amp or VHA('tier) for half an amp adjusted for cable loss).
            4. (optional) duration in ticks -> how long the recipe should take
        .ore() -> this will create an ore from the material.
            Optionally you can add any of these sets of parameters:
                1. is emissive -> true for emissive textures
                2. ore multiplier and byproduct multiplier -> how many crushed ores will be given from one raw ore and how many byproducts dusts will be given throughout the ore processing
                3. ore multiplier, byproduct multiplier, is emissive
        .washedIn()
        .separatedIn()
        .separatedInto()
        .oreSmeltInto()
        .polarizesInto()
        .arcSmeltInto()
        .maceratesInto()
        .ingotSmeltInto()
        .addOreByproducts()
        .cableProperties() -> generates wires and cables(if material is not a superconducter). The following parameter sets can be given:
            1. Voltage, amperage, loss per block
            2. Voltage, amperage, loss per block, is superconductor -> for a super conductor, set loss as 0 and is super conductor as true
            3. Voltage, amperage, loss per block, is super conductor and critical temperature
        .toolProperties()
        .fluidPipeProperties() ->
            (int maxTemp, int throughput [tiny pipe], boolean gasProof, boolean acidProof, boolean cryoProof, boolean plasmaProof)
        .itemPipeProperties() ->
            (int priority, float stacksPerSec)
        .addDefaultEnchant()
        
*/

/*
event.create('netherite')
        .dust()
        .components('4x debris', '4x gold')
        .color(0x1a0d00)
        .iconSet(DULL)
        .flags(no_decomp);
*/

GTCEuStartupEvents.materialModification(event => {

    GTMaterials.Netherite.setMaterialARGB(0x1a0d00);
    GTMaterials.Netherite.setComponents('4x debris', '4x gold');
    GTMaterials.Netherite.setMaterialIconSet(DULL);
    GTMaterials.Netherite.addFlags(rod);

});

GTCEuStartupEvents.registry('gtceu:material', event => {

    // Periodic table materials
    const element = global.periodicTableElement;
    // Ingots
    element('zirconium', 'ingot');
    element('tellurium', 'ingot');
    element('polonium', 'ingot');
    element('astatine', 'ingot');
    element('hafnium', 'ingot');
    element('seaborgium', 'ingot');
    element('flerovium', 'ingot');
    element('rhenium', 'ingot');

    // Dusts
    element('selenium', 'dust');
    element('strontium', 'dust');
    element('thallium', 'dust');

    // Liquids
    element('seaborgium', 'fluid');
    element('flerovium', 'fluid');

    // Gasses
    // periodicTableElement('iodine', 'gas');
    element('oganesson', 'gas');

    // Plasmas

    // This material is meant to place a ? symbol in a material's chemical formula
    event.create('mystery')
        .element(GTElements.get('mystery'));

    // Material modification
    const matmod = (mat, flag) => {
        GTMaterials.get(mat).addFlags(flag);
    }
    matmod('lead', gear);
    matmod('silver', gear);
    matmod('naquadah', dense_plate);
    matmod('enriched_naquadah', [dense_plate, rotor, gear, frame, long_rod]);
    matmod('naquadria', dense_plate);
    matmod('neutronium', [foil, small_gear,rotor]);
    matmod('europium', small_spring);
    matmod('zirconium', fine_wire);
    matmod('hafnium', fine_wire);
    matmod('red_steel', [rod, frame]);
    matmod('sterling_silver', [rod, frame]);
    matmod('nether_star', foil);
    matmod('netherite', no_decomp);
    matmod('echo_shard', lens);

    // Blast Properties of periodic table metals
    const blast = global.blastProperty;
    blast('zirconium', 10900, 'higher', VA('uv'), 800);
    blast('tellurium', 11200, 'higher', VA('uhv'), 900);
    blast('polonium', 13400, 'higher', VA('uiv'), 1480);
    blast('astatine', 12800, 'higher', VA('uhv'), 1350);
    blast('hafnium', 11900, 'higher', VA('uv'), 750);
    blast('rhenium', 14800, 'highest', VA('uiv'), 1200);
    blast('seaborgium', 13300, 'higher', VA('uev'), 1500);
    blast('flerovium', 12200, 'higher', VA('uhv'), 1200);

    // Fluid pipes
    GTMaterials.NaquadahEnriched.setProperty(PropertyKey.FLUID_PIPE, new FluidPipeProperties(8000, 500, true, true, true, false));

    // Materials from elements
    const compIngot = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot()
                .composition(elements)
                .color(color)
                .iconSet(icon)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid()
                .composition(elements)
                .color(color)
                .iconSet(icon)
                .flags(flags);
        }
    }

    const elemIngot = (name, element, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot()
                .element(GTElements.get(element))
                .color(color)
                .iconSet(icon)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid()
                .element(GTElements.get(element))
                .color(color)
                .iconSet(icon)
                .flags(flags);
        }
    }

    const compIngotFluid = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid()
                .components(elements).color(color)
                .iconSet(icon)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid()
                .components(elements)
                .color(color)
                .iconSet(icon)
                .flags(flags);
        }
    }

    const elemIngotFluid = (name, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid()
                .element(GTElements.get(name))
                .color(color).iconSet(icon)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid()
                .element(GTElements.get(name))
                .color(color)
                .iconSet(icon)
                .flags(flags);
        }
    }
    
    const compFluid = (name, elements, color, flags) => {
        event.create(name).fluid()
            .composition(elements)
            .color(color)
            .flags(flags);
    }

    const elemFluid = (name, color, flags) => {
        event.create(name).fluid()
            .element(GTElements.get(name))
            .color(color)
            .flags(flags);
    }
    
    const compDustFluid = (name, elements, color, flags) => {
        event.create(name).dust().fluid()
            .composition(elements)
            .color(color)
            .flags(flags);
    }

    const elemDustFluid = (name, color, flags) => {
        event.create(name).dust().fluid()
            .element(GTElements.get(name))
            .color(color)
            .flags(flags);
    }
    
    const compDust = (name, elements, color, flags) => {
        event.create(name).dust()
            .composition(elements)
            .color(color)
            .flags(flags);
    }

    const elemDust = (name, color, flags) => {
        event.create(name).dust()
            .element(GTElements.get(name))
            .color(color)
            .flags(flags);
    }
    
    const compGem = (name, elements, color, icon, flags) => {
        event.create(name).gem()
            .composition(elements)
            .color(color)
            .iconSet(icon)
            .flags(flags);
    }

    const elemGem = (name, color, icon, flags) => {
        event.create(name).gem()
            .element(GTElements.get(name))
            .iconSet(icon)
            .color(color)
            .flags(flags);
    }


    elemIngot('magnetic_zapolgium', GTElements.get('zapolgium'), 0xcc00cc, MAGNETIC, [], [rod, long_rod, magnetic]);

    elemIngotFluid('xeproda', 0x1a0d00, DULL, [15499, 'highest', VA('uev'), 3750], []);

    elemIngotFluid('rhexis', 0x330000, DULL, [15499, 'highest', VA('uiv'), 4750], []);

    elemIngotFluid('chalyblux', 0xffcccc, DULL, [15499, 'highest', VA('uev'), 5750], []);

    elemIngotFluid('mythril', 0x006666, METALLIC, [11299, 'highest', VA('uhv'), 2400], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('adamantine', 0xe99700, METALLIC, [13299, 'highest', VA('uev'), 3000], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('estalt', 0xff5050, DULL, [12299, 'highest', VA('uhv'), 2600], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('enriched_estalt', 0xe76c6c, RADIOACTIVE, [12899, 'highest', VA('uhv'), 2800], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('calamatium', 0x660000, DULL, [13199, 'highest', VA('uhv'), 2750], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('isovol', 0x290066, DULL, [12999, 'highest', VA('uhv'), 2750], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    event.create('zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(DULL)
        .blastTemp(10799, 'highest', VA('uhv'), 1600)
        .flags(plates, rod, frame)
        .fluidPipeProperties(18000, 7200, true,true,true,true);

    // Thermal Superconductors (twinite and higher rotor values by @richie3366)
    const conductor = (name, elements, color, blasting, cable, rotor, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid()
                .components(elements)
                .color(color)
                .iconSet(SHINY)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3])
                .cableProperties(cable[0], cable[1], cable[2], cable[3])
                .rotorStats(rotor[0], rotor[1], rotor[2], rotor[3]);
        } else {
            event.create(name).ingot().fluid()
                .components(elements)
                .color(color)
                .iconSet(SHINY)
                .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame)
                .cableProperties(cable[0], cable[1], cable[2], cable[3])
                .rotorStats(rotor[0], rotor[1], rotor[2], rotor[3]);
        }
    }

    conductor('soul_infused', ['1x invar', '2x mystery'], 0xcc9966, [], [V('lv'), 4, 0, true], [150, 130, 3, 37600]);

    conductor('signalum', ['1x silver', '3x copper', '4x redstone'], 0xff3300, [1700, 'low', VA('mv'), 1200], [V('mv'), 16, 0, true], [190, 150, 3, 24000]);

    conductor('lumium', ['1x silver', '3x tin', '2x glowstone'], 0xffffb3, [1700, 'low', VA('hv'), 1500], [V('hv'), 16, 0, true], [220, 170, 3, 24000]);

    conductor('enderium', ['3x lead', '1x diamond', '2x ender_pearl'], 0x006666, [3500, 'low', VA('ev'), 1500], [V('ev'), 32, 0, true], [300, 190, 3, 45600]);

    conductor('shellite', ['1x black_bronze', '3x signalum'], 0x9933ff, [4400, 'mid', VA('iv'), 1800], [V('iv'), 64, 0, true], [450, 220, 3, 37600]);

    conductor('twinite', ['3x manganese_phosphide', '2x amethyst', '1x lumium'], 0xf66999, [5300, 'mid', VA('luv'), 2100], [V('luv'), 64, 0, true], [700, 260, 3, 24000]);

    conductor('dragonsteel', ['4x tungsten', '8x magnesium_diboride', '2x cadmium'], 0x3333cc, [7100, 'high', VA('zpm'), 2400], [V('zpm'), 96, 0, true], [1100, 380, 3, 32000]);

    conductor('prismalium', ['8x naquadah', '4x mercury_barium_calcium_cuprate', '7x tungsten_carbide'], 0x66ffff, [9000, 'high', VA('zpm'), 2700], [V('uv'), 48, 0, true], [1600, 470, 3, 48000]);

    conductor('melodium', ['2x uranium_triplatinum', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium'], 0xd9b3ff, [10000, 'higher', VA('uv'), 3000], [V('uv'), 128, 0, true], [2000, 550, 3, 64000]);

    conductor('stellarium', ['12x neutronium', '4x melodium', '1x samarium_iron_arsenic_oxide'], 0xccffff, [10799, 'highest', VA('uhv'), 4000], [V('uhv'), 192, 0, true], [3200, 660, 3, 96000]);

    conductor('ancient_runicalium', ['5x zapolgium', '18x stellarium', '8x zirconium'], 0xFAB922, [11749, 'highest', VA('uev'), 5000], [V('uev'), 256, 0, true], [6400, 720, 3, 128000]);

    // Nuclear Reactor Materials
    compIngot('austenitic_stainless_steel_304', ['35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon'], 0x800040, METALLIC, [3500, 'low', VA('ev'), 1500], [plates, rod, frame]);

    compIngot('inconel_625', ['7x nickel', '2x chromium', '1x steel'], 0xa3a375, SHINY, [3500, 'low', VA('ev'), 1500], [plates, rod, frame]);

    compFluid('nuclear_steam', ['1x steam', '1x mystery'], 0xcccccc, [no_decomp]);

    compFluid('hot_sodium_potassium', ['1x sodium_potassium', '1x mystery'], 0x82fcc3, [no_decomp]);

    compFluid('hot_pcb_coolant', ['1x pcb_coolant', '1x mystery'], 0xc9ca81, [no_decomp]);

    // Netherite Line
    elemDustFluid('debris', 0x804000, [no_decomp]);

    compDust('purified_debris', ['debris'], 0xcc0000, []);

    compFluid('chlorine_trifluoride', ['1x chlorine', '3x fluorine'], 0xb3ff99, []);

    compFluid('tetrachloroethylene', ['2x carbon', '4x chlorine'], 0xd966ff, []);
    
    // Netherite Derivatives/Alloys
    elemIngotFluid('pure_netherite', 0x1a0d00, DULL, [5000, 'low', VA('iv'), 1200], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring]);

    elemIngot('magnetic_pure_netherite', 'pure_netherite', 0x1a0d00, MAGNETIC, [], [rod, long_rod, magnetic]);

    compGem('naquadic_netherite', ['3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen'], 0xffd966, DIAMOND, []);

    compIngotFluid('weapon_grade_naquadah', ['7x naquadria', '2x pure_netherite', '5x neutronium', '16x fluorine'], 0xccff33, DULL, [10500, 'highest', VHA('uv'), 2700], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    compGem('runic_laser_source_base', ['2x naquadic_netherite', '10x tritanium', '2x trinium'], 0x00ff00, OPAL, []);

    // Crown Ethers
    compFluid('sulfur_dichloride', ['1x sulfur', '2x chlorine'], 0xcc0000, []);

    compDust('thionyl_chloride', ['1x sulfur', '1x oxygen', '2x chlorine'], 0xffffcc, []);

    compDust('sulfuryl_chloride', ['1x sulfur', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    compDust('triglycol_dichloride', ['6x carbon', '12x hydrogen', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    compDust('ethylene_glycol', ['2x carbon', '6x hydrogen', '2x oxygen'], 0xf2f2f2, []);

    compDust('diethylene_glycol', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xf2f2f2, []);

    compDust('triethylene_glycol', ['6x carbon', '14x hydrogen', '4x oxygen'], 0xf2f2f2, []);

    compDust('ethylene_oxide', ['2x carbon', '4x hydrogen', '1x oxygen'], 0xd9d9d9, []);

    event.create('lithium_perchlorate')
        .dust()
        .components('1x lithium', '1x chlorine', '4x oxygen')
        .color(0xe6f2ff);

    event.create('sodium_perchlorate')
        .dust()
        .components('1x sodium', '1x chlorine', '4x oxygen')
        .color(0xccf2ff);

    event.create('sodium_chlorate')
        .dust()
        .components('1x sodium', '1x chlorine', '3x oxygen')
        .color(0xccf2ff);

    event.create('silver_oxide')
        .dust()
        .components('2x silver', '1x oxygen')
        .color(0xffffff);

    event.create('12_crown_4')
        .fluid()
        .components('8x carbon', '16x hydrogen', '4x oxygen')
        .color(0xcc6699);

    event.create('15_crown_5')
        .fluid()
        .components('10x carbon', '20x hydrogen', '5x oxygen')
        .color(0x0099cc);

    event.create('18_crown_6')
        .fluid()
        .components('12x carbon', '24x hydrogen', '6x oxygen')
        .color(0x99ff33);

    event.create('12_crown_4_li')
        .fluid()
        .components('1x lithium', '8x carbon', '16x hydrogen', '4x oxygen')
        .color(0x993366)
        .flags(no_decomp);

    event.create('15_crown_5_na')
        .fluid()
        .components('1x sodium', '10x carbon', '20x hydrogen', '5x oxygen')
        .color(0x006080)
        .flags(no_decomp);

    event.create('18_crown_6_k')
        .fluid()
        .components('1x potassium', '12x carbon', '24x hydrogen', '6x oxygen')
        .color(0x4d9900)
        .flags(no_decomp);

    event.create('4_toluenesulfonyl_chloride')
        .dust()
        .components('7x carbon', '7x hydrogen', '2x chlorine', '2x oxygen', '1x sulfur')
        .color(0xffcccc);

    event.create('triethylene_glycol_ditosylate')
        .dust()
        .components('20x carbon', '26x hydrogen', '8x oxygen', '2x sulfur')
        .color(0xb8b894);

    event.create('sodium_azide')
        .dust()
        .components('1x sodium', '3x nitrogen')
        .color(0xcc6699);

    event.create('palladium_on_carbon')
        .dust()
        .components('1x palladium', '1x carbon')
        .color(0xff9900);

    event.create('sodium_p_toluenesulfonate')
        .dust()
        .components('7x carbon', '7x hydrogen', '1x sodium', '3x oxygen', '1x sulfur')
        .color(0x00cc00);

    event.create('triethylene_glycol_diazide')
        .dust()
        .components('6x carbon', '12x hydrogen', '2x oxygen', '6x nitrogen')
        .color(0x6666ff);

    event.create('triethylene_glycol_diamine')
        .dust()
        .components('6x carbon', '16x hydrogen', '2x oxygen', '2x nitrogen')
        .color(0xcc00cc);

    event.create('cryptand')
        .fluid()
        .components('18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x993333);

    event.create('cryptand_k')
        .fluid()
        .components('1x potassium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x602020)
        .flags(no_decomp);

    event.create('cryptand_na')
        .fluid()
        .components('1x sodium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x602020)
        .flags(no_decomp);

    event.create('cryptand_li')
        .fluid()
        .components('1x lithium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen')
        .color(0x602020)
        .flags(no_decomp);

    // Mystical Agriculture Alloys
    event.create('inferium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(DULL)
        .color(0x66ff33)
        .flags(plates, rod, no_decomp);

    event.create('prudentium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(DULL)
        .color(0x336600)
        .flags(plates, rod, no_decomp);

    event.create('tertium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(DULL)
        .color(0xff6600)
        .flags(plates, rod, no_decomp);

    event.create('imperium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(DULL)
        .color(0x0099ff)
        .flags(plates, rod, no_decomp);

    event.create('supremium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(DULL)
        .color(0xff0000)
        .flags(plates, rod, no_decomp);

    event.create('awakened_supremium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(DULL)
        .color(0xff3300)
        .flags(plates, rod, no_decomp);

    event.create('insanium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(DULL)
        .color(0x9900cc)
        .flags(plates, rod, no_decomp);

    // Diatrons
    event.create('diatron')
        .gem()
        .color(0x6699ff)
        .iconSet(LAPIS)
        .flags(no_decomp);

    // Echo/Void Line
    event.create('echo_r')
        .element(GTElements.get('echo_r'))
        .fluid()
        .color(0x003333)
        .iconSet(DULL);

    event.create('raw_void')
        .components('1x echo_r', '1x neutronium')
        .ingot(1)
        .color(0x006666)
        .flags(no_decomp)
        .iconSet(DULL);

    event.create('void')
        .components('1x echo_r', '1x neutronium')
        .ingot(1)
        .blastTemp(10799, 'highest', VA('uev'), 8000)
        .color(0x001a1a)
        .iconSet(DULL)
        .flags(rod, foil, plates, long_rod, frame, no_decomp);
    
    //Extended Sculk
    event.create('ionized_sculk')
        .dust()
        .color(0x061A0D)
        .iconSet(RADIOACTIVE)
        .flags(no_decomp);

    event.create('sodium_over_sculk')
        .dust()
        .color(0x071A22)
        .components('1x sodium','1x mystery')
        .flags(no_decomp);
    
    // Extras
    event.create('trinaquadalloy')
        .ingot().fluid()
        .color(0x281832)
        .iconSet(BRIGHT)
        .flags(plates, rod, frame, fine_wire, foil, dense_plate)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', VA('zpm'), 1200)

    event.create('perchloric_acid')
        .fluid()
        .components('1x hydrogen', '1x chlorine', '4x oxygen')
        .color(0xffe6e6);

    // event.create('iodic_acid')
    //     .fluid()
    //     .components('1x hydrogen', '1x iodine', '3x oxygen')
    //     .color(0xcc33ff);

    event.create('calcium_perchlorate')
        .dust()
        .components('1x calcium', '2x chlorine', '8x oxygen')
        .color(0xffff99);

    event.create('silica_gel')
        .fluid()
        .components('1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon')
        .color(0xe6e6e6)
        .flags(no_decomp);

    event.create('calcium_sulfate')
        .dust()
        .components('1x calcium', '1x sulfur', '4x oxygen')
        .color(0xffbf80);

    event.create('sodium_oxide')
        .dust()
        .components('2x sodium', '1x oxygen')
        .color(0x6666ff);

    event.create('iron_selenide')
        .dust()
        .components('1x iron', '1x selenium')
        .color(0xb3ff66);

    event.create('strontium_oxide')
        .dust()
        .components('1x strontium', '1x oxygen')
        .color(0xffcc99);

    event.create('titanium_oxide')
        .dust()
        .components('1x titanium', '2x oxygen')
        .color(0xff66cc);

    event.create('strontium_titanium_oxide')
        .dust()
        .components('1x strontium', '1x titanium', '3x oxygen')
        .color(0xff0000);

    event.create('npk_solution')
        .fluid()
        .color(0xb8c3f5);

    event.create('copper_chloride')
        .dust()
        .components('1x copper', '1x chlorine');

    event.create('cupric_chloride_solution')
        .fluid()
        .components('1x copper_chloride', '1x hydrochloric_acid')
        .color(0x336600);

    // Ores and bedrock fluids
    
    event.create('titanite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('1x calcium', '1x titanium', '1x silicon', '5x oxygen')
        .color(0x66ffff)
        .flags(no_decomp);

    event.create('zapolite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('2x zapolgium', '4x iodine', '2x aluminium', '5x oxygen')
        .color(0xcc0099)
        .flags(no_decomp);

    event.create('lautarite')
        .dust()
        .ore(2, 1)
        .components('1x calcium', '2x iodine', '6x oxygen')
        .color(0x6666ff)
        .flags(no_decomp);

    event.create('iodargyrite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('1x silver', '1x iodine')
        .color(0x8080ff)
        .flags(no_decomp);

    event.create('clausthalite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('1x lead', '1x selenium')
        .color(0x666633)
        .flags(no_decomp);

    event.create('crookesite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('7x copper', '1x thallium', '4x selenium')
        .color(0x00ff99)
        .flags(no_decomp);

    event.create('calaverite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('1x gold', '2x tellurium')
        .color(0xcc9900)
        .flags(no_decomp);

    event.create('sylvanite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('1x silver', '2x tellurium')
        .color(0xff5050)
        .flags(no_decomp);

    event.create('tiemannite')
        .dust()
        .liquid()
        .ore(2, 1)
        .components('1x mercury', '1x selenium')
        .color(0xcc0066)
        .flags(no_decomp);

    event.create('klockmannite')
        .dust()
        .ore(2, 1)
        .components('1x copper', '1x selenium')
        .color(0x009999)
        .flags(no_decomp);

    event.create('stibiopalladinite')
        .dust()
        .ore(2, 1)
        .components('5x palladium', '2x antimony')
        .color(0x333399)
        .flags(no_decomp);

    event.create('berzelianite')
        .dust()
        .ore(2, 1)
        .components('2x copper', '1x selenium')
        .color(0x990000)
        .flags(no_decomp);

    event.create('umangite')
        .dust()
        .ore(2, 1)
        .components('3x copper', '2x selenium')
        .color(0x006699)
        .flags(no_decomp);

    event.create('aguilarite')
        .dust()
        .ore(2, 1)
        .components('3x silver', '1x selenium', '1x sulfur')
        .color(0xff5050)
        .flags(no_decomp);

    event.create('polybasite')
        .dust()
        .components('12x silver', '4x copper', '2x arsenic', '13x sulfur')
        .color(0xcc6600);

    event.create('strontianite')
        .dust()    
        .liquid()
        .ore(2, 1)
        .components('1x strontium', '1x carbon', '3x oxygen')
        .color(0xe6ffff);

    event.create('celestine')
        .gem()
        .ore(4, 1)
        .components('1x strontium', '1x carbon', '4x oxygen')
        .color(0xe6ffff)
        .iconSet(GEM_VERTICAL);

    event.create('abydos_titanite_rich_magma')
        .liquid(new GTFluidBuilder().temperature(3520))
        .components('6x titanite', '2x calaverite','2x sylvanite', '2x tiemannite', '1x strontianite')
        .flags(no_decomp)    
        .color(0xe65c00);

    event.create('abydos_zapolite_rich_magma')
        .liquid(new GTFluidBuilder().temperature(4980))
        .components('7x zapolite', '3x crookesite', '2x clausthalite', '1x iodargyrite')
        .color(0xff471a)
        .flags(no_decomp);

    // Nether
       
        //Extended Debris
        event.create('ancient_debris')
            .dust()
            .fluid()
            .components('1x mystery')
            .color(0x603D1A)
            .flags(no_decomp);

        event.create('ancient_netherite')
            .ingot()
            .dust()
            .flags(plates,rod,no_decomp)
            .components('4x gold','4x mystery')
            .color(0x46271B)
            .blastTemp(12349, 'low', VA('uev'), 2400);
          
        //Atomic Nether Dust Line
        event.create('atomic_nether_sludge')
            .dust()
            .components('1x mystery','1x mystery','1x mystery','1x mystery')
            .color(0x883039)
            .iconSet(RADIOACTIVE)
            .flags(no_decomp);

        event.create('deactivated_nether')
            .dust()
            .components('1x mystery','1x mystery')
            .color(0x664C4C)
            .flags(no_decomp);
        
        event.create('activated_nether')
            .dust()
            .components('1x mystery','1x mystery')
            .color(0xA01819)
            .flags(no_decomp);

        //Estalt Line
        event.create('molten_estaltadyne_mixture')
            .liquid(new GTFluidBuilder().temperature(3500))
            .components('1x mystery','1x estalt','1x mystery')
            .color(0x8E0505)
            .flags(no_decomp);

        event.create('estaltadyne')
            .dust()
            .fluid()
            .components('4x estalt','3x titanium','2x aluminium','5x sulfur','4x oxygen')
            .color(0x8E0535)
            .flags(no_decomp);

        event.create('metmalic_estaltadyne')
            .dust()
            .components('4x estalt','3x titanium','2x aluminium','5x sulfur')
            .color(0x8E0560)
            .flags(no_decomp);

        event.create('magnemalic_estaltadyne')
            .dust()
            .components('4x estalt','3x titanium','5x sulfur')
            .color(0x8E0480)
            .flags(no_decomp);

        event.create('tytite_estaltadyne')
            .dust()
            .components('4x estalt','3x titanium')
            .color(0x8E0340)
            .flags(no_decomp);

        event.create('estaltadyne_hydride')
            .dust()
            .components('4x estalt','9x hydrogen')
            .color(0x8E0505)
            .flags(no_decomp);
        
        //Enriched Estalt Line
        event.create('enriched_estaltadyne_mixture')
            .fluid()
            .components('1x mystery','1x enriched_estalt','1x mystery')
            .color(0xBE4747)
            .flags(no_decomp);

        event.create('enriched_estaltadyne_solution')
            .fluid()
            .components('1x mystery','1x enriched_estalt','1x mystery')
            .color(0xBE4717)
            .flags(no_decomp);

        event.create('enriched_estaltadyne_slurry')
            .fluid()
            .components('1x mystery','1x enriched_estalt','1x mystery')
            .color(0xBE4777)
            .flags(no_decomp);

        event.create('enriched_estaltadyne_naquide_slurry_mixture')
            .fluid()
            .components('1x mystery','1x enriched_estalt','1x enriched_naquadah','1x mystery')
            .color(0xBE4697)
            .flags(no_decomp);

        event.create('hyper_enriched_estaltadyne_slurry_mixture')
            .fluid()
            .components('1x mystery','2x enriched_estalt')
            .color(0xBE4697)
            .flags(no_decomp);
        
        event.create('hyper_enriched_estaltadyne_slurry_residue')
            .fluid()
            .components('1x mystery','2x enriched_estalt')
            .color(0xBE4677)
            .flags(no_decomp);

        event.create('sodium_hyper_enriched_estaltadyne_sludge')
            .fluid()
            .components('2x sodium','1x mystery','2x enriched_estalt')
            .color(0xBE4697)
            .flags(no_decomp);

        event.create('hyper_enriched_estaltadyne_concentrate')
            .fluid()
            .components('2x enriched_estalt','1x mystery')
            .color(0xBE4587)
            .flags(no_decomp);
        
        //Adamantine Line
        event.create('enriched_adamantamite_mixture')
            .fluid()
            .components('1x mystery','1x adamantine','1x mystery')
            .color(0x866E4B)
            .flags(no_decomp);

        event.create('molten_adamantamite_mixture')
            .liquid(new GTFluidBuilder().temperature(3700))
            .components('1x mystery','1x adamantine','1x mystery')
            .color(0x866E7B)
            .flags(no_decomp);

        event.create('adamantamite')
            .dust()
            .fluid()
            .components('5x adamantine','4x titanium','2x iron','6x nitrogen','12x oxygen')
            .color(0x825F2B)
            .flags(no_decomp);

        event.create('adamantamite_metaltide')
            .dust()
            .components('5x adamantine','4x titanium','2x iron','6x nitrogen')
            .color(0x8F611E)
            .flags(no_decomp);

        event.create('adamantamite_magnide')
            .dust()
            .components('5x adamantine','4x titanium','2x iron')
            .color(0x744D13)
            .flags(no_decomp);

        event.create('adamantamite_titite')
            .dust()
            .components('5x adamantine','4x titanium')
            .color(0xB68E52)
            .flags(no_decomp);

        event.create('adamantine_5')
            .dust()
            .components('5x adamantine')
            .color(0xCB9D58)
            .flags(no_decomp);

        event.create('adamantine_hydroxide')
            .dust()
            .components('1x adamantine','3x hydrogen','3x oxygen')
            .color(0xCB8858)
            .flags(no_decomp);
        
        //Mythril Line
        event.create('enriched_mythrillic_mixture')
            .fluid()
            .components('1x mystery','1x mythril','1x mystery')
            .color(0x238213)
            .flags(no_decomp);
        
        event.create('molten_mythrillic_mixture')
            .liquid(new GTFluidBuilder().temperature(3100))
            .components('1x mystery','1x mythril','1x mystery')
            .color(0x238342)
            .flags(no_decomp);

        event.create('mythrillic')
            .dust()
            .fluid()
            .components('6x mythril','6x carbon','14x hydrogen','3x zirconium','2x vanadium')
            .color(0x238362)
            .flags(no_decomp);

        event.create('mythrillic_carbinide')
            .dust()
            .components('6x mythril','6x carbon','3x zirconium','2x vanadium')
            .color(0x238441)
            .flags(no_decomp);

        event.create('mythrillic_metlide')
            .dust()
            .components('6x mythril','3x zirconium','2x vanadium')
            .color(0x238451)
            .flags(no_decomp);

        event.create('mythrillic_metnide')
            .dust()
            .components('6x mythril','3x zirconium')
            .color(0x238432)
            .flags(no_decomp);

        event.create('mythrillic_hydride')
            .dust()
            .components('1x mythril','2x hydrogen')
            .color(0x238338)
            .flags(no_decomp);
        
        // Calamatium/Isovol Line
        event.create('impure_calamatium_solution')
            .fluid()
            .color(0x990000);

        event.create('impure_isovol_solution')
            .fluid()
            .color(0x000066);

        event.create('calamatium_solution')
            .fluid()
            .color(0xe60000);

        event.create('isovol_solution')
            .fluid()
            .color(0x6600cc);

        event.create('calamatium_fluoride')
            .dust()
            .components('1x calamatium', '2x fluorine')
            .color(0xcc0066)
            .flags(no_decomp);

        event.create('isovol_fluoride')
            .dust()
            .components('1x isovol', '2x fluorine')
            .color(0x9900ff)
            .flags(no_decomp);

        // //Magmas
        event.create('highly_unstable_nether_magma')
            .liquid(new GTFluidBuilder().temperature(9001))
            .components('1x mystery')
            .color(0xFFA025)
            .flags(no_decomp);

        event.create('magmatic')
            .plasma(new GTFluidBuilder().temperature(14600))
            .components('1x mystery','1x iron','1x mystery')
            .color(0xFFD39A)
            .flags(no_decomp);

        event.create('debris_rich_nether_magma')
            .liquid(new GTFluidBuilder().temperature(7600))
            .components('1x mystery')
            .color(0x6C3628)
            .flags(no_decomp);
 
        event.create('mythrillic_nether_magma')
            .liquid(new GTFluidBuilder().temperature(9299))
            .components('1x mystery','1x mythril','1x mystery')
            .color(0x238383)
            .flags(no_decomp);

        event.create('adamantamite_nether_magma')
            .liquid(new GTFluidBuilder().temperature(11299))
            .components('1x mystery','1x adamantine','1x mystery')
            .color(0x826944)
            .flags(no_decomp);

        event.create('estaltadyne_nether_magma')
            .liquid(new GTFluidBuilder().temperature(10299))
            .components('1x mystery','1x estalt','1x mystery')
            .color(0xA92323)
            .flags(no_decomp);

        event.create('mystical_nether_magma')
            .liquid(new GTFluidBuilder().temperature(11600))
            .components('1x mystery','1x adamantine','1x mystery','1x estalt','1x mystery','1x mythril','1x mystery')
            .color(0xF26B87)
            .flags(no_decomp);
        
        event.create('enriched_mystical_concentrate')
            .liquid(new GTFluidBuilder().temperature(1260))
            .components('1x mystery','1x adamantine','1x mystery','1x enriched_estalt','1x mystery','1x mythril','1x mystery')
            .color(0xF26B87)
            .flags(no_decomp);

    // End

    // Titanite(Zirconium) Line
    event.create('titanite_slurry')
        .fluid()
        .components('1x titanite', '1x mystery')
        .color(0x862d2d)
        .flags(no_decomp);

    event.create('titanite_slurry_residue')
        .fluid()
        .components('1x rutile', '1x mystery')
        .color(0xbf4040)
        .flags(no_decomp);

    event.create('hydroxo_dioxo_titanite_mixture')
        .fluid()
        .components('2x sodium', '1x rutile', '2x oxygen', '2x hydrogen', '1x mystery')
        .color(0xd27979)
        .flags(no_decomp);

    event.create('titanite_residue')
        .fluid()
        .components('1x rutile', '1x mystery')
        .color(0xe6004c)
        .flags(no_decomp);

    event.create('titanium_tetrachloride_mixture')
        .fluid()
        .components('1x titanium_tetrachloride', '1x mystery')
        .color(0xff1a66)
        .flags(no_decomp);

    event.create('zirconium_tetrachloride')
        .dust()
        .components('1x zirconium', '4x chlorine')
        .color(0xffad33)
        .flags(no_decomp);

    // Zapolite(Zapolgium) line
    event.create('zapolgium_aluminium_oxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '2x aluminium', '4x oxygen')
        .color(0x6666ff)
        .flags(no_decomp);

    event.create('zapolgium_diiodide_dioxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '2x oxygen')
        .color(0x660066)
        .flags(no_decomp);

    event.create('zapolgium_diiodide_oxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '1x oxygen')
        .color(0xff66ff)
        .flags(no_decomp);

    event.create('zapolgium_oxide')
        .dust()
        .components('1x zapolgium', '1x oxygen')
        .color(0xff9933)
        .flags(no_decomp);

    event.create('zapolgium_chloride')
        .dust()
        .components('1x zapolgium', '2x chlorine')
        .color(0x99ff33)
        .flags(no_decomp);

    event.create('zapolgium_hydroxide')
        .dust()
        .components('1x zapolgium', '2x oxygen', '2x hydrogen')
        .color(0x00ff99)
        .flags(no_decomp);

    // Alloys and other compounds
    event.create('zalloy')
        .ingot()
        .fluid()
        .components('3x zapolgium', '4x duranium', '2x europium')
        .color(0xff66ff)
        .iconSet(METALLIC)
        .blastTemp(10799, 'highest', VA('luv'), 6000)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring)
        .cableProperties(V('uv'), 2, 4, false);

    event.create('zirconium_selenide_diiodide')
        .ingot()
        .fluid()
        .components('1x zirconium', '1x selenium', '2x iodine')
        .color(0x6600cc)
        .iconSet(DULL)
        .flags(spring)
        .blastTemp(8900, 'higher', VA('luv'), 4000)
        .cableProperties(V('uhv'), 8, 16, false);

    event.create('indium_tin_lead_cadmium_soldering_alloy')
        .ingot()
        .fluid()
        .components('14x indium', '3x tin', '2x lead', '1x cadmium')
        .color(0xa6a6a6)
        .iconSet(DULL);

    event.create('zircalloy_4')
        .ingot()
        .fluid()
        .components('251x zirconium', '3x tin', '2x chromium', '1x iron')
        .color(0xff9999)
        .iconSet(DULL)
        .blastTemp(8900, 'higher', VA('luv'), 2000)
        .flags(gear, small_gear, rotor);

    event.create('iron_selenide_over_strontium_titanium_oxide')
        .ingot()
        .components('1x iron_selenide', '1x strontium_titanium_oxide')
        .color(0x66ff33)
        .iconSet(DULL)
        .flags(fine_wire, bolt_and_screw)
        .blastTemp(10299, 'highest', VA('uv'), 2500)
        .cableProperties(V('uhv'), 4, 12, false);

    event.create('star_steel')
        .ingot()
        .fluid()
        .components('2x steel', '1x mystery')
        .color(0xccffcc)
        .flags(no_decomp, plates, rod, frame)
        .iconSet(METALLIC);

    event.create('thorium_plut_duranide_241')
        .ingot()
        .fluid()
        .components('4x thorium', '1x duranium', '3x plutonium_241')
        .color(0xEC342A)
        .flags(fine_wire, no_decomp, foil)
        .blastTemp(10199, 'highest', VA('uv'), 850)

    // PEEK plastic Line

    event.create('disodium_salt_of_hydroquinone')
        .dust()
        .components('6x carbon','4x hydrogen','2x oxygen','2x sodium')
        .color(0xeaeaf9)
        .flags(no_decomp);

    event.create('hydroquinone')
        .dust()
        .components('6x carbon','6x hydrogen','2x oxygen')
        .color(0xf9f9ff);

    event.create('carbon_acid')
        .gas()
        .components('2x hydrogen','1x carbon','3x oxygen')
        .color(0x333333)
        .flags(no_decomp);

    event.create('fluorobenzene')
        .fluid()
        .components('6x carbon','5x hydrogen','1x fluorine')
        .color(0xffffff);

    event.create('4_fluorobenzoyl_chloride')
        .fluid()
        .components('7x carbon','4x hydrogen','1x chlorine','1x fluorine','1x oxygen')
        .color(0xfffff0);
    
    event.create('benzoyl_chloride')
        .fluid()
        .components('7x carbon','5x hydrogen','1x chlorine','1x oxygen')
        .color(0xfffadf);

    event.create('benzotrichloride')
        .fluid()
        .components('7x carbon','5x hydrogen','3x chlorine')
        .color(0xddd8bc);

    event.create('44_difluorobenzophenone') //naming like this: 4_4_di... will make kubejs go error to annoy you :)
        .dust()
        .components('13x carbon','8x hydrogen','1x oxygen','2x fluorine') 
        .color(0xeee1c9)
        .flags(no_decomp);
    
    event.create('polyether_ether_ketone')
        .fluid()
        .polymer()
        .components('19x carbon','12x hydrogen','3x oxygen') 
        .color(0xccbba7)
        .flags(no_decomp)
        .flags(foil, plates, ring, plates)
        .fluidPipeProperties(550, 600, true, true, true, false);
    
    // SiC/Bi2Te3 Line

    event.create('sodium_borohydride')
        .dust()
        .components('1x sodium','1x boron','4x hydrogen')
        .color(0xE3DEC8);

    event.create('nitrate')
        .gas()
        .components('1x nitrogen', '3x oxygen')
        .color(0xDBC365);

    event.create('bismuth_3_nitrate')
        .dust()
        .components('1x bismuth', '3x nitrate')
        .color(0xDEDBCD);

    event.create('sodium_nitrate')
        .dust()
        .components('1x sodium','1x nitrogen','3x oxygen')
        .color(0xE6E5E5);

    event.create('diborane')
        .gas()
        .components('2x boron','6x hydrogen')
        .color(0xFDFFE1);

    event.create('silicon_carbide')
        .dust()
        .components('1x silicon', '1x carbon')
        .color(0xB79F8D);
        
    event.create('bismuth_tritelluride')
        .dust()
        .components('2x bismuth', '3x tellurium')
        .color(0xDEB18E);

    event.create('silicon_carbide_over_bismuth_tritelluride')
        .dust()
        .components('1x silicon_carbide', '1x bismuth_tritelluride')
        .color(0x86C455);

//Hexafluorobromic Acid

    event.create('nickel_fluoride')
        .dust()
        .components('1x nickel', '2x fluorine')
        .color(0xA7A9A8)
        .iconSet(METALLIC);

    event.create('caesium_fluoride')
        .dust()
        .components('1x caesium', '1x fluorine')
        .color(0x969D9B)
        .iconSet(DULL);

    event.create('bromine_pentafluoride')
        .fluid()
        .components('1x bromine', '5x fluorine')
        .color(0x8E6565);
     
    event.create('hexafluorobromine')
        .fluid()
        .components('1x bromine', '6x fluorine')
        .color(0x000000)
        .flags(no_decomp);

    event.create('caesium_hexafluorobromine')
        .fluid()
        .components('1x caesium', '1x hexafluorobromine')
        .color(0x988585)
        .flags(no_decomp);

    event.create('hexafluorobromic_acid')
        .fluid()
        .components('1x hydrogen', '1x hexafluorobromine')
        .color(0xA15E5E)
        .flags(no_decomp);

//ANSD Line
const InitialLoadAnsdFluid = (name,components,color) => {
    event.create(`${name}`).fluid().color(color).components(components).flags(no_decomp);
}
const InitialLoadAnsdFluidDecomps = (name,components,color) => {
    event.create(`${name}`).fluid().color(color).components(components);
}
const InitialLoadAnsdDust = (name,components,color) => {
    event.create(`${name}`).dust().color(color).components(components).flags(no_decomp);
}
const InitialLoadAnsdDustDecomps = (name,components,color) => {
    event.create(`${name}`).dust().color(color).components(components);
}
const AnsdFluid = (name,components,color) => {
    event.create(`${name}`).fluid().color(color).components(components).flags(no_decomp);
}
const AnsdDust = (name,components,color) => {
    event.create(`${name}`).dust().color(color).components(components).flags(no_decomp);
}
const AnsdFluidDecomps = (name,components,color) => {
    event.create(`${name}`).fluid().color(color).components(components);
}
const AnsdDustDecomps = (name,components,color) => {
    event.create(`${name}`).dust().color(color).components(components);
}
const ComplexAnsdFluid = (name,components,color) => {
    event.create(`${name}`).fluid().color(color).components(components).flags(no_decomp);
}
const ComplexAnsdDust = (name,components,color) => {
    event.create(`${name}`).dust().color(color).components(components).flags(no_decomp);
}

InitialLoadAnsdDustDecomps('sulfate', ['1x sulfur', '4x oxygen'], 0xD5BA23);  
InitialLoadAnsdDust('silicate', ['1x silicon', '4x oxygen'], 0xC0BA97);  
InitialLoadAnsdDust('pyrophosphate', ['2x phosphorus', '7x oxygen'], 0xC08B63);  
InitialLoadAnsdDust('sulfur_hexafluoride', ['1x sulfur', '6x fluorine'], 0xC0BA63);  
InitialLoadAnsdDust('plutonium_octofluoride', ['2x plutonium', '8x fluorine'], 0x000000);      
InitialLoadAnsdFluid('uranium_tetrafluoride', ['1x uranium', '4x fluorine'], 0x6CAB3F);      
InitialLoadAnsdFluidDecomps('hydroxide',['1x oxygen','1x hydrogen'],0xC0D4DD);
AnsdFluid('caesium_oganesson_hexanitrate', ['2x caesium', '1x oganesson', '6x nitrate'], 0x769192);      
AnsdFluid('caesium_oganesson_trioxide', ['2x caesium', '1x oganesson', '3x oxygen'], 0x4E7577);      
AnsdFluidDecomps('caesium_nitrate', ['1x caesium', '1x nitrogen', '3x oxygen'], 0x7C8A8B);      
AnsdFluid('oganesson_tetranitrate', ['1x oganesson', '4x nitrate'], 0x948FAD);      
AnsdDust('magnesium_hydroxide', ['1x magnesium', '2x hydroxide'], 0x766B73);      
AnsdDust('hafnium_thorium_iron_2_hydroxide_potassium_disilicate', ['1x hafnium', '1x thorium', '1x iron', '2x hydroxide', '4x potassium', '2x silicate'], 0x618782);      
AnsdDust('iron_2_hydroxide', ['1x iron', '2x hydroxide'], 0x929A98);      
AnsdDust('hafnium_thorium_octachloride', ['1x hafnium', '1x thorium', '8x chlorine'], 0x637770);      
AnsdDust('thorium_dioxide', ['1x thorium', '2x oxygen'], 0x384F47);      
AnsdDust('hafnium_dioxide', ['1x hafnium', '2x oxygen'], 0x88A1A0);      
AnsdDust('sodium_hafnate', ['2x sodium', '1x hafnium', '3x oxygen'], 0x8894A1);      
AnsdDust('barium_diastatide', ['1x barium', '2x astatine'], 0x665058);      
AnsdDust('barium_hydroxide', ['1x barium', '2x hydroxide'], 0xB5AC9B);      
AnsdDustDecomps('barium_carbonate', ['1x barium', '1x carbon', '3x oxygen'], 0x9B8F77);  
AnsdDust('sodium_astatide', ['1x sodium', '1x astatine'], 0x5F5076);
AnsdFluid('hydroastatic_acid', ['1x hydrogen', '1x astatine'], 0xB56C5B);
AnsdFluid('silicic_acid', ['4x hydrogen', '1x silicate'], 0xB4BBBE);    
AnsdDust('seaborgium_cerium_tricarbon_octasulfate', ['1x seaborgium', '1x cerium', '3x carbon', '8x sulfate'], 0x75A99E);
AnsdDust('cerium_4_sulfate', ['1x cerium', '2x sulfate'], 0x828685);
AnsdDustDecomps('chromium_sulfate', ['2x chromium', '3x sulfate'], 0xEEE9DB);
AnsdDustDecomps('cerium_dioxide', ['1x cerium', '2x oxygen'], 0xB9CFDB);
AnsdDust('seaborgium_trisulfate', ['1x seaborgium', '3x sulfate'], 0x8AA89B);
AnsdDust('seaborgium_trioxide', ['1x seaborgium', '3x oxygen'], 0x4B827B);
AnsdDust('sodium_seaborgate', ['2x sodium', '1x seaborgium', '4x oxygen'], 0x298B80);
AnsdDust('seaborgium_dioxide', ['1x seaborgium', '2x oxygen'], 0x12A190);
AnsdDust('hafnium_hexachloride', ['1x hafnium', '6x chlorine'], 0xA0A8A6);      
AnsdDust('hafnium_thorium_iron_magnesium_disilicate_monosulfate', ['1x hafnium', '1x thorium', '1x iron', '2x magnesium', '2x silicate', '1x sulfate'], 0x98B4B0);      
AnsdDust('seaborgium_cerium_tricarbon_tetrakis_orthosilicate', ['1x seaborgium', '1x cerium', '3x carbon', '4x silicate'], 0x268075);      
AnsdDust('iron_2_barium_diastatide_trisulfate', ['2x iron', '1x barium', '2x astatine', '3x sulfate'], 0x9EB286);      
AnsdDust('dipolonium_diplatinum_tris_pyrophosphate', ['2x polonium', '2x platinum', '3x pyrophosphate'], 0xA0664D);
AnsdDust('flerovium_hexadecafluoride_di_sulfur_trioxide', ['1x flerovium', '2x sulfur_trioxide', '16x fluorine'], 0x36413F);
AnsdDustDecomps('silver_sulfate', ['2x silver', '1x sulfate'], 0xD4CF91);
AnsdDust('flerovium_hexadecafluoride', ['1x flerovium', '16x fluorine'], 0x5A6759);
AnsdDust('flerovium_tetrafluoride', ['1x flerovium', '4x fluorine'], 0x254722);
AnsdDust('polonium_pyrophosphate', ['1x polonium', '1x pyrophosphate'], 0x356231);
AnsdFluid('pyrophosphoric_acid', ['4x hydrogen', '1x pyrophosphate'], 0xB3A36D);
AnsdFluid('orthophosphoric_acid', ['3x hydrogen', '1x phosphorus', '4x oxygen'], 0xD5C385);
AnsdDustDecomps('sodium_phosphate', ['3x sodium', '1x phosphorus', '4x oxygen'], 0x819BC8);
AnsdDust('polonium_tetrachloride', ['1x polonium', '4x chlorine'], 0x357C44);
AnsdDust('polonium_hydroxide', ['1x polonium', '4x hydroxide'], 0x0E5A1F);
AnsdDust('polonium_carbonate', ['1x polonium', '1x carbon', '3x oxygen'], 0x2F5637);
ComplexAnsdDust('flerovium_hexaoxide_octafluorosulfatoplutonate', ['1x flerovium', '6x oxygen', '2x sulfur_hexafluoride', '2x plutonium_octofluoride'], 0x582914);      
ComplexAnsdFluid('caesium_oganesson_hexanitrate_tetrafluorouranate', ['2x caesium', '1x oganesson', '6x nitrate', '2x uranium_tetrafluoride'], 0x427A21);      
ComplexAnsdDust('hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate', ['1x hafnium_thorium_iron_magnesium_disilicate_monosulfate', '1x iron_2_barium_diastatide_trisulfate'], 0x6A8B9A);      
ComplexAnsdDust('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate', ['1x seaborgium_cerium_tricarbon_tetrakis_orthosilicate', '1x dipolonium_diplatinum_tris_pyrophosphate'], 0x526A48);      
ComplexAnsdDust('flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth', ['1x flerovium_hexaoxide_octafluorosulfatoplutonate', '6x mystery'], 0x6A4852);      

// Large Multis
const largeMulti = (name,components,color) => {
    event.create(`${name}`)
        .ingot()
        .components(components)
        .color(color)
        .flags(plates, frame, rod)
        .iconSet(DULL)
        .blastTemp(2200, 'low', VA('mv'), 2000);
}

largeMulti('birmabright', ['7x aluminium', '2x magnesium', '1x manganese'], 0xbfbfbf);  
largeMulti('duralumin', ['4x aluminium', '3x copper', '1x magnesium', '1x manganese'], 0x66ccff);  
largeMulti('hydronalium', ['6x aluminium', '3x magnesium', '1x manganese'], 0x660000);  
largeMulti('beryllium_aluminium_alloy', ['7x beryllium', '1x aluminium'], 0x006699);  
largeMulti('elgiloy', ['4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese'], 0xff00ff);  
largeMulti('beryllium_bronze', ['10x copper', '1x beryllium'], 0x003300);  
largeMulti('silicon_bronze', ['32x copper', '2x silicon', '1x manganese'], 0x1a1a1a);  
largeMulti('kovar', ['18x iron', '11x nickel', '6x cobalt'], 0x000080);  
largeMulti('zamak', ['1x zinc', '4x aluminium', '3x copper'], 0x8c8c8c);  
largeMulti('tumbaga', ['20x copper', '6x gold', '1x silver'], 0xffdb4d);  

    // Ultimate (Akreyrium-Tier-Start) Multiblocks
        
    // Thallium-Tungstate and intermediates
    event.create('thallium_tungstate')
        .dust()
        .iconSet(DULL)
        .components('2x thallium', '1x tungsten', '4x oxygen')
        .color(0xE3D18A);

    event.create('tungsten_trioxide')
        .dust()
        .iconSet(DULL)
        .components('1x tungsten', '3x oxygen')
        .color(0xADB426);

    // Boron Nitride and intermediates
    event.create('boron_nitride')
        .dust()
        .iconSet(DULL)
        .components('1x boron', '1x nitrogen')
        .color(0xD4C4A0);

    event.create('boron_trioxide')
        .dust()
        .iconSet(DULL)
        .components('2x boron', '3x oxygen')
        .color(0xDACABB);

    // Hastelloy X Upgrade
    event.create('astrenalloy_nx')
        .ingot()
        .fluid()
        .components('1x hastelloy_x', '4x enriched_naquadah', '3x zirconium', '6x tantalum_carbide', '4x osmiridium', '3x boron_nitride')
        .color(0x63478e)
        .iconSet(SHINY)
        .blastTemp(10090, 'highest', VA('uv'), 2800)
        .flags(plates, rod, frame);
    
    // Incoloy MA-956 upgrade
    event.create('thacoloy_nq_42x')
        .ingot()
        .fluid()
        .components('6x incoloy_ma_956', '4x enriched_naquadah', '2x niobium_titanium', '4x osmiridium', '4x thallium_tungstate')
        .color(0x467624)
        .iconSet(SHINY)
        .blastTemp(10090, 'highest', VA('zpm'), 3400)
        .flags(plates, rod, frame);


    // Akreyium Line
    
    event.create('utopian_akreyrium')
        .fluid()
        .element(GTElements.get('akreyrium'))
        .color(0xFFFFFF);

    event.create('lepton_coalescing_superalloy')
        .ingot()
        .fluid()
        .dust()
        .iconSet(DULL)
        .components('4x thallium_tungstate', '2x nickel', '4x graphene', '3x niobium', '4x bismuth')
        .flags(foil)
        .blastTemp(5300, 'high', VA('luv'), 1400)
        .color(0xe1ccff);

    event.create('lepton_sparse_akreyrium')
        .fluid()
        .flags(no_decomp)
        .components('1x utopian_akreyrium', '1x mystery')
        .color(0x6E6E87);

    event.create('lepton_flux_akreyrium')
        .fluid()
        .flags(no_decomp)
        .components('1x utopian_akreyrium', '6x lepton_coalescing_superalloy', '1x mystery')
        .color(0xaca2ba);

    event.create('gritty_akreyrium')
        .fluid()
        .flags(no_decomp)
        .components('1x utopian_akreyrium', '1x mystery')
        .color(0x464655);

    event.create('akreyrium_pcb_graphite_nanoparticle_coolant')
        .fluid()
        .components('5x pcb_coolant', '2x utopian_akreyrium', '32x graphite')
        .color(0x676763);
    
    // Akreyrium Variants
    event.create('lepton_flavour_foundational_flux')
        .fluid()
        .flags(no_decomp)
        .components('6x lepton_coalescing_superalloy', '1x mystery')
        .color(0xE5CEE1);
    
    // Tau
    event.create('light_tau_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xE5CEE1);

    event.create('heavy_tau_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x light_tau_infusion_flux')
        .color(0xDFDAE9);

    event.create('superlight_tau_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x light_tau_infusion_flux')
        .color(0xD9E7F0);

    event.create('superheavy_tau_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x heavy_tau_infusion_flux')
        .color(0xCCFFFF);

    event.create('ethereal_tau_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('2x superheavy_tau_infusion_flux', '2x superlight_tau_infusion_flux')
        .color(0x99CCFF);

    event.create('sparse_tau_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .flags(no_decomp)
        .components('1x utopian_akreyrium', '1x mystery')

    event.create('dense_tau_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .flags(no_decomp)
        .components('1x utopian_akreyrium', '1x mystery', '1x ethereal_tau_infusion_flux')

    // Muon
    event.create('twinkling_muon_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xDDD8DC);

    event.create('glowing_muon_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xD5E1D6);

    event.create('shining_muon_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xCDEBD1);

    event.create('radiant_muon_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xC5F4CB);

    event.create('brilliant_muon_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xBDFEC6);

    event.create('sparse_muon_akreyrium')
        .flags(no_decomp)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .components('1x utopian_akreyrium', '1x mystery')

    event.create('dense_muon_akreyrium')
        .flags(no_decomp)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .components('1x utopian_akreyrium', '1x mystery', 'brilliant_muon_infusion_flux')


    // Electron

    event.create('mono_phase_electron_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xE0C5F6);

    event.create('di_phase_electron_infusion_agent')
        .dust()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xE0BDED);

    event.create('tri_phase_electron_infusion_agent')
        .dust()
        .flags(no_decomp)
        .iconSet(MAGNETIC)
        .components('1x mystery')
        .color(0xDFB6E4);

    event.create('weak_gamma_phase_electron_infusion_agent')
        .dust()
        .flags(no_decomp)
        .iconSet(MAGNETIC)
        .components('1x mystery')
        .color(0x856783);

    event.create('weak_beta_phase_electron_infusion_agent')
        .dust()
        .flags(no_decomp)
        .iconSet(MAGNETIC)
        .components('1x mystery')
        .color(0x6b4f66);

    event.create('gamma_phase_electron_infusion_agent')
        .dust()
        .flags(no_decomp)
        .iconSet(MAGNETIC)
        .components('1x mystery')
        .color(0xDEAFDC);

    event.create('beta_phase_electron_infusion_agent')
        .dust()
        .flags(no_decomp)
        .iconSet(MAGNETIC)
        .components('1x mystery')
        .color(0xDDA8D3);

    event.create('alpha_phase_electron_infusion_agent')
        .dust()
        .flags(no_decomp)
        .iconSet(MAGNETIC)
        .components('1x mystery')
        .color(0xDC99C1);

    event.create('alternating_phase_electron_infusion_flux')
        .fluid()
        .flags(no_decomp)
        .components('1x mystery')
        .color(0xDEADB3);

    event.create('sparse_electron_akreyrium')
        .flags(no_decomp)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .components('1x utopian_akreyrium', '1x mystery');

    event.create('dense_electron_akreyrium')
        .flags(no_decomp)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .components('1x utopian_akreyrium', '1x mystery', 'alternating_phase_electron_infusion_flux')

    //EPSILON Resource Gen stuff
    function liquid(name, color, composition){
        event.create(name)
            .fluid()
            .components(composition)
            .color(color)
            .flags(no_decomp);
    };

    function dust(name, color, composition){
        event.create(name)
            .dust()
            .color(color)
            .components(composition) 
            .flags(no_decomp);
    };

    liquid('brackish_water', 0x459EA4, ['1x water', '1x mystery'])
    liquid('iron_mixture', 0xC42626, '1x mystery');
    liquid('copper_mixture', 0xC86524, '1x mystery');
    liquid('quartz_mixture', 0xABC5E0, '1x mystery');

    /*/reflective metal
    event.create('reflective_metal')
        .ingot()
        .components('5x aluminium', '3x steel', '2x glowstone')
        .color(0xA1ABBC)
        .flags(plates, rod, frame)
        .iconSet(DULL)
        .blastTemp(2000, 'low', VA('mv'), 600);*/

    liquid('rare_ore_residue', 0x556278, '1x mystery');

    dust('chromite_sludge', 0x4C3C4C, ['2x chromite', '1x mystery']);
    dust('rare_sludge', 0xCCEC94, ['1x mystery']);
    dust('vanadium_magnetite_sludge', 0x1C1C2C, ['2x vanadium_magnetite', '1x mystery']);
    dust('cobaltite_sludge', 0x6186BB, ['2x cobaltite', '1x mystery']);

    dust('rare_metallic_residue', 0x515755, ['1x silver', '2x calcite'])

    liquid('raw_ore_slurry', 0x7B8087, '1x mystery');
    liquid('mixed_mineral_residue', 0x566E6E, '1x mystery');
    liquid('sulfuric_mineral_mixture', 0xE34f1E, '1x mystery');
    liquid('oxygenous_mineral_mixture', 0x359696, '1x mystery');
    

    //molten ores
    function moltenore(name, color, composition, temp){
        event.create(`molten_${name}`)
            .liquid(new GTFluidBuilder().temperature(temp))
            .components(composition)
            .color(color)
            .flags(no_decomp);
    };
    moltenore('ore_mixture', 0x575050, '1x mystery', 1273);
    moltenore('bauxite_ore', 0xB5B69A, '1x bauxite', 1160);
    moltenore('pitchblende_ore', 0xAFC585, '1x pitchblende', 1160);
    moltenore('molybdenite_ore', 0xC1D0A4, '1x molybdenite', 1160);
    moltenore('ilmenite_ore', 0xCBA88F, '1x ilmenite', 1160);
    moltenore('tungstate_ore', 0x9CACB1, '1x tungstate', 1160);
    moltenore('bastnasite_ore',0x988E84, '1x bastnasite', 1160);
    moltenore('cooperite_ore', 0xA4A38B, '1x cooperite', 1160);

    event.create('purified_naquadah')
        .gem()
        .color(0x000807)
        .element(GTElements.get('purified_naquadah')) 
        .flags(no_decomp);

    event.create('indium_oxide')
        .dust()
        .color(0xE3D28E)
        .components('2x indium', '3x oxygen');

    //nether star line essences
    liquid('blitz', 0xFDF3C4, '1x mystery');
    liquid('blizz', 0xB4EFFA, '1x mystery');
    liquid('basalz', 0x6F190E, '1x mystery');

    //UEV Materials
    event.create('nether_star_concentrate')
        .components('1x mystery')
        .fluid()
        .color(0xEEEEEE)
        .flags(no_decomp);

    event.create('aurourium')
        .components('1x mystery')
        .ingot()
        .fluid()
        .color(0x5D44DE)
        .secondaryColor(0xDE44CE)
        .iconSet(SHINY)
        .flags(no_decomp, fine_wire, no_smelt);
       
    event.create('cerium_tritelluride')
        .ingot()
        .components('1x cerium', '3x tellurium')
        .color(0x6D8B5D)
        .iconSet(DULL)
        .blastTemp(11699, 'highest', VA('uhv'), 1800)
        .flags(bolt_and_screw,spring,small_spring)
        .cableProperties(V('uev'), 6, 16, false);

    event.create('bec_og')
        .components('1x oganesson')
        .liquid(new GTFluidBuilder().temperature(0.0001))
        .color(0xBFACFF)
        .flags(no_decomp);

    event.create('superstate_helium_3')
        .components('1x helium_3')
        .liquid(new GTFluidBuilder().temperature(2))
        .color(0xEDFAF5)
        .flags(no_decomp);

    event.create('magmada_alloy')
        .components('4x adamantine', '1x neutronium', '3x tungsten')
        .ingot()
        .fluid()
        .plasma()
        .color(0xDA8607)
        .blastTemp(15049, 'highest', VA('uev'), 3600)
        .iconSet(SHINY)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp, rotor, no_abs_recipe)
        .cableProperties(V('uhv'), 1, 3, false);

    event.create('mythrolic_alloy')
        .components('5x mythril', '2x osmium', '2x tantalum', '1x iridium')
        .ingot()
        .fluid()
        .plasma()
        .color(0x30956C)
        .blastTemp(14999, 'highest', VA('uev'), 3600)
        .iconSet(SHINY)
        .fluidPipeProperties(120000, 6000, true,true,true,true)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, rotor, ring, foil, no_decomp, no_abs_recipe);

    event.create('starium_alloy')
        .components('4x mystery', '2x estalt', '2x pure_netherite')
        .ingot()
        .fluid()
        .plasma()
        .color(0x2253D2)
        .blastTemp(15199, 'highest', VA('uev'), 3600)
        .iconSet(SHINY)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp, no_abs_recipe);

    event.create('seaborgium_palladium_enriched_estalt_flerovium_alloy')
        .ingot()
        .fluid()
        .plasma()
        .components('4x seaborgium', '8x palladium', '3x enriched_estalt', '2x flerovium')
        .color(0x73022B)
        .iconSet(DULL)
        .flags(no_decomp, no_abs_recipe)
        .blastTemp(15469, 'highest', VA('uev'), 1800)
        .cableProperties(V('uev'), 32, 0, true);

    event.create('iron_titanium_oxide')
        .dust()
        .components('3x iron', '2x titanium', '7x oxygen')
        .flags(no_decomp)
        .color(0x82229B);

    event.create('astatine_bis_tritelluride_cobo_selenium')
        .dust()
        .components('1x astatine', '1x bismuth_tritelluride', '4x cobalt', '2x selenium')
        .flags(no_decomp)
        .color(0x123718);

    event.create('astatium_bioselex_carbonite')
        .ingot()
        .fluid()
        .components('1x astatine', '2x bismuth', '3x selenium', '2x thallium', '4x sulfur', '1x carbon')
        .color(0x305F84)
        .iconSet(DULL)
        .flags(spring, no_decomp)
        .blastTemp(14900, 'highest', VA('uv'), 4000)
        .cableProperties(V('uev'), 3, 16, false);

    event.create('astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide')
        .ingot()
        .components('1x astatine_bis_tritelluride_cobo_selenium', 'iron_titanium_oxide')
        .color(0xE61485)
        .iconSet(DULL)
        .flags(fine_wire, bolt_and_screw)
        .blastTemp(14799, 'highest', VA('uhv'), 2500)
        .cableProperties(V('uev'), 2, 12, false);

    //UIV Materials
    event.create('polonium_bismide')
        .ingot()
        .components('1x polonium', '1x bismuth')
        .color(0x016038)
        .iconSet(DULL)
        .blastTemp(14400, 'highest', VA('uev'), 1800)
        .flags(bolt_and_screw,spring,small_spring)
        .cableProperties(V('uiv'), 5, 24, false);
});
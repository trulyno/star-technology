// Ignore this
const $IngotProperty = global.IngotProperty;
const $DustProperty = global.DustProperty;
const $FluidProperty = global.FluidProperty;
const $BlastProperty = global.BlastProperty;

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

    // Material modification
    GTMaterials.Lead.addFlags(gear);
    GTMaterials.Silver.addFlags(gear);
    GTMaterials.Naquadah.addFlags(dense_plate);
    GTMaterials.NaquadahEnriched.addFlags(dense_plate, rotor, gear, frame);
    GTMaterials.Naquadria.addFlags(dense_plate);
    GTMaterials.Neutronium.addFlags(foil, small_gear,rotor);
    GTMaterials.Europium.addFlags(small_spring);
    GTMaterials.Zirconium.addFlags(fine_wire);
    GTMaterials.Hafnium.addFlags(fine_wire); 
    GTMaterials.RedSteel.addFlags(rod, frame);
    GTMaterials.SterlingSilver.addFlags(rod, frame);
    GTMaterials.NetherStar.addFlags(foil);
    GTMaterials.Netherite.addFlags(no_decomp);

    // Blast Properties of periodic table metals
    const blast = global.blastProperty;
    blast('zirconium', 8000, 'higher', VA('zpm'), 800);
    blast('tellurium', 10000, 'higher', VA('zpm'), 700);
    blast('polonium', 10000, 'higher', VA('zpm'), 600);
    blast('astatine', 10000, 'higher', VA('zpm'), 800);
    blast('hafnium', 10000, 'higher', VA('zpm'), 900);
    blast('rhenium', 10000, 'higher', VA('zpm'), 900);
    blast('seaborgium', 10000, 'higher', VA('zpm'), 1000);
    blast('flerovium', 10000, 'higher', VA('luv'), 900);

    // Materials from elements
    event.create('magnetic_zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(MAGNETIC)
        .flags(rod, long_rod, magnetic);

    event.create('zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(DULL)
        .blastTemp(10799, 'highest', VA('uhv'), 1600)
        .flags(plates, rod, frame)
        .fluidPipeProperties(18000, 7200, true,true,true,true);

    event.create('xeproda')
        .ingot()
        .fluid()
        .element(GTElements.get('xeproda'))
        .color(0x1a0d00)
        .iconSet(DULL)
        .blastTemp(15499, 'highest', VA('uev'), 3750);

    event.create('rhexis')
        .ingot()
        .fluid()
        .element(GTElements.get('rhexis'))
        .color(0x330000)
        .iconSet(DULL)
        .blastTemp(15499, 'highest', VA('uiv'), 4750);

    event.create('chalyblux')
        .ingot()
        .fluid()
        .element(GTElements.get('chalyblux'))
        .color(0xffcccc)
        .iconSet(DULL)
        .blastTemp(15499, 'highest', VA('uev'), 5750);

    event.create('mythril')
        .ingot()
        .fluid()
        .element(GTElements.get('mythril'))
        .color(0x006666)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .blastTemp(10299, 'highest', VA('uhv'), 2400)
        .iconSet(METALLIC);

    event.create('adamantine')
        .ingot()
        .fluid()
        .element(GTElements.get('adamantine'))
        .color(0xe99700)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .blastTemp(13299, 'highest', VA('uev'), 3000)
        .iconSet(METALLIC);

    event.create('estalt')
        .ingot()
        .fluid()
        .element(GTElements.get('estalt'))
        .color(0xff5050)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .blastTemp(12299, 'highest', VA('uhv'), 2600)
        .iconSet(DULL);

    event.create('enriched_estalt')
        .ingot()
        .fluid()
        .element(GTElements.get('enriched_estalt'))
        .color(0xE76C6C)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .blastTemp(12899, 'highest', VA('uhv'), 2800)
        .iconSet(RADIOACTIVE);

    event.create('calamatium')
        .ingot()
        .fluid()
        .element(GTElements.get('calamatium'))
        .color(0x660000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .iconSet(DULL)
        .blastTemp(13199, 'highest', VA('uhv'), 2750);

    event.create('isovol')
        .ingot()
        .fluid()
        .element(GTElements.get('isovol'))
        .color(0x290066)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .iconSet(DULL)
        .blastTemp(12999, 'highest', VA('uhv'), 2750);

    // This material is meant to place a ? symbol in a material's chemical formula
    event.create('mystery')
        .element(GTElements.get('mystery'));

    // Thermal Superconductors (twinite and higher rotor values by @richie3366
    event.create('soul_infused')
        .ingot(1)
        .fluid()
        .components('1x invar', '2x mystery') // invar and soul sand
        .color(0xcc9966)
        .iconSet(SHINY)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('lv'), 4, 0, true)
        .rotorStats(150, 130, 3, 37600);

    event.create('signalum')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x copper', '4x redstone')
        .color(0xff3300)
        .iconSet(SHINY)
        .blastTemp(1700, 'low', VA('mv'), 1200)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('mv'), 16, 0, true)
        .rotorStats(190, 150, 3, 24000);

    event.create('lumium')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x tin', '2x glowstone')
        .color(0xffffb3)
        .iconSet(SHINY)
        .blastTemp(1700, 'low', VA('hv'), 1500)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('hv'), 16, 0, true)
        .rotorStats(220, 170, 3, 24000);

    event.create('enderium')
        .ingot(1)
        .fluid()
        .components('3x lead', '1x diamond', '2x ender_pearl')
        .color(0x006666)
        .iconSet(SHINY)
        .blastTemp(3500, 'low', VA('ev'), 1500)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('ev'), 32, 0, true)
        .rotorStats(300, 190, 3, 45600);

    event.create('shellite')
        .ingot(1)
        .fluid()
        .components('1x black_bronze', '3x signalum')
        .color(0x9933ff)
        .iconSet(SHINY)
        .blastTemp(4400, 'mid', VA('iv'), 1800)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('iv'), 64, 0, true)
        .rotorStats(450, 220, 3, 37600);

    event.create('twinite')
        .ingot(1)
        .fluid()
        .components('3x manganese_phosphide', '2x amethyst', '1x lumium')
        .color(0xf66999)
        .iconSet(SHINY)
        .blastTemp(5300, 'mid', VA('luv'), 2100)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('luv'), 64, 0, true)
        .rotorStats(700, 260, 3, 24000);

    event.create('dragonsteel')
        .ingot(1)
        .fluid()
        .components('4x tungsten', '8x magnesium_diboride', '2x cadmium')
        .color(0x3333cc)
        .iconSet(SHINY)
        .blastTemp(7100, 'high', VA('zpm'), 2400)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('zpm'), 96, 0, true)
        .rotorStats(1100, 380, 3, 32000);

    event.create('prismalium')
        .ingot(1)
        .fluid()
        .components('8x naquadah', '4x mercury_barium_calcium_cuprate', '7x tungsten_carbide')
        .color(0x66ffff)
        .iconSet(SHINY)
        .blastTemp(9000, 'high', VA('zpm'), 2700)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uv'), 48, 0, true)
        .rotorStats(1600, 470, 3, 48000);

    event.create('melodium')
        .ingot(1)
        .fluid()
        .components('2x uranium_triplatinum', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium')
        .color(0xd9b3ff)
        .iconSet(SHINY)
        .blastTemp(10000, 'higher', VA('uv'), 3000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uv'), 128, 0, true)
        .rotorStats(2000, 550, 3, 64000);

    event.create('stellarium')
        .ingot(1)
        .fluid()
        .components('12x neutronium', '4x melodium', '1x samarium_iron_arsenic_oxide')
        .color(0xccffff)
        .iconSet(SHINY)
        .blastTemp(10799, 'highest', VA('uhv'), 4000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame, fine_wire)
        .cableProperties(V('uhv'), 192, 0, true)
        .rotorStats(3200, 660, 3, 96000);

    event.create('ancient_runicalium')
        .ingot(2)
        .fluid()
        .components('5x zapolgium', '18x stellarium', '8x zirconium')
        .color(0xFAB922)
        .iconSet(SHINY)
        .blastTemp(11749, 'highest', VA('uev'), 5000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame, fine_wire)
        .cableProperties(V('uev'), 256, 0, true)
        .rotorStats(6400, 720, 3, 128000);

    // Nuclear Reactor Materials
    event.create('austenitic_stainless_steel_304')
        .ingot(1)
        .fluid()
        .components('35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon')
        .color(0x800040)
        .blastTemp(3500, 'low', VA('ev'), 1500)
        .iconSet(METALLIC)
        .flags(plates, rod, frame);

    event.create('inconel_625')
        .ingot()
        .fluid()
        .components('7x nickel', '2x chromium', '1x steel')
        .color(0xa3a375)
        .blastTemp(3500, 'low', VA('ev'), 1500)
        .iconSet(SHINY)
        .flags(plates, rod, frame);

    event.create('nuclear_steam')
        .fluid()
        .components('1x steam', '1x mystery')
        .color(0xcccccc)
        .flags(no_decomp);

    event.create('hot_sodium_potassium')
        .fluid()
        .components('1x sodium_potassium', '1x mystery')
        .color(0x82fcc3)
        .flags(no_decomp);

    event.create('hot_pcb_coolant')
        .fluid()
        .components('1x pcb_coolant', '1x mystery')
        .color(0xc9ca81)
        .flags(no_decomp);

    // Netherite Line
    event.create('debris')
        .dust()
        .liquid()
        .element(GTElements.get('debris'))
        .color(0x804000)
        .flags(no_decomp);

    event.create('purified_debris')
        .dust()
        .components('debris')
        .color(0xcc0000);

    // event.create('netherite')
    //     .dust()
    //     .components('4x debris', '4x gold')
    //     .color(0x1a0d00)
    //     .iconSet(DULL)
    //     .flags(no_decomp);
    
    event.create('chlorine_trifluoride')
        .fluid()
        .components('1x chlorine', '3x fluorine')
        .color(0xb3ff99);

    event.create('tetrachloroethylene')
        .fluid()
        .components('2x carbon', '4x chlorine')
        .color(0xd966ff);

    // Netherite Derivatives/Alloys
    event.create('pure_netherite')
        .ingot()
        .fluid()
        .element(GTElements.get('pure_netherite'))
        .color(0x1a0d00)
        .iconSet(DULL)
        .blastTemp(5000, 'low', VA('iv'), 1200)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring);

    event.create('magnetic_pure_netherite')
        .ingot()
        .element(GTElements.get('pure_netherite'))
        .color(0x1a0d00)
        .iconSet(MAGNETIC)
        .flags(rod, long_rod, magnetic);

    event.create('naquadic_netherite')
        .gem(0)
        .components('3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen')
        .color(0xffd966)
        .iconSet(DIAMOND);

    event.create('weapon_grade_naquadah')
        .ingot()
        .fluid()
        .components('7x naquadria', '2x pure_netherite', '5x neutronium', '16x fluorine')
        .color(0xccff33)
        .iconSet(DULL)
        .blastTemp(10500, 'highest', VHA('uv'), 2700)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame);

    event.create('runic_laser_source_base')
        .gem(0)
        .components('2x naquadic_netherite', '10x tritanium', '2x trinium')
        .color(0x00ff00)
        .iconSet(OPAL);

    // Crown Ethers
    event.create('sulfur_dichloride')
        .fluid()
        .components('1x sulfur', '2x chlorine')
        .color(0xcc0000);

    event.create('thionyl_chloride')
        .fluid()
        .components('1x sulfur', '1x oxygen', '2x chlorine')
        .color(0xffffcc);

    event.create('sulfuryl_chloride')
        .fluid()
        .components('1x sulfur', '2x oxygen', '2x chlorine')
        .color(0xffffcc);

    event.create('triglycol_dichloride')
        .fluid()
        .components('6x carbon', '12x hydrogen', '2x oxygen', '2x chlorine')
        .color(0xffffcc);

    event.create('ethylene_glycol')
        .fluid()
        .components('2x carbon', '6x hydrogen', '2x oxygen')
        .color(0xf2f2f2);

    event.create('diethylene_glycol')
        .fluid()
        .components('4x carbon', '10x hydrogen', '3x oxygen')
        .color(0xf2f2f2);

    event.create('triethylene_glycol')
        .fluid()
        .components('6x carbon', '14x hydrogen', '4x oxygen')
        .color(0xf2f2f2);

    event.create('ethylene_oxide')
        .fluid()
        .components('2x carbon', '4x hydrogen', '1x oxygen')
        .color(0xd9d9d9);

    // event.create('potassium_hydroxide')
    //     .dust()
    //     .components('1x potassium', '1x oxygen', '1x hydrogen')
    //     .color(0xffcc99);

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
        .fluid()
        .components('6x titanite', '2x calaverite','2x sylvanite', '2x tiemannite', '1x strontianite')
        .flags(no_decomp)    
        .color(0xe65c00);

    event.create('abydos_zapolite_rich_magma')
        .fluid()
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
            .flags(no_decomp)
        
        //Estalt Line
        event.create('molten_estaltadyne_mixture')
            .fluid()
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
            .fluid()
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
            .fluid()
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
            .fluid(/*new GTFluidBuilder(this.temperature(9001))*/)
            .components('1x mystery')
            .color(0xFFA025)
            .flags(no_decomp);

        event.create('magmatic')
            .plasma()
            .components('1x mystery','1x iron','1x mystery')
            .color(0xFFD39A)
            .flags(no_decomp);

        event.create('debris_rich_nether_magma')
            .fluid()
            .components('1x mystery')
            .color(0x6C3628)
            .flags(no_decomp);
 
        event.create('mythrillic_nether_magma')
            .fluid()
            .components('1x mystery','1x mythril','1x mystery')
            .color(0x238383)
            .flags(no_decomp);

        event.create('adamantamite_nether_magma')
            .fluid()
            .components('1x mystery','1x adamantine','1x mystery')
            .color(0x826944)
            .flags(no_decomp);

        event.create('estaltadyne_nether_magma')
            .fluid()
            .components('1x mystery','1x estalt','1x mystery')
            .color(0xA92323)
            .flags(no_decomp);

        event.create('mystical_nether_magma')
            .fluid()
            .components('1x mystery','1x adamantine','1x mystery','1x estalt','1x mystery','1x mythril','1x mystery')
            .color(0xF26B87)
            .flags(no_decomp);
        
        event.create('enriched_mystical_concentrate')
            .fluid()
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

    event.create('cerium_tritelluride')
        .ingot()
        .components('1x cerium', '3x tellurium')
        .color(0x6D8B5D)
        .iconSet(DULL)
        .blastTemp(11699, 'highest', VA('uhv'), 1800)
        .flags(bolt_and_screw,spring,small_spring)
        .cableProperties(V('uev'), 6, 16, false);

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

event.create('sulfate')
    .dust()
    .color(0xD5BA23)
    .components('1x sulfur', '4x oxygen');

event.create('silicate')
    .dust()
    .color(0xC0BA97)
    .components('1x silicon', '4x oxygen');

event.create('pyrophosphate')
    .dust()
    .color(0xC08B63)
    .components('2x phosphorus', '7x oxygen');

event.create('sulfur_hexafluoride')
    .dust()
    .color(0xC0BA63)
    .components('1x sulfur', '6x fluorine');

event.create('plutonium_octofluoride')
    .dust()
    .color(0x000000)
    .components('2x plutonium', '8x fluorine')
    .flags(no_decomp);

event.create('uranium_tetrafluoride')
    .dust()
    .color(0x6CAB3F)
    .components('1x uranium', '4x fluorine')
    .flags(no_decomp);

event.create('uranium_dioxide')
    .dust()
    .color(0x528A3C)
    .components('1x uranium', '2x oxygen')
    .flags(no_decomp);

event.create('hafnium_thorium_iron_magnesium_disilicate_monosulfate')
    .dust()
    .color(0x98B4B0)
    .components('1x hafnium', '1x thorium', '1x iron', '2x magnesium', '2x silicate', '1x sulfate')
    .flags(no_decomp);

event.create('seaborgium_cerium_tricarbon_tetrakis_orthosilicate')
    .dust()
    .color(0x268075)
    .components('1x seaborgium', '1x cerium', '3x carbon', '4x silicate')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

event.create('iron_2_barium_diastatide_trisulfate')
    .dust()
    .color(0x9EB286)
    .components('2x iron', '1x barium', '2x astatine', '3x sulfate')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

event.create('dipolonium_diplatinum_tris_pyrophosphate')
    .dust()
    .color(0xA0664D)
    .components('2x polonium', '2x platinum', '3x pyrophosphate')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

event.create('flerovium_hexaoxide_octafluorosulfatoplutonate')
    .dust()
    .color(0x582914)
    .components('1x flerovium', '6x oxygen', '2x sulfur_hexafluoride', '2x plutonium_octofluoride')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

event.create('caesium_oganesson_hexanitrate_tetrafluorouranate')
    .liquid()
    .color(0x427A21)
    .components('2x caesium', '1x oganesson', '6x nitrate', '2x uranium_tetrafluoride')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

event.create('hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate')
    .dust()
    .color(0x6A8B9A)
    .components('1x hafnium_thorium_iron_magnesium_disilicate_monosulfate', '1x iron_2_barium_diastatide_trisulfate')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

event.create('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate')
    .dust()
    .color(0x526A48)
    .components('1x seaborgium_cerium_tricarbon_tetrakis_orthosilicate', '1x dipolonium_diplatinum_tris_pyrophosphate')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

event.create('flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth')
    .dust()
    .color(0x6A4852)
    .components('1x flerovium_hexaoxide_octafluorosulfatoplutonate', '6x mystery')
    .iconSet(RADIOACTIVE)
    .flags(no_decomp);

// Large Multis

event.create('birmabright')
    .ingot()
    .components('7x aluminium', '2x magnesium', '1x manganese')
    .color(0xbfbfbf)
    .flags(plates, frame, rod)
    .iconSet(DULL)
    .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('duralumin')
     .ingot()
     .components('4x aluminium', '3x copper', '1x magnesium', '1x manganese')
     .color(0x66ccff)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('hydronalium')
     .ingot()
     .components('6x aluminium', '3x magnesium', '1x manganese')
     .color(0x660000)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('beryllium_aluminium_alloy')
     .ingot()
     .components('7x beryllium', '1x aluminium')
     .color(0x006699)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('elgiloy')
     .ingot()
     .components('4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese')
     .color(0xff00ff)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('beryllium_bronze')
     .ingot()
     .components('10x copper', '1x beryllium')
     .color(0x003300)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('silicon_bronze')
     .ingot()
     .components('32x copper', '2x silicon', '1x manganese')
     .color(0x1a1a1a)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('kovar')
     .ingot()
     .components('18x iron', '11x nickel', '6x cobalt')
     .color(0x000080)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('zamak')
     .ingot()
     .components('1x zinc', '4x aluminium', '3x copper')
     .color(0x8c8c8c)
     .flags(plates, frame, rod)
     .iconSet(DULL)
     .blastTemp(2200, 'low', VA('mv'), 2000);

 event.create('tumbaga')
     .ingot()
     .components('20x copper', '6x gold', '1x silver')
     .color(0xffdb4d)
     .flags(plates, frame, rod)
     .iconSet(METALLIC)
     .blastTemp(2200, 'low', VA('mv'), 2000);


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

    dust('chromite_sludge', 0x4C3C4C, ['2x chromite', '1x mystery'])
    dust('rare_sludge', 0xCCEC94, ['1x mystery'])
    dust('vanadium_magnetite_sludge', 0x1C1C2C, ['2x vanadium_magnetite', '1x mystery'])

    dust('rare_metallic_residue', 0x515755, ['1x silver', '2x calcite'])

    liquid('raw_ore_slurry', 0x7B8087, '1x mystery');
    liquid('mixed_mineral_residue', 0x566E6E, '1x mystery');
    liquid('sulfuric_mineral_mixture', 0xE34f1E, '1x mystery');
    liquid('oxygenous_mineral_mixture', 0x359696, '1x mystery');
    liquid('molten_ore_mixture', 0x575050, '1x mystery');

    //molten ores
    function moltenore(name, color){
        liquid(`molten_${name}_ore`, color, name)
    };
    
    moltenore('bauxite', 0xB5B69A);
    moltenore('pitchblende', 0xAFC585);
    moltenore('molybdenite', 0xC1D0A4);
    moltenore('ilmenite', 0xCBA88F);
    moltenore('tungstate', 0x9CACB1);
    moltenore('bastnasite',0x988E84);
    liquid('molten_cooperite_ore', 0xA4A38B, '1x cooperite');

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
        
    event.create('bec_og')
        .components('1x oganesson')
        .fluid()
        .color(0xBFACFF)
        .flags(no_decomp);

    event.create('superstate_helium_3')
        .components('1x helium_3')
        .fluid()
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
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp, rotor);

    event.create('mythrolic_alloy')
        .components('5x mythril', '2x osmium', '2x tantalum', '1x iridium')
        .ingot()
        .fluid()
        .plasma()
        .color(0x30956C)
        .blastTemp(14999, 'highest', VA('uev'), 3600)
        .iconSet(SHINY)
        .fluidPipeProperties(120000, 6000, true,true,true,true)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, rotor, ring, foil, no_decomp);

    event.create('starium_alloy')
        .components('4x mystery', '2x estalt', '2x pure_netherite')
        .ingot()
        .fluid()
        .plasma()
        .color(0x2253D2)
        .blastTemp(15199, 'highest', VA('uev'), 3600)
        .iconSet(SHINY)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp);

    event.create('seaborgium_palladium_enriched_estalt_flerovium_alloy')
        .ingot()
        .fluid()
        .plasma()
        .components('4x seaborgium', '8x palladium', '3x enriched_estalt', '2x flerovium')
        .color(0x73022B)
        .iconSet(DULL)
        .flags(no_decomp)
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
        .components('1x astatine', '2x bismuth', '3x selenium', '2x thallium', '4x sulfur', '1x carbon')
        .color(0x305F84)
        .iconSet(DULL)
        .flags(spring, no_decomp)
        .blastTemp(14900, 'higher', VA('uv'), 4000)
        .cableProperties(V('uev'), 3, 16, false);

    event.create('astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide')
        .ingot()
        .components('1x astatine_bis_tritelluride_cobo_selenium', 'iron_titanium_oxide')
        .color(0xE61485)
        .iconSet(DULL)
        .flags(fine_wire, bolt_and_screw)
        .blastTemp(14799, 'highest', VA('uv'), 2500)
        .cableProperties(V('uev'), 2, 12, false);

});
// Ignore this
function elementRegistry(func) { GTCEuStartupEvents.registry('gtceu:element', func); };
function materialRegistry(func) { GTCEuStartupEvents.registry('gtceu:material', func); };
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

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
function V(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.V[GTValues.ULV]; break;
        case 'lv': v = GTValues.V[GTValues.LV]; break;
        case 'mv': v = GTValues.V[GTValues.MV]; break;
        case 'hv': v = GTValues.V[GTValues.HV]; break;
        case 'ev': v = GTValues.V[GTValues.EV]; break;
        case 'iv': v = GTValues.V[GTValues.IV]; break;
        case 'luv': v = GTValues.V[GTValues.LuV]; break;
        case 'zpm': v = GTValues.V[GTValues.ZPM]; break;
        case 'uv': v = GTValues.V[GTValues.UV]; break;
        case 'uhv': v = GTValues.V[GTValues.UHV]; break;
        case 'uev': v = GTValues.V[GTValues.UEV]; break;
        case 'uiv': v = GTValues.V[GTValues.UIV]; break;
        case 'uxv': v = GTValues.V[GTValues.UXV]; break;
        case 'opv': v = GTValues.V[GTValues.OpV]; break;
        case 'max': v = GTValues.V[GTValues.MAX]; break;
    }
    return v;
}

function VA(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VA[GTValues.ULV]; break;
        case 'lv': v = GTValues.VA[GTValues.LV]; break;
        case 'mv': v = GTValues.VA[GTValues.MV]; break;
        case 'hv': v = GTValues.VA[GTValues.HV]; break;
        case 'ev': v = GTValues.VA[GTValues.EV]; break;
        case 'iv': v = GTValues.VA[GTValues.IV]; break;
        case 'luv': v = GTValues.VA[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VA[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VA[GTValues.UV]; break;
        case 'uhv': v = GTValues.VA[GTValues.UHV]; break;
        case 'uev': v = GTValues.VA[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VA[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VA[GTValues.UXV]; break;
        case 'opv': v = GTValues.VA[GTValues.OpV]; break;
        case 'max': v = GTValues.VA[GTValues.MAX]; break;
    }
    return v;
}

function VH(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VH[GTValues.ULV]; break;
        case 'lv': v = GTValues.VH[GTValues.LV]; break;
        case 'mv': v = GTValues.VH[GTValues.MV]; break;
        case 'hv': v = GTValues.VH[GTValues.HV]; break;
        case 'ev': v = GTValues.VH[GTValues.EV]; break;
        case 'iv': v = GTValues.VH[GTValues.IV]; break;
        case 'luv': v = GTValues.VH[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VH[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VH[GTValues.UV]; break;
        case 'uhv': v = GTValues.VH[GTValues.UHV]; break;
        case 'uev': v = GTValues.VH[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VH[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VH[GTValues.UXV]; break;
        case 'opv': v = GTValues.VH[GTValues.OpV]; break;
        case 'max': v = GTValues.VH[GTValues.MAX]; break;
    }
    return V;
}

function VHA(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VHA[GTValues.ULV]; break;
        case 'lv': v = GTValues.VHA[GTValues.LV]; break;
        case 'mv': v = GTValues.VHA[GTValues.MV]; break;
        case 'hv': v = GTValues.VHA[GTValues.HV]; break;
        case 'ev': v = GTValues.VHA[GTValues.EV]; break;
        case 'iv': v = GTValues.VHA[GTValues.IV]; break;
        case 'luv': v = GTValues.VHA[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VHA[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VHA[GTValues.UV]; break;
        case 'uhv': v = GTValues.VHA[GTValues.UHV]; break;
        case 'uev': v = GTValues.VHA[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VHA[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VHA[GTValues.UXV]; break;
        case 'opv': v = GTValues.VHA[GTValues.OpV]; break;
        case 'max': v = GTValues.VHA[GTValues.MAX]; break;
    }
    return V;
}

function periodicTableElement(material, type) {

    let mat = GTMaterials.get(material);
    switch(type) {
        case 'ingot': mat.setProperty(PropertyKey.INGOT, new $IngotProperty()); break;
        case 'dust': mat.setProperty(PropertyKey.DUST, new $DustProperty()); break;
        case 'fluid': case 'gas': case 'plasma': case 'molten': {
            let prop = new $FluidProperty();
            switch(type) {
                case 'fluid': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.LIQUID, new GTFluidBuilder()); break;
                case 'gas': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder()); break;
                case 'plasma': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder()); break;
                case 'molten': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder()); break;
            }
            mat.setProperty(PropertyKey.FLUID, prop); 
            break;
        }  
    }

    // let mat = GTMaterials.get(material);
    // switch(type) {
    //     case 'ingot': mat.setProperty(PropertyKey.INGOT, new $IngotProperty()); break;
    //     case 'dust': mat.setProperty(PropertyKey.DUST, new $DustProperty()); break;
    //     case 'fluid': case 'gas': case 'plasma': case 'molten': {
    //         let prop = new $FluidProperty();
    //         let key;
    //         switch(type) {
    //             case 'fluid': key = GTFluidStorageKeys.LIQUID;
    //             case 'gas': key = GTFluidStorageKeys.GAS;
    //             case 'plasma': key = GTFluidStorageKeys.PLASMA;
    //             case 'molten': key = GTFluidStorageKeys.MOLTEN;
    //         }
    //         prop.getStorage().enqueueRegistration(key, new GTFluidBuilder());
    //         mat.setProperty(PropertyKey.FLUID, prop); 
    //     }
    //         break;
    // }
}

function blastProperty(material, temperature, gasTier, voltage, duration) {
    let mat = GTMaterials.get(material);
    mat.setProperty(PropertyKey.BLAST, new $BlastProperty(temperature, gasTier, voltage, duration));
}

/*
    Elements are the base of gt materials. Registering an element WILL NOT add any items.
    To make a new element(NOTE: you can add only elements that are NOT present on the periodic table),
    write an 'event.create()` call in the bellow registering function.
    Inside the parantheses the following parameters are introduced:
        1. Element Name -> use '' or "" to write the material name.
        2. Proton Count(use -1 if it is not an element that will get a material).
        3. Neutron Count(use -1 if it is not an element that will get a material).
        4. Half Life Seconds(decay stuff. Use -1).
        5. Material to decay to(more decay stuff. Use null).
        6. Atomic Symbol(what will be displayed as in chemical formulas) -> use '' or "" to write the atomic symbol.
        7. Is isotope(even more decay stuff. Use false)
*/
elementRegistry(event => {
    // For the material that will have ? as it's atomic symbol in chemical formulas
    event.create('mystery', -1, -1, -1, null, '?', false);

    // Netherite Line
    event.create('debris', -1, -1, -1, null, '?', false);
    event.create('pure_netherite', 124, 345, -1, null, '*Nr*', false);

    // Classic Stargate
    event.create('echo_r', -1, -1, -1, null, 'Ec', false);

    // Abydos Materials
    event.create('zapolgium', 141, 217, -1, null, 'Zg', false);

    // Nether Materials
    event.create('mythril', 132, 193, -1, null, 'My', false);
    event.create('adamantine', 131, 182, -1, null, 'Ad', false);
    event.create('estalt', 133, 199, -1, null, 'El', false);
    event.create('calamatium', 134, 211, -1, null, 'Ct', false);
    event.create('isovol', 135, 221, -1, null, 'Is', false);

    // End Materials
    event.create('xeproda', 136, 265, -1, null, 'Xp', false);
    event.create('rhexis', 137, 298, -1, null, 'Rx', false);
    event.create('chalyblux', 138, 312, -1, null, 'Cx', false);
});

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
        .fluidPipeProperties()
        .itemPipeProperties()
        .addDefaultEnchant()
        
*/
materialRegistry(event => {

    // Periodic table materials
    // Ingots
    periodicTableElement('zirconium', 'ingot');
    periodicTableElement('tellurium', 'ingot');
    periodicTableElement('polonium', 'ingot');
    periodicTableElement('astatine', 'ingot');
    periodicTableElement('hafnium', 'ingot');
    periodicTableElement('seaborgium', 'ingot');
    periodicTableElement('flerovium', 'ingot');
    periodicTableElement('rhenium', 'ingot');

    // Dusts
    periodicTableElement('selenium', 'dust');
    periodicTableElement('strontium', 'dust');
    periodicTableElement('thallium', 'dust');

    // Liquids


    // Gasses
    // periodicTableElement('iodine', 'gas');
    periodicTableElement('oganesson', 'gas');

    // PLasmas

    // Material modification
    GTMaterials.Lead.addFlags(gear);
    GTMaterials.Silver.addFlags(gear);
    GTMaterials.Naquadah.addFlags(dense_plate);
    GTMaterials.NaquadahEnriched.addFlags(dense_plate);
    GTMaterials.Neutronium.addFlags(foil);
    GTMaterials.Europium.addFlags(small_spring);
    GTMaterials.Zirconium.addFlags(fine_wire); 
    GTMaterials.RedSteel.addFlags(rod, frame);
    GTMaterials.SterlingSilver.addFlags(rod, frame);      

    // Blast Properties of periodic table metals
    blastProperty('zirconium', 8000, 'higher', VA('zpm'), 800);
    blastProperty('tellurium', 10000, 'higher', VA('zpm'), 700);
    blastProperty('polonium', 10000, 'higher', VA('zpm'), 600);
    blastProperty('astatine', 10000, 'higher', VA('zpm'), 800);
    blastProperty('hafnium', 10000, 'higher', VA('zpm'), 900);
    blastProperty('rhenium', 10000, 'higher', VA('zpm'), 900);
    blastProperty('seaborgium', 10000, 'higher', VA('zpm'), 1000);
    blastProperty('flerovium', 10000, 'higher', VA('luv'), 900);

    // Materials from elements
    event.create('magnetic_zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(magnetic)
        .ingotSmeltInto(GTMaterials.get('zapolgium'))
        .arcSmeltInto(GTMaterials.get('zapolgium'))
        .macerateInto(GTMaterials.get('zapolgium'))
        .flags(rod, long_rod, magnetic);

    event.create('zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(DULL)
        .polarizesInto(GTMaterials.get('magnetic_zapolgium'))
        .blastTemp(10799, 'highest', VA('uhv'), 1600);

    event.create('xeproda')
        .ingot()
        .fluid()
        .element(GTElements.get('xeproda'))
        .color(0x1a0d00)
        .iconSet(DULL)
        .blastTemp(12499, 'highest', VA('uv'), 3750);

    event.create('rhexis')
        .ingot()
        .fluid()
        .element(GTElements.get('rhexis'))
        .color(0x330000)
        .iconSet(DULL)
        .blastTemp(12499, 'highest', VA('uv'), 4750);

    event.create('chalyblux')
        .ingot()
        .fluid()
        .element(GTElements.get('chalyblux'))
        .color(0xffcccc)
        .iconSet(DULL)
        .blastTemp(12499, 'highest', VA('uv'), 5750);

    event.create('mythril')
        .ingot()
        .fluid()
        .element(GTElements.get('mythril'))
        .color(0x006666)
        .blastTemp(10299, 'highest', VA('zpm'), 3000)
        .iconSet(METALLIC);

    event.create('adamantine')
        .ingot()
        .fluid()
        .element(GTElements.get('adamantine'))
        .color(0xe60000)
        .blastTemp(10299, 'highest', VA('zpm'), 3000)
        .iconSet(METALLIC);

    event.create('estalt')
        .ingot()
        .fluid()
        .element(GTElements.get('estalt'))
        .color(0xff5050)
        .blastTemp(10299, 'highest', VA('zpm'), 3000)
        .iconSet(DULL);

    event.create('calamatium')
        .ingot()
        .fluid()
        .element(GTElements.get('calamatium'))
        .color(0x660000)
        .iconSet(DULL)
        .blastTemp(11799, 'highest', VA('uv'), 2750);

    event.create('isovol')
        .ingot()
        .fluid()
        .element(GTElements.get('isovol'))
        .color(0x290066)
        .iconSet(DULL)
        .blastTemp(12499, 'highest', VA('uv'), 2750);

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
        .rotorStats(140, 130, 3, 37600);

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
        .rotorStats(130, 140, 3, 24000);

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
        .rotorStats(150, 130, 3, 24000);

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
        .rotorStats(130, 160, 3, 45600);

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
        .rotorStats(140, 150, 3, 37600);

    event.create('twinite')
        .ingot(1)
        .fluid()
        .components('3x enderium', '2x amethyst', '1x lumium')
        .color(0xf66999)
        .iconSet(SHINY)
        .blastTemp(5300, 'mid', VA('luv'), 2100)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('luv'), 64, 0, true)
        .rotorStats(400, 200, 3, 24000);

    event.create('dragonsteel')
        .ingot(1)
        .fluid()
        .components('4x tungsten', '8x shellite', '2x twinite')
        .color(0x3333cc)
        .iconSet(SHINY)
        .blastTemp(7100, 'high', VA('zpm'), 2400)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('zpm'), 64, 0, true)
        .rotorStats(800, 400, 3, 32000);

    event.create('prismalium')
        .ingot(1)
        .fluid()
        .components('8x naquadah', '4x shellite', '7x tungsten_carbide')
        .color(0x66ffff)
        .iconSet(SHINY)
        .blastTemp(9000, 'high', VA('zpm'), 2700)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uv'), 32, 0, true)
        .rotorStats(1600, 800, 3, 48000);

    event.create('melodium')
        .ingot(1)
        .fluid()
        .components('2x mercury_barium_calcium_cuprate', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium')
        .color(0xd9b3ff)
        .iconSet(SHINY)
        .blastTemp(10000, 'higher', VA('uv'), 3000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uv'), 256, 0, true)
        .rotorStats(3200, 1600, 3, 64000);

    event.create('stellarium')
        .ingot(1)
        .fluid()
        .components('12x neutronium', '4x melodium', '1x dragonsteel')
        .color(0xccffff)
        .iconSet(SHINY)
        .blastTemp(10799, 'highest', VA('uhv'), 6000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uhv'), 512, 0, true)
        .rotorStats(6400, 3200, 3, 96000);

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

    event.create('hot_pcbcoolant')
        .fluid()
        .components('1x pcb_coolant', '1x mystery')
        .color(0xc9ca81)
        .flags(no_decomp);

    // Netherite Line
    event.create('debris')
        .dust()
        .element(GTElements.get('debris'))
        .color(0x804000);

    event.create('purified_debris')
        .dust()
        .components('debris')
        .color(0xcc0000);

    event.create('netherite')
        .dust()
        .components('4x debris', '4x gold')
        .color(0x1a0d00)
        .iconSet(DULL)
        .flags(no_decomp);
    
    event.create('chlorine_trifluoride')
        .fluid()
        .components('1x chlorine', '3x fluorine')
        .color(0xb3ff99);

    // event.create('dichloroethane')
    //     .fluid()
    //     .components('2x carbon', '4x hydrogen', '2x chlorine')
    //     .color(0x99ccff);

    event.create('tetrachloroethylene')
        .fluid()
        .components('2x carbon', '4x chlorine')
        .color(0xd966ff);

    // Netherite Derivatives/Alloys
    event.create('pure_netherite')
        .ingot()
        .element(GTElements.get('pure_netherite'))
        .color(0x1a0d00)
        .iconSet(DULL)
        .blastTemp(3300, 'low', VA('ev'), 1200)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring);

    event.create('naquadic_netherite')
        .gem(0)
        .components('3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen')
        .color(0xffd966)
        .iconSet(DIAMOND);

    event.create('weapon_grade_naquadah')
        .ingot()
        .components('7x naquadria', '2x pure_netherite', '5x neutronium', '16x fluorine')
        .color(0xccff33)
        .iconSet(DULL)
        .blastTemp(10500, 'low', VA('zpm'), 6000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame);

    event.create('screret_runic_laser_source_base')
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
        .iconSet(DULL);

    event.create('void')
        .components('1x echo_r', '1x neutronium')
        .ingot(1)
        .blastTemp(10799, 'highest', VA('uev'), 8000)
        .color(0x001a1a)
        .iconSet(DULL)
        .flags(rod, long_rod);
    
    // Extras
    event.create('trinaquadalloy')
        .ingot().fluid()
        .color(0x281832)
        .iconSet(BRIGHT)
        .flags(plates, rod, frame, fine_wire, foil)
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

    event.create('nether_rare_earth')
        .dust()
        .components('1x mystery')
        .color(0x800000)
        .flags(no_decomp);

    event.create('sodium_fluoride')
        .dust()
        .components('1x sodium', '1x fluorine')
        .color(0x6600ff);

    event.create('polonium_dioxide')
        .dust()
        .components('1x polonium', '2x oxygen')
        .color(0xcccccc);

    event.create('astatine_oxide')
        .dust()
        .components('1x astatine', '3x oxygen')
        .color(0xcccc00);

    event.create('lanthanum_triastatate')
        .dust()
        .components('1x lanthanum', '3x astatine_oxide')
        .color(0xcccccc);

    event.create('hafnium_diboride')
        .dust()
        .components('1x hafnium', '2x boron')
        .color(0x0066cc);

    event.create('seaborgium_oxychloride')
        .dust()
        .components('1x seaborgium', '2x oxygen', '2x chlorine')
        .color(0x669900);

    event.create('flerovium_oxide')
        .dust()
        .components('2x flerovium', '4x oxygen')
        .color(0x669999);

    event.create('oganesson_diiodide')
        .fluid()
        .components('1x oganesson', '2x iodine')
        .color(0xffcccc);

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
    // Abydos
    event.create('titanite')
        .dust()
        .ore(4, 3)
        .components('1x calcium', '1x titanium', '1x silicon', '5x oxygen')
        .color(0x66ffff);

    event.create('zapolite')
        .dust()
        .ore(4, 3)
        .components('2x zapolgium', '4x iodine', '2x aluminium', '5x oxygen')
        .color(0xcc0099)
        .flags(no_decomp);

    event.create('lautarite')
        .dust()
        .ore(4, 3)
        .components('1x calcium', '2x iodine', '6x oxygen')
        .color(0x6666ff);

    event.create('iodargyrite')
        .dust()
        .ore(4, 3)
        .components('1x silver', '1x iodine')
        .color(0x8080ff);

    event.create('clausthalite')
        .dust()
        .ore(4, 3)
        .components('1x lead', '1x selenium')
        .color(0x666633);

    event.create('crookesite')
        .dust()
        .ore(4, 3)
        .components('7x copper', '1x thallium', '4x selenium')
        .color(0x00ff99)

    event.create('calaverite')
        .dust()
        .ore(4, 3)
        .components('1x gold', '2x tellurium')
        .color(0xcc9900);

    event.create('sylvanite')
        .dust()
        .ore(4, 3)
        .components('1x silver', '2x tellurium')
        .color(0xff5050);

    event.create('tiemannite')
        .dust()
        .ore(4, 3)
        .components('1x mercury', '1x selenium')
        .color(0xcc0066);

    event.create('klockmannite')
        .dust()
        .ore(4, 3)
        .components('1x copper', '1x selenium')
        .color(0x009999);

    event.create('stibiopalladinite')
        .dust()
        .ore(4, 3)
        .components('5x palladium', '2x antimony')
        .color(0x333399);

    event.create('berzelianite')
        .dust()
        .ore(4, 3)
        .components('2x copper', '1x selenium')
        .color(0x990000);

    event.create('umangite')
        .dust()
        .ore(4, 3)
        .components('3x copper', '2x selenium')
        .color(0x006699);

    event.create('aguilarite')
        .dust()
        .ore(4, 3)
        .components('3x silver', '1x selenium', '1x sulfur')
        .color(0xff5050);

    event.create('polybasite')
        .dust()
        .components('12x silver', '4x copper', '2x arsenic', '13x sulfur')
        .color(0xcc6600);

    event.create('abydos_titanite_rich_magma')
        .fluid()
        .components('5x titanite', '2x calaverite', '2x sylvanite', '1x tiemannite')
        .color(0xe65c00);

    event.create('abydos_zapolite_rich_magma')
        .fluid()
        .components('7x zapolite', '3x iodargyrite', '2x clausthalite', '4x crookesite')
        .color(0xff471a);

    event.create('strontianite')
        .gem()
        .ore(4, 3)
        .components('1x strontium', '1x carbon', '3x oxygen')
        .color(0xe6ffff)
        .iconSet(GEM_HORIZONTAL);

    event.create('celestine')
        .gem()
        .ore(4, 3)
        .components('1x strontium', '1x carbon', '4x oxygen')
        .color(0xe6ffff)
        .iconSet(GEM_VERTICAL);

    // Nether
    event.create('mythrilium')
        .dust()
        .ore(4, 2)
        .components('1x mythril', '1x silicon', '6x fluorine')
        .color(0x660033)
        .flags(no_decomp);

    event.create('adamantite')
        .dust()
        .ore(4, 2)
        .components('1x adamantine', '3x fluorine', '1x antimony')
        .color(0x3333cc)
        .flags(no_decomp);

    event.create('estaltine')
        .dust()
        .ore(4, 2)
        .components('4x estalt', '1x sulfur')
        .color(0x800000)
        .flags(no_decomp);

    event.create('rheniite')
        .dust()
        .ore(4, 2)
        .components('1x rhenium', '2x sulfur')
        .color(0x4e6344)
        .flags(no_decomp);

    event.create('nether_mythrilium_rich_magma')
        .fluid()
        .components('5x mythrilium')
        .color(0x333300);

    event.create('nether_adamantite_rich_magma')
        .fluid()
        .components('5x adamantite')
        .color(0x660000);

    event.create('nether_estaltine_rich_magma')
        .fluid()
        .components('5x estaltine')
        .color(0x009999);

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
        .components('1x sodium', '1x rutile', '2x oxygen', '2x hydrogen', '1x mystery')
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
        .flags(fine_wire)
        .blastTemp(10299, 'highest', VA('uv'), 2500)
        .cableProperties(V('uhv'), 4, 0, true);

    event.create('star_steel')
        .ingot()
        .fluid()
        .components('2x steel', '1x mystery')
        .color(0xccffcc)
        .flags(no_decomp, plates, rod, frame)
        .iconSet(METALLIC);

    // Mythril Line
    event.create('trichloromythrilium')
        .dust()
        .components('1x mythril', '3x chlorine')
        .color(0x333300)
        .flags(no_decomp);

    event.create('mythrilium_oxide')
        .dust()
        .components('1x mythril', '1x oxygen')
        .color(0x003300)
        .flags(no_decomp);

    // Adamantium Line
    event.create('adamantite_hydroxide')
        .dust()
        .components('1x adamantine', '3x oxygen', '3x hydrogen')
        .color(0xcc0099)
        .flags(no_decomp);

    event.create('adamantite_oxide')
        .dust()
        .components('2x adamantine', '3x oxygen')
        .color(0xcc6699)
        .flags(no_decomp);

    // Estalt Line
    event.create('estaltine_sulfate')
        .dust()
        .components('1x estalt', '2x sulfur', '8x oxygen')
        .color(0xcc6699)
        .flags(no_decomp);

    event.create('estaltine_fluoride')
        .dust()
        .components('1x estalt', '4x fluorine')
        .color(0xffcc66)
        .flags(no_decomp);

    event.create('estaltine_hydroxide')
        .dust()
        .components('1x estalt', '4x oxygen', '4x hydrogen')
        .color(0xff3300)
        .flags(no_decomp);

    event.create('estaltine_oxide')
        .dust()
        .components('1x estalt', '2x oxygen')
        .color(0x990000)
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
        .color(0x333333);

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
        .flags(foil, plates, ring);
    
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
});

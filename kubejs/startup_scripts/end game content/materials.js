priority: 0

const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('echo', -1, -1, -1, null, 'Ec', false);
    event.create('zapolgium', 141, 217, -1, null, 'Zg', false);
    event.create('uhh', -1, -1, -1, null, '?', false);
    event.create('mythril', 132, 193, -1, null, 'My', false);
    event.create('adamantine', 131, 182, -1, null, 'Ad', false);
    event.create('estalt', 133, 199, -1, null, 'El', false);
    event.create('calamatium', 134, 211, -1, null, 'Ct', false);
    event.create('isovol', 135, 221, -1, null, 'Is', false);
    event.create('xeproda', 136, 265, -1, null, 'Xp', false);
    event.create('rhexis', 137, 298, -1, null, 'Rx', false);
    event.create('chalyblux', 138, 312, -1, null, 'Cx', false);
});

GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Oganesson.setProperty(PropertyKey.FLUID, new $FluidProperty());
    GTMaterials.Oganesson.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder())
    GTMaterials.Iodine.setProperty(PropertyKey.FLUID, new $FluidProperty());
    GTMaterials.Iodine.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder())

    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Zirconium.setProperty(PropertyKey.BLAST, new $BlastProperty(8000, 'higher', GTValues.V[GTValues.LuV], 800));
    GTMaterials.Selenium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Strontium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Thulium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Tellurium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Tellurium.setProperty(PropertyKey.BLAST, new $BlastProperty(10000, 'higher', GTValues.VA[GTValues.ZPM], 700));
    GTMaterials.Polonium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Polonium.setProperty(PropertyKey.BLAST, new $BlastProperty(10000, 'higher', GTValues.VA[GTValues.ZPM], 600));
    GTMaterials.Astatine.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Astatine.setProperty(PropertyKey.BLAST, new $BlastProperty(10000, 'higher', GTValues.VA[GTValues.ZPM], 800));
    GTMaterials.Hafnium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Hafnium.setProperty(PropertyKey.BLAST, new $BlastProperty(10000, 'higher', GTValues.VA[GTValues.ZPM], 900));
    GTMaterials.Seaborgium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Seaborgium.setProperty(PropertyKey.BLAST, new $BlastProperty(10000, 'higher', GTValues.VA[GTValues.ZPM], 1000));
    GTMaterials.Flerovium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Flerovium.setProperty(PropertyKey.BLAST, new $BlastProperty(10000, 'higher', GTValues.VA[GTValues.LuV], 900));
    

    GTMaterials.Zirconium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);

    event.create('uhh')
        .element(GTElements.get('uhh'));

    event.create('echo')
        .element(GTElements.get('echo'))
        .fluid()
        .color(0x003333)
        .iconSet(GTMaterialIconSet.DULL);

    event.create('raw_void')
        .components('1x echo', '1x neutronium')
        .ingot(1)
        .color(0x006666)
        .iconSet(GTMaterialIconSet.DULL);

    event.create('void')
        .components('1x echo', '1x neutronium')
        .ingot(1)
        .blastTemp(10799, $BlastProperty.GasTier.HIGHEST, GTValues.VA[GTValues.UEV], 8000)
        .color(0x001a1a)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD);

    event.create('trinaquadalloy')
        .ingot().fluid()
        .color(0x281832)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', GTValues.VA[GTValues.ZPM], 1200)

    event.create('perchloric_acid')
        .fluid()
        .components('1x hydrogen', '1x chlorine', '4x oxygen')
        .color(0xffe6e6);

    event.create('zapolgium')
        .ingot()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(10799, 'highest', GTValues.VA[GTValues.UHV], 1600);

    event.create('magnetic_zapolgium')
        .ingot()
        .components('1x zapolgium')
        .color(0xcc00cc)
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .ingotSmeltInto(GTMaterials.get('zapolgium'))
        .arcSmeltInto(GTMaterials.get('zapolgium'))
        .macerateInto(GTMaterials.get('zapolgium'))
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC)

    event.create('titanite')
        .dust()
        .ore(4, 3)
        .components('1x calcium', '1x titanium', '1x silicon', '5x oxygen')
        .color(0x66ffff);

    event.create('titanite_slurry')
        .fluid()
        .components('1x titanite', '1x uhh')
        .color(0x862d2d)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('calcium_perchlorate')
        .dust()
        .components('1x calcium', '2x chlorine', '8x oxygen')
        .color(0xffff99);

    event.create('silica_gel')
        .fluid()
        .components('1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon')
        .color(0xe6e6e6)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('titanite_slurry_residue')
        .fluid()
        .components('1x rutile', '1x uhh')
        .color(0xbf4040)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('calcium_sulfate')
        .dust()
        .components('1x calcium', '1x sulfur', '4x oxygen')
        .color(0xffbf80);

    event.create('hydroxo_dioxo_titanite_mixture')
        .fluid()
        .components('1x sodium', '1x rutile', '2x oxygen', '2x hydrogen', '1x uhh')
        .color(0xd27979)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('sodium_oxide')
        .dust()
        .components('2x sodium', '1x oxygen')
        .color(0x6666ff);

    event.create('titanite_residue')
        .fluid()
        .components('1x rutile', '1x uhh')
        .color(0xe6004c)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('titanium_tetrachloride_mixture')
        .fluid()
        .components('1x titanium_tetrachloride', '1x uhh')
        .color(0xff1a66)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('zirconium_tetrachloride')
        .dust()
        .components('1x zirconium', '4x chlorine')
        .color(0xffad33)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('zapolite')
        .dust()
        .ore(4, 3)
        .components('2x zapolgium', '4x iodine', '2x aluminium', '5x oxygen')
        .color(0xcc0099)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
        
    event.create('zapolgium_aluminium_oxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '2x aluminium', '4x oxygen')
        .color(0x6666ff)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('zapolgium_diiodide_dioxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '2x oxygen')
        .color(0x660066)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('zapolgium_diiodide_oxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '1x oxygen')
        .color(0xff66ff)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('zapolgium_oxide')
        .dust()
        .components('1x zapolgium', '1x oxygen')
        .color(0xff9933)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('zapolgium_chloride')
        .dust()
        .components('1x zapolgium', '2x chlorine')
        .color(0x99ff33)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('zapolgium_hydroxide')
        .dust()
        .components('1x zapolgium', '2x oxygen', '2x hydrogen')
        .color(0x00ff99)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('lautarite')
        .dust()
        .ore(4, 3)
        .components('1x calcium', '2x iodine', '6x oxygen')
        .color(0x6666ff);

    // event.create('iodic_acid')
    //     .fluid()
    //     .components('1x hydrogen', '1x iodine', '3x oxygen')
    //     .color(0xcc33ff);

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
        .components('7x copper', '1x thulium', '4x selenium')
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

    event.create('zalloy')
        .ingot()
        .fluid()
        .components('3x zapolgium', '4x duranium', '2x europium')
        .color(0xff66ff)
        .iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(10799, 'highest', GTValues.VA[GTValues.LuV], 6000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING)
        .cableProperties(GTValues.V[GTValues.UV], 2, 4, false);

    event.create('zirconium_selenide_diiodide')
        .ingot()
        .fluid()
        .components('1x zirconium', '1x selenium', '2x iodine')
        .color(0x6600cc)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(8900, 'higher', GTValues.VA[GTValues.LuV], 4000)
        .cableProperties(GTValues.V[GTValues.UHV], 8, 16, false);

    event.create('indium_tin_lead_cadmium_soldering_alloy')
        .ingot()
        .fluid()
        .components('14x indium', '3x tin', '2x lead', '1x cadmium')
        .color(0xa6a6a6)
        .iconSet(GTMaterialIconSet.DULL);

    event.create('zircalloy_4')
        .ingot()
        .fluid()
        .components('251x zirconium', '3x tin', '2x chromium', '1x iron')
        .color(0xff9999)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(8900, 'higher', GTValues.VA[GTValues.LuV], 2000)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROTOR);

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

    event.create('iron_selenide_over_strontium_titanium_oxide')
        .ingot()
        .components('1x iron_selenide', '1x strontium_titanium_oxide')
        .color(0x66ff33)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(10299, 'highest', GTValues.VA[GTValues.UV], 2500)
        .cableProperties(GTValues.V[GTValues.UHV], 4, 0, true);

    event.create('strontianite')
        .gem()
        .ore(4, 3)
        .components('1x strontium', '1x carbon', '3x oxygen')
        .color(0xe6ffff)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL);

    event.create('celestine')
        .gem()
        .ore(4, 3)
        .components('1x strontium', '1x carbon', '4x oxygen')
        .color(0xe6ffff)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL);

    event.create('mythril')
        .ingot()
        .fluid()
        .element(GTElements.get('mythril'))
        .color(0x006666)
        .blastTemp(10299, 'highest', GTValues.VA[GTValues.ZPM], 3000)
        .iconSet(GTMaterialIconSet.METALLIC);

    event.create('adamantine')
        .ingot()
        .fluid()
        .element(GTElements.get('adamantine'))
        .color(0xe60000)
        .blastTemp(10299, 'highest', GTValues.VA[GTValues.ZPM], 3000)
        .iconSet(GTMaterialIconSet.METALLIC);

    event.create('estalt')
        .ingot()
        .fluid()
        .element(GTElements.get('estalt'))
        .color(0xff5050)
        .blastTemp(10299, 'highest', GTValues.VA[GTValues.ZPM], 3000)
        .iconSet(GTMaterialIconSet.DULL);

    event.create('mythrilium')
        .dust()
        .ore(4, 2)
        .components('1x mythril', '1x silicon', '6x fluorine')
        .color(0x660033)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('trichloromythrilium')
        .dust()
        .components('1x mythril', '3x chlorine')
        .color(0x333300)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('mythrilium_oxide')
        .dust()
        .components('1x mythril', '1x oxygen')
        .color(0x003300)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('nether_rare_earth')
        .dust()
        .components('1x uhh')
        .color(0x800000)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('adamantite')
        .dust()
        .ore(4, 2)
        .components('1x adamantine', '3x fluorine', '1x antimony')
        .color(0x3333cc)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('adamantite_hydroxide')
        .dust()
        .components('1x adamantine', '3x oxygen', '3x hydrogen')
        .color(0xcc0099)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('adamantite_oxide')
        .dust()
        .components('2x adamantine', '3x oxygen')
        .color(0xcc6699)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('sodium_fluoride')
        .dust()
        .components('1x sodium', '1x fluorine')
        .color(0x6600ff);

    event.create('estaltine')
        .dust()
        .ore(4, 2)
        .components('4x estalt', '1x sulfur')
        .color(0x800000)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('estaltine_sulfate')
        .dust()
        .components('1x estalt', '2x sulfur', '8x oxygen')
        .color(0xcc6699)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('estaltine_fluoride')
        .dust()
        .components('1x estalt', '4x fluorine')
        .color(0xffcc66)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('estaltine_hydroxide')
        .dust()
        .components('1x estalt', '4x oxygen', '4x hydrogen')
        .color(0xff3300)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('estaltine_oxide')
        .dust()
        .components('1x estalt', '2x oxygen')
        .color(0x990000)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

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

    event.create('npk_solution')
        .fluid()
        .color(0xb8c3f5);

    event.create('calamatium')
        .ingot()
        .fluid()
        .element(GTElements.get('calamatium'))
        .color(0x660000)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(11799, 'highest', GTValues.VA[GTValues.UV], 2750);

    event.create('isovol')
        .ingot()
        .fluid()
        .element(GTElements.get('isovol'))
        .color(0x290066)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(12499, 'highest', GTValues.VA[GTValues.UV], 2750);

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
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('isovol_fluoride')
        .dust()
        .components('1x isovol', '2x fluorine')
        .color(0x9900ff)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('xeproda')
        .ingot()
        .fluid()
        .element(GTElements.get('xeproda'))
        .color(0x1a0d00)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(12499, 'highest', GTValues.VA[GTValues.UV], 3750);

    event.create('rhexis')
        .ingot()
        .fluid()
        .element(GTElements.get('rhexis'))
        .color(0x330000)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(12499, 'highest', GTValues.VA[GTValues.UV], 4750);

    event.create('chalyblux')
        .ingot()
        .fluid()
        .element(GTElements.get('chalyblux'))
        .color(0xffcccc)
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(12499, 'highest', GTValues.VA[GTValues.UV], 5750);
    
});
priority: 0

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('mystery', -1, -1, -1, null, '?', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('mystery')
        .element(GTElements.get('mystery'));
})

const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {

    // const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
    //const $PlasmaProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PlasmaProperty')

    //GTMaterials.Milk.setProperty($PropertyKey.PLASMA, new $PlasmaProperty());  
    GTMaterials.Lead.addFlags(GTMaterialFlags.GENERATE_GEAR);
    GTMaterials.Silver.addFlags(GTMaterialFlags.GENERATE_GEAR); 

    // thermal materials
    event.create('soul_infused')
        .ingot(1)
        .fluid()
        .components('1x invar', '2x mystery') // invar and soul sand
        .color(0xcc9966)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.LV], 4, 0, true);

    event.create('signalum')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x copper', '4x redstone')
        .color(0xff3300)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(1700, $BlastProperty.GasTier.LOW, GTValues.VA[GTValues.MV], 1200)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.MV], 16, 0, true);

    event.create('lumium')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x tin', '2x glowstone')
        .color(0xffffb3)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(1700, $BlastProperty.GasTier.LOW, GTValues.VA[GTValues.HV], 1500)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.HV], 16, 0, true);

    event.create('enderium')
        .ingot(1)
        .fluid()
        .components('3x lead', '1x diamond', '2x ender_pearl')
        .color(0x006666)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(3500, $BlastProperty.GasTier.LOW, GTValues.VA[GTValues.EV], 1500)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.EV], 32, 0, true);

    event.create('shellite')
        .ingot(1)
        .components('1x black_bronze', '3x signalum')
        .color(0x9933ff)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(4400, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.IV], 1800)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.IV], 64, 0, true);

    event.create('twinite')
        .ingot(1)
        .components('3x enderium', '2x amethyst', '1x lumium')
        .color(0xf66999)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(5300, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.LuV], 2100)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.LuV], 64, 0, true);

    event.create('dragonsteel')
        .ingot(1)
        .components('4x tungsten', '8x shellite', '2x twinite')
        .color(0x3333cc)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(7100, $BlastProperty.GasTier.HIGH, GTValues.VA[GTValues.ZPM], 2400)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.ZPM], 64, 0, true);

    event.create('prismalium')
        .ingot(1)
        .fluid()
        .components('8x naquadah', '4x shellite', '7x tungsten_carbide')
        .color(0x66ffff)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(9000, $BlastProperty.GasTier.HIGH, GTValues.VA[GTValues.ZPM], 2700)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.UV], 32, 0, true);

    event.create('melodium')
        .ingot(1)
        .fluid()
        .components('2x mercury_barium_calcium_cuprate', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium')
        .color(0xd9b3ff)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(10000, $BlastProperty.GasTier.HIGHER, GTValues.VA[GTValues.UV], 3000)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.UV], 256, 0, true);

    event.create('stellarium')
        .ingot(1)
        .fluid()
        .components('12x neutronium', '4x melodium', '1x dragonsteel')
        .color(0xccffff)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(10799, $BlastProperty.GasTier.HIGHEST, GTValues.VA[GTValues.UHV], 6000)
        .flags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.UHV], 512, 0, true);
});





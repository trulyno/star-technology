
StartupEvents.registry('block', event => {

    event.create('zalloy_coil_block', 'gtceu:coil')
        .temperature(13499)
        .level(24)
        .energyDiscount(16)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('zalloy'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .material('metal');

});
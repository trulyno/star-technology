
StartupEvents.registry('block', event => {

    event.create('zalloy_coil_block', 'gtceu:coil')
        .temperature(13499)
        .level(24)
        .energyDiscount(12)
        .tier(8)
        .coilMaterial(() => GTMaterials.get('zalloy'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .material('metal');

    event.create('magmadamantite_coil_block', 'gtceu:coil')
        .temperature(16199)
        .level(32)
        .energyDiscount(16)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('magmadamantite'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .material('metal');

});


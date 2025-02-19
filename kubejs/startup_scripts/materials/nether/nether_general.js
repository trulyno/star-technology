// priority: 100

GTCEuStartupEvents.registry('gtceu:material', event => {

    const va = global.va;
    const dull = global.iconSets.dull;
    const metallic = global.iconSets.metallic;

    event.create('xeproda')
        .ingot()
        .fluid()
        .element(GTElements.get('xeproda'))
        .color(0x1a0d00)
        .iconSet(dull)
        .blastTemp(12499, 'highest', va.uv, 3750);

    event.create('rhexis')
        .ingot()
        .fluid()
        .element(GTElements.get('rhexis'))
        .color(0x330000)
        .iconSet(dull)
        .blastTemp(12499, 'highest', va.uv, 4750);

    event.create('chalyblux')
        .ingot()
        .fluid()
        .element(GTElements.get('chalyblux'))
        .color(0xffcccc)
        .iconSet(dull)
        .blastTemp(12499, 'highest', va.uv, 5750);

    event.create('mythril')
        .ingot()
        .fluid()
        .element(GTElements.get('mythril'))
        .color(0x006666)
        .blastTemp(10299, 'highest', va.zpm, 3000)
        .iconSet(metallic);

    event.create('adamantine')
        .ingot()
        .fluid()
        .element(GTElements.get('adamantine'))
        .color(0xe60000)
        .blastTemp(10299, 'highest', va.zpm, 3000)
        .iconSet(metallic);

    event.create('estalt')
        .ingot()
        .fluid()
        .element(GTElements.get('estalt'))
        .color(0xff5050)
        .blastTemp(10299, 'highest', va.zpm, 3000)
        .iconSet(dull);

    event.create('calamatium')
        .ingot()
        .fluid()
        .element(GTElements.get('calamatium'))
        .color(0x660000)
        .iconSet(dull)
        .blastTemp(11799, 'highest', va.uv, 2750);

    event.create('isovol')
        .ingot()
        .fluid()
        .element(GTElements.get('isovol'))
        .color(0x290066)
        .iconSet(dull)
        .blastTemp(12499, 'highest', va.uv, 2750);

});
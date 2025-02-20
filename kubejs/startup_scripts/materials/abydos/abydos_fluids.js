
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('abydos_titanite_rich_magma')
        .fluid()
        .components('5x titanite', '2x calaverite', '2x sylvanite', '1x tiemannite')
        .color(0xe65c00);

    event.create('abydos_zapolite_rich_magma')
        .fluid()
        .components('7x zapolite', '3x iodargyrite', '2x clausthalite', '4x crookesite')
        .color(0xff471a);

});
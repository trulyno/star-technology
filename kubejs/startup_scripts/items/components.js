
StartupEvents.registry('item', event => {

    event.create('3d_nand_chip')
        .displayName('3D-NAND Memory Chip Array')
        .tooltip('Complex NAND Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nand');

    event.create('3d_nor_chip')
        .displayName('3D-NOR Memory Chip Array')
        .tooltip('Complex NOR Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nor');

    event.create('qram_wafer')
        .displayName('qRAM Wafer')
        .tooltip('Raw Quantum Memory')
        .texture('kubejs:item/chips_n_wafers/qram_wafer');

    event.create('qram_chip')
        .displayName('qRAM Chip')
        .tooltip('Quantum Random Access Memory')
        .texture('kubejs:item/chips_n_wafers/qram_chip');

    event.create('uepic_wafer')
        .displayName('UEPIC Wafer')
        .tooltip('Raw Ultra Excessive Power Circuit')
        .texture('kubejs:item/chips_n_wafers/uepic_wafer');

    event.create('uepic_chip')
        .displayName('UEPIC Chip')
        .tooltip('Ultra Excessive Power IC')
        .texture('kubejs:item/chips_n_wafers/uepic_chip');

});
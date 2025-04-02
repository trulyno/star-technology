
StartupEvents.registry('item', event => {

    event.create('3d_nand_chip')
        .displayName('3D-NAND Memory Chip Array')
        .tooltip('§7Complex NAND Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nand');

    event.create('3d_nor_chip')
        .displayName('3D-NOR Memory Chip Array')
        .tooltip('§7Complex NOR Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nor');

    event.create('qram_wafer')
        .displayName('qRAM Wafer')
        .tooltip('§7Raw Quantum Memory')
        .texture('kubejs:item/chips_n_wafers/qram_wafer');

    event.create('qram_chip')
        .displayName('qRAM Chip')
        .tooltip('§7Quantum Random Access Memory')
        .texture('kubejs:item/chips_n_wafers/qram_chip');

    event.create('uepic_wafer')
        .displayName('UEPIC Wafer')
        .tooltip('§7Raw Ultra Excessive Power Circuit')
        .texture('kubejs:item/chips_n_wafers/uepic_wafer');

    event.create('uepic_chip')
        .displayName('UEPIC Chip')
        .tooltip('§7Ultra Excessive Power IC')
        .texture('kubejs:item/chips_n_wafers/uepic_chip');


});
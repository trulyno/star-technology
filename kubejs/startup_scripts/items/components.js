
StartupEvents.registry('item', event => {

    event.create('silicon_chip')
        .displayName('Silicon Chip')
        .texture('kubejs:item/chips_n_wafers/empty_silicon_chip');

    event.create('phosphorus_chip')
        .displayName('Phosphorus-Doped Chip')
        .texture('kubejs:item/chips_n_wafers/empty_phosphorus_chip');

    event.create('naquadah_chip')
        .displayName('Naquadah-Doped Chip')
        .texture('kubejs:item/chips_n_wafers/empty_naquadah_chip');

    event.create('neutronium_chip')
        .displayName('Neutronium-Doped Chip')
        .texture('kubejs:item/chips_n_wafers/empty_neutronium_chip');

    event.create('ae2_soc_wafer')
        .displayName('AE2 SoC Wafer')
        .texture('kubejs:item/chips_n_wafers/ae2_soc_wafer');

    event.create('ae2_soc')
        .displayName('AE2 SoC')
        .texture('kubejs:item/chips_n_wafers/ae2_soc_chip');

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

StartupEvents.registry('item', event => {

    event.create('uhv_voltage_coil')
        .texture('kubejs:item/component_part/uhv_voltage_coil')
        .displayName('Ultra High Voltage Coil')
        .tooltip('§l§4P§fe§4p§fp§4e§fr§4m§fi§4n§ft§r Coil');

    event.create('uev_voltage_coil')
        .texture('kubejs:item/component_part/uev_voltage_coil')
        .displayName('Ultra Excessive Voltage Coil')
        .tooltip('§l§2S§3t§9e§3l§2l§3a§9u§3r§2o§3r§9a§3-§2B§3o§9r§3e§2a§3l§9i§3s§r Coil');

    /*event.create('uiv_voltage_coil')
        .texture('kubejs:item/component_part/uiv_voltage_coil')
        .displayName('Ultra Immense Voltage Coil')
        .tooltip('Supreme Coil');

    event.create('uxv_voltage_coil')
        .texture('kubejs:item/component_part/uxv_voltage_coil')
        .displayName('Ultra Extreme Voltage Coil')
        .tooltip('Supreme+ Coil');
        
    event.create('opv_voltage_coil')
        .texture('kubejs:item/component_part/opv_voltage_coil')
        .displayName('Overpowered Voltage Coil')
        .tooltip('Godly Coil');*/

});

StartupEvents.registry('item', event => {

    [
        {tier:"ULV",color:"§8"},{tier:"LV",color:"§7"},{tier:"MV",color:"§b"},{tier:"HV",color:"§6"},{tier:"EV",color:"§5"}
        ,{tier:"IV",color:"§9"},{tier:"LuV",color:"§d"},{tier:"ZPM",color:"§c"},{tier:"UV",color:"§3"},{tier:"UHV",color:"§4"},{tier:"UEV",color:"§a"}
        ,{tier:"UIV",color:"§2"}/*,{tier:"UXV",color:"§e"},{tier:"OpV",color:"§9§l"},{tier:"MAX",color:"§c§l"}*/].forEach(circuit=>{
            event.create(`${circuit.tier.toLowerCase()}_universal_circuit`)
                .texture(`kubejs:item/universal_circuits/${circuit.tier.toLowerCase()}_universal_circuit`)
                .displayName(`${circuit.color}${circuit.tier}§r Universal Circuit`)
                .tooltip('§o§7For use with AE2 autocrafting');
        });

});
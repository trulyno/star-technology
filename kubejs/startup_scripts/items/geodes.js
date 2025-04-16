
StartupEvents.registry('item', event => {

    ['Diamond', 'Emerald', 'Ruby', 'Sapphire', 'Quartzite', 'Topaz', 'Spessartine', `Certus_Quartz`, `Green_Sapphire`
        ,`Blue_Topaz`,`Apatite`, `Monazite`].forEach(type => {
        event.create(`${type.toLowerCase()}_geode`)
            .displayName(`${type.replace(/_/, ' ')} Geode`)
            .texture(`kubejs:item/resource_gen/geodes/cracked_${type.toLowerCase()}_geode`)
            .tooltip(`A simingly ordinary rock which hides a beautiful §b${type.toLowerCase().replace(/_/, ' ')}§r inside`);
        });
});

StartupEvents.registry('item', event => {

    [
        { name: 'Diamond', color: '§b' },
        { name: 'Emerald', color: '§a' },
        { name: 'Ruby', color: '§c' },
        { name: 'Sapphire', color: '§9' },
        { name: 'Quartzite', color: '§7' },
        { name: 'Topaz', color: '§e' },
        { name: 'Spessartine', color: '§6' },
        { name: 'Certus_Quartz', color: '§7' },
        { name: 'Green_Sapphire', color: '§a' },
        { name: 'Blue_Topaz', color: '§3' },
        { name: 'Apatite', color: '§b' },
        { name: 'Monazite', color: '§2' }
    ].forEach(geode => {
        const {name, color} = geode;
        event.create(`${name.toLowerCase()}_geode`)
            .displayName(`${color}${name.replace(/_/, ' ')}§r Geode`)
            .texture(`kubejs:item/resource_gen/geodes/cracked_${name.toLowerCase()}_geode`)
            .tooltip(`§7A seemingly ordinary rock which hides a beautiful ${color}${name.toLowerCase().replace(/_/, ' ')}§7 inside`);
    });
});
JEIEvents.hideItems(event => {
    event.hide(/thermal:.*(plate||dust||ingot||sheet||gear||nugget)/)
    event.hide(/thermal_extra:.*rod/)
    event.hide(global.hammerlib)
    event.hide(/nuclearcraft:.*_block/)
})

ServerEvents.recipes(event => {
    event.remove({ type: 'silentgear:compound_part' })
})

ServerEvents.recipes(event => {
    event.remove({ type: 'silentgear:gear_crafting' })
})

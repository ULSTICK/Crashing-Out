ServerEvents.recipes(event => {
    event.remove({ output: 'cold_sweat:filled_waterskin' })
})

ServerEvents.recipes(event => {
    event.remove({ output: 'cold_sweat:waterskin' })
})

ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:leather', type: 'yaam:drying_recipe' })
})
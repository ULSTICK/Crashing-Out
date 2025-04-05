ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), [
            'minecraft:glass_bottle',
            '#minecraft:dirt'
        ]
    )
})

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('survive:purified_water_bucket'), [
            'minecraft:water_bucket',
            '#minecraft:dirt'
        ]
    )
})
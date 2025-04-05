ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), [
            'minecraft:glass_bottle',
           '#minecraft:dirt'
        ]
    )
})
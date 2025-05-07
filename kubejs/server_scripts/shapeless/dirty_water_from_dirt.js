ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), [
            'minecraft:glass_bottle',
            '#minecraft:dirt'
        ]
    )
	
    event.shapeless(
        Item.of('minecraft:water_bucket'), [
            'minecraft:bucket',
            '#minecraft:dirt'
        ]
    )
})
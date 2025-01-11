ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}'), [
            'minecraft:glass_bottle',
           '#minecraft:dirt'
        ]
    )

})
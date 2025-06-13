ServerEvents.tags('fluid', event => {
    event.add('forge:drinkable_water',
        'minecraft:water',
        'survive:purified_water'
    )
})

ServerEvents.tags('item', event => {
    event.add('forge:water', 'minecraft:water_bucket')
    event.add('forge:water', 'survive:purified_water_bucket')
})
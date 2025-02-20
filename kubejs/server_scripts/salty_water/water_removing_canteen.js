ItemEvents.rightClicked('survive:canteen', event => {
    if(!event.target || !event.target.block || event.target.block.id != 'survive:purified_water' || event.target.block.properties.level != 0) return;
    // event.item.count--
    event.target.block.set('minecraft:air')
    // player.give(Item.of('survive:filled_canteen', '{DrinksLeft:3,Potion:"minecraft:water"}'));  
})

ItemEvents.rightClicked('survive:canteen', event => {
    if(!event.target || !event.target.block || event.target.block.id != 'minecraft:water' || event.target.block.properties.level != 0) return;
    // event.item.count--
    event.target.block.set('minecraft:air')
    // player.give(Item.of('survive:filled_canteen', '{DrinksLeft:3,Potion:"minecraft:water"}'));  
})
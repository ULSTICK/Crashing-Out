


ItemEvents.rightClicked('minecraft:glass_bottle', event => event.cancel())

ItemEvents.firstRightClicked('minecraft:glass_bottle', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.item.count--;
    e.server.scheduleInTicks(0, () => e.player.give('kubejs:salty_water_bottle'));
    e.cancel();
})
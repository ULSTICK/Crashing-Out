ItemEvents.rightClicked('kubejs:porcelain_purified_water_bucket', event => {
    if(!event.target || !event.target.block) return
    event.item.count--
    event.target.block.up.set('minecraft:water')
    event.entity.runCommandSilent('playsound minecraft:item.bucket.empty master @p ~ ~ ~');
    event.entity.runCommandSilent('give @p exdeorum:porcelain_bucket');
})

ItemEvents.rightClicked('exdeorum:porcelain_bucket', event => {
    if(!event.target || !event.target.block || event.target.block.id != 'survive:purified_water' || event.target.block.properties.level != 0) return;
    event.item.count--
    event.target.block.set('minecraft:air')
    event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
    event.entity.runCommandSilent('give @p kubejs:porcelain_purified_water_bucket');
})

ItemEvents.rightClicked('survive:purified_water_bucket', event => {
    if(!event.target || !event.target.block) return
    event.item.count--
    event.target.block.up.set('minecraft:water')
    event.entity.runCommandSilent('playsound minecraft:item.bucket.empty master @p ~ ~ ~');
    event.entity.runCommandSilent('give @p minecraft:bucket');
})

BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('minecraft:glass_bottle')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.tank) return;
    
    let tank = blockEntity.tank;
    if (tank.FluidName !== "survive:purified_water" || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove a garrafa de vidro da mão do jogador
    event.item.count--;
    
    // Adiciona a poção de água purificada ao inventário do jogador
    player.give(Item.of('minecraft:potion', { Potion: "survive:purified_water" }));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});


BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('minecraft:glass_bottle')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.tank) return;
    
    let tank = blockEntity.tank;
    if (tank.FluidName !== "minecraft:water" || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove a garrafa de vidro da mão do jogador
    event.item.count--;
    
    // Adiciona a poção de água purificada ao inventário do jogador
    player.give(Item.of('minecraft:potion', { Potion: "minecraft:water" }));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});


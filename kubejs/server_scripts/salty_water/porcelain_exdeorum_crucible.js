BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.Tank) return;
    
    let tank = blockEntity.Tank;
    if (tank.FluidName !== "survive:purified_water" || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove a garrafa de vidro da mão do jogador
    event.item.count--;
    
    // Adiciona a poção de água purificada ao inventário do jogador
    player.give(Item.of('kubejs:porcelain_purified_water_bucket'));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});

////////////////FILL TANK///////////////////////

BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('kubejs:porcelain_purified_water_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.Tank) return;
    
    let tank = blockEntity.Tank;
    if (tank.FluidName !== "survive:purified_water" || tank.Amount < 3001) return; // Garante que há fluido suficiente
    
    // Remove a garrafa de vidro da mão do jogador
    event.item.count--;
    
    // Adiciona a poção de água purificada ao inventário do jogador
    player.give(Item.of('exdeorum:porcelain_bucket'));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount += 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});
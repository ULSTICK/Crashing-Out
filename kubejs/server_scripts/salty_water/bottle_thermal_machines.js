BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('minecraft:glass_bottle')) return;
    
    // Verifica se o bloco clicado é a máquina centrífuga do Thermal Expansion
    // if (!block.id.equals('thermal:machine_centrifuge')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.TankInv) return;
    
    let tank = blockEntity.TankInv.find(t => t.FluidName === "survive:purified_water");
    if (!tank || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    event.item.count--;
    // player.level.playSound(player, block.pos, "item.bucket.fill", 1.0, 1.0);
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
    
    // Verifica se o bloco clicado é a máquina centrífuga do Thermal Expansion
    // if (!block.id.equals('thermal:machine_centrifuge')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.TankInv) return;
    
    let tank = blockEntity.TankInv.find(t => t.FluidName === "minecraft:water");
    if (!tank || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    event.item.count--;
    // player.level.playSound(player, block.pos, "item.bucket.fill", 1.0, 1.0);
    player.give(Item.of('minecraft:potion', { Potion: "minecraft:water" }));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});

/////////////////////////////////////////////////////////////////////




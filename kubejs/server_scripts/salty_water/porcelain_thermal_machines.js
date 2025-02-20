BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    // Verifica se o bloco clicado é a máquina centrífuga do Thermal Expansion
    // if (!block.id.equals('thermal:machine_centrifuge')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.TankInv) return;
    
    let tank = blockEntity.TankInv.find(t => t.FluidName === "survive:purified_water");
    if (!tank || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    event.item.count--;
    player.give(Item.of('kubejs:porcelain_purified_water_bucket'));
    // player.level.playSound(player, block.pos, "item.bucket.fill", 1.0, 1.0);
    event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.fill', 'master', 1.0, 1.0);
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
    // Cancela a interação padrão para impedir a abertura do GUI
    event.cancel();
});

////////////////FILL TANK///////////////////////

BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de água purificada de porcelana
    if (!item.is('kubejs:porcelain_purified_water_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.contains('TankInv')) {
        // Remove o balde de água purificada da mão do jogador
        event.item.count--;
        
        // Adiciona um balde vazio ao inventário do jogador
        player.give(Item.of('exdeorum:porcelain_bucket'));
        event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
        
        // Adiciona 1000 de 'survive:purified_water' ao tanque
        blockEntity.put('TankInv', [{
            FluidName: "survive:purified_water",
            Amount: 1000
        }]);
        
        // Atualiza o bloco
        block.entityData = blockEntity;
        block.update();
        
        event.cancel();
        return;
    }

    let tankData = blockEntity.get('TankInv');
    if (tankData.size() == 0) {
        // Remove o balde de água purificada da mão do jogador
        event.item.count--;
        
        // Adiciona um balde vazio ao inventário do jogador
        player.give(Item.of('exdeorum:porcelain_bucket'));
        
        // Adiciona 1000 de 'survive:purified_water' ao tanque
        blockEntity.put('TankInv', [{
            FluidName: "survive:purified_water",
            Amount: 1000
        }]);
        
        // Atualiza o bloco
        block.entityData = blockEntity;
        block.update();
        
        event.cancel();
    } else {
        let storedData = tankData.get(0);
        let fluidName = storedData.getString('FluidName');
        let currentAmount = storedData.getInt('Amount');
        
        if (fluidName == "survive:purified_water") {
            // Remove o balde de água purificada da mão do jogador
            event.item.count--;
            
            // Adiciona um balde vazio ao inventário do jogador
            player.give(Item.of('exdeorum:porcelain_bucket'));
            event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
            
            // Adiciona 1000 de 'survive:purified_water' ao tanque
            storedData.put('FluidName', "survive:purified_water");
            storedData.put('Amount', currentAmount + 1000);
            
            // Atualiza o bloco
            block.entityData = blockEntity;
            block.update();
            
            event.cancel();
        }
    }
    // Cancela a interação padrão para impedir a abertura do GUI
    event.cancel();
});

BlockEvents.rightClicked(event => {
    let { player, item, block } = event;
    
    // Verifica se o jogador está segurando um balde vazio de porcelana
    if (!item.is('exdeorum:porcelain_bucket')) return;

    // Verifica se o bloco tem uma entidade de bloco e se contém o tanque
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.contains('TankInv')) return;

    let tankData = blockEntity.get('TankInv');
    if (tankData.size() == 0) return;

    let storedData = tankData.get(0);
    let fluidName = storedData.getString('FluidName');

    // Verifica se o tanque contém 'survive:purified_water'
    if (fluidName == "survive:purified_water") {
        // Cancela a interação padrão para impedir a abertura do GUI
        event.cancel();
    }
});


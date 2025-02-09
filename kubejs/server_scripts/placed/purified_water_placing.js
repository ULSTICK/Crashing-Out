// Servidor: Adicione em `server_scripts/seu_script.js`

    /*    ItemEvents.rightClicked(event => {
            // Verifica se o item usado é o balde de água purificada
            if (event.item.id === 'survive:purified_water_bucket') {
                // Cancela imediatamente o comportamento padrão
                event.cancel();
        
                // Obtém a posição onde o jogador está mirando
                const target = event.target;
                if (!target) return;
        
                // Calcula a posição correta para colocar a água
                const facing = target.face; // Lado do bloco clicado (ex: 'up', 'north')
                const pos = target.block.offset(facing);
        
                // Define o bloco de água normal do Minecraft (com estado de fluido)
                event.level.setBlock(pos, 'minecraft:water');
        
                // Substitui o balde de água purificada por um balde vazio
                const player = event.player;
                const hand = event.hand;
                player.setItemInHand(hand, 'minecraft:bucket');
        
                // Sincroniza o inventário do jogador (opcional, mas pode ajudar)
                player.inventory.sync();
            }
        });

        ItemEvents.rightClicked(event => {
            // Verifica se o item usado é o balde de água purificada
            if (event.item.id === 'survive:purified_water_bucket') {
        
                // Cancela o comportamento padrão (evita colocar o bloco de água purificada)
                event.cancel();
            }
        }); */
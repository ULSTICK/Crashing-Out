BlockEvents.rightClicked(event => {
    let { player, item, block } = event;
    
    // Verifica se o jogador está segurando um diamante
    if (!item.is('minecraft:diamond')) return;

    // Verifica se o bloco clicado é "exdeorum:dust"
    if (block.id != 'exdeorum:dust') return;

    // Obtém os dados NBT da entidade do jogador
    let playerEntityNBT = player.persistentData;
    
    // Converte os dados para uma string formatada
    let playerDataString = JSON.stringify(playerEntityNBT, null, 2);

    // Caminho do arquivo onde os dados do jogador serão salvos
    const filePath = 'kubejs/data/player_data.txt';

    // Escreve os dados do jogador no arquivo
    JsonIO.write(filePath, playerEntityNBT);

    // Envia uma mensagem ao jogador informando que os dados foram salvos
    player.tell('Os dados da sua entidade foram salvos no arquivo player_data.txt na pasta kubejs/data.');

    // Cancela a interação padrão
    event.cancel();
});

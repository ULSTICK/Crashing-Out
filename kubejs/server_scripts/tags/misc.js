ServerEvents.tags('item', event => {
    event.add('forge:storage_blocks/electrum',
        'createaddition:electrum_block'
    )

    event.add('crash_landing:reactor_terminals',
        'biggerreactors:reactor_terminal',
        'kubejs:crashed_reactor_controller'
    )
});

ServerEvents.tags('item', event => {
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks')
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks_1')
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks_2')
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks_3')
})

ServerEvents.tags('block', event => {
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks')
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks_1')
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks_2')
    event.add('crash_landing:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks_3')
})


ServerEvents.recipes(event => {
    event.custom({
        type: 'exdeorum:hammer',
        ingredient: [
            {
                tag: 'crash_landing:crumbling_seared_bricks'
            }
        ],
        result: 'tconstruct:seared_brick',
        result_amount: {
            type: 'minecraft:uniform',
            max: 4.0,
            min: 1.0
        },
    }).id('crash_landing:crumbling_seared_bricks_hammer');


    event.custom({
        type: 'thermal:pulverizer',
        ingredient: {
            tag: 'crash_landing:crumbling_seared_bricks'
        },
        result: [
            {
                item: 'tconstruct:seared_brick',
                count: 1
            },
            {
                item: 'tconstruct:seared_brick',
                chance: 0.5
            },
            {
                item: 'tconstruct:seared_brick',
                chance: 0.5
            },
            {
                item: 'tconstruct:seared_brick',
                chance: 0.5
            }
        ],
        energy: 1000
    }).id('crash_landing:crumbling_seared_bricks_pulverizer');


    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                tag: 'crash_landing:crumbling_seared_bricks'
            }
        ],
        processingTime: 250,
        results: [
            {
                'count': 1,
                item: 'tconstruct:seared_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:seared_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:seared_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:seared_brick'
            }
        ]
    }).id('crash_landing:crumbling_seared_bricks_milling');
})
// Tags
ServerEvents.tags('item', event => {
    event.add('forge:adhesive', '#forge:slimeballs')
})

// Recipes
ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:sticky_piston' });

    [
        'create:crafting/kinetics/sticker',
        'create:crafting/kinetics/sticky_mechanical_piston',
        'createaddition:crafting/large_connector_electrum',
        'createaddition:crafting/large_connector_gold',
        'createaddition:crafting/small_connector_copper',
        'pneumaticcraft:pressure_chamber/capacitor', // not working, using datapack instead
        'tconstruct:common/slime/sticky_piston',
        'tconstruct:tables/book_substitute'
    ].forEach(recipeid => {
        event.replaceInput({ id: recipeid }, '#forge:slimeballs', '#forge:adhesive');
    });
});
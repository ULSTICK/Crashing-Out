ServerEvents.recipes(event => {

    function compostables(input, volume) {
        event.custom({
            "type": "exdeorum:barrel_compost",
            "ingredient": {
                item: input
            },
            "volume": volume
        })

    }
    compostables('immersive_weathering:oak_leaf_pile', 125)
    compostables('immersive_weathering:spruce_leaf_pile', 125)
    compostables('immersive_weathering:birch_leaf_pile', 125)
    compostables('immersive_weathering:jungle_leaf_pile', 125)
    compostables('immersive_weathering:acacia_leaf_pile', 125)
    compostables('immersive_weathering:cherry_leaf_pile', 125)
    compostables('immersive_weathering:dark_oak_leaf_pile', 125)
    compostables('immersive_weathering:mangrove_leaf_pile', 125)
    compostables('immersive_weathering:azalea_leaf_pile', 125)
    compostables('immersive_weathering:flowering_azalea_leaf_pile', 125)
})
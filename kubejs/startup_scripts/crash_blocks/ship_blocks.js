StartupEvents.registry("block", (event) => {
  event.create("plasteel") // Create a new block with ID "kubejs:example_block"
    .displayName("Plasteel") // Set a custom name
    .mapColor("snow") // Set a material (affects the sounds and some properties)
    .soundType("metal")
    .hardness(1.8) // Set hardness (affects mining time)
    .resistance(6.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    // .tagBlock('minecraft:needs_iron_tool')
    .textureAll('kubejs:block/plasteel')
})
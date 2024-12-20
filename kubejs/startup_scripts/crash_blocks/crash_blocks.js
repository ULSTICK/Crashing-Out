StartupEvents.registry("block", (event) => {
    event.create("crashed_applied_controller") // Create a new block with ID "kubejs:example_block"
    .displayName("Crashed Computer Controller") // Set a custom name
    .mapColor("heavy_metal") // Set a material (affects the sounds and some properties)
    .soundType("copper")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/ae2_controller_crash')
  })
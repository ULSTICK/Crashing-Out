import crafttweaker.api.events.EventManager;
import crafttweaker.forge.api.event.interact.RightClickBlockEvent;
import crafttweaker.api.block.Block;

// events.register<crafttweaker.forge.api.event.interact.RightClickBlockEvent>(event => {
//   val stack = event.itemStack;
//   if <item:thirstcanteen:leather_canteen>.matches(stack) {
//     val pos = event.blockPos;
//     val level = event.entity.level;
//     val state = level.getBlockState(pos);  
//     if state.block == <blockstate:minecraft:water> {
//       event.cancel();
//     }
//   }
// });


/*
events.register<crafttweaker.forge.api.event.interact.RightClickBlockEvent>(event => {
  val stack = event.itemStack;
  
  if <item:thirstcanteen:military_bottle>.matches(stack)  {
    event.cancel();
  }
});

events.register<crafttweaker.forge.api.event.interact.RightClickBlockEvent>(event => {
  val stack = event.itemStack;
  
  if <item:thirstcanteen:dragon_bottle>.matches(stack) {
    event.cancel();
  }
}); */


events.register<crafttweaker.forge.api.event.interact.RightClickBlockEvent>(event => {
  val held = event.itemStack;
  val pos = event.blockPos;
  val level = event.entity.level;
  val state = level.getBlockState(pos);
  
  if (state.block != <blockstate:create:depot> && <item:thirstcanteen:leather_canteen>.matches(held)) {
    event.cancel();
  }
});

events.register<crafttweaker.forge.api.event.interact.RightClickBlockEvent>(event => {
  val held = event.itemStack;
  val pos = event.blockPos;
  val level = event.entity.level;
  val state = level.getBlockState(pos);
  
  if (state.block != <blockstate:create:depot> && <item:thirstcanteen:military_bottle>.matches(held)) {
    event.cancel();
  }
});

events.register<crafttweaker.forge.api.event.interact.RightClickBlockEvent>(event => {
  val held = event.itemStack;
  val pos = event.blockPos;
  val level = event.entity.level;
  val state = level.getBlockState(pos);
  
  if (state.block != <blockstate:create:depot> && <item:thirstcanteen:dragon_bottle>.matches(held)) {
    event.cancel();
  }
});
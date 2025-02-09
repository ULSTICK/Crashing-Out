ServerEvents.loaded(event =>{
    if (event.server.persistentData.firstLoad) return
    event.server.persistentData.firstLoad = true
    event.server.runCommandSilent('execute run place structure crash_landing:ship ~-5 ~5 ~')
   && event.server.runCommandSilent('execute run give @p hardcorequesting:quest_book')
})

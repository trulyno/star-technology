// packmode: hard

// Runs on server load
ServerEvents.loaded(event => {
	// Check if load_check is present on server persistent data, if so then return early
	if (event.server.persistentData.load_check) return

	// The actual code
	event.server.setDifficulty("hard", true)
	event.server.gameRules.set("doWeatherCycle", false)
	event.server.gameRules.set("waterSourceConversion", false)
	event.server.gameRules.set("doPatrolSpawning", false)

	// Add load_check to server persistent data to prevent this from running again
	event.server.persistentData.load_check = true
});
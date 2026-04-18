const mainView = document.getElementById("main-view");
const settingsView = document.getElementById("settings-view");

document.getElementById("settings-btn").addEventListener("click", () => {
	mainView.classList.add("hidden");
	settingsView.classList.remove("hidden");
});

document.getElementById("back-btn").addEventListener("click", () => {
	settingsView.classList.add("hidden");
	mainView.classList.remove("hidden");
});

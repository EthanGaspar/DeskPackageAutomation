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

const SETTING_IDS = [
	"parcel-type",
	"shipping-type",
	"front-desk-location",
	"staff-receiving",
];

chrome.storage.local.get(SETTING_IDS, (stored) => {
	for (const id of SETTING_IDS) {
		const el = document.getElementById(id);
		if (el && stored[id] !== undefined) {
			el.value = stored[id];
		}
	}
});

for (const id of SETTING_IDS) {
	const el = document.getElementById(id);
	if (!el) continue;
	const eventName = el.tagName === "SELECT" ? "change" : "input";
	el.addEventListener(eventName, () => {
		chrome.storage.local.set({ [id]: el.value });
	});
}

// Initiate MDC

window.mdc.autoInit();

/* = = = = = = = = = = = = = = = = = = = = = = = = = */

// Toggle drawer

let $MDC_TemporaryDrawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector(".mdc-temporary-drawer"));
document.querySelector("#open-drawer").addEventListener("click", () => $MDC_TemporaryDrawer.open = true);
document.querySelector("#close-drawer").addEventListener("click", () => $MDC_TemporaryDrawer.open = false);

/* = = = = = = = = = = = = = = = = = = = = = = = = = */

//Toggle panels by using tabs

var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector("#icon-text-tab-bar"));
var panels = document.querySelector(".panels");

dynamicTabBar.tabs.forEach(function(tab) {
	tab.preventDefaultOnClick = true;
});

function updatePanel(index) {
	
	var activePanel = panels.querySelector(".panel.active");
	
	if (activePanel) {
		activePanel.classList.remove("active");
	}
	
	var newActivePanel = panels.querySelector(".panel:nth-child(" + (index + 1) + ")");
	
	if (newActivePanel) {
		newActivePanel.classList.add("active");
	}
	
}

dynamicTabBar.listen("MDCTabBar:change", function ({detail: tabs}) {
	var nthChildIndex = tabs.activeTabIndex;
	updatePanel(nthChildIndex);
});

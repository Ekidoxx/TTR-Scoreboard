$(function() {
	
	// INFO: https://github.com/coderifous/jquery-localize
	
	// Set languages directory
	var $languagesDir = "./assets/translations/language";
	
	// Log automaticallty detected language
	console.log("Detected language code: " + $.defaultLanguage.toUpperCase() );
	
	// Initialize translation of automatically detected language
	$("[data-translate]").localize($languagesDir, { language: $.defaultLanguage });
	
	// Switch displayed language on settings change
	$("input[id*='settings--language-']").click(function () {
		$("input[id*='settings--language-']:checked").each(function() {
			
			var $lang = $(this).attr("data-lang");
			
			$("[data-translate]").localize($languagesDir, { language: $lang });
			
		});
	});
	
});

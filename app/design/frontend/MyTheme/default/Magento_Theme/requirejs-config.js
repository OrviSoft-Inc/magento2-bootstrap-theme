var config = {
	deps: [
        "Magento_Theme/js/main",
        "Magento_Theme/js/app"
    ],
    paths: {
        "jquery.bootstrap": "Magento_Theme/js/package/bootstrap/bootstrap.min",
    },
	map: {
		'*': {
				"jquery.ui": "Magento_Theme/js/package/jquery-ui/jquery-ui.min",
				"jquery.fancybox": "Magento_Theme/js/package/fancybox/jquery.fancybox.min",
				"jquery.scrollme": "Magento_Theme/js/package/scrollme/jquery.scrollme.min",
				"crausel.slick": "Magento_Theme/js/package/slick-carousel/slick.min",
				"jquery.matchHeight": "Magento_Theme/js/package/matchheight/jquery.matchHeight-min",
				"knoke.load": "Magento_Theme/js/knoke",
				"babyTalker" : "Magento_Theme/js/app"
			}
	},
    shim: {
        'jquery.bootstrap': ['jquery'],
		'jquery.ui': ['jquery'],
		'jquery.fancybox': ['jquery'],
		'jquery.scrollme': ['jquery'],
		'jquery.slick': ['jquery'],
		'jquery.matchHeight': ['jquery'],
		'knoke.load': ['jquery', "jquery.ui", "jquery.fancybox", "jquery.scrollme", "crausel.slick", "jquery.matchHeight", 'mage/dropdown'],
		'babyTalker': ["knoke.load"]
    }
};

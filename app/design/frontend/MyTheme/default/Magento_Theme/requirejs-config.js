var config = {
	deps: [
        "Magento_Theme/js/main",
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
        'jquery.bootstrap': {
            'deps': ['jquery']
        },
		'jquery.ui': {
            'deps': ['jquery']
        },
		'jquery.fancybox': {
            'deps': ['jquery']
        },
		'jquery.scrollme': {
            'deps': ['jquery']
        },
		'jquery.slick': {
            'deps': ['jquery']
        },
		'jquery.matchHeight': {
            'deps': ['jquery']
        },
		'knoke.load': {
			'deps' : ['jquery', "jquery.ui", "jquery.fancybox", "jquery.scrollme", "crausel.slick", "jquery.matchHeight"]
		},
		'babyTalker': {
			'deps' : ["knoke.load"]
		}
    }
};

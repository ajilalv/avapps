module.exports = {
	title: 'AVapps',
	description: 'avapps documentation',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Apps', link: '/apps/' },
			{ text: 'About', link: '/contact' }
		],
		//NOTE:******** folder paths needs to end with '/', and relative files NOT
		sidebar: [
			'/',
			{
				title: 'Apps',
				path: '/apps/',
				children: [
					{
						title: 'Drawing Purge',
						path: '/apps/purge/',
						children: [
							['/apps/purge/commands', 'Commands'],
							['/apps/purge/versions', 'Versions'],
							['/apps/purge/faqs', 'Frequently Asked Questions'],
							['/apps/purge/localization', 'Localization'],
							['/apps/purge/suggestions', 'Suggestions'],
							['/apps/purge/thankyou', 'Thank You !'],
						]
					},
					{
						title: 'My Xrefs',
						path: '/apps/xrefs/',
						children: [
							['/apps/xrefs/faqs/', 'FAQs']
						]
					},
				]
			}
		]
	}
}
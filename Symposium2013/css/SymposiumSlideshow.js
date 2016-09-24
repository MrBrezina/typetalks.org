var mygallery=new fadeSlideShow({
	wrapperid: "slideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [735, 256], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["_images/show_sonia_r.jpg", "", "", ""],
		["_images/show_goran_r.jpg", "", "", ""],
		["_images/show_vecerka_l.jpg", "", "", ""],
		["_images/show_erik_r.jpg", "", "", ""],
		["_images/show_goran2_l.jpg", "", "", ""],
		["_images/show_ben_r.jpg", "", "", ""],
		["_images/show_claus_l.jpg", "", "", ""],
		["_images/show_jasso_l.jpg", "", "", ""] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:true},
	persist: true, //remember last viewed slide and recall within same session?
	fadeduration: 1500, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
})
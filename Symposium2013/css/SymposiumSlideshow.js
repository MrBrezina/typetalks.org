var mygallery=new fadeSlideShow({
	wrapperid: "slideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [735, 256], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["img/show_sonia_r.jpg", "", "", ""],
		["img/show_goran_r.jpg", "", "", ""],
		["img/show_vecerka_l.jpg", "", "", ""],
		["img/show_erik_r.jpg", "", "", ""],
		["img/show_goran2_l.jpg", "", "", ""],
		["img/show_ben_r.jpg", "", "", ""],
		["img/show_claus_l.jpg", "", "", ""],
		["img/show_jasso_l.jpg", "", "", ""] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:true},
	persist: true, //remember last viewed slide and recall within same session?
	fadeduration: 1500, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
})
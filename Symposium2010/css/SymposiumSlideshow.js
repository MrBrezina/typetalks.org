var mygallery=new fadeSlideShow({
	wrapperid: "slideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [450, 200], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["img/bw_brousil.jpg", "", "", ""],
		["img/bw_burian.jpg", "", "", ""],
		["img/bw_hardwig.jpg", "", "", ""],
		["img/bw_hardwig-1.jpg", "", "", ""],
		["img/bw_hardwig-2.jpg", "", "", ""],
		["img/bw_hardwig-3.jpg", "", "", ""],
		["img/bw_hochleitner.jpg", "", "", ""],
		["img/bw_keller.jpg", "", "", ""],
		["img/bw_reynolds.jpg", "", "", ""] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:true},
	persist: true, //remember last viewed slide and recall within same session?
	fadeduration: 1000, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
})
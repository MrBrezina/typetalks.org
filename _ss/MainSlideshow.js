var mygallery=new fadeSlideShow({
	wrapperid: "slideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [450, 200], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["_images/bw_favu-type-workshop-1.jpg", "", "", ""],
		["_images/bw_favu-type-workshop-2.jpg", "", "", ""],
		["_images/bw_favu-type-workshop-3.jpg", "", "", ""],
		["_images/bw_favu-type-workshop-4.jpg", "", "", ""] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:true},
	persist: true, //remember last viewed slide and recall within same session?
	fadeduration: 1000, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
})
var mygallery=new fadeSlideShow({
	wrapperid: "slideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [735, 320], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["_images/bw_adam_03.jpg", "", "", ""],
		["_images/bw_indra_01.jpg", "", "", ""],
		["_images/bw_akiem_01.jpg", "", "", ""],
		["_images/bw_jacek_01.jpg", "", "", ""],
		["_images/bw_jasso_01.jpg", "", "", ""],
		["_images/bw_martin_01.jpg", "", "", ""] //<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:true},
	persist: true, //remember last viewed slide and recall within same session?
	fadeduration: 1000, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
})
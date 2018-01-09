$(function(){
	$(".typed").typed({
		strings: ["Landing Pages", "User Interfaces", "Web Applications"],
		stringsElement: null,
		typeSpeed: 30,
		startDelay: 1200,
		// backspacing speed
		backSpeed: 10,
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		resetCallback: function() {}
	});
});

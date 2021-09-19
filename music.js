window.onload = function() {
	var arr = ["https://m704.music.126.net/20210919223427/c8ce0ed87b8010580c286b1ef8f612ec/jdyyaac/520b/565c/515e/ea292818d3a6cd613bb6f43ad65f5fc0.m4a",
			"https://m10.music.126.net/20210919223906/cd0d9dc91d7815ed40c77ded1942e62a/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3572136286/3134/fed2/da13/f65af1bc224694053ba39c7c59a38e9c.m4a",
			"https://m10.music.126.net/20210919224005/4ff34d0b57dc0582f9693fa8c2fa1a59/yyaac/075d/5452/005a/076d798276c80de5b27f709ed3ff1b69.m4a",
	]; //把需要播放的歌曲从

	var myAudio = new Audio();

	myAudio.preload = true;

	myAudio.controls = true;

	myAudio.src = arr.pop(); //每次读数组最后一个元素

	myAudio.addEventListener('ended', playEndedHandler, false);

	myAudio.play();

	document.getElementById("audioBox").appendChild(myAudio);

	myAudio.loop = false; //禁止循环，否则无法触发ended事件

	function playEndedHandler() {
		myAudio.src = arr.pop();

		myAudio.play();

		console.log(arr.length);

		!arr.length && myAudio.removeEventListener('ended', playEndedHandler, false); //只有一个元素时解除绑定

	}

}

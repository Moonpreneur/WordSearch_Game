			function resizeContent()
				{
				var w = window.innerWidth;
				var h = window.innerHeight;

				if(window.innerHeight > window.innerWidth)
					{
					document.getElementById("content").style.width = h + "px";
					document.getElementById("content").style.height = w + "px";
					}
					else
					{
					document.getElementById("content").style.width = w + "px";
					document.getElementById("content").style.height = h + "px";
					}
				}

			window.addEventListener("load", function()
				{
				
				if (window.top == window.self)
					{
					
					resizeContent();

					
					setInterval(function()
						{
						resizeContent();
						document.getElementById("content").focus();
						}, 250);

					
					document.getElementById("content").src = "WordSearchGame.htm";

					
					document.getElementById("content").style.display = "block";
					}
				});

			window.addEventListener("resize", function()
				{
				
				resizeContent();
				});

			var supportsOrientationChange = "onorientationchange" in window, orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
			window.addEventListener(orientationEvent, function()
				{
				
				resizeContent();
				}, false);

				if ("serviceWorker" in navigator)
				{
				navigator.serviceWorker.register("worker.js").then(function(registration)
					{
					
					}).catch(function(err)
					{
					
					});
				}
		
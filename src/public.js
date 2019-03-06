// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
// IntersectionObserver if supported
// document.addEventListener("DOMContentLoaded", function () {
// 	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

// 	if ("IntersectionObserver" in window) {
// 		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
// 			entries.forEach(function (entry) {
// 				if (entry.isIntersecting) {
// 					let lazyImage = entry.target;
// 					lazyImage.src = lazyImage.dataset.src;
// 					lazyImage.srcset = lazyImage.dataset.srcset;
// 					lazyImage.classList.remove("lazy");
// 					lazyImageObserver.unobserve(lazyImage);
// 				}
// 			});
// 		});

// 		lazyImages.forEach(function (lazyImage) {
// 			lazyImageObserver.observe(lazyImage);
// 		});
// 	} else {
// 		// Possibly fall back to a more compatible method here
// 	}
// });
document.addEventListener("DOMContentLoaded", function () {
	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	let active = false;

	const lazyLoad = function () {
		if (active === false) {
			active = true;

			setTimeout(function () {
				lazyImages.forEach(function (lazyImage) {
					if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
						lazyImage.src = lazyImage.dataset.src;
						lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function (image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("DOMContentLoaded", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
});

/**
 * If object fit is not supported then use as background image
 */
document.addEventListener("DOMContentLoaded", function () {
	const ua = window.navigator.userAgent;
	const msie = ua.indexOf("MSIE ");
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		const layouts = document.querySelectorAll('.wp-block-gecko-grid-layout');
		[...layouts].forEach(layout => {
			layout.className += " wp-block-gecko-grid-layout--ie";
			const items = layout.querySelectorAll('.wp-block-gecko-grid-layout__item');
			let column = 1;
			let row = 1;
			[...items].forEach(item => {
				const styles = window.getComputedStyle(item);
				item.style['-ms-grid-column'] = column;
				item.style['-ms-grid-row'] = row;
				column = column + parseInt(styles.getPropertyValue('-ms-grid-column-span'));
				if(column > 12){
					column = 1;
					row = row + 1;
				}
			});
		});
		const images = document.querySelectorAll('.gecko-grid-layout-image__image');
		[...images].forEach(image => {
			const src = image.getAttribute('data-src');
			image.offsetParent.style.backgroundImage = `url(${src})`;
			image.offsetParent.style.backgroundPosition = 'center';
			image.offsetParent.style.backgroundSize = 'cover';
			image.style.display = 'none';
		});
	};
});
/**
 * Lazy load images.
 */
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

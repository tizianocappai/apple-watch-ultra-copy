console.log('works ✅');

const elementsToWatch = document.querySelectorAll('.watch');

const watchElementsInPage = (items) => {
	items.forEach((item) => {
		if (item.isIntersecting) {
			item.target.classList.add('in-page');
		} else {
			item.target.classList.remove('in-page');
		}
	});
};

const observer = new IntersectionObserver(watchElementsInPage, {
	threshold: 0.5,
});

elementsToWatch.forEach((el) => {
	observer.observe(el);
});

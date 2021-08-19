const hover = (target, element, property) => window.addEventListener('load', () => {
	const [hide, show] = [0, element.getBoundingClientRect()[property]]
	.map(value => () => element.style[property] = value + 'px')

	target.addEventListener('mouseenter', show);
	target.addEventListener('mouseleave', hide);

	hide();
})

const title = 'Experimental Methods in the Behavioral and Cognitive Sciences';

const header = document.createElement('header');
header.id = 'TOC';

const bookTitle = document.createElement('a');
bookTitle.className = 'book-title';
bookTitle.textContent = title;
bookTitle.href = 'index.html';
header.append(bookTitle);

const nav = document.createElement('nav');
header.append(nav);

TOC.querySelectorAll('li')
.forEach(({classList, firstChild: {textContent, href}}) => {
//	const [title] = textContent.match(/(?<=\s).+/g);
    const [title] = textContent.match(/\s.+/g);
//  words = textContent.split(" ");
//  const [title] = textContent;

	if (classList.contains('part')) {
		const [, first, rest] = title.match(/([A-z]+)(.*)/);

		const partContainer = document.createElement('div');
		partContainer.className = 'part-container';
		nav.append(partContainer);

		const partTitle = document.createElement('div');
		partTitle.className = 'part-title';
		partContainer.append(partTitle);

		const partTitleFirst = document.createElement('div');
		partTitleFirst.className = 'part-title-first';
		partTitleFirst.textContent = first;
		partTitle.append(partTitleFirst);

		const partTitleRest = document.createElement('div');
		partTitleRest.className = 'part-title-rest';
		partTitleRest.textContent = rest;
		partTitle.append(partTitleRest);

		const dropdown = document.createElement('div');
		dropdown.className = 'dropdown';
		partContainer.append(dropdown);

		hover(partContainer, partTitleRest, 'width');
	} else {
		const partContainer = nav.lastChild;
		const dropdown = partContainer.lastChild;

		const chapterTitle = document.createElement('a');
		chapterTitle.className = 'chapter-title';
		chapterTitle.textContent = title;
		chapterTitle.href = href;
		dropdown.append(chapterTitle);

		hover(partContainer, chapterTitle, 'width');
		hover(partContainer, chapterTitle, 'height');
	}
});

TOC.replaceWith(header);

window.addEventListener('load', () => {
	header.style.height = header.getBoundingClientRect().height + 'px';
});
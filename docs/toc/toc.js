const header = document.createElement('header');
header.id = 'TOC';

const book = document.createElement('a');
book.className = 'book-title'
book.textContent = document.querySelector('.title').textContent;
book.href = 'index.html';
header.append(book);

const nav = document.createElement('nav');
header.append(nav);

TOC.querySelectorAll('li')
.forEach(({classList, firstChild: {textContent, href}}) => {
	const [title] = textContent.match(/(?<=\s).+/g);

	if (classList.contains('part')) {
		const partContainer = document.createElement('div');
		partContainer.className = 'part-container';
		nav.append(partContainer);

		const partTitle = document.createElement('a');
		partTitle.className = 'part-title';
		partContainer.append(partTitle);

		const first = document.createElement('div');
		first.className = 'first';
		partTitle.append(first);

		const restContainer = document.createElement('div');
		restContainer.className = 'rest-container';
		partTitle.append(restContainer);

		const rest = document.createElement('div');
		rest.className = 'rest';
		restContainer.append(rest);

		[, first.textContent, rest.textContent] = title.match(/([A-z]+)(.*)/);

		const dropdownContainer = document.createElement('div');
		dropdownContainer.className = 'dropdown-container';
		partContainer.append(dropdownContainer);

		const dropdown = document.createElement('div');
		dropdown.className = 'dropdown';
		dropdownContainer.append(dropdown);
	} else {
		const chapterTitle = document.createElement('a');
		chapterTitle.className = 'chapter-title';
		chapterTitle.textContent = title;
		chapterTitle.href = href;
		nav.querySelector('div:last-child .dropdown-container .dropdown').append(chapterTitle);
	}
});

TOC.replaceWith(header);
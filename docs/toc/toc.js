const hover = (target, element, property) => window.addEventListener('load', () => {
  let isShown = false;
  const size = element.getBoundingClientRect()[property];
  const hide = () => { 
	  element.style[property] = '0px';
    isShown = false;
  }
  const show = () => {
    element.style[property] = size + 'px';
    isShown = true;
  }
  const toggle = () => {isShown ? hide() : show()};
  
	target.addEventListener('mouseenter', show);
	target.addEventListener('mouseleave', hide);
	
	// For mobile, let the user toggle the submenus on tap
	target.addEventListener('touchstart', toggle)

	hide();
})

const title = 'Experimentology: An Open Science Approach to Experimental Psychology Methods';

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
    const [title] = textContent.match(/\s.+/g); // safari fix

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
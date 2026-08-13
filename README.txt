# Academic Website Template — Updated Version

This version adds:

1. Clickable paper titles.
2. Expand/collapse arrows for working-paper abstracts.
3. A wider research area.
4. Two-column publication layout on desktop.
5. A small research/academic-links sidebar to make better use of the right side of the page.
6. Responsive behavior that returns to a single-column layout on smaller screens.

## Adding your photo

Put your photo in this folder as:

`profile.jpg`

The HTML already points to that filename.

## Adding paper links

For a working paper, change:

`<a href="#" target="_blank">Working Paper Title</a>`

to your actual paper URL.

The same approach is used for publication titles.

## Adding abstracts

Put the abstract inside the corresponding:

`<div class="abstract" ...>`

The arrow automatically expands/collapses it.

## Why the new layout uses the right side

The original design leaves a large amount of unused horizontal space because the research text is constrained to a relatively narrow column. The revised design:

- makes the research section substantially wider;
- displays publications in two columns on desktop;
- uses a narrow right-hand sidebar for research interests and useful academic links;
- returns to one column on smaller screens.

If you prefer a more traditional academic website, you can remove the sidebar and instead make the paper list span the full width.

// Listing 5.8  Drag-and-drop stream logic

const drag$ = mouseDown$.concatMap(() => mouseMove$.takeUntil(mouseUp$));

drag$.subscribe(event => {
    panel.style.left = event.clientX + 'px';
    panel.style.top = event.clientY + 'px';
});

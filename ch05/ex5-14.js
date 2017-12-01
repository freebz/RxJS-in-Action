const drag$ = mouseDown$.map(() =>
    mouseMove$.takeUntil(mouseUp$))
    .concat();


const drag$ = mouseDown$
      .map(() => mouseMove$.takeUntil(mouseUp$))
      .concatAll();


const drag$ = mouseDown$.
      concatMap(() =>
		mouseMOve$.takeUntil(
		    mouseUp$.filter(() => confirm('Drop widget here?'))));

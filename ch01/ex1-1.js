let items = blockingHttpCall('/data');
items.forEach(item => {
    // process each item
});



ajax('/data',
     items => {
	 items.forEach(item => {
	     // process each item
	 });
     });
beginUiRendering();



ajax('<host1>/items',
     items => {
	 for (let item of items) {
	     ajax(`<host2>/items/${item.getId()}/info`,
		  dataInfo => {
		      ajax(`<host3>/files/${dataInfo.files}`,
			   processFiles);
		  });
	 }
     });
beginUiRendering();



ajax('<host1>/items',
     items => {
	 items.forEach(item => {
	     ajax(`<host2>/items/${item.getId()}/info`,
		  dataInfo => {
		      ajax(`<host3>/files/${dataInfo.files}`,
			   processFiles);
		  });
	 });
     });

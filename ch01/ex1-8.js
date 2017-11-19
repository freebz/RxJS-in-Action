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



ajax('<host1>/items')
    .then(items =>
	  items.map(item => ajax(`<host2>/data/${item.getId()}/info`))
	 )
    .then(promises => Promise.all(promises))
    .then(
	dataInfo => ajax(`<host3>/data/files/${dataInfo.files}`)
    )
    .then(promises => Promise.all(promises))
    .then(processFiles);



Stream(ajax('<host1>/items'))
    .streamMap(item =>
	       Stream(ajax(`<host2>/data/${item.getId()}/info`)))
    .streamMap(dataInfo =>
	       Stream(ajax(`<host3>/data/files/${dataInfo.files}`)))
    .subscribe(processFiles);

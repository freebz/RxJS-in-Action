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



ajax('<host1>/items')
    .then(items =>
	  items.forEach(item =>
			ajax(`<host2>/data/${item.getId()/info`)
			     .then(dataInfo =>
				   ajax(`<host3>/data/files/${dataInfo.files}`)
				  )
			     .then(processFiles);
			    )
		       )
	 );



let getItems = () => ajax('<host1>/items');
let getInfo  = item => ajax(`<host2>/data/${item.getId()}/info`);
let getFiles = dataInfo => ajax(`<host3>/data/files/${dataInfo.files}`);



getItems()
    .then(items => items.map(getInfo))
    .then(promises => Promise.all(promises))
    .then(infos => infos.map(getFiles))
    .then(promises => Promise.all(promises))
    .then(processFiles);

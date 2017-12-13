// Listing 7.2  Imperative error handling with asynchronous code

ajax('/data',
     data => {
	 for (let item of data) {
	     ajax(`/data/${item.getId()}/info`,
		  dataInfo => {
		      ajax(`/data/images/${dataInfo.img}`,
			   showImage,
			   error => {
			       console.log(`Error image: ${error.message}`);
			   });
		  },
		  error => {
		      console.log(`Error each data item: ${error.message}`);
		  });
	 }
     },
     error => {
	 console.log(`Error fetching data: ${error.message}`);
     }
});

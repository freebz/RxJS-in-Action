ajax('/data')
    .then(...)
    .catch(error => console.log(`Error fetching data: ${error.message}`))



ajax('/data')
    .then(item => ajax(`/data/${item.getId()}/info`))
    .catch(error => console.log(`Error fetching data: ${error.message}`))

    .then(dataInfo => ajax(`/data/images/${dataInfo.img}`))
    .catch(error => console.log(`Error each data item: ${error.message}`))

    .then(showImg)
    .catch(error => console.log(`Error image: ${error.message}`));



ajax('/data')
    .then(item => ajax(`/data/${item.getId()}/info`))
    .then(dataInfo => ajax(`/data/images/${dataInfo.img}`))

    .then(showImg)
    .catch(error => console.log(error.message));



try {
    let record = findRecordById('123');
	... potentially many lines of code in between
}
catch (e) {
    console.log('ERROR: Record not found!');

    // Handle error here
}



let record = null;
try {
    record = findRecordByName('RecordA');
}
catch (e) {
    console.log('ERROR: Cannot locate record by name');

    try {
	record = findRecordById('123');
    }
    catch (e) {
	console.log('ERROR: Record is nowhere to be found!');
    }
}



Try.of(() => findRecordById('123')); //-> Success(Record)
Try.of(() => findRecordById('456')); //-> Failure
Try.of(() => findRecordById('xxxxx'))
    .getOrElse(new Record(...));  //-> Default value



Try.of(() => findRecordById('123')).map(processRecord);

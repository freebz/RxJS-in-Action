let record = Try.of(() => findRecordById('123'))
    .map(processRecord)
    .getOrElse(new Record('123', 'RecordA'));



let record;
try {
    record = findRecordById('123');
    processRecord(record);
}
catch (e) {
    record = new Record('123', 'RecordA');
}

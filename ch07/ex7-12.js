const R = require('ramda');

const records = R.zip(
    ['RecordA', 'RecordB', 'RecordC'],
    ['123', '456', '789']
);
//=> [ [ 'RecordA', '123' ],
//     [ 'RecordB', '456' ],
//     [ 'RecordC', '789' ]
//   ]

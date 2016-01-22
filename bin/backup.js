var base = require('airtable').base(process.env.AIRTABLE_BASE);

var dump_records = function(tableName, fieldList) {
	base(tableName).list(null, null, {view: 'Main View'}, function(err, records, newOffset) {
		if (err) { console.log(err); return; }
		records.forEach(function(record) {
			fieldList.forEach(function(field) {
				console.log(tableName + '|' + field + " ", record.get(field));
			});
			console.log("---------------");
		});
	});
	dump_records;
};

dump_records('Piece status', ['Market', 'Piece', 'Date Submitted', 'Response date', 'Status', 'Notes']);
dump_records('Pieces', ['Piece title', 'Date Written', 'Type', 'Piece status', 'Notes']);
dump_records('Markets', ['Market name', 'Submission deadline', 'Piece status', 'Notes']);
console.log("================\nAIRTABLE_BASE: " + process.env.AIRTABLE_BASE + "\n================");


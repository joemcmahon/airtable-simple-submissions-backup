# Airtable backup utility

This is a sample Node.js backup utility using the Airtable API for a
submissions tracking application written using Airtable.

The Airtable database consists of three tables:
* A pieces table, which lists the pieces available for submission
* A markets table, which lists the markets to which a piece can be sent and
submission deadlines for those markets
* A submissions table, which has links to pieces and markets, plus the date a
piece was sent out, a response date, and a status (accepted, rejected, etc.).

The script takes a very simple approach to creating a backup, simply running
through each of the tables and dumping out the records in a format that (we
hope) will be restorable to an empty Airtable database with the same schema.

Note that we really would prefer to be able to pull the schema, and then
extract the table and field names to dump them. In the meantime, this
provides a basic backup function. Restore will be forthcoming when I'm sure
I understand restoring links, but backup is better than nothing.

To run it:

    npm install git@github.com:joemcmahon/airtable-simple-submissions-backup.git
		export AIRTABLE_API_KEY=YOUR_API_KEY # from your account page
		export AIRTABLE_BASE=YOUR_AIRTABLE_BASE # from the API page
    npm run backup >backup.txt

Sample output:

    Joe-McMahon:Airtable backup joemcmahon$ npm run backup
        
    > airtable-backup-simple-submissions@0.1.0 backup /Users/joemcmahon/Dropbox/Code/Airtable backup
    > node ./bin/backup.js

    ================
    AIRTABLE_BASE: appNaaaaAAAAAAaAA
    ================
    Markets|Market name  Magazine A
    Markets|Submission deadline  2016-03-31
    Markets|Piece status  [ 'recWDU6Tdd5Y6VRav' ]
    Markets|Notes  undefined
    ---------------
    Piece status|Market  [ 'recjiV86un0DbTNeU' ]
    Piece status|Piece  [ 'recKJtOk2hX2lCQjt' ]
    Piece status|Date Submitted  2016-01-19
    Piece status|Response date  2016-01-30
    Piece status|Status  Rewrite requested
    Piece status|Notes  Yay! Possible sale!


    ---------------
    Pieces|Piece title  First Piece
    Pieces|Date Written  undefined
    Pieces|Type  Short-short
    Pieces|Piece status  [ 'recWDU6Tdd5Y6VRav' ]
    Pieces|Notes  undefined
    ---------------
    Joe-McMahon:Airtable backup joemcmahon$ 

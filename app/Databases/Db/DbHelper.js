

import Realm from 'realm';
import Chapter from '../Models/Chapter';
import Story from '../Models/Story';


modelSchema = [
        Chapter,
        Story
    ];

var realm = new Realm({
  schema: [Chapter,
        Story],
  schemaVersion: 5,
  migration: function(oldRealm, newRealm) {
    // only apply this change if upgrading to schemaVersion 1
    if (oldRealm.schemaVersion < 1) {
      
    }
  }
});

export default realm;//  Realm({schema: modelSchema});


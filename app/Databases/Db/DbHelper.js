

import Db from 'Db';
import Chapter from '../Models/Chapter';
import Story from '../Models/Story';

class DbHelper {

    modelSchema = [
        Chapter,
        Story
    ];

    instance = null;

    getInstance() {
        
        if(instance == null) {
           let realm = new Db({schema: modelSchema});
           instance = realm;
        }
        return instance;
    }

    /* note: this is where you would also setInstance and define a constant, or other method for the instance path */
}

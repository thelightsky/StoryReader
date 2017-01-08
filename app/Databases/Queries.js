  
import database from './Db/DbHelper';

import Story from './Models/Story';

export default class Queries {

    /* a typical query */
    static getStory() {
        
        let stories = database.objects('Story');

        return stories;
    }


static AddStory(tit,au,pub) {

        database.write(()=>{
            database.create('Story', {title: 'abc', author: 'acb'});
        });
    }

}


import Realm from 'realm';

export default class Db extends Realm{

    query(model , filter) {
        let results = this.realm.objects(model);
        if(filter) {
            return results.filtered(filter);
        }

        return results;
    }

    

}

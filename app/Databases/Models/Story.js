import Realm from 'realm';


export default class Story extends Realm.Object {}
Story.schema = {
    name: 'Story',
    primaryKey: 'id',
    properties: {
        title: 'string',
        author: {type: 'string', optional: true},
        publish: 'date',
    }
}
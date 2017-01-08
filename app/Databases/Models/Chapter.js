import Realm from 'realm';
export default class Chapter extends Realm.Object {}
Chapter.schema = {
    name: 'Chapter',
    primaryKey: 'id',
    properties: {
        storyId: {type: 'int'},
        content: 'string',
    }
}
import Realm from 'realm';
export default class Chapter extends Realm.Object {}
Chapter.schema = {
    name: 'Chapter',
   
    properties: {
        content: 'string',
        story: {type: 'Story'},
    }
}
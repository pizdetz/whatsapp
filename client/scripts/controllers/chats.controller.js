import { Moment } from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ChatsCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({
            data() {
                return Chats.find();
            }
        });
    }

    remove(chat) {
        ChatsCtrl.remove(chat._id);
    }
}
ChatsCtrl.$name = 'ChatsCtrl';
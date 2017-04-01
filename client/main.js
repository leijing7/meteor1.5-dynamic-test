import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);

    import("bcryptjs").then( bcryptjs => {
      const saltRounds = 10;
      const salt = bcryptjs.genSaltSync(saltRounds);
      const plaintextPassword = '123456';
      const hash = bcryptjs.hashSync(plaintextPassword, salt);
      console.log("hashed password：", hash);
    });

    import("react").then( React => {
      import moment from 'moment'
      console.log("Today is ", moment().format('YYYY-MM-DD'));

      console.log("React object: ", React);
    });
  },
});

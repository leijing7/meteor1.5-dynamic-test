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
  async 'click button'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);

    try {
      let bcryptjs = await import("bcryptjs")

      const saltRounds = 10;
      const salt = bcryptjs.genSaltSync(saltRounds);
      const plaintextPassword = '123456';
      const hash = bcryptjs.hashSync(plaintextPassword, salt);
      console.log("hashed password：", hash);
    } catch (err) {
      console.log("hello error: ", err);
    }
  }
});

Template.info.events({
  async 'click button'(event, instance) {
    try {
      let di = await import("../imports/test_module")
      console.log("print dynamic imports: ", di.obj.test, di.num, di.default.anotherTest);

      let React = await import("react")
      let ReactDOM = await import("react-dom")
      
      import App from '../imports/components/App';
      ReactDOM.render( <App/>, document.getElementById('react-root') );
    } catch (err) {
      console.log("info error: ", err);
    }
  }
})

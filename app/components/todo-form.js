import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItem(value){
      this.model.store.createRecord('todo',{title: value, isComplete: false}).save();
      this.set('newItem', "");
    }
  }
});

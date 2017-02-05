import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    this.store.findAll('todo').then((todos)=>{
      if (todos.get('length') === 0) {
        this.store.createRecord('todo',{title: 'get milk'}).save();
        this.store.createRecord('todo',{title: 'clean clothes'}).save();
        this.store.createRecord('todo',{title: 'study chinese'}).save();
        this.store.createRecord('todo',{title: 'swim'}).save();
        this.store.createRecord('todo',{title: 'be kind'}).save();
      }
    })
  },
  model(){
    return this.store.findAll('todo');
  }
});

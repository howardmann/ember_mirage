import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  position: Ember.computed('todos', function(){
    return `${this.get('index')} of ${this.get('todos')}`;
  }),
  actions: {
    checkItem(){
      this.get('model').toggleProperty('isComplete');
    },
    deleteItem(){
      this.get('model').destroyRecord();
    },
    showEdit(){
      this.get('model').toggleProperty('showEdit');
    }
  }
});

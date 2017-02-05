import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
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

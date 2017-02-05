import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem(){
      this.get('model').save();
      this.get('model').toggleProperty('showEdit');
    }
  }
});

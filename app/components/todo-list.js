import Ember from 'ember';

export default Ember.Component.extend({
  itemCount: Ember.computed('model.length',function(){
    return this.get('model.length');
  }),
  checkCount: Ember.computed('model.@each.isComplete', function(){
    return this.get('model').filterBy('isComplete', false).length;
  })
});

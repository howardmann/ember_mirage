import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isComplete: DS.attr('boolean'),
  showEdit: DS.attr('boolean')
});

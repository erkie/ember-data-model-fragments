import MF from 'ember-data-model-fragments';
import DS from 'ember-data';

export default MF.Fragment.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  animals: MF.fragmentArray('animal'),
  person: MF.fragmentOwner()
});

import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import DataRoute from 'ember-data-route';

export default Ember.Route.extend(DataRoute, AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').find('staticPage', params.staticpage_id);
  }
});

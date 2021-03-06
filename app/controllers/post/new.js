import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    submitPost() {
      if (!this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      } else {
        let self = this;
        let model = this.get('model');
        model.save().then(() => {
          self.transitionToRoute('unpublished-posts');
        }).catch((err) => {
            console.log(err);
        });
      }
    }
  }
});

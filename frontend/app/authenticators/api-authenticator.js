import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'frontend/config/environment';

export default Base.extend({
  ajax: Ember.inject.service(),
  loginPath: ENV.apiHost + "/" + ENV.apiNamespace + "/auth/login/",
  logoutPath: ENV.apiHost + "/" + ENV.apiNamespace + "/auth/logout",
  refreshPath: ENV.apiHost + "/" + ENV.apiNamespace + "/auth/refresh",

  restore(data) {
    return this.get('ajax').request(this.get("refreshPath"), {
      method: 'POST',
      data: {
        token: data.token
      }
    });
  },

  authenticate(login, pass) {
    return this.get('ajax').request(this.get("loginPath"), {
      method: 'POST',
      data: {
        username: login,
        password: pass
      }
    });
  },

  invalidate() {
    return this.get('ajax').request(this.get("logoutPath"), {
      method: 'POST'
    });
  }
});

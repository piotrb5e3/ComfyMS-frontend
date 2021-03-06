import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'ComfyMS-frontend/config/environment';

const namespace_block = (ENV.APP.API_NAMESPACE ? `/${ENV.APP.API_NAMESPACE}` : "");

export default Base.extend({
  ajax: Ember.inject.service(),
  loginPath: `${ENV.APP.API_HOST}${namespace_block}/auth/login/`,
  logoutPath: `${ENV.APP.API_HOST}${namespace_block}/auth/logout/`,
  refreshPath: `${ENV.APP.API_HOST}${namespace_block}/auth/refresh/`,

  restore(data) {
    return this.get('ajax').post(this.get("refreshPath"), {
      data: {
        token: data.token
      }
    });
  },

  authenticate(login, pass) {
    return this.get('ajax').post(this.get("loginPath"), {
      data: {
        username: login,
        password: pass
      }
    });
  },

  invalidate() {
    return this.get('ajax').post(this.get("logoutPath"));
  }
});

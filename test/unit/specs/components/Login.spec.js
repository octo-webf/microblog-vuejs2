import Vue from 'vue';
import router from 'src/router';
import Login from 'components/Login';
import Auth from 'services/Auth';

describe('components', () => {
  describe('Login', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor({ router }).$mount();

    it('should render correct contents', () => {
      expect(vm.$el.querySelector('#login h1').textContent)
        .to.equal('Login');
    });

    describe('login()', () => {
      beforeEach(() => {
        sinon.spy(Auth, 'login');
      });
      it('should use Auth service to login the user', () => {
        vm.login();
        sinon.assert.calledOnce(Auth.login);
      });
    });
  });
});

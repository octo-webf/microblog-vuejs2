import Vue from 'vue';
import Login from 'components/Login';

describe('components', () => {
  describe('Login', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();

    it('should render correct contents', () => {
      expect(vm.$el.querySelector('#login h1').textContent)
        .to.equal('Login');
    });
  });
});

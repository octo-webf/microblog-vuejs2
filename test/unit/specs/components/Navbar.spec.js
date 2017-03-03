import Vue from 'vue';
import Navbar from 'components/Navbar';

describe('components', () => {
  describe('Navbar', () => {
    const Constructor = Vue.extend(Navbar);
    const vm = new Constructor().$mount();

    it('should render correct contents', () => {
      expect(vm.$el.querySelector('#navbar #navbar_home .navigation-bar__link-label').textContent)
        .to.equal('Home');

      expect(vm.$el.querySelector('#navbar #navbar_about .navigation-bar__link-label').textContent)
        .to.equal('About');

      expect(vm.$el.querySelector('#navbar #navbar_home router-link').getAttribute('to'))
        .to.equal('/');

      expect(vm.$el.querySelector('#navbar #navbar_about router-link').getAttribute('to'))
        .to.equal('/about');
    });
  });
});

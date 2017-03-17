import Vue from 'vue';
import Navbar from 'components/Navbar';
import router from 'router';

describe('components', () => {
  describe('Navbar', () => {
    const Constructor = Vue.extend(Navbar);
    const vm = new Constructor({ router }).$mount();

    it('should render correct contents', () => {
      expect(vm.$el.querySelector('#navbar #navbar_home .navigation-bar__link-label').textContent)
        .to.equal('Home');

      expect(vm.$el.querySelector('#navbar #navbar_about .navigation-bar__link-label').textContent)
        .to.equal('About');

      expect(vm.$el.querySelector('#navbar #navbar_home a').getAttribute('href'))
        .to.equal('#/');

      expect(vm.$el.querySelector('#navbar #navbar_about a').getAttribute('href'))
        .to.equal('#/about');
    });
  });
});

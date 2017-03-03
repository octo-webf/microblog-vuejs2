import Vue from 'vue';
import About from 'components/About';

describe('components', () => {
  describe('About', () => {
    const Constructor = Vue.extend(About);
    const vm = new Constructor().$mount();

    it('should render correct contents', () => {
      expect(vm.$el.querySelector('#about h2').textContent)
        .to.equal('We are everywhere ...');
    });
  });
});

import Vue from 'vue';
import Messages from 'components/Messages';

describe('components', () => {
  describe('Messages', () => {
    const Constructor = Vue.extend(Messages);
    const vm = new Constructor().$mount();

    it('should render correct contents', () => {
      expect(vm.$el.querySelector('.message-input input[type="text"]').getAttribute('placeholder'))
        .to.equal('What\'s new ?');
    });
  });
});

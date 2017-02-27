import Vue from 'vue';
import Messages from 'src/components/Messages';

describe('Messages components', () => {
  const Constructor = Vue.extend(Messages);
  const vm = new Constructor().$mount();

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.message-input input[type="text"]').getAttribute('placeholder'))
      .to.equal('Quoi de neuf ?');
  });
});

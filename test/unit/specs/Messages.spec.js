import Vue from 'vue';
import Messages from 'src/components/Messages';

describe('Messages components', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Messages);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.message-item__author').textContent)
      .to.equal('Root');

    expect(vm.$el.querySelector('.message-list__ul .message-item__content').textContent)
      .to.equal('First auto message');

    expect(vm.$el.querySelector('.message-input input[type="text"]').getAttribute('placeholder'))
      .to.equal('Quoi de neuf ?');
  });
});

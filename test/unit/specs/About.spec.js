import Vue from 'vue';
import Messages from 'src/components/About';

describe('About components', () => {
  const Constructor = Vue.extend(Messages);
  const vm = new Constructor().$mount();

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('#about h2').textContent)
      .to.equal('We are everywhere ...');
  });
});

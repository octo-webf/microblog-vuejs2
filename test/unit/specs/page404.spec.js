import Vue from 'vue';
import page404 from 'src/components/page404';

describe('page404 components', () => {
  const Constructor = Vue.extend(page404);
  const vm = new Constructor().$mount();

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('#page404 .warning-message').textContent)
      .to.equal('This page does not exist.');
  });
});

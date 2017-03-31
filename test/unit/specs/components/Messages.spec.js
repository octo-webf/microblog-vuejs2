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

    describe('locales', () => {
      const langages = Object.keys(Messages.locales);

      it('contains 2 langages', () => {
        expect(langages.length).to.equal(2);
        expect(langages).to.deep.equal(['fr', 'en']);
      });

      context('each langage', () => {
        describe('fr', () => {
          const locales = Object.keys(Messages.locales.fr);

          it('contains 1 locale', () => {
            expect(locales.length).to.equal(1);
            expect(locales).to.deep.equal(['message']);
          });
        });

        describe('en', () => {
          const locales = Object.keys(Messages.locales.en);

          it('contains 1 locale', () => {
            expect(locales.length).to.equal(1);
            expect(locales).to.deep.equal(['message']);
          });
        });
      });
    });
  });
});

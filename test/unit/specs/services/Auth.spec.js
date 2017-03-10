import Auth from 'services/Auth';

describe('services', () => {
  describe('Auth', () => {
    describe('pseudo()', () => {
      describe('when user is logout', () => {
        it('should return an empty string', () => {
          expect(Auth.pseudo()).to.equal('');
        });
      });
      describe('when user is login', () => {
        const pseudo = 'Plop24';
        beforeEach(() => {
          sinon.stub(Auth, 'ready').returns(true);
          sinon.stub(localStorage, 'getItem').withArgs('user').returns(JSON.stringify({ name: pseudo }));
        });
        it('should return \'Pseudo\'', () => {
          expect(Auth.pseudo()).to.equal(pseudo);
        });
      });
    });
  });
});

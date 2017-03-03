import routes from 'src/router';
import About from 'components/About';

describe('router paths', () => {
  it('have route for about page', () => {
    expect(routes.match('/about').name)
      .to.equal('About');

    expect(routes.match('/about').path)
      .to.equal('/about');

    expect(routes.match('/about').meta.auth)
      .to.equal(true);

    expect(routes.match('/about').matched[0].components.default)
      .to.equal(About);
  });
});

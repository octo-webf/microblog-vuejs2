import routes from 'src/router';

import About from 'components/About';

describe('router', () => {
  it('About', () => {
    const route_path = routes.match('/about');

    expect(route_path.name)
      .to.equal('About');

    expect(route_path.path)
      .to.equal('/about');

    expect(route_path.meta.auth)
      .to.equal(true);

    expect(route_path.matched[0].components.default)
      .to.equal(About);
  });
});

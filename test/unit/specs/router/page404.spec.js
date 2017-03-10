import routes from 'src/router';

import page404 from 'components/page404';

describe('router', () => {
  it('Messages', () => {
    const route_path = routes.match('/plop');

    expect(route_path.name)
      .to.equal('PageNotFound');

    expect(route_path.path)
      .to.equal('/plop');

    expect(route_path.meta.auth)
      .to.equal(undefined);

    expect(route_path.matched[0].components.default)
      .to.equal(page404);
  });
});

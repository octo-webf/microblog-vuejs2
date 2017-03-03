import routes from 'src/router';

import Login from 'components/Login';

describe('router', () => {
  it('Login', () => {
    const route_path = routes.match('/login');

    expect(route_path.name)
      .to.equal('Login');

    expect(route_path.path)
      .to.equal('/login');

    expect(route_path.meta.auth)
      .to.equal(false);

    expect(route_path.matched[0].components.default)
      .to.equal(Login);
  });
});

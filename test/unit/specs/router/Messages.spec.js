import routes from 'src/router';

import Messages from 'components/Messages';

describe('router', () => {
  it('Messages', () => {
    const route_path = routes.match('/');

    expect(route_path.name)
      .to.equal('Messages');

    expect(route_path.path)
      .to.equal('/');

    expect(route_path.meta.auth)
      .to.equal(true);

    expect(route_path.matched[0].components.default)
      .to.equal(Messages);
  });
});

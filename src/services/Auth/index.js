export default {
  name: 'auth',

  login(name) {
    localStorage.setItem('user', JSON.stringify({ name }));
  },

  logout() {
    localStorage.removeItem('user');
  },

  ready() {
    if (localStorage.user) {
      return true;
    }
    return false;
  },
};

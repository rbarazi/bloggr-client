App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.FixtureAdapter
  // adapter: DS.RESTAdapter.extend({
  //   url: 'http://localhost:3000'
  // })
});
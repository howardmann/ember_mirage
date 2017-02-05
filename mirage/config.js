export default function() {

  this.get('/todos', (db, request) => {
    return db.todos.all();
  });

  this.get('/todos/:id');




  this.post('/todos', function({ todos }, request) {
    let attrs = this.normalizedRequestAttrs();

    return todos.create(attrs);
  });

  this.del('/todos/:id', (db, request) => {
    let id = request.params.id;
    return db.todos.find(id).destroy();
  });

  this.put('/todos/:id', function({ todos }, request) {
    let id = request.params.id;
    let attrs = this.normalizedRequestAttrs();

    return todos.find(id).update(attrs);
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}

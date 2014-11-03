var Member = Backbone.Model.extend({

  defaults: {

    name: '',
    email: '',
    gender: '',
    subscribe: false
  },

  idAttribute: '_id',
  initialize: function() {
    var member = this.get('name');

  }

});

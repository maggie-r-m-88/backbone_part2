var Member = Backbone.Model.extend({

  defaults: {

    name: '',
    email: ''
  },

  idAttribute: '_id',
  initialize: function() {
    var member = this.get('name');

  }

});

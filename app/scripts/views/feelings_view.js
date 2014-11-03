var MembersView = Backbone.View.extend({

    tagName: 'ul',
    className: 'feels',


    initialize: function(options) {

      this.render(options.collection);

    },

    render: function (collection){
    var self= this;
    var template = $('#feels').html();
    var rendered = _.template(template);


    _.each(collection.models, function(c) {
       self.$el.append(rendered(c.attributes));
    });
    console.log(this.el);

    $('#feelscontainer').html(this.el);
    return this;

    }


});

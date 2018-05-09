var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView().render();
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    new SearchView().render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

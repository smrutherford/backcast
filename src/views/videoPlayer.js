var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  events: {
    'click .video-list-entry-title': 'render'
  }, 
  
  render: function() {
    // new Video({
    //   el: this.$('.video-player'),
    //   collection: this.collection
    // }).render();
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

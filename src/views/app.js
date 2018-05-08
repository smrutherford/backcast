var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(something) {
    this.videos = new Videos();
    this.render();
    this.videoPlayer = new VideoPlayerView();
    this.videoPlayer.render();
    this.videoList = new VideoListView();
    this.videoList.render();
    
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

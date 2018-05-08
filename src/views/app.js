var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videoPlayer = new VideoPlayerView();
    this.videoPlayer.render();
    this.videoList = new VideoListView();
    this.videoList.render();
    
  },


  render: function() {
    // new VideoListView({
    //   el: this.$('.list'),
    //   collection: this.collection
    // }).render();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

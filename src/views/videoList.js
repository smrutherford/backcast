var VideoListView = Backbone.View.extend({
  
  model: Video,  

  collection: new Videos(window.exampleVideoData),
  
  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
 
  render: function() {
    console.log(this.$el);
    this.collection.forEach(this.renderVideoListEntry, this);
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  renderVideoListEntry: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});


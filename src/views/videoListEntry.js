var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',

  events: {
    'click .video-list-entry-title': 'handleClick'
  },
 
  model: Video,
  
  handleClick: function() {
    this.model.select();
  },
 
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

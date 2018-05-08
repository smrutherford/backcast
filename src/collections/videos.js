var Videos = Backbone.Collection.extend({

  model: Video
  
  
});


// var Movies = Backbone.Collection.extend({

//   model: Movie,

//   initialize: function() {
//     this.on('change', this.sort, this);
//   },

//   comparator: 'title',

//   sortByField: function(field) {
//     this.comparator = field;
//     this.sort();
//   }

// });
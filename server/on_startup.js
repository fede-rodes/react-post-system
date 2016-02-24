// Pre-populate Comments collection
if (!!App.collections.Comments && App.collections.Comments instanceof Mongo.Collection && App.collections.Comments.find().count() === 0) {
   console.log('PRE-POPULATE Comments COLLECTION');
   const docs = [
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Fede Rodes", text: "This is another comment"}
   ];

   _.each(docs, function(doc) {
      App.collections.Comments.insert(doc);
   });
}

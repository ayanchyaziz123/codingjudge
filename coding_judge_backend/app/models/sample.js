// Import the Tag model
const Tag = require('./Tag');

// Create instances of Tag and save them to the database
const tag1 = new Tag({
  name: 'Two Pointer',
  description: 'A technique used in algorithms to solve problems efficiently.'
});

const tag2 = new Tag({
  name: 'Array',
  description: 'A data structure consisting of a collection of elements, each identified by an index.'
});

const tag3 = new Tag({
  name: 'Breadth First Search',
  description: 'A graph traversal algorithm that starts at the tree root and explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.'
});

// Save the instances to the database
Tag.insertMany([tag1, tag2, tag3])
  .then(() => {
    console.log('Tags inserted successfully');
    mongoose.connection.close(); // Close the connection after inserting data
  })
  .catch(err => {
    console.error('Error inserting tags:', err);
  });

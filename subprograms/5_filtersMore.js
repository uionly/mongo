const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.log('NOT Connected to MongoDB!!! ', error));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    // eq
    // ne
    // gt
    // gte
    // lt
    // lte
    // in
    // nin
    const courses = await Course
        //    .find();
        // .find({ author: 'Deepak', isPublished: true } )
        // .find({ author: /^Deepak/i } )
        // .find()
        // .or([ {author: 'Deepak'}, {isPublished: true}])
        // .and([ {author: 'Deepak'}, {isPublished: true}])
        .find({ price: { $gt: 10, $lte: 20 } } )
        // .find({ price: { $in: [10, 15, 20] } } )
        // .limit(10)
        // .sort({ name: 1 })
        // .select({ name: 1, tags: 1})
        // .count();
    console.log('Courses', courses)
}

 getCourses();

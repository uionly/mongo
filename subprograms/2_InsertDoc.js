const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.log('NOT Connected to MongoDB!!! ', error));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// define a course object instance


const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Express Tutorials',
        author: 'Kumar',
        tags: ['express', 'server'],
        isPublished: false
    });
    
    const result = await course.save();
    console.log('Document saved: ', result);
}

createCourse();
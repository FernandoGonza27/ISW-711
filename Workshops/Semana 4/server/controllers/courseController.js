const Course = require("../models/courseModel");

/**
 * Creates a course
 *
 * @param {*} req
 * @param {*} res
 */
const coursePost = async (req, res) => {
  let course = new Course(req.body);
  await course.save()
    .then(course => {
      res.status(201); // CREATED
      res.header({
        'location': `/api/courses/?id=${course.id}`
      });
      res.json(course);
    })
    .catch( err => {
      res.status(422);
      console.log('error while saving the course', err);
      res.json({
        error: 'There was an error saving the course'
      });
    });
};

/**
 * Get all courses or one
 *
 * @param {*} req
 * @param {*} res
 */
const courseGet = async(req, res) => {
  try{
      if (req.query && req.query.name) {        
        const  courses = await Course.find({name:req.query.name});
       
        res.status(200).json(courses);
      } else {              
        if (req.query.sort) {
          const  courses = await Course.find().sort(req.query.sort);    
          res.status(200).json(courses);                           
        }else{
          const  courses = await Course.find();    
          res.status(200).json(courses); 
        }                                         
      }
      
  }catch(err){
        res.status(404).res.json(err);
  }
 
};

/**
 * Updates a course
 *
 * @param {*} req
 * @param {*} res
 */
const coursePatch = async(req, res) => {
 
  try{
    const updateCourse = await Course.findByIdAndUpdate(
        req.params.id,
         { $set: req.body},
         { new: true});
    res.status(200).json(updateCourse);
  }catch(err){
      res.json(err);
  }
};

/**
 * Deletes a course 
 *
 * @param {*} req
 * @param {*} res
 */
 const courseDelete = async(req, res) => {
  // get teacher by id
  try{
    await Course.findByIdAndDelete(
        req.params.id);
    res.status(200).json("Course has been deleted");
  }catch(err){
      next(err);
  }

};

module.exports = {
  coursePost,
  courseGet,
  coursePatch,
  courseDelete
}
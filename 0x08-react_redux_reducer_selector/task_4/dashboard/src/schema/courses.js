import { normalize, schema } from 'normalizr'; // Importing normalize function and schema from 'normalizr' library

// Creating a schema for the 'courses' entity
const courses = new schema.Entity('courses');

// Normalizer function for courses data
const coursesNormalizer = (data) => {
  // Normalizing the data using the 'courses' schema
  const normalizedData = normalize(data, [courses]);
  // Returning the normalized courses entities
  return normalizedData.entities.courses;
};

// Exporting the coursesNormalizer function as default
export default coursesNormalizer;

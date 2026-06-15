import path from 'path';

//Get the directory name of the main module file
// This gives us the root directory of the project (where app.js is located)
// export default path.dirname(import.meta.main);

//Get the directory name of the current module file's parent directory
// This gives us the root directory of the project (where app.js is located)
// import.meta.dirname gives the directory of the current file (util folder)
export default path.join(import.meta.dirname, '../');
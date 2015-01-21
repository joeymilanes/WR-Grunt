module.exports = {
  options: {
    livereload: true,
  },
scripts: {
    files: ['js/*.js'],
    tasks: ['concat','uglify'],
    options: {
      spawn: false,
    }
  }
}
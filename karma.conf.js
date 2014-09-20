module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [ 'js/*.js', 'specs/*.js' ]
    });
};
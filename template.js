'use strict';

exports.description = "Create an Angular Module, including Karma unit tests";
exports.notes = "";

exports.after = "You should now install project dependencies with _npm install_," +
    " followed by _bower install_.  After that, you may start the environment with _grunt_.";

exports.warnOn = '*';

exports.template = function(grunt, init, done){
    init.process({},[
        init.prompt("name"),
        init.prompt("description"),
        init.prompt("version"),
        init.prompt("repository"),
        init.prompt("homepage"),
        init.prompt("bugs"),
        init.prompt("author")
    ],function(err,props){

        props.keywords = [];

        props.sterileName = props.name.replace(/\W/g, '');

        props.devDependencies = {
            "express":"~3.4.0",
            "grunt-plato": "~0.2.1",
            "grunt-docular": "latest",
            "grunt-angular-templates":"~0.4.1",
            "grunt-contrib-cssmin":"~0.6.2",
            "grunt-contrib-watch": "~0.5.3",
            "grunt-contrib-clean": "~0.5.0",
            "grunt-contrib-copy":"~0.4.1",
            "grunt-concurrent": "~0.3.1",
            "grunt-karma": "~0.6.2",
            "grunt-contrib-jshint": "~0.6.4",
            "grunt-strip": "~0.2.1",
            "grunt-contrib-uglify": "~0.2.4",
            "grunt": "~0.4.1",
            "grunt-express-server":" ~0.4.3",
            "grunt-contrib-connect": "~0.5.0",
            "karma-coverage": "~0.1.0",
            "grunt-contrib-concat": "~0.3.0",
            "grunt-bump": "0.0.11"
        };

        var files = init.filesToCopy(props);


        //init.addLicenseFiles(files, props.licenses);
        init.copyAndProcess(files,props);
        init.writePackageJSON('package.json',props);

        done();
    });
};
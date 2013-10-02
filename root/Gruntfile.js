module.exports = function(grunt){
    var pkg = require('./package.json'), //package file
        i; //iterative member

    grunt.initConfig({
        "pkg": grunt.file.readJSON('package.json'),
        "bump":{
            "options":{
                "files":[
                    "package.json",
                    "bower.json"
                ],
                "updateConfigs": ["pkg"],
                "commit": true,
                "commitMessage": "Release v%VERSION%",
                "commitFiles": ["-a"],
                "createTag": true,
                "tagName": "v%VERSION%",
                "tagMessage": "Version %VERSION%",
                "push": true,
                "pushTo": "origin"
            }
        },
        "karma":{
            "unit-pre":{
                "configFile": "karma.unit.pre.js",
                "autowatch": false
            },
            "unit-post":{
                "configFile": "karma.unit.post.js",
                "autowatch": false
            },
            "e2e":{
                "configFile": "karma.e2e.js",
                "autowatch": false
            }
        },
        "connect":{
            "server":{
                "options":{
                    "port": 9001,
                    "base":[
                        "docs",
                        "analytics"
                    ],
                    "keepalive":true,
                    "livereload":true
                }
            }
        },
        "concurrent":{
            "environment":{
                "tasks":["watch","connect"],
                "options":{
                    "logConcurrentOutput":true
                }
            }
        },
        "strip":{
            "dist":{
                "src":"process/app.js",
                "options":{
                    "inline":true,
                    "nodes":[
                        "console.log",
                        "console.warn",
                        "debugger"
                    ]
                }
            }
        },
        "plato":{
            "report":{
                "options":{
                    "jshint":false
                },
                "files":{
                    "analytics/plato":["src/js/**/*.js"]
                }
            }
        },
        "jshint":{
            "options":{
                "smarttabs":true,
                "unused":false,
                "boss":true,
                "debug":true
            },
            "all":["src/js/**/*.js"]
        },
        "clean":{
            "dist":["dist"],
            "process":["process"]
        },
        "watch":{
            "files":[
                "README.md",
                "src/**/*.js",
                "test/**/*.js"
            ],
            "tasks":["test"],
            "options":{
                "livereload":true,
                "atBegin":true
            }
        },
        "concat":{
            "options":{
                "stripBanners":true,
                "banner": "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('dd/mm/yyyy') %> */",
                "process":true

            },
            "app":{
                "src":[
                    "src/js/app.js",
                    "src/js/**/!(app).js"
                ],
                "dest":"process/app.js"
            },
            "vendor":{
                "src":[
                    "vendor/managed/angular/angular.min.js",
                    "vendor/managed/angular-bootstrap/ui-bootstrap-tpls.min.js"
                ],
                "dest":"dist/vendor.js"
            }
        },
        "uglify":{
            "options":{
                "mangle":false,
                "report":"min",
                "wrap":true,
                "compress":{
                    "dead_code":true,
                    "drop_debugger":true,
                    "sequences":true,
                    "properties":true,
                    "comparisons":true,
                    "evaluate":true,
                    "booleans":true,
                    "loops":true,
                    "unused":true,
                    "if_return":true,
                    "join_vars":true,
                    "cascade":true,
                    "warnings":true
                }
            },
            "app":{
                "options":{
                    "sourceMap":"dist/app.map",
                    "report":"gzip",
                    "banner": "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %> */"
                },
                "files":{
                    "dist/app.js":[
                        "process/app.js"
                    ]
                }
            }
        },
        "jsdoc":{
            "dist":{
                "src": [
                    "README.md",
                    "src/js/**/*.js"
                ],
                "options":{
                    "destination": "docs"
                }
            }
        },
        "copy":{
            "maps":{
                "files":[
                    {
                        "expand":true,
                        "flatten": true,
                        "src":["vendor/managed/**/*.map"],
                        "dest":"dist/",
                        "filter":"isFile"
                    }
                ]
            }
        }
    });

    for(i in pkg.devDependencies){ //iterate through the development dependencies
        if(pkg.devDependencies.hasOwnProperty(i)){ //avoid iteration over inherited object members
            if(i.substr(0,6) == 'grunt-'){ //only load development dependencies that being with "grunt-""
                grunt.loadNpmTasks(i); //load all grunt tasks
            }
        }
    }
    grunt.registerTask('default',["concurrent"]);
    grunt.registerTask('test',['jshint','karma:unit-pre','plato','jsdoc']);
    grunt.registerTask('dist',['clean:dist','jshint','karma:unit-pre','concat','strip','uglify:app',"copy:maps",'karma:unit-post','karma:e2e','jsdoc','bump']);
    grunt.registerTask('build',['clean:dist','jshint','karma:unit-pre','concat','strip','uglify:app',"copy:maps",'karma:unit-post','karma:e2e','jsdoc']);
};

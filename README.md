Angular Module Scaffold
==========================

A grunt-init scaffold for reusable Angular Modules.

This scaffolds configures a bare-bones module with a single mock service, as well as basic unit test for said service.

It also provides code coverage and maintainability analytics out of the box with Karma Coverage and Plato,
as well as JSDocs documentation.

To utilize these tools and analytics, after deploying your development environment, navigate to `http://127.0.0.1:9001/`

The scaffold provides the following grunt methods:

`grunt` - deploys the development environment with live reload.  This environment runs testing, doc gen, and analytics!

`grunt build` - performs a build

`grunt dist` - performs a build, bumps the version (hotfix), and pushes to your repo!


To use it, clone the project to your `~/.grunt-init` folder and follow the instructions here:  http://gruntjs.com/project-scaffolding


Once you have scaffolded a project, be sure to run `npm install` and `bower install` to set up the boiler plate dependencies!

Enjoy!

-The Big Red Geek

# Angular App Scaffold

A grunt-init scaffold for Angular Applications.

#### Currently, linking is manual.  I plan to provide a Bower/JamJS wrapper within the grunt tooling that will automatically keep the linker up-to-date!
#### Currently, no doc-gen provided out-of-the-box.  Docular coming soon!
#### Currently, no e2e testing provided out-of-the-box.  Protractor coming soon!
#### Currently, no directive testing provided out-of-the-box.  Coming soon!

### Why use this scaffold?

If you are like me, you like to have a complete understanding, as well as complete control over, your build process.
Other alternatives, like `yeoman`, provide a very generic and, in my opinion, bloated solution to managing and building angular applications.
This scaffold is intended to be a highly modular, yet minimalistic, build scaffold that allows angular developers to
fully control every facet of the build process using traditional methods like post-compile linking.

This scaffold is currently NON-AMD solution, meaning that all files are compiled into a single distributable.  I plan
to add dynamic linking (AMD) configuration during compile time in the very near future!


### Installing

This scaffold requires `grunt-init` and `bower` to be installed!

Be sure to follow the instructions here:  http://gruntjs.com/project-scaffolding

To use it, clone the project to your `~/.grunt-init` folder:

    $ git clone https://github.com/thebigredgeek/grunt-init-angular-app.git angular-app

Then, to create a project, within your project directory:

    $ grunt-init angular-app

Finally, install dependencies:

    $ npm install
    $ bower install


### Overview

This scaffolds configures a bare-bones module with a single mock service, as well as basic unit test for said service.

It also provides code coverage and maintainability analytics out of the box with Karma Coverage and Plato,
as well as JSDocs documentation.

To view coverage report:     `http://127.0.0.1:8080/coverage/`
To view complexity report:   `http://127.0.0.1:8080/complexity/`
To view your app:            `http://127.0.0.1:8080/`


### Linker

The scaffold provides compile-time linking functionality for JS and CSS packages.  To configure linking for external
CSS and JS packages, edit the `linker/css.json` and `linker/js.json` files, respectively.

During compile time, these files are added to the build product PRIOR to the application source code.  This is handy
for compile external dependencies into your project that are guaranteed to be available within your source code.



### Tooling

The scaffold provides the following grunt methods:

`grunt` - deploys the development environment with live reload.  This environment runs testing, doc gen, and analytics!

`grunt build` - performs a build

`grunt dist` - performs a build, bumps the version (hotfix), and pushes to your repo!




===================================PART-1(NPM)=================================================
 
1. npm - it will manage packages like it is a big respositiry will having no of packages those were hosted on web/internet
2. if we want to use npm first we have to configure npm in our project
      npm init
    then it will add package.json file in your project folder
    it is basically ''configuration for npm''  (it holds what packages we have installed by using npm in dependencies)
    ex.bundlers(webpack, parcel,...)
3. to install node packages by using npm
      npm install -D <packageName>
      there are two types of dependencies - dependencies (which will be used in production)
                                          - devDependcies (which will be used in development phase). in the above command '-D' means we will say to npm while installing package i need this as a dev dependency in my project.
4. In a package.json file, the caret (^) and tilde (~) symbols are used to specify the allowed version ranges for a dependency
             (Major.Minor.Patch)(1.2.3)
      Caret (^) - The caret symbol ''allows updates to the minor and patch versions'', but prevents updates to a new major version.
      Tilde (~) - The tilde symbol is more restrictive and ''only allows updates to the patch version'', while locking the major and minor versions

                 Who actually increments the version?

                        ✔️ npm (or yarn / pnpm)
                        ✔️ ONLY when you run:

                        npm install
                        npm update
                        npm install <package>

4. npm install -D <packageName>
   while entering this command two files will be added
package-lock.json - 
              keeps a track of exact version being installed (package.json - keeps a aprox version)
node_modules - 
              is a folder that stores all the packages you install using npm, including the dependencies of those packages too.    
5. add .gitignore file
   in that keep whatever files/folders don't want to keep on github repo (which we can regenerate again on server or wherever we want to run that project)                


===================================PART-2(parcel)===============================================

1. building our app(code) using parcel  
               npx parcel <soureFile>
     then code will build(and keep that builded version of code in one folder incase od parcel that folder is 'dist') and parcel will create server and run our code on server at 
     http://localhost:1234  (that means parcel will host our app on the server)

     -> here 'npx' means execute a package
             'npm' means install a package

     # Parcel
     - Dev Build
     - local server (host your app on a server)
     - HMR (Hot Module Replacement)
     - File Watching Algorithm (writte in c++)
     - Caching (it gives you faster build)
     - Image optimization
     - Minification 
     - Bundling
     - Compressing
     - Code Splitting
     - Differential bundling (support older browser with the help of 'browserslist')
     - Error handling
     - Https (npx parcel index.html --https)(it will load in https mode)
     - Tree Shaking (remove unused code)
     - Different dev(npx parcel index.html) and prod (npx parcel build index.html) bundles


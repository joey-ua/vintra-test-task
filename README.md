# ThermoCo sensor admin app

To start the app, clone repository and run

`yarn`

and 

`yarn start`

in the project directory

It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Also you will need to install Docker and run command:

`docker run -p 8000:8000 -it vintratest/thermo_api:latest`

to bootstrap backend for this project

## TODO:
  - thermal sensor manipulation (create/update/remove)
  - better UI and layout
  - some testing with Jest
  - SWR fine-tune 

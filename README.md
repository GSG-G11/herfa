<h1 align="center">Herfa ⚙️</h1>

<h4> A platform to connect clients with Gazan services providers.<h4/>
  
<p align="center">
    <img src="https://badgen.net/badge/React/v.18.0.0/blue" />
    <img src="https://badgen.net/badge/React Router Dom/v.6.3.0/e63f4c" />
    <img src="https://badgen.net/badge/Express/v.4.17.3/259dff" />
<img src="https://badgen.net/badge/Sequelize/v.6.19.0/blue" />
</p>

    
## Deploy link 
    
## Screen for the website
![](https://i.imgur.com/VkqOtp6.png)
 
## :interrobang: Problem:
The difficulty to reach out to talented craftsmen in a specific area, and to check their work without the need to visit their workplace. 
In addition to the inability of this craftsman to reach those interested to get a service or in need of professional services.

## 💡 Solution:
A platform that combine both service provider with those how want the appropriate service.

## :world_map: User Journey :
**AS A USER**
I can search about a service in specific area, and I can surf the provider profile to see his work, and then reach him out by whatsapp.

**AS A CRAFTMAN**
I can signup to add my work, and my contact details So clients can reach me out.

## :bookmark_tabs: User Stories:

### As general user 

- I can see all services.
- I can search about specific service.
- I can search about craftsmen by (name or services or location)
- I want see the craftsman profile (contact , previous work)
- I want to be able sending a message to craftsman on WhatsApp.
- I can review service I had.

 
### As professional
- I want to register in the app 
- I can add my personal contact information
- I want to add previous work
- I can edit my personal information 
- I can see client reviews.
    
## :art: Figma:
[Herfa Figma](https://www.figma.com/file/fBAwegsjOdayjGwoMrFs3G/Herfa)

## :computer: Technologies:
- [Typescript with react](https://www.typescriptlang.org/docs/handbook/react.html)
- [Express.js](https://expressjs.com/) 
- [React.js](https://reactjs.org/)
- [Sequelize Postgres](https://sequelize.org/docs/v6/getting-started/)
- [Ant Design ](https://ant.design/)
- [i18](https://react.i18next.com/) 
- [S3](https://aws.amazon.com/s3/)

## Schema DataBase
![](https://i.imgur.com/7z4wuSw.png)


    
## 🚀 Usage

To be able to run the project locally follow the steps: 
Install packages:
```javascript=
$ git clone https://github.com/GSG-G11/herfa.git
$ cd herfa
$ npm run i // to install server side packages
$ npm run install-client // to install client side packages 
```

Setup database:
```
// how to create db locally pgcli 
pgcli \i link of the file herfa\server\database\config.sql
$ npm run db:seed // to insert fake data    
```
Open your favorite IDE(VScode)
> $ code .

To start your servers and enjoy the experience 
```
$ npm run dev // start backend server
$ npm run client // start frontend server
```    
> Don't forget to rename example.env to .env and edit it.


    
## Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](https://github.com/GSG-G11/herfa/graphs/contributors)].

#### Our Great mentor 
[Lina Ebeid](https://github.com/LinaYahya)
### The Amazing team member

- [Saleh T. Marouf](https://github.com/devstm)
- [Rand Sohail](https://github.com/RandSohail)
- [Abdallah Rabah](https://github.com/AbdallahGot)
- [Abdulrahman Jamil](https://github.com/abdulrahman-2020)

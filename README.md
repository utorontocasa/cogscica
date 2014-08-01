# CogScica
  
Code and content for [cogsci.ca](http://cogsci.ca)  
  
This assumes you're running linux and have already installed:  
- git  
- nodejs  
- npm  
  
If you don't, and are using Ubuntu, run this in your terminal:  
```
    bash
  
# become the root user
sudo su
  
# you need this to build the rest
apt-get install python-software-properties
  
# add a new repository
apt-add-repository ppa:chris-lea/node.js
  
# update your package manager
apt-get update
  
# install git and nodejs
apt-get install git nodejs
  
# install npm
apt-get install npm
  
# drop root permissions
exit
```
  
```
bash
git clone https://github.com/utorontocasa/cogscica.git
cd cogscica
npm install
node server.js
```
  
Then just browse <a href="http://localhost:8080">here</a>  
  

# Getting involved
  
Join our irc channel on freenode, ##cognitivescience.  
If you don't have a native irc client, use our [webchat](http://webchat.freenode.net/?channels=%23%23cognitivescience)  

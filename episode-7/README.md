======usEffect
1. without any dependency it will call on every render/after every render
2. with an empty array as a dependency ,it will after after intial render/component loads
3. with an array having any dependencies,then on first render and whenever that dependecy changes it will be called./it will call always after intial render

4. React creates SPA(single page application) there are one and only one page it loads components based on routing (client side routing)

5. server side routing means like if we are going to /contact then will fetch Contact.html  from the server that means entire page will reload
for example if we have a index.html,contact.html whenever you are going to /contact page make a network call and fetch that contact.html from server and it get's load on the browser....

6. client side routing means like if we are going to /contact then component will get's load on client side entire page doesnn't reload no need to make fecth from server on intial load itself all compone ts will get on routing only those componets will get's load

but in client side rendering we will have only one html page or file
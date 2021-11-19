Next js

its a react framework

react is library of javascript whereas next js is framework of react

library mean in which you have to install things you need for example you use react-router-dom for that you have to first install it whereas framework mean everything is already provided inside the package like having inbuilt feature you don’t need to install from outside

why next.js

1. its seo efficiency
2. super fast, easy to scan and great user experience

Installing:-
npx create-next-app appname

Routing
to make more pages in next js just simply make new file with .js extension in pages folder (for example about.js)
in next js index.js is the first “/“ page

to include boostrap you have to install by npm install bootstrap and then include it in \_app.js (import "bootstrap/dist/css/bootstrap.min.css”;)

there are three way to include css

1. inside styles/globals.css
2. for separate for your page then you have to yourpagename.module.css (for example Home.module.css) this is important and it must be inside the styles folder and then include your page (import styles from ../../styles.yourpagename.module.css)

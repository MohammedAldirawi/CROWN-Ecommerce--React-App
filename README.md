# Create E-Commerce using React & Component-styled with Redux;

Live: https://crown-mo.netlify.app/

  - Install React using 
	```
	npx create-react-app crwn-ecommerce
	```


   - Add styled-components library to the app
	 ```
	 npm install styled-components --save-dev
	 ```

  - Create Homepage component

  - Create Directory, Collection, Shop, Menu Item Component
  
  - Install firebase using 
  	```
	npm install firebase --save-dev
	```
	
  - Setup firebase utils and paste config code to src 
  
  - Integreate firebase into app, created sign in page with sign in with Google
  
  - Implement firebase utils, included ability to store authenticated user

  - Install Redux, React Redux, Redux Logger using: 
	```
	npm install --save-dev redux react-redux redux-logger
	```
  - Implement userReducer and userActions to header and app component:	
	- Store
	- Connect
	- Logger
	- Provider 

  - Update our app to redirect to home page if user is signed in

  - Add cartIcon and cartDropdown components

  - Implement Cart reducer to Cart Components 

  - Update cart utils to group items in cart reducer

  - Create Cart item component and connect cart dropdown with cartItems reducer

  - Update the app with reselect, replace cart selectors with memoized selectors
	install selector to the project :
	```
	npm install reselect --save-dev
	```

  - Update our mapStateToProps using createStructuredSelector from reselect in the whole app
	>> Using createStructuredSelector is good, because in future it may help if we decided to grow our app.
	
  - Add checkout page, checkout item component and update cart to use selectors

  - Add addItem and removeItem functionality from checkout item component

  - Install redux-persist to use localStorage or sessionStorage using: 
	```
	npm install redux-persist --save-dev
	```
	
  - Update store, root reducer, and index to use redux-persist to storage 'cache' cart

  - Update Directory, Shop state into react-redux reducer and reselect

  - Normalize Data in SHOP_DATA from array to object to avoid using find method

  - Install React Stripe Checkout using:
	```
	npm install react-stripe-checkout --save-dev
	```

  - Update Stripe Integration, favicon and title

  - Install Heroku to deploy crown app online 

  - Create Heroku buildpack using command:
	```
	heroku create $APP_NAME --buildpack mars/create-react-app
	```

  - Push it to github
	```
	git push heroku $BRANCH
	```

   - Authorize Domain to firebase to allow sign in and sign up

   - Remove redux-logger from production env



   - Add SHOP_DATA to firestore

   - Add SHOP_DATA from firestore to the App and insert it to reducer 

   - Modify shop component and to use withSpinner that takes is Loading becasue we used async fetch in SHOP_DATA from db 
   
   - Install Redux-thunk using: 
	 ```
	 npm install --save-dev redux-thunk
	 ```
   
   - Redux-thunk to handle async dispatch, and to create function action, and type in redux to move function we want to use more than 1 time to actions, we use it in "store.js"

   - Break down shop page component to 2 containers using container pattern, HOC is good because we pass props to component instead of render.

    ** Hooks
    
   - Update the app component, sign in component, sign up component to use Hooks: using useState, useEffect.

   - Seperate folder to create a backend and frontend for the app.

   - Install nodemon for backened server 
      ```
      npm install nodemon --save-dev 
      ```

   - Install nodemon for backened server 
      ```
      npm install --save-dev concurrently
      ```
   
   - Write package.json file for backend side.

   - Configure server.js backend side, to accept payment from stripe.

   - install axios in client side(front end), to fetch data between frontend to backend (used for Stripe payment)
      ```
      npm install axios --save-dev
      ```

   - Add media query - Mobile responsive    

   - Use lazy and Suspense from react to speed website, and errorboundary in case any error ocurred 

   - Install compression to use gzip to compress files, used in server.js file : 
      ```
      npm install compression
      ```

   - Use memo and pureComponent for perfomance

   - Add Profiler to homepage to check component actualDuration and phase.

   - Install express sslify to support https 
      ```
      npm install express-sslify --save
      ```
   
   - Add serviceWorker, and convert the app to PWA

   - Secure firebase, and add Cart to firestore to check cart when user sign in

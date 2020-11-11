![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Express JSX IronBeers

## Introduction

Sometimes you would just like to have a very descriptive list of all beers so you could see their type, color, each beer's percentage of alcohol, or which beer is well paired with some food. In this LAB, you will create a web app where the user will be able to see a list of beers, get random suggestions, and read a very descriptive explanation of each beer.

"How will we get all of this information?", you might ask. Well, we will be using an npm package :package: as our data source.

For this exercise, we will work with the **[PunkAPI](https://www.npmjs.com/package/punkapi-javascript-wrapper)** npm package. In the background, the package communicates with an API (server and the database) that contains all of the beers. The package enables us to use it's methods to retrieve beers. Each beer has some properties, and we can play around with this data to practice working with JSX templates and components.

**In this lab, we can also practice reading external (PunkAPI) docs and learn how to get what we need from an API.**

## Getting Started

- Fork this repo
- Then clone this repo.

## Submission

- Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "Finished implementing all iterations"
$ git push origin master
```

- Create Pull Request so that your TAs can check up your work.

## Instructions

### Iteration 0: Initial setup

Before running the application, the first thing you have to do is to install all of its dependencies.

Run the following command to install all dependencies listed in `package.json`:

```bash
$ npm install
```

To run the app:

```bash
$ node app.js

# you can also run: npm run start:dev
```

<br>


### Iteration 1: Layout barebones

Our starter code includes the basic configuration needed to run our app. The **`/`** route is set to render the `Home.jsx` view. Let's start by creating a `Layout` component.

Inside of the `views` folder, create a `Layout.jsx` file. In the bonus iteration, you can give your app some style, but for now, let's focus on the logic.

The `Layout` component should have the HTML structure show in the next example. You can copy past the below structure and edit the part following the comments in the below code:

```jsx
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>JSX Ironbeers</title>
  </head>

  <body>
    <nav>
      <a href=""> Home </a>
      <a href=""> Beers </a>
      <a href=""> Random Beer </a>
    </nav>
    {/* This is the only page that will have full html setup */}

    {/* 
        Here you should add { props.children }
        to enable showing other components/views 
        within the Layout
    */}
  </body>
</html>
```

Following the comments in the above code you should add the `{ props.children }` in the body after the `<nav></nav>` which will enable displaying of the views inside of the `Layout`.

Remember to pass the `props` argument to the `Layout` :

```jsx
function Layout(props) {}
```

<br>


The navbar includes 3 anchor links with empty `href` attributes.

Make sure to edit the `href` of each anchor in the following way:

- **_Home_** ==> should navigate to `/`.

- **_Beers_** ==> should navigate to `/beers`.

- **_Random Beer_** ==> should navigate to `/random-beers`.

Layout done, let's move to creating these three pages.

<br>


### Iteration 2 - Home _view_

- The first view should be **Home** and should be rendered on **`/`** route. The route is already created in the `app.js` file, you can head there to check it out. The file that gets rendered is `Home.jsx`.


- The HTML of the `Home.jsx` view should be wrapped in the `<Layout></Layout>` component, like so:

  ```jsx
  function Home() {
    return (
      <Layout>{/* HTML goes here */}</Layout>
    );
  }
  ```

  Remember to `require` the Layout component in the `Home.jsx`.

- `Home` view should include the `beer.png` _image_, which you can find at `/public/images`.

- Together with the image, `Home.jsx` should have two links:

  - `Check the Beers!` and
  - `Check a Random Beer`.

  Both links should navigate to the corresponding routes (which we previously defined in our navbar as well). Later, you can style these `a` tags to make them look like buttons.

![image](https://user-images.githubusercontent.com/23629340/36723774-7d791ef2-1bb1-11e8-991b-39dbf4fd8a59.png)

<br>


### Iteration 3 - Beers _view_

The next thing we will be working on is a view where we can present all the beers we will retrieve from the punkApi. This view will be rendered every time the user visits the the `/beers` route.

This leads us to the conclusion that in this step, we have the two main focus areas:

- the `/beers` route and

- the `Beers.jsx` view.

<br>


#### Iteration 3.1 The `/beers` route

In this step, we will have a couple of micro-steps:

- Create a `/beers` route inside the `app.js` file.

- Inside the `/beers` route, call the `getBeers()` method (the **PunkAPI** provides this method, and you can find more about it [here](https://www.npmjs.com/package/punkapi-javascript-wrapper#getbeersoptions)).

  **Calling the `.getBeers()` makes a request to the punkAPI (similar to using `fetch()`).**

  **This will return a Promise with the response from the API that should be resolved with an array of 25 beers.**

- You should pass that array to the `Beers` view in the `res.render` and then use it inside of `Beers.jsx`.

We will give you a hand during the first time. You should do it in the following way:

```js
punkAPI
  .getBeers()
  .then(beersFromApi => {
    console.log('All the Beers from the API: ', beersFromApi);
    
    // Prepare the object to be passed/injected to `Beers` view
    const data = { beersFromApi: beersFromApi };

    // Render the `Beers` view and pass/inject to it the object containing the `beersFromApi`
    res.render('Beers', data);
  })
  .catch(error => console.log(error));
```

The `data` object passed to the `res.render` will be available inside of the `Beers.jsx` view as the `props` argument.

<br>

#### 3.2 The `Beers.jsx` view

- Create a `Beers.jsx` file to render every time we call this route.
- This file should have access to the beers we get as a response from the database. Remember, you should have called the `res.render` method after getting the _beers_ array. _Hint:_ That means inside of the function you're passing to the `then` method. :wink:
- In the `Beers.jsx` view, using `.map` loop over the **array of beers** coming via the `props` argument. 
Display an **image**, **name**, **description** and **tagline**.

<br>

```jsx
const React = require('react');
const Layout = require('./Layout'); // require the Layout component


function Beers (props) {
  // `props` is the the `data` object passed during `res.render('Beers', data )`

  // Wrap the Layout around all other HTML content
  return (
    <Layout>

      <div>
        {/* We are maping over the beersFromApi array we received */}
        { 
          props.beersFromApi.map( (beerObj) => {
            return (
              <div>
                <img src={beerObj.image_url} width="200" alt="" />
                <h3>{beerObj.name}</h3>
                <h5>{beerObj.tagline}</h5>
                <p>{beerObj.description}</p>
            </div>
            );
          })
        }
      </div>

    </Layout>
  );
}

module.exports = Beers;
```

Now, when you click on the `Beers` link on the top navigation or on the `Check the beers` button, you should be able to see all the beers. Boom! :boom:

- Remember to wrap all the content that `Beers` view is displaying in a `<Layout></Layout>` component.

<br>

### Iteration 4 - Random beer _view_

As in the previous step, we will have to focus on creating a route to display a random beer. When a random beer is retrieved, we have to pass it to the view.

<br>


#### 4.1 The `/random-beer` route

- Let's create the `/random-beer` route.

- Inside the route, you should call the PunkAPI `getRandom()` method. It returns a promise that will resolve with a different beer object on every call.

  Look at the [documentation](https://www.npmjs.com/package/punkapi-javascript-wrapper#getrandom) to understand the structure of the data that you're supposed to get back. :+1:

The example of how this method works is shown below:

```js
punkAPI
  .getRandom()
  .then(responseFromAPI => {
    // your magic happens here
  })
  .catch(error => console.log(error));
```

- Eventually, the received beer needs to be passed to the `RandomBeer.jsx` view. You still don't have this file, so let's proceed to create it.

<br>


#### 4.2 The `RandomBeer.jsx` view

- The `RandomBeer.jsx` should display the random beer that was retrieved from the database.

  You should display an **image**, **name**, **description**, **tagline**, **food pairing** and **brewer tips**. The following image shows how this page could look like if you give it a bit of style. However, the styling will come later, so, for now, focus on rendering the view with all of the information about the beer:

![image](https://user-images.githubusercontent.com/23629340/36724536-c5924892-1bb3-11e8-8f22-fd1f8ce316af.png)

Now, every time the user clicks on the _Random beer_ link in the navbar or on the _Check a random beer_ button on the home page, they should see this page with a new, random beer.

**You've just finished all the mandatory iterations. Good job!**

Let's proceed to the bonus iterations.

<br>


### Bonus: Iteration 5 - BeerCard component

**Components represent smaller parts of the views that are likely to be reused.**

Let's see what beer properties we display on the `/beers` _(the beers page)_ and compare them with the properties we displayed on the `/random-beer` _(random beer)_ page:

| properties/ page |      `/beers`      |   `/random-beer`   |
| :--------------: | :----------------: | :----------------: |
|      image       | :white_check_mark: | :white_check_mark: |
|       name       | :white_check_mark: | :white_check_mark: |
|   description    | :white_check_mark: | :white_check_mark: |
|     tagline      | :white_check_mark: | :white_check_mark: |
|   food pairing   |        :x:         | :white_check_mark: |
|   brewer tips    |        :x:         | :white_check_mark: |

As we can see, we have 4 in common properties, which means our code could be a bit more **DRY** if we refactor it using _components_.

<br>


#### 5.1 Create the `BeerCard` component

You should create a smaller component and use it to show each beer.

- You should store this smaller components inside a separate folder.
Therefore, create a new folder called `components` inside of the `views` folder.
Then create the `BeerCard.jsx` file inside the `components` folder.

- We should create our `BeerCard.jsx` so that it displays the properties: **image**, **name**, **description**, **tagline**, **food pairing** and **brewers tips**  of the beer.
<br>

You can reuse the code that you wrote in the `RandomBeer.jsx` view:

```jsx
<div>
  <img src={props.oneBeer.image_url} width="200" alt="" />
  <div>
    <h3>{props.oneBeer.name}</h3>  
    <h5>{props.oneBeer.tagline}</h5>  
    <p>{props.oneBeer.description}</p>  
          
    <h4>Food Pairing</h4>  
    <ul>
      { props.oneBeer.food_pairing.map( (food, i) => {
        return ( <li key={i}> {food} </li> );
      })}
    </ul>

    <p><strong>Brewers Tips:</strong> {props.oneBeer.brewers_tips} </p>

  </div>
</div>
```

<br>


#### 5.2 Display the `BeerCard` in the `RandomBeer` view

- Now, you should go ahead and use this component ( `<BeerCard />` ) inside of the `RandomBeer.jsx`.

- You should replace the HTML in the ``RandomBeer.jsx` page and instead use the `<BeerCard/>`, like this:

  ```jsx
  function RandomBeer(props) {
    return (
      <Layout>
        <BeerCard beer={props.oneBeer} />

        {/* `props.oneBeer` is the data coming from the res.render('RandomBeer', data) */}
      </Layout>
    );
  }
  ```

- Remember to `require` the `BeerCard` component in the `RandomBeer.jsx` file.

<br>


#### 5.3 Display the `BeerCard` in the `Beers` view

- You should go ahead and use the `<BeerCard />` component inside the `map` of the `Beers.jsx` .
- The `<BeerCard />` used in the `Beers.jsx` **should not display** the **food pairing** nor **brewers tips**. You can pass an additional boolean value prop to the `<BeerCard />` and use it to hide the **food pairing** and **brewers tips**, when rendering it in the `Beers.jsx` view, like so:

<br>

##### `Beers.jsx`

```jsx
{
  props.beersFromApi.map( (beerObj) => {
    return <BeerCard beer={beerObj} hideDetails={true} />;
  });
}
```

After this you should implement a conditional using a [ternary operator](https://flaviocopes.com/javascript-ternary-operator/), to hide the additional details when `props.hideDetails` is `true`. You can use the below example as a guide on how to do it:

<br>

##### `BeerCard.jsx`

```jsx
{
  props.hideDetails 
    ? null 
    : (<div> {/*  Food Pairing and Brewers Tips go here */} </div>);
}
```

- The above ternary condition will hide the `div` with **food pairing** and **brewers tips** when the _prop_ `hideDetails={true}` is passed to the `BeerCard` in the `Beers.jsx` view.

<br>

- After implementing the ternary conditional, and using the `BeerCard` in the `map` of the `Beers.jsx`, making a browser request to the `/beers` route should return the following:

![image](https://user-images.githubusercontent.com/23629340/36724392-61fa7336-1bb3-11e8-8468-189908167e10.png)

Our code shrunk by a lot just because we managed to create a reusable piece of code (the component).

<br>


### Bonus: Iteration 6

Make all the beers on the `/beers` page clickable. If users click on a specific beer, they should be able to see a page with the detailed information of that particular beer.

The trick is to wrap an anchor tag around every beer, and make sure that the URL has the beer's `id` in the `href` property. Something like:

<br>


```jsx
<a href="/beers/137">{/* Beer details  */}</a>
```

<br>


To understand how you can get the `id` from the URL, read this section of the [Express docs](http://expressjs.com/en/4x/api.html#req.params).

To find out how you can get an individual beer from the punkAPI using the _beerId_, check out the [`.getBeer(id)` method on the punkAPI docs](https://www.npmjs.com/package/punkapi-javascript-wrapper#getbeerid).

<br>


**You should create the new a new route in `app.js` to handle the requests coming from clicking on the beer (wrapped in the anchor)** .

This new route shoud render a view displaying the specific beer got using the [`.getBeer( id )` punkAPI method](https://www.npmjs.com/package/punkapi-javascript-wrapper#getbeerid).

<br>


### Bonus: Iteration 7

The overall layout should look like this:

![image](https://user-images.githubusercontent.com/23629340/36723450-8bbcb164-1bb0-11e8-81c3-4fe939730bb9.png)

You will find the `colors` and `fonts` on the `css` file. Remember to link the `css` file to your **main layout**:

<br>

##### `Layout.jsx`
```jsx
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>JSX Ironbeers</title>

        
        <link rel="stylesheet" href="/stylesheets/styles.css"/>

      </head>
```

Let your artsy side shine! :sparkles:

Happy Coding! 💙

<br>


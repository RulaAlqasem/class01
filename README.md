# class01

# Overview
By the end of this week, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

create a new React application using create-react-app and fill it with components. Refer to ‘Feature Tasks’ to see exactly which components to build and where to display them.

Resources
[React Official Documentation](https://reactjs.org/docs/getting-started.html)

#### the Header component needs to have an `<h1>` with a title.
  
#### the Footer component needs to contain your name as the author.

#### The Main component needs to render at least two copies of a component called HornedBeasts.

#### The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

#### The HornedBeast component needs to contain an `<h2>` that displays the title of the animal, an `<img>` element with src, alt and title attributes, and a `<p>` that displays the description.

 loop over the data to display three HornedBeast components:
 ```
 
[{
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Mother (or father) rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },
  
  {
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a creepy unicorn head mask",
    "keyword": "unicorn", 
    "horns": 1
}]
```
```

Number and name of feature: _Feature #1: Display images_____Feature #2: Allow users to vote for their favorite beast___________Feature 3: Bootstrap_______________

Estimate of time needed to complete: 
Feature #1 :4 h ;
Feature 2: 30 m
Feature 3: 30 m
_____

Start time: _____
3 pm

Finish time: _____
12 pm

Actual time needed to complete: _____6 H

```

Feature #1: Display images
Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?
Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the images in the gallery

How are we implementing it?
The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.
Feature #2: Allow users to vote for their favorite beast
Why are we implementing this feature?
As a user, I want to be able to interact with the site and pick my favorite beast.
What are we going to implement?
Given that a user clicks on an image, the number of “favorites” displayed on that image will increase by one.

How are we implementing it?
Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

Put a heart in each horned beast with the number of times it was “favorited” next to it.

Feature 3: Bootstrap
Why are we implementing this feature?
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
What are we going to implement?
Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way
The images should be displayed in columns, as screen width allows

How are we implementing it?
Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
Stretch Goal: Add Interaction
Why are we implementing this feature?
As a user, I want to be able to interact with each item on the page.
What are we going to implement?
Given that a user clicks on an item other than the horned beasts, such as the title of the page or the footer, the information and styles should change.

How are we implementing it?
When the user clicks on elements such as the header, footer or title of page, make something change using state.
You can update the words, change the styles or add something new. Be creative.
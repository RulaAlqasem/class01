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

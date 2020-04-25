# Instashop

---

### Description

This application is a social media application focused on users sharing their photos with users they approve. The galleries created will be shopable. A customer can select an item within the photo and be redirected to a website for purchase.

Customers can purchase from a range of categories to shop from while sellers can create an account which can include B2B and B2C with B2C being public.

Link to deployed site: `TBD`

##### MVP

- Create users and relationships (B2B relationships)
- Lead customer to checkout
- Create a visually appealing website that keeps the user in the application longer
- User, Post, Comments Entities

##### Post-MVP

- Improve Mobile view to align with competition quality. This will be additional styling.
- Embedding shopping experience within the app
- Add Favorites
- Add Followers

---

### Wireframes

Prototype: https://xd.adobe.com/view/b099dd13-b52a-4fda-508b-f485c6b2e106-c6a8/?fullscreen&hints=off

![ERD](https://github.com/ReginaClarke/Instashop/blob/master/Media/InstaShop-Wireframe.png)

#

### Component heirarchy

![ERD](https://github.com/ReginaClarke/Instashop/blob/master/Media/Component%20Hierarchy.jpeg)

#

### Entity Relationship Diagram

`https://www.lucidchart.com/invitations/accept/deef5d80-fc56-4749-a24a-c58a9132ca93`

![ERD](https://github.com/ReginaClarke/Instashop/blob/master/Media/Entity%20Relationship%20Diagram%20-%20Instashop.png)

#

### Estimating Time for Completion

     Component  ---  | Priority | Estimated Time    | Actual Time
     Home            | H        | 1hrs              | TBD hrs
     Header          | H        | .5hrs             | TBD hrs
     Footer          | H        | .5hrs             | TBD hrs
     Sign-in         | H        | 1hrs              | TBD hrs
     Sign-up         | H        | 1hrs              | TBD hrs
     User Timeline   | H        | 3hrs              | TBD hrs
     Create Post     | H        | 3hrs              | TBD hrs
     Create Comment  | H        | 3hrs              | TBD hrs
     Create like     | H        | 3hrs              | TBD hrs
     Search          | H        | 1hrs              | TBD hrs
     My Faves        | H        | 3hrs              | TBD hrs
     Product List    | H        | 3hrs              | TBD hrs
     404 Page        | H        | 1hrs              | TBD hrs
     Total Component | H -------| 24hrs-------------| TBD hrs
     CSS             | H        | 8hrs              | TBD hrs
     UAT & Fixes     | H        | 8hrs              | TBD hrs
     Grand Total     | H -------| 40hrs-------------| TBD hrs

#

---

#

### Expected Challenges

Creating all parts of the application which allows the user to fully understand the point of the application while still fully understanding each line of code. My goal is to use comments mindfully to ensure I can overcome this.

I get hung up on connecting the front-end to the back-end, so I expect to spend more time reviewing this material.

Managing state efficiently is something I'm working on, so I intent on spending time reviewing this.

My plan of action to overcome this is to scale back where necessary to ensure my full understanding of all parts I develop for the final project. I will expand during post-mvp where needed.

---

---

---

### Installation instructions

- Ruby version: 2.6.4

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions:

Backend:
  1. In root folder install Heroku
  2. Create the URL
- ...
### Code

I loved this code snippet because it is a real life example of using the slice method.  Seeing "see more" when text is long is quite comment in our day to day life, so finding this quick solution was quite cool to see.

      	```
        <p className="postCaption">
          {post.caption.length >= 35 ? `${post.caption.slice(0,34)} ...more. ` : post.caption }
        </p>

      	```
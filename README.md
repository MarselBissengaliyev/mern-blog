# Project name - MERN-BLOG
**[Visit](https://mern-blog-phi.vercel.app/)** site

## Navigation
1. [Stack](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#stack)
2. [Photos](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#photos)
3. [Pages](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#pages)
4. [Backend npm packages](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#backend-npm-packages)
5. [Frontend npm packages](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#frontend-npm-packages)
6. [Backend env example](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#backend-env-example)
7. [Frontend env example](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#frontend-env-example)
8. [Social Medias](https://github.com/MarselBisengaliev/mern-blog/blob/master/README.md#social-medias)

## Stack
In this project i used MERN Stack:
1. MongoDB — document database
2. Express(.js) — Node.js web framework
3. React(.js) — a client-side JavaScript framework
4. Node(.js) — the premier JavaScript web server

## Photos
![Posts by tag page](https://res.cloudinary.com/dttlmitix/image/upload/v1677277282/mern-blog-phi.vercel.app_tags_marsel_bisengaliev_qgguiy.png "Posts by tag page")
![Single Post](https://res.cloudinary.com/dttlmitix/image/upload/v1677277278/mern-blog-phi.vercel.app_posts_63f907278cc4c33e5a3fde95_lcghxv.png "Single Post")
![Home page](https://res.cloudinary.com/dttlmitix/image/upload/v1677277252/mern-blog-phi.vercel.app__wb5m7a.png "Home page")
![Edit & Add post page](https://res.cloudinary.com/dttlmitix/image/upload/v1677277214/mern-blog-phi.vercel.app_posts_63f9172e837b10ea9e53a46c_edit_bbd4xa.png "Edit & Add post page")

## Pages
1. **Home**: The main page where user see the posts, he can sort them by date and popularity, and he see last 5 tags, comments.
2. **Login**: The page where you see 2 input fields: 1) E-mail; 2) Password; If user entered fields correct the app navigate him to home page and register him like authenticated (store jwt token in localstorage).
3. **Register**: The page where you see 3 input fields: 1) E-mail; 2) Password; 3) Fullname; If user entered fields correct in the database create new user and app navigate him to home page, in the end register him like authenticated (store jwt token in localstorage)
4. **Add Post**: The page where user can create a new post, there he can upload a preview image for post what he creates, set title, markdown, tags. If the user is authenticated, he can leave comments, as well as user can see comments from other users of this post.
5. **Edit Post**: This page has the same design like the "Add Post" page, but here a user update post.
6. **Posts by tag**: This page show to user posts by tag, he also can sort them by date and popularity.

## Backend npm packages
```json
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-validator": "^6.15.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.9.2",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.20"
```

## Frontend npm packages
```json
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.8.0",
    "@mui/material": "^5.8.0",
    "@reduxjs/toolkit": "^1.8.2",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "clsx": "^1.1.1",
    "easymde": "^2.16.1",
    "prettier": "^2.6.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-hook-form": "^7.32.0",
    "react-markdown": "^8.0.3",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-simplemde-editor": "^5.0.2",
    "sass": "^1.52.1",
    "web-vitals": "^2.1.4"
```

## Backend env example
- MONGOOSE_CONNECT_URL=YOUR URL
- CLIENT_URL=http://localhost:3000
- SECRET_KEY=YOUR SECRET KEY
- PORT=4444

## Frontend env example
- REACT_APP_API_URL=http://localhost:4444

## Social Medias
* [GitHub](https://github.com/MarselBisengaliev)
* [Telegram](https://t.me/marsel_bisengaliev)
* [Instagram](https://www.instagram.com/marsel_bisengaliev/)
* [VK](https://vk.com/marsel_bisengaliev)
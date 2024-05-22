# Initialization
```bash
$ npx create-next-app@latest next-guide            
Need to install the following packages:
create-next-app@14.2.3
Ok to proceed? (y) y
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes 
```

# Basic Routing
Start the app
```bash
npm run dev
```
go on `http://localhost:3000/` and you will see the root page located at `src/app/page.tsx`. But this page is actually not the only thing that is rendered. It is rendered as children of all parent or sibling layouts. In this case the `src/app/layout.tsx`.

NextJs uses file based routing, to show this you can navigate to `http://localhost:3000/hello` and you will see the about page located at `src/app/hello/page.tsx`. This is because the route is folder based and within the hello folder there is a page.tsx. This always has to be called page.tsx, there are other conventions like route.ts or loading.tsx which we will see later.

# Dynamic Routing
To create a dynamic route you can create a folder with square brackets `[]` in the name. For example `src/app/posts/[id]/page.tsx`. This will create a dynamic route that can be accessed by `http://localhost:3000/posts/1` or `http://localhost:3000/posts/2`. The `id` is a variable that can be accessed in the page.tsx file. The id can be retrieved through the params.

# Server Side Rendering
As default all the components are statically pre-rendered. If you run `npm run build` you will see the following output: 

```bash
Route (app)                              Size     First Load JS
┌ ○ /                                    145 B          87.1 kB
├ ○ /_not-found                          871 B          87.8 kB
├ ○ /hello                               145 B          87.1 kB
└ ƒ /posts/[id]                          145 B          87.1 kB
+ First Load JS shared by all            87 kB
  ├ chunks/23-0627c91053ca9399.js        31.5 kB
  ├ chunks/fd9d1056-2821b0f0cabcd8bd.js  53.6 kB
  └ other shared chunks (total)          1.86 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

Which tells you that the hello page is static prerenderd. Which means that it is rendered at build time and the content is the same for all users. The posts page is server rendered on demand. This means that the content is rendered on the server and the content can be different for each user.

To prove that they are server rendered we can add a console log statement to the root page `src/app/page.tsx` and see that the statement is printed in the npm run dev console and not in the browser console. Visit `http://localhost:3000` to see the statement.

# Client Side Rendering
For some use-cases we want client components. For example: 
- Components that need to validate user input with interactive error messages
- Animated components that react to user behavior like drag and drop
- many more

But NextJs runs on the server and the server does not have access to the browser. To solve this problem we can use the `"use client";` directive. Check out the `src/app/client/page.tsx` file to see how this is done. In this page we can use, useEffect, useState, useRef and many more hooks.
If you visit `http://localhost:3000/client` you will see that the console log statement is printed in the browser console but also in the npm run dev console. This is because NextJs preprenders the page and sends it to the browser. The browser then renders the page and the client side code is executed.

# Data Fetching and Mutations
## Static Site Generation
NextJs has a few ways to fetch data. The easiest is to fetch data on the server and send the rendered page to the client.

On the page `src/app/posts/page.tsx` we fetch data from an API on the server, render it on the server and send the page to the client. If you disable javascript this still works perfectly fine, which wouldn't be the case, if we fetched this on client side. This also has an incredible advantage for crawlers and SEO. Since the page arrives loaded. Visit it on `http://localhost:3000/posts`.

## Server Side Rendering

If we run `npm run build` we can see a problem. The page is statically rendered. But NextJs doesn't tell us about this problem, because when running in dev mode, this is rerendered on every request. Only when built for prod this becomes static.

```bash
Route (app)                              Size     First Load JS
┌ ○ /                                    149 B          87.1 kB
├ ○ /_not-found                          871 B          87.8 kB
├ ○ /client                              279 B          87.2 kB
├ ○ /hello                               149 B          87.1 kB
├ ○ /posts                               149 B          87.1 kB
└ ƒ /posts/[id]                          149 B          87.1 kB
+ First Load JS shared by all            87 kB
  ├ chunks/23-51dfd99b24924880.js        31.5 kB
  ├ chunks/fd9d1056-2821b0f0cabcd8bd.js  53.6 kB
  └ other shared chunks (total)          1.86 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

This results in the posts page to be the same all the time. To fix this we can add the `export const dynamic = "force-dynamic";` to opt out of static rendering. This will make the page server rendered on demand.

```bash

Route (app)                              Size     First Load JS
┌ ○ /                                    149 B          87.1 kB
├ ○ /_not-found                          871 B          87.8 kB
├ ○ /client                              279 B          87.2 kB
├ ○ /hello                               149 B          87.1 kB
├ ƒ /posts                               149 B          87.1 kB
└ ƒ /posts/[id]                          149 B          87.1 kB
+ First Load JS shared by all            87 kB
  ├ chunks/23-51dfd99b24924880.js        31.5 kB
  ├ chunks/fd9d1056-2821b0f0cabcd8bd.js  53.6 kB
  └ other shared chunks (total)          1.86 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

## Client Side Rendering
The easiest way to render data in a client component is to pass the data to it. Lets create a post item component which is a client component.

We create it at `src/app/components/PostItem.tsx` and integrate it in the map at `src/app/posts/page.tsx`. We added a view counter which increments every time the mouse hovers over the post item. This is a client side rendered component. Visit `http://localhost:3000/posts` to see the component. This data is lost as soon as the page is reloaded.

If you disable javascript in your browser (open the console, and then press cmd+shift+p and type disable javascript) you will see that the view counter doesn't work anymore. This is because the client side code is not executed. Nonetheless the page is still rendered and the data is still there because it is prerendered on the server.

"enable javascript" to reenable javascript.

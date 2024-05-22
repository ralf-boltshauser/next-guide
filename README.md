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
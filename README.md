:warning: Do not rely on this document.

# Mudlify

## Usage
`npx degit github:mudlabs/mudlify#master <folder-name>`
- `npm install` to initiat package dependencies.
- `npm run dev` to fire up the dev build.
- `npm run build` to distribute the public build _(e.g. for Netlify)_.


## Developing Your Site
If you're going to be using the Netlify CMS with your site, all CMS files should be posted to the `.cms` directory.`


### Admin Directory
- This is the `admin` directory for _Netlify_, it will be mapped to `admin` in your `output` directory.



### Public Directory
- All files or folders in the `public` directory are mapped to the `root` of your `output` directory.



### Assets Directory
- Put all your static assets _(images etc...)_ here.
- It maps to `assets` in your `output` directory.
- The `media` directory from `.cms` will be output here, in `assets/media`.



### Scripts Directory
- All your scripts go here.
- They map to `scripts/index.js` in your `output` directory.



### Styles Directory
- All your styles go here.
- They map to `styles/main.css` in your `output` directory.



### Markup Directory
- `.yaml` files in the `.cms` directory are mapped to `.html` files in the `markup` directory.
- The directory structure of `markup` is mapped to the `output` directory.
- Any `html` file starting with `$` is marked as a component. `$layout` is reserved.
- The string `[slug]` in any file or folder name maps to the slug of a `cms` file.
  - `[x]` where `x` is the name of a `cms` file maps to that file.
  - `cms` folders automatically search for a _like-named_ folder.
- Mapping between `cms` files and `markup` files happens on a `first file found` basis.
    ```
    // So if we have a cms directory like this;
    _cms
     |_ posts/red-hill-cookies.yaml
        posts/barn-fresh-milk.yaml
     |_ about.yaml
     |_ contact.yaml
    
    // And a markup directory like this;
    markup
     |_ posts/[slug]/index.html
     |_ [about]/index.html
     |_ [contact].html

    // Then the output directory would look like this;
    root
     |_ posts/red-hill-cookies/index.html
        posts/barn-fresh-milk/index.html
     |_ about/index.html
     |_ contact.html
    ```



#### Named Mapping
- Implements a _left-to-right_ hand side association into the `[slug]` directive. This gives you more power over associating `cms` items and the eventual `output` items.
    ```
    // Assume we have the same cms directory as shown above in the Markup Directory section.
    // And we have a markup directory like this;
    markup
     |_ [posts:brands]/[slug]/index.html
     |_ [about]/index.html
     |_ [contact:index].html

    // Then the output directory would look like this;
    root
     |_ brands/red-hill-cookies/index.html
        brands/barn-fresh-milk/index.html
     |_ about/index.html
     |_ index.html
    ```


    
### Components
_Not yet supported_.
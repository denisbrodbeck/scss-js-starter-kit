# SCSS and JS Starter Kit

A web starter kit with scss, js and working sourcemaps.

This is a (*fairly simple*) boilerplate project for my web projects.

## Main Features

* SCSS lint, compile and minify with *sourcemaps*
* JS lint, compile and minify with *sourcemaps*
* No gulp, grunt or webpack - only npm scripts and rollup

## Installation

Just clone the repo, delete the `.git` folder, adapt `package.json` to your liking and start hacking.

```bash
git clone --depth 1 https://github.com/denisbrodbeck/scss-js-starter-kit my-web-project
cd my-web-project
rm -rf ./.git
```

## How

### SCSS

* Lint with *stylelint* and *stylelint-config-recommended-scss*
* Compile with *node-sass* (sourcemaps included)
* Prefix with *postcss*
* Minify with *cleancss* (sourcemaps included)

### JS

* Lint with *standard*
* Compile with [rollup](https://rollupjs.org/) (sourcemaps included)
* Minify with *uglifyjs* (sourcemaps included)

## License

The MIT License (MIT) — [Denis Brodbeck](https://github.com/denisbrodbeck). Please have a look at the [LICENSE](LICENSE) for more details.

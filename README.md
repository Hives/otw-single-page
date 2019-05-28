# Single page site for the Old Time Wasters

Online here: <http://theoldtimewasters.com/>

Using:
- [Jekyll](https://github.com/jekyll/jekyll)
- [One Page Wonder](http://themes.jekyllrc.org/one-page-wonder/) theme

## Installation

1. Fork and clone this repo
2. In the repo root: `gem install bundler jekyll`
3. `cd one-page-jekyll-site`
4. `bundle exec jekyll serve`
5. Site is served at <localhost:4000> by default

## Deployment

When you run `bundle exec jekyll serve` Jekyll compiles the site and saves it in
`one-page-jekyll-site/_site`. To deploy the site just copy this folder to your
server.

To automate this copy the script `push-example` in the repo root to e.g.
`push-production` and update it with the local path to the site, and your server
details. Running the script will copy the site to the server. Requires SSH
access.

## Aims

I had three objectives making this site (apart from the obvious one of needing a
website for my band):
1. Practice making a fully responsive site across a range of viewports
2. Use some snazzy modern CSS animation and typography techniques, falling back
   to sensible behaviour in older browsers
3. Learn Jekyll

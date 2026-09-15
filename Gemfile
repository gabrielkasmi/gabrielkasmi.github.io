source "https://rubygems.org"

# GitHub Pages builds this site with the `github-pages` gem, which pins
# Jekyll and every plugin to the exact versions GitHub Pages runs in
# production. Keeping to this gem (and the jekyll-feed / jekyll-seo-tag /
# jekyll-sitemap plugins it already whitelists) means `github-pages` build
# natively with no CI step required.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility shims some setups need; harmless elsewhere.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

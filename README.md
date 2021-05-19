# ckcollab

### installing

```bash
# you haven't installed ruby yet:
# brew install ruby
# add ruby to $PATH

gem install jekyll bundler
bundle install
```

### running locally

```bash
# --future let's us view articles with dates in the future and drafts
bundle exec jekyll serve --future --drafts
```


### helping someone view your draft blogs

You can share a tunnel to your `localhost:4000` server like so:

```bash
$ ssh -R 80:localhost:4000 nokey@localhost.run

...

someaddress.localhost.run tunneled with tls termination, https://someaddress.localhost.run

```

Then access the site from anywhere online via `https://someaddress.localhost.run`
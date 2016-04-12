# Deploy-test

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Consuming app in static site

Add this script tag to the bottom of your `head`:

```
<script type="text/javascript">
  $.get('https://s3.amazonaws.com/<bucket-name>/index.json', function(data) {
    var domain = 'https://s3.amazonaws.com/<bucket-name>/';

    var meta = data.meta[0];

    $("head").append($('<meta />').attr({
      name: meta.name,
      content: meta.content
    }));

    var link;
    var vendorjs = data.script[0].src
    var assetsjs = data.script[1].src

    link = domain + vendorjs;
    $.getScript(link, function() {
      link = domain + assetsjs;
      $.getScript(link);
    });
  });
</script>
```

And add the DOM element for the Ember app to hook onto:

```
<div id="app-hook"></div>
```

Make sure to use `ember deploy production` and ensure assets are correctly on
s3 before attempting to load the app in your static site.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

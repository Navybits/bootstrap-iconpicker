# navybits:bootstrap-iconpicker
___
*navybits:bootstrap-iconpicker* is a simple wrapper on [bootstrap-iconpicker](http://victor-valencia.github.io/bootstrap-iconpicker/) that supports fontawsome icons picker packaged for Meteor Usage.
### Dependencies
  - jquery
  - twbs:bootstrap

### Installation
```sh
meteor add navybits:bootstrap-iconpicker
```
### Use
1. Inside your template, for example *myIconPickerTemplate.html* :
```
<template name="myIconPickerTemplate">
<button class="btn btn-default" data-iconset="fontawesome" data-icon="fa-globe" role="iconpicker"></button>
</template>
```
2. In your template controller, for example *myIconPickerTemplate.js*:
```javascript
Template.myIconPickerTemplate.rendered = function() {
  $('button[role="iconpicker"]').iconpicker();
  }
Template.myIconPickerTemplate.events({
  'change button[role="iconpicker"]':function (e) {
    console.log(e.icon);
  }
  });
```

### Version
1.0.0

### License

MIT

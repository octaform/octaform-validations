<h1 align="center">
  <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  <p align="center">Octaform - Additional validations</p>
</h1>

Octaform helps developers validate forms in an easy way, being completely agnostic to framework, you can use anywhere you want.

## Getting Started
This package is an additional package that enables you to add some pre-set validations, if you are searching for Octaform Validate please access the official documentation [here](https://github.com/octaform/octaform).

To start using these validations you should import this package:

```js
import { email, extension } from 'octaform-additional';

// Add the validations object into array
Octaform.validator.add([
  email,
  extension
])
```

`OR`
```js
import VALIDATIONS from 'octaform-additional';

// Add the validations object into array
Octaform.validator.add([
  VALIDATIONS.email,
  VALIDATIONS.extension
])

```

## Available validations

Validations     | Description                                             | Namespace
----------------|---------------------------------------------------------|-----------
Email           | Only valid emails                                       | email
Extension       | Only valid file extensions, e.g. `png`, `jpg`, `etc...` | extension
Letter          | Only letters is accepted `[A-Z]`                        | letter
Number          | Only numbers is accepted                                | number
MinLength       | Define minlength of text                                | minlength
MaxLength       | Define maxlength of text                                | maxlength
Maxsize         | Define the max size of files                            | maxsize
MinChecked      | Define the minimun of checkboxes checked                | minchecked
Required        | Make that the field be required                         | required
ValueNotEquals  | Define one value that shouldn't be equal                | valueNotEquals

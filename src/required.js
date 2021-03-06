export default {
  name: 'required',
  message: 'This field is required',
  paramType: Boolean,
  fn: (value, element) => {
    if (element && element.length > 1) {
      return element.some(elem => elem.checked);
    }
    return (!!value.length || false);
  },
};

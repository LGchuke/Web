const pickers = [
  new ColorPicker({
    dom: document.getElementById('picker1'),
    value: '#0F0'
  }),
  new ColorPicker({
    dom: document.getElementById('picker2'),
    value: { r: 0, g: 0, b: 255 }
  }),
  new ColorPicker({
    dom: document.getElementById('picker3')
  })
]
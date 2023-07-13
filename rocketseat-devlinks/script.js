function toggleMode() {
  const html = document.documentElement
  const icon = document.querySelector('.ph')

  if (html.classList.contains('light')) {
    html.classList.remove('light')
    icon.classList.add('ph-sun')
    icon.classList.remove('ph-moon-stars')
  } else {
    html.classList.add('light')
    icon.classList.add('ph-moon-stars')
    icon.classList.remove('ph-sun')
  }
}
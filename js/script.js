const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errorMessage = document.getElementById('err-msg')

linkForm.addEventListener('submit', formSubmit)

function validURL(str) {
  const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

function formSubmit(e) {
  e.preventDefault()
  if (!input.value) {
    errorMessage.innerHTML = 'Please enter a URL'
    input.classList.add('border-red')
  } else if (!validURL(input.value)) {
    errorMessage.innerHTML = 'Please enter a valid URL'
    input.classList.add('border-red')
  } else {
    errorMessage.innerHTML = ''
    input.classList.remove('border-red')
    alert('success')
  }
}
const submitBtn = document.getElementById('submit-btn');
const imageLink = document.querySelector('input[type="url"]');
const imgSrc = imageLink.getAttribute('src');
const inputs = document.querySelectorAll('input');
const upperText = document.getElementById('top-text');
const lowerText = document.getElementById('bottom-text');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (imageLink.value === '') {
    alert('Please add image URL');
    return;
  }
  let newMeme = document.createElement('img');
  let txtInput1 = document.createElement('h2');
  let memeSection = document.createElement('div');
  let txtInput2 = document.createElement('h2');
  let gallery = document.getElementById('memes');
  const deleteBtn = document.createElement('button');


  txtInput1.textContent = upperText.value;
  txtInput2.textContent = lowerText.value;
  newMeme.src = imageLink.value;
  deleteBtn.innerHTML = '<i>&times;</i>'

  txtInput1.setAttribute('class', 'text1');
  memeSection.setAttribute('class', 'memeSection');
  txtInput2.setAttribute('class', 'text2');
  deleteBtn.setAttribute('id', 'deleteBtn');
  newMeme.setAttribute('class', 'imgClass');

  txtInput1.appendChild(txtInput2);
  memeSection.appendChild(txtInput1);
  memeSection.appendChild(newMeme);
  memeSection.appendChild(txtInput1);
  memeSection.appendChild(txtInput2);
  gallery.appendChild(memeSection);
  gallery.appendChild(deleteBtn);

  imageLink.value = '';
  upperText.value = '';
  lowerText.value = '';

  deleteBtn.addEventListener('click', function (e) {
    gallery.removeChild(memeSection);
    gallery.removeChild(deleteBtn);
  });
});
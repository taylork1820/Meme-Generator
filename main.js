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



//6. You set a lot of classes to the elements that constitute a meme. Classes are a good way to control application of styles, but you could also use css selectors like :nth-child(2) and similar in this exercise
//7. It would be great to decompose your single function that creates a meme into several smaller ones - the code will get easier to read and manage. Let's discuss this on our next call.
//8. Optional, but leads to cleaner dom: you could wrap the meme and it's delete button in an enclosing element (e.g. div) to highlight that they live (and, well,  die) together
//9. In your styles you have a lot of explicitly set margins and tops/lefts. This usually indicates a lack of flexibility of styles and string reliance on a particular size of a screen. What can really help here is the flexbox. Please check this page - https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - and try to use a flexbox to render the memes and the form - you may notice how much cleaner and shorter your css will become. 
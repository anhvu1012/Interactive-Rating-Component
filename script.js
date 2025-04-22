const ratingState = document.getElementById('rating-state');
const thankyouState = document.getElementById('thank-you-state');

const submitBtn = document.getElementById('submit-btn');
const ratingOptions = Array.from(document.querySelectorAll('.rating-option input[type="button"]'));

const ratingResult = document.getElementById('rating-result');

let ratingValue;

const removeAllActive = () => {
  ratingOptions.forEach((option) => {
    option.classList.remove('active');
  });
};

const displayRating = () => {
  ratingResult.innerText = ratingValue;

  ratingState.style.display = 'none';
  thankyouState.style.display = 'block';
};

ratingOptions.forEach((ratingOption) => {
  ratingOption.addEventListener('click', () => {
    removeAllActive();

    ratingOption.classList.add('active');

    ratingValue = ratingOption.value;
  });
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (ratingValue){
    displayRating();
  }
});

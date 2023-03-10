function getQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((adviceData) => {
      const adviceobj = adviceData.slip;
      quote.innerHTML = `<h1 class="advice-num">ADIVCE #${adviceobj.id}</h1>
      <p class="quote-font">"${adviceobj.advice}"</p>
         <div>
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

getQuote();

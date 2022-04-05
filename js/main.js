const generator = require('generate-password');
// const password = generator.generate({
//   length: 10,
//   numbers: true,
//   uppercase: true,
//   lowercase: false,
//   excludeSimilarCharacters: true
// });

const prefixEl = document.getElementById('prefix');
const lenEl = document.getElementById('len');
const suffixEl = document.getElementById('suffix');
const amountEl = document.getElementById('amount');
const resultEl = document.getElementById('result');
const updateBtn = document.getElementById('update-btn');
const inputs = document.querySelectorAll('input');

function createCoupon() {
  const coupons = [];
  let result;

  for (let i = 0; i < amountEl.value; i++) {
    const password = generator.generate({
      length: lenEl.value,
      numbers: true,
      uppercase: true,
      lowercase: false,
      excludeSimilarCharacters: true
    });
    coupons.push(`${prefixEl.value.toUpperCase()}${password}${suffixEl.value.toUpperCase()}`);
    result = coupons.join('\r\n');
  }
  console.log(result);

  resultEl.innerText = result.toString();
}

[...inputs].forEach((input) => {
  input.addEventListener('input', () => {
    // createCoupon();
  })
});

updateBtn.addEventListener('click', () => {
  createCoupon();
})

createCoupon();

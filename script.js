// ham yha variable definr kr rhe hai form ke 
const amount = document.getElementById('amount')
const selectFrom = document.getElementById('from')
const formFlag = document.getElementById('formFlag')
const selectTo = document.getElementById('to')
const convertBtn = document.getElementById('btn')
const result = document.getElementById('result')
// const historyTable = document.getElementById('tableBody')


// ham yha background ka change button ka code likh rhe hai
// const toggleBtn = document.getElementById('cyber-toggle');
// toggleBtn.addEventListener('click', function() {
//   document.documentElement.classList.toggle('dark');
  
//   // Save preference to localStorage
//   localStorage.setItem('darkMode', this.checked);
// });

// // Check for saved preference on load
// if (localStorage.getItem('darkMode') === 'true') {
//   document.documentElement.classList.add('dark');
//   document.getElementById('cyber-toggle').checked = true;
// }
// //////////////////////////////



// ham yha ek array me object bna rhe hai jisme overall 500 country ki currency rahegi

const countryArr = [
  { flag: "🇦🇷", code: "AR", name: "Argentina", currency: "ARS" },
  { flag: "🇦🇺", code: "AU", name: "Australia", currency: "AUD" },
  { flag: "🇦🇹", code: "AT", name: "Austria", currency: "EUR" },
  { flag: "🇦🇫", code: "AF", name: "Afghanistan", currency: "AFN" },
  { flag: "🇦🇱", code: "AL", name: "Albania", currency: "ALL" },
  { flag: "🇩🇿", code: "DZ", name: "Algeria", currency: "DZD" },
  { flag: "🇦🇿", code: "AZ", name: "Azerbaijan", currency: "AZN" },
  { flag: "🇦🇲", code: "AM", name: "Armenia", currency: "AMD" },
  { flag: "🇦🇹", code: "AT", name: "Austria", currency: "EUR" },
  { flag: "🇧🇾", code: "BY", name: "Belarus", currency: "BYN" },
  { flag: "🇧🇪", code: "BE", name: "Belgium", currency: "EUR" },
  { flag: "🇧🇴", code: "BO", name: "Bolivia", currency: "BOB" },
  { flag: "🇧🇦", code: "BA", name: "Bosnia and Herzegovina", currency: "BAM" },
  { flag: "🇧🇼", code: "BW", name: "Botswana", currency: "BWP" },
  { flag: "🇧🇬", code: "BG", name: "Bulgaria", currency: "BGN" },
  { flag: "🇧🇮", code: "BI", name: "Burundi", currency: "BIF" },
  { flag: "🇧🇭", code: "BH", name: "Bahrain", currency: "BHD" },
  { flag: "🇧🇳", code: "BN", name: "Brunei", currency: "BND" },
  { flag: "🇧🇩", code: "BD", name: "Bangladesh", currency: "BDT" },
  { flag: "🇧🇷", code: "BR", name: "Brazil", currency: "BRL" },
  { flag: "🇨🇦", code: "CA", name: "Canada", currency: "CAD" },
  { flag: "🇨🇳", code: "CN", name: "China", currency: "CNY" },
  { flag: "🇨🇴", code: "CO", name: "Colombia", currency: "COP" },
  { flag: "🇨🇿", code: "CZ", name: "Czech Republic", currency: "CZK" },
  { flag: "🇹🇩", code: "TD", name: "Chad", currency: "XAF" },
  { flag: "🇰🇲", code: "KM", name: "Comoros", currency: "KMF" },
  { flag: "🇰🇭", code: "KH", name: "Cambodia", currency: "KHR" },
  { flag: "🇨🇱", code: "CL", name: "Chile", currency: "CLP" },
  { flag: "🇨🇷", code: "CR", name: "Costa Rica", currency: "CRC" },
  { flag: "🇭🇷", code: "HR", name: "Croatia", currency: "HRK" },
  { flag: "🇨🇺", code: "CU", name: "Cuba", currency: "CUP" },
  { flag: "🇩🇯", code: "DJ", name: "Djibouti", currency: "DJF" },
  { flag: "🇩🇰", code: "DK", name: "Denmark", currency: "DKK" },
  { flag: "🇪🇬", code: "EG", name: "Egypt", currency: "EGP" },
  { flag: "🇪🇷", code: "ER", name: "Eritrea", currency: "ERN" },
  { flag: "🇪🇪", code: "EE", name: "Estonia", currency: "EUR" },
  { flag: "🇪🇹", code: "ET", name: "Ethiopia", currency: "ETB" },
  { flag: "🇫🇮", code: "FI", name: "Finland", currency: "EUR" },
  { flag: "🇫🇷", code: "FR", name: "France", currency: "EUR" },
  { flag: "🇩🇪", code: "DE", name: "Germany", currency: "EUR" },
  { flag: "🇬🇷", code: "GR", name: "Greece", currency: "EUR" },
  { flag: "🇬🇲", code: "GM", name: "Gambia", currency: "GMD" },
  { flag: "🇬🇳", code: "GN", name: "Guinea", currency: "GNF" },
  { flag: "🇬🇼", code: "GW", name: "Guinea-Bissau", currency: "XOF" },
  { flag: "🇬🇪", code: "GE", name: "Georgia", currency: "GEL" },
  { flag: "🇬🇭", code: "GH", name: "Ghana", currency: "GHS" },
  { flag: "🇭🇰", code: "HK", name: "Hong Kong", currency: "HKD" },
  { flag: "🇭🇺", code: "HU", name: "Hungary", currency: "HUF" },
  { flag: "🇮🇳", code: "IN", name: "India", currency: "INR" },
  { flag: "🇮🇩", code: "ID", name: "Indonesia", currency: "IDR" },
  { flag: "🇮🇷", code: "IR", name: "Iran", currency: "IRR" },
  { flag: "🇮🇶", code: "IQ", name: "Iraq", currency: "IQD" },
  { flag: "🇮🇸", code: "IS", name: "Iceland", currency: "ISK" },
  { flag: "🇮🇪", code: "IE", name: "Ireland", currency: "EUR" },
  { flag: "🇮🇹", code: "IT", name: "Italy", currency: "EUR" },
  { flag: "🇯🇴", code: "JO", name: "Jordan", currency: "JOD" },
  { flag: "🇯🇵", code: "JP", name: "Japan", currency: "JPY" },
  { flag: "🇰🇪", code: "KE", name: "Kenya", currency: "KES" },
  { flag: "🇰🇿", code: "KZ", name: "Kazakhstan", currency: "KZT" },
  { flag: "🇰🇼", code: "KW", name: "Kuwait", currency: "KWD" },
  { flag: "🇰🇬", code: "KG", name: "Kyrgyzstan", currency: "KGS" },
  { flag: "🇱🇧", code: "LB", name: "Lebanon", currency: "LBP" },
  { flag: "🇱🇾", code: "LY", name: "Libya", currency: "LYD" },
  { flag: "🇰🇷", code: "KR", name: "South Korea", currency: "KRW" },
  { flag: "🇲🇾", code: "MY", name: "Malaysia", currency: "MYR" },
  { flag: "🇲🇽", code: "MX", name: "Mexico", currency: "MXN" },
  { flag: "🇲🇻", code: "MV", name: "Maldives", currency: "MVR" },
  { flag: "🇲🇱", code: "ML", name: "Mali", currency: "XOF" },
  { flag: "🇲🇷", code: "MR", name: "Mauritania", currency: "MRU" },
  { flag: "🇲🇦", code: "MA", name: "Morocco", currency: "MAD" },
  { flag: "🇲🇲", code: "MM", name: "Myanmar", currency: "MMK" },
  { flag: "🇳🇵", code: "NP", name: "Nepal", currency: "NPR" },
  { flag: "🇳🇱", code: "NL", name: "Netherlands", currency: "EUR" },
  { flag: "🇳🇬", code: "NG", name: "Nigeria", currency: "NGN" },
  { flag: "🇳🇿", code: "NZ", name: "New Zealand", currency: "NZD" },
  { flag: "🇳🇴", code: "NO", name: "Norway", currency: "NOK" },
  { flag: "🇴🇲", code: "OM", name: "Oman", currency: "OMR" },
  { flag: "🇵🇸", code: "PS", name: "Palestine", currency: "ILS" },
  { flag: "🇵🇰", code: "PK", name: "Pakistan", currency: "PKR" },
  { flag: "🇵🇪", code: "PE", name: "Peru", currency: "PEN" },
  { flag: "🇵🇭", code: "PH", name: "Philippines", currency: "PHP" },
  { flag: "🇵🇱", code: "PL", name: "Poland", currency: "PLN" },
  { flag: "🇵🇹", code: "PT", name: "Portugal", currency: "EUR" },
  { flag: "🇵🇦", code: "PA", name: "Panama", currency: "PAB" },
  { flag: "🇶🇦", code: "QA", name: "Qatar", currency: "QAR" },
  { flag: "🇷🇺", code: "RU", name: "Russia", currency: "RUB" },
  { flag: "🇸🇦", code: "SA", name: "Saudi Arabia", currency: "SAR" },
  { flag: "🇸🇬", code: "SG", name: "Singapore", currency: "SGD" },
  { flag: "🇿🇦", code: "ZA", name: "South Africa", currency: "ZAR" },
  { flag: "🇸🇪", code: "SE", name: "Sweden", currency: "SEK" },
  { flag: "🇨🇭", code: "CH", name: "Switzerland", currency: "CHF" },
  { flag: "🇸🇩", code: "SD", name: "Sudan", currency: "SDG" },
  { flag: "🇸🇾", code: "SY", name: "Syria", currency: "SYP" },
  { flag: "🇹🇭", code: "TH", name: "Thailand", currency: "THB" },
  { flag: "🇹🇯", code: "TJ", name: "Tajikistan", currency: "TJS" },
  { flag: "🇹🇲", code: "TM", name: "Turkmenistan", currency: "TMT" },
  { flag: "🇹🇷", code: "TR", name: "Turkey", currency: "TRY" },
  { flag: "🇺🇦", code: "UA", name: "Ukraine", currency: "UAH" },
  { flag: "🇦🇪", code: "AE", name: "United Arab Emirates", currency: "AED" },
  { flag: "🇬🇧", code: "GB", name: "United Kingdom", currency: "GBP" },
  { flag: "🇺🇸", code: "US", name: "United States", currency: "USD" },
  { flag: "🇺🇿", code: "UZ", name: "Uzbekistan", currency: "UZS" },
  { flag: "🇻🇳", code: "VN", name: "Vietnam", currency: "VND" },
   { flag: "🇾🇪", code: "YE", name: "Yemen", currency: "YER" }
];

// ham yha ek function banaye ge jo drop down ko select kka 
function dropDown() {


  selectFrom.innerHTML = `<option value="" disabled selected>Select Currency</option>`// ham ye isliye kr rhe h kyuki hame ye page relod hote hi hame default set mile crruncy 
  selectTo.innerHTML = `<option value="" disabled selected>Select Currency</option>`

// ham yha for Each loop ka us kr rhe hai jisse ham data show krege hamra select tag me 

countryArr.forEach(function (country) {
  // ham yha ek variabke bna rhe hai jis me ham ek string rakhe ge backtick me variable dollar sing se dege jisme ham 
  // jisme ham country.currency aur country.name rakhege
  const optiontext = `${country.currency} - ${country.name}` // yha ham country ka currency code aur country ka nme set kr  hre hai 
  const fromOption = new Option(optiontext, country.currency)   // new option ka use krke option tag bna rhe hai jisme ham  optiotext ko vha pr daal rhe user kom dikhe aur country.currency option tag ki jo value hai woh hogi jo hame backend ke liye ya fir code me age kamm ayegi
    fromOption.dataset.flagCode = country.code;   ///dataset.flagCode ka matlab hai hum <option> tag me ek data-flag-code attribute bana rahe hain.
  selectFrom.add(fromOption); // hamyha selectfrom me fromoption jo create kiy ause add krrhe ahi 

  // ham yha selectTo ko bhi smae logic se krege 
  const toOption = new Option(optiontext, country.currency);  // same ham yha bhi select from ka logic use kr rhe hai 
    toOption.dataset.flagCode = country.code;  /// yha same hai 
  selectTo.add(toOption);// ham yha selectTo me bhi fromOption add kr

})

/// yha ham by default set kkr rhe hai 
selectFrom.value = "USD";
selectTo.value = "INR";

// yha ham flag bhi update kr reh hai 
updateFlag('from');
updateFlag('to');

// yh a click event lagyage 
selectFrom.addEventListener('change', () => updateFlag('from'))
selectTo.addEventListener('change', () => updateFlag('to'))

}

// yha ek function bna hai jo ki update kre ga falg ko yyani iska kaam hai ki jo bhi currency dropdown me select ho uska image dikhana hai 
function updateFlag(type) {
  const select = document.getElementById(type); // ham ye isliye likh rhe hai kyuki hame jab koi upar wale updateflig function call ho to ye wo banjaye yaani from ya to ye dono ka refrence le rha hai 
  const flagImg = document.getElementById(`${type}-flag`);  // yha ham ${type}-flag isliye kr rhe hai ku ya to wo to aye ya from aye wha 
  const selectedOption = select.options[select.selectedIndex]; //// user ne select box me jo option select kiya hai, us option ko store kar rahe hai yaani ki ye option tag me jo array ban rha hai usko select kr hai hai index ke through

  //if condition laga rhe hai jo ki check kregi ki Agar country me valid object aaya hai (jaise { flag: "🇮🇳", code: "IN" }), tabhi hum uska flag code nikalenge aur image dikhayenge nhi  to undifined hoga 
    if (selectedOption && selectedOption.dataset.flagCode) {  // Check karo ki koi option select hua hai aur uske paas flag code hai
    flagImg.src = `https://flagsapi.com/${selectedOption.dataset.flagCode}/flat/32.png`;  //Flag image ka source set kar diya, jisme dataset.flagCode country code hoga (jaise 'IN', 'US')
    flagImg.style.display = 'block';    // Flag image ko visible kar diya

  } else {
    flagImg.style.display = 'none';
  }
}
  
//  iska matlab ye hai ki tum wait kar rahe ho poora HTML structure load hone ka, aur jaise hi load ho jata hai, tumhari function (dropDown()) run ho jaye.
 document.addEventListener('DOMContentLoaded', function() {
  dropDown();
  showHistory();
  
});

 // ham yha convert button ka code likhege 

 convertBtn.addEventListener('click', function (event) {
  event.preventDefault(); // ham yha event prevent kr rhe hai kyuki ham yha form submit
  
  // ham yha selectfrom, selectTo and amount ko variable me hold krege
  const fromCurrency = selectFrom.value
  const toCurrency = selectTo.value
  const amountValue = parseFloat(amount.value);

  if (!fromCurrency || !toCurrency || !amountValue || isNaN(amountValue)) {
    alert ("please enter a valid amount")
    return;
    
  } 
  // ham yha pr ab api ke through data nikale ge fetch ka use kr rhe hai

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)  // hamne yha api se fetch kr rhe hai based on from currency yaani
   .then(function (respons) {
     if (!respons.ok) throw new Error(`API error: ${respons.status}`);
    return respons.json(); // ham yha json me convert kr rhe hai api response ko 
   })
     .then(function (data) {
      if (!data?.rates?.[toCurrency]) {
         throw new Error(`${fromCurrency} to ${toCurrency} rate not found`);
     }
      const rate = data.rates[toCurrency];  
      const convertedAmount = (amountValue * rate).toFixed(2);

      result.innerHTML =   ` <div class="result-box" >
          ${amountValue} ${fromCurrency} = 
          <span class="converted-amount">${convertedAmount} ${toCurrency}</span>
        </div>
      `;

      saveHistory(fromCurrency, toCurrency, amountValue, convertedAmount);
      

      
  })
  .catch(function (error) {
    console.error("Error:", error);   // yeh error show krega agr api call nhi hui to 
  });

 })

 
 // ham yha ek function banayege jo localStorage me data ko store krega 
function saveHistory(from, to, amount, converted) {
  let history = JSON.parse(localStorage.getItem("currencyHistory")) || [];
  
  history.push({
    from: from,
    to: to,
    amount: amount,
    converted: converted,
    date: new Date().toLocaleString() // Date ko fix kiya
  });

  // LocalStorage me save karo
  localStorage.setItem('currencyHistory', JSON.stringify(history));
  
  // History table ko update karo
  showHistory();
}

// show history ks function history js me hai 




  
// axios.get('http://numbersapi.com/8?json').then((res) => console.log(res));

// axios.get('http://numbersapi.com/8,10,11,12?json').then((res) => console.log(res));

// let ul = document.querySelector('#fact_list');

// let arr = [];

// for (let i = 1; i <= 4; i++) {
// 	arr.push(axios.get('http://numbersapi.com/8?json'));
// }

// Promise.all(arr).then((num) => {
// 	num.forEach((fact) => {
// 		let li = document.createElement('li');
// 		li.innerHTML = fact.data.text;
// 		ul.append(li);
// 	});
// });

// axios
// 	.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
// 	.then((res) => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`));

// let card1 = null;

// axios
// 	.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
// 	.then((res) => {
// 		let deck_id = res.data.deck_id;
// 		card1 = res.data.cards[0];
// 		return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
// 	})
// 	.then((res) => {
// 		let card2 = res.data.cards[0];
// 		console.log(card1, card2);
// 	});

// const button = document.getElementById('button');
// const ol = document.getElementById('cardList');
// let deckId = null;
// axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then((id) => {
// 	deckId = id.data.deck_id;
// });

// function callfunc() {
// 	axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then((res) => {
// 		if (res.data.cards[0].value) {
// 			const li = document.createElement('li');
// 			li.innerHTML = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`;
// 			ol.append(li);
// 		} else {
// 			button.removeEventListener('click', callfunc);
// 		}
// 	});
// }
// button.addEventListener('click', callfunc);

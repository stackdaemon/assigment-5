function getElemtnt(id) {
  const elemet = document.getElementById(id);
  return elemet;
}
// ---------------Heart Rating
const allHeart = document.getElementsByClassName("heart");
for (let heart of allHeart) {
  heart.addEventListener("click", function () {
    const love = getElemtnt("love").innerText;

    const currentLove = Number(love) + 1;

    getElemtnt("love").innerText = currentLove;
});
}



// --------------Button call

const allCall = document.getElementsByClassName("call_btn");
for (const call of allCall) {
  const callTitale =
    call.parentNode.parentNode.children[0].children[1].innerText;
    console.log(callTitale);
  const callNumber =
    call.parentNode.parentNode.children[1].children[0].innerText;

  call.addEventListener("click", function () {
    const coin = parseInt(getElemtnt("coin").innerText);
    if (coin >= 20) {
      const currentCoin = coin - 20;
      getElemtnt("coin").innerText = currentCoin;
      alert(`📞 calling ${callTitale} ${callNumber}...`);
    }
    if (coin === 0) {
      alert(
        "❌ You don't have enough conins! You need at least 20 coins to make a call."
      );
    }

    const card_prent = getElemtnt("card_container");
    const new_card = document.createElement("div");
    new_card.innerHTML = `
          <div class=" flex items-center justify-between m-8 py-5  px-3 rounded-lg bg-[#FAFAFA] ">
                    <div >
                         <h2 class="font-bold text-2xl">${callTitale}</h2>
                         <h3 class="font-bold text-lg text-[#5C5C5C]">${callNumber}</h3>
                    </div>
                    <div>
                         <h4 class="text-lg font-semibold">${new Date().toLocaleTimeString()}</h4>
                         
                    </div>
               </div>
          
          `;
    card_prent.append(new_card);
  });
}


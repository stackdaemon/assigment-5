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


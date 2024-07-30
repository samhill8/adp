if (navigator.userAgent.indexOf("iPhone") > -1) {
  document
    .querySelector("[name=viewport]")
    .setAttribute(
      "content",
      "width=device-width, initial-scale=1, maximum-scale=1"
    );
}

let leagueSize = 12;
document.getElementById("active-text").textContent = leagueSize;

function calculateDraftPosition() {
  const adp = parseInt(document.getElementById("adp").value);

  if (isNaN(adp) || adp <= 0) {
    document.getElementById("result").textContent = "Please enter a valid ADP.";
    return;
  }

  const round = Math.ceil(adp / leagueSize);
  const pickInRound = adp - leagueSize * (round - 1);

  document.getElementById(
    "result"
  ).innerHTML = `In a ${leagueSize} man league, ADP ${adp} is in round ${round}, pick ${pickInRound} <span id="roundPick">(${round}.${
    pickInRound < 10 ? `0${pickInRound}` : pickInRound
  }).</span>`;
}
document.getElementById("currentYear").textContent = new Date().getFullYear();

function updatePicksPerRound() {
  const picksPerRoundInput = document.getElementById("picksPerRound").value;
  leagueSize = parseInt(picksPerRoundInput);
  document.getElementById("active-text").textContent = leagueSize;
  toggleButtons();
}

function toggleButtons() {
  const save = document.getElementById("save");
  save.classList.toggle("active");
  const edit = document.getElementById("edit");
  edit.classList.toggle("hidden");
  const select = document.getElementById("picksPerRound");
  select.classList.toggle("active");
  document.getElementById("active-text").classList.toggle("hidden");
}

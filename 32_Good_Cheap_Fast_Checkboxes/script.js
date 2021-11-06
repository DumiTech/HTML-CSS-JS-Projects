const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheMagic(e.target))
);

function doTheMagic(theCLickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theCLickedOne) {
      fast.checked = false;
    }

    if (cheap === theCLickedOne) {
      good.checked = false;
    }

    if (fast === theCLickedOne) {
      cheap.checked = false;
    }
  }
}

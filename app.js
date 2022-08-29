const shareBox = document.getElementById('share-ul-box');
const shareBtn = document.getElementById('share-button');

function openShareBox() {
    shareBtn.addEventListener('click', function () {
        if (!shareBox.classList.contains('hidden')) {
            shareBox.className += ' hidden';
            shareBtn.setAttribute('aria-expanded', 'false');
        } else {
            shareBox.className = shareBox.className.replace('hidden', '');
            shareBtn.setAttribute('aria-expanded', 'true');
            shareBtn.focus();
        }
    })
}

openShareBox();
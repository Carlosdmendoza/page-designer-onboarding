const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(ssId, caption, ext) {
  lightboxImg.src = `screenshots/${ssId}.${ext || 'jpg'}`;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.showModal();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.close();
  document.body.style.overflow = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.open) closeLightbox(); });

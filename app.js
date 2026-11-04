async function loadScenes() {
  const res = await fetch('scenes.json');
  const scenes = await res.json();
  const gallery = document.getElementById('gallery');
  let lang = 'en';
  function render() {
    gallery.innerHTML = '';
    for (const s of scenes) {
      const card = document.createElement('article');
      card.className = 'card';
      const img = document.createElement('img');
      img.src = 'images/' + s.image;
      img.alt = s.title_en;
      const h = document.createElement('h2');
      h.textContent = 'Scene ' + s.id + ' — ' + (lang === 'en' ? s.title_en : s.title_te);
      const p = document.createElement('p');
      p.textContent = lang === 'en' ? s.caption_en : s.caption_te;
      card.append(img, h, p);
      gallery.appendChild(card);
    }
  }
  document.getElementById('btn-en').addEventListener('click', (e) => {
    lang = 'en';
    document.getElementById('btn-en').classList.add('active');
    document.getElementById('btn-te').classList.remove('active');
    render();
  });
  document.getElementById('btn-te').addEventListener('click', (e) => {
    lang = 'te';
    document.getElementById('btn-te').classList.add('active');
    document.getElementById('btn-en').classList.remove('active');
    render();
  });
  render();
}
loadScenes();

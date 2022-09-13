function handlePath() {
  const mySvg = document.getElementById("mySvg");
  const state = parseInt(mySvg.getAttribute('state'),10);
  mySvg.setAttribute('state', state ? 0 : 1);
  return anime.timeline({
    targets: '#path1',
    d: state ? 'M2, 2H22' : 'M2, 2H3',
    easing: 'easeInOutQuad',
    duration: 200,
    opacity: state ? 1 : 0,
  }).add({
    targets: '#path2',
    d: state ? 'M2, 10H30' : 'M2, 2L22, 19',
    easing: 'easeInOutQuad',
    duration: 200,
  }, 0).add({
    targets: '#path3',
    d: state ? 'M2, 19H28' : 'M2, 19L22, 2',
    easing: 'easeInOutQuad',
    duration: 200,
  }, 0);
}

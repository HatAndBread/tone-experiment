const synth = new Tone.Synth().toDestination();

synth.frequency = 220;

window.addEventListener('pointerdown', (e) => {
  synth.frequency.value = e.offsetX;
  synth.triggerAttack(Tone.now());
});

window.addEventListener('pointerup', (e) => {
  synth.frequency.value = e.offsetX;
  synth.triggerRelease(Tone.now());
});

window.addEventListener('touchend', () => {
  synth.triggerRelease(Tone.now());
});
window.addEventListener('pointermove', (e) => {
  console.log(e);
  synth.frequency.value = e.offsetX;
});
window.addEventListener('touchmove', (e) => {
  console.log(e);
  synth.frequency.value = e.touches[0].clientX;
});

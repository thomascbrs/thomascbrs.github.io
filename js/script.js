// When #project scrolls into view, swap in the iframe src to kick off autoplay/loop.
const projectSection = document.getElementById('projects');
const project1Iframe = document.getElementById('project1-video');  // Project 1 video specifically

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // load and autoplay the video for Project 1
      project1Iframe.src = project1Iframe.dataset.src;
      observer.disconnect();  // only need to load it once
    }
  });
}, { threshold: 0.25 });  // fires when 25% of the section is visible

observer.observe(projectSection);
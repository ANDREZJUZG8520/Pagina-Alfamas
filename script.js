const prevTabBtn = document.querySelector('.slicer-prev-tab');
const nextTabBtn = document.querySelector('.slicer-next-tab');
const slicerPanes = document.querySelectorAll('.slicer-pane');

let activeTab = 0;

prevTabBtn.addEventListener('click', () => {
  slicerPanes[activeTab].classList.remove('active');
  activeTab = (activeTab === 0) ? slicerPanes.length - 1 : activeTab - 1;
  slicerPanes[activeTab].classList.add('active');
});

nextTabBtn.addEventListener('click', () => {
  slicerPanes[activeTab].classList.remove('active');
  activeTab = (activeTab === slicerPanes.length - 1) ? 0 : activeTab + 1;
  slicerPanes[activeTab].classList.add('active');
});


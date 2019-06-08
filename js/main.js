const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    indicators: false,
    height: 430,
    transition: 600,
    interval: 3000
});

const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed);

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);
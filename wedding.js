 window.addEventListener("load", function () {
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
      window.scrollTo(0, 0);
    }
  });



  const toggler = document.querySelector('.navbar-toggler');
  const collapse = document.getElementById('mainNav');

  toggler.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll', collapse.classList.contains('show') === false);
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(collapse);
      if (bsCollapse) bsCollapse.hide();
      document.body.classList.remove('no-scroll');
    });
  });

  collapse.addEventListener('hidden.bs.collapse', () => {
    document.body.classList.remove('no-scroll');
  });

  const params = new URLSearchParams(window.location.search);
  const guest = params.get('to');  // ?to=NamaTamu

if (guest) {
  document.getElementById('guestName').textContent = guest;
}
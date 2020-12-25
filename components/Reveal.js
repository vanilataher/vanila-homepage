import ScrollReveal from 'scrollreveal';
import $ from 'jquery';

const Reveal = () => {
  var sr = new ScrollReveal();
  sr.reveal('.navbar-default', {
    origin: 'top',
    duration: 500,
  });

  sr.reveal(
    '.enterLeft-header',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal('.enterRight-header', {
    origin: 'right',
    distance: '100%',
    duration: 1000,
    scale: 1,
  });

  sr.reveal(
    '.enterRight-dev',
    {
      origin: 'right',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.enterLeft-dev',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.enterRight-des',
    {
      origin: 'right',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.enterLeft-des',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.enterRight-js',
    {
      origin: 'right',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.enterLeft-js',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.enterCta',
    {
      duration: 1000,
      delay: 500,
    },
    80
  );

  sr.reveal('.enterLeft-cta', {
    origin: 'left',
    distance: '100%',
    duration: 1000,
    scale: 1,
  });

  sr.reveal('.enterRight-cta', {
    origin: 'right',
    distance: '100%',
    duration: 1000,
    scale: 1,
  });

  sr.reveal(
    '.enterLeft-feedback',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
      delay: 700,
    },
    200
  );

  sr.reveal(
    '.enterLeft-f',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.teamBoxReveal',
    {
      duration: 1000,
      scale: 0.1,
    },
    250
  );

  sr.reveal(
    '.enterLeft-t',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.rowTech li:nth-child(odd)',
    {
      origin: 'right',
      distance: '100%',
      duration: 1000,
      scale: 0.5,
      delay: 500,
    },
    250
  );

  sr.reveal(
    '.rowTech li:nth-child(even)',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 0.5,
      delay: 500,
    },
    250
  );

  sr.reveal(
    '.enterLeft-social',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );

  sr.reveal(
    '.socialBoxReveal',
    {
      duration: 1000,
      scale: 0.1,
    },
    250
  );

  sr.reveal(
    '.enterFooter',
    {
      duration: 1000,
    },
    80
  );

  sr.reveal(
    '.enterProjectLeft',
    {
      origin: 'left',
      distance: '100%',
      duration: 1000,
      scale: 1,
    },
    80
  );
  sr.reveal(
    '.enterProjectRight',
    {
      origin: 'right',
      distance: '100%',
      duration: 1000,
      scale: 1,
      delay: 800,
    },
    80
  );
  sr.reveal(
    '.enterProjectBottom',
    {
      origin: 'bottom',
      distance: '100%',
      duration: 1000,
      scale: 1,
      delay: 400,
    },
    80
  );

  return '';
};

export default Reveal;

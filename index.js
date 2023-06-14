const menuItem = document.querySelector('.menu-bar');
const navBar = document.querySelector('.primary-navigation');

menuItem.addEventListener('click', () => {
  navBar.classList.toggle('render');
  const menuBar = `<i class="fa-solid fa-bars"></i>`;
  const exit = `<i class="fa-solid fa-circle-xmark"></i>`;
  if(menuItem.innerHTML === menuBar){
    menuItem.innerHTML = exit;
    menuItem.style.color = '#3b4949'
  }else {
    menuItem.innerHTML = menuBar
    menuItem.style.color = '#c7cfcf'
  }
});

window.addEventListener('scroll', function() {
  var background = document.querySelector('.background');
  var content = document.getElementById('content');
  var scrollHeight = 2000;

  if (window.scrollY >= scrollHeight) {
    background.style.position = 'absolute';
    content.style.marginTop = '0';
  } else {
    background.style.position = 'fixed';
    content.style.marginTop = scrollHeight + 'px';
  }
});


document.querySelectorAll('.nav-scroll').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('I was clicked')
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    navBar.classList.remove('render');
    menuItem.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    menuItem.style.color = '#3b4949'
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const navigation = document.querySelector('.navigation');
const navigationOffsetTop = navigation.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > navigationOffsetTop) {
    navigation.classList.add('fixed');
    menuItem.style.color = '#3b4949'
  } else {
    navigation.classList.remove('fixed');
    menuItem.style.color = '#c7cfcf'
  }
});

function fadeInElements() {
  const elements = document.querySelectorAll('.fade-in-up');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const positionFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('fade-in-visible');
    }
  }
}

window.addEventListener('scroll', fadeInElements);

// Form Validation and submition

const form = document.querySelector('.form');
const emailError = document.querySelector('.email-error');
const errorMessage = document.querySelector('.error-message');
const regular = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

const formSubmit = () => {
  const email = document.querySelector('#email').value;
  const name = document.querySelector('#name').value;
  const number = document.querySelector('#phone-number').value;

  if (email === '' || name === '' || number === '') {
    errorMessage.style.display = 'block';
    document.querySelector('input').classList.add('error');
  }

  if (!regular.test(email)) {
    emailError.style.display = 'block';
    document.querySelector('.email').classList.add('error');
  } else {
    return true;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formSubmit()) {
    form.submit();
  }
});

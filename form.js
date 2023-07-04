document.addEventListener('DOMContentLoaded', () => {
  const services = document.querySelector('.services-main');

  const renderPopUp = () => {
    const popUp = document.querySelector('.popup-form');
    button.forEach((element) => {
      element.addEventListener('click', () => {
        popUp.classList.add('render');
      });
    });
  };

  const removePopUp = () => {
    const popUp = document.querySelector('.popup-form');
    const exit = document.querySelector('.exit-pop');
    exit.addEventListener('click', () => {
      popUp.classList.remove('render');
    });
  };

  services.insertAdjacentHTML('afterend', `
    <div class="popup-form">
      <form action="" method="POST" class="service-form">
        <button class="exit-pop"><i class="fa-solid fa-xmark"></i></button>
        <h3>Request Information</h3>
        <p>Fill out the form to receive a personalized quote for our services.</p>
        <div class="name-email">
          <input type="text" name="name" id="name" placeholder="Enter your name" required>
          <input type="email" name="email" id="email" placeholder="Enter your email" required>
        </div>
        <p class="email-error">This email is invalid</p>
        <input type="number" maxlength="10" minlength="10" name="number" id="phone-number" placeholder="Enter your phone number" required>
        <textarea name="textarea" id="textarea" cols="30" rows="10" required>Write Your Message</textarea>
        <p class="error-message">Please fill in all the inputs</p>
        <button type="submit" class="form-submit">send</button>
      </form>
    </div>
  `);

  const button = document.querySelectorAll('.service-button');
  renderPopUp();
  removePopUp();
});

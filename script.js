//gallery

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('pic-show');
    }
    if (!change.isIntersecting) {
     change.target.classList.remove('pic-show');
    }
  });
}
let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.gallery-block__pic');

for (let elm of elements) {
  observer.observe(elm);
}

//input phone number mask

let form = document.querySelector('.form');
let telSelector = form.querySelector('input[type="tel"]');
let inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);



new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        let phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
      text: {
        required: true,
      }
    }
  },
  colorWrong: '#ff0f0f',
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    tel: {
      required: 'Введите телефон',
      function: 'Здесь должно быть 10 символов без +7'
    },
    text: {
        required: 'Введите сообщение',
        minLength: 'Введите 5 и более символов',
        maxLength: 'Запрещено вводить более 300 символов'
      }
  },
  submitHandler: function(thisForm) {
     let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          let popup = document.querySelector('.form-popup-container');
          console.log(popup);
          popup.classList.remove('hide-popup');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})
 function hidePopup() {
   let popup = document.querySelector('.form-popup-container');
          popup.classList.add('hide-popup');
 }


 //FAQ buttons 
document.querySelectorAll('.questions-block-el-header').forEach((el) => {
  el.addEventListener('click', () => {
    if (el.querySelector('.answer-show__btn').classList.contains('hide-faq-btn') && !el.querySelector('.answer-hide__btn').classList.contains('hide-faq-btn'))
    {
      el.querySelector('.questions-block__title').style.color = "#094067";
      el.querySelector('.answer-hide__btn').classList.add('hide-faq-btn');
      el.querySelector('.answer-show__btn').classList.remove('hide-faq-btn');
    } else {
      document.querySelectorAll('.questions-block__title').forEach((title) => {
    title.style.color = "#094067";
    })
    document.querySelectorAll('.answer-hide__btn').forEach((btn) => {
btn.classList.add('hide-faq-btn')
})
     document.querySelectorAll('.answer-show__btn').forEach((btn) => {
btn.classList.remove('hide-faq-btn')
})
     el.querySelector('.questions-block__title').style.color = "#3DA9FC";
    el.querySelector('.answer-hide__btn').classList.remove('hide-faq-btn');
    el.querySelector('.answer-show__btn').classList.add('hide-faq-btn');
  }
  })
})



document.querySelectorAll('.questions-block-el-header').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    if (content.style.maxHeight) {
      document.querySelectorAll('.questions-block__subtitle').forEach((el)=> el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.questions-block__subtitle').forEach((el)=> el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  })
})




//swiper js 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
 centeredSlides:true,
  rewind: true,
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
    el: '#swiper-pagination',
    type: 'bullets',
  },
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
   breakpoints: {
    1300: {
      centeredSlides:true,
       slidesPerView: 3,
    },
    951: {
       slidesPerView: 2,
       centeredSlides:false,
    }
   }

});

let width = window.innerWidth;
if (width<= 720) {
  document.querySelector('.about-us-text-block').classList.remove('wow');
  const swiper = new Swiper('.gallery-swiper', {
pagination: {
    el: '#gallery-swiper-pagination',
    type: 'bullets',
  },
  loop: true,
   rewind: true,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
   slidesPerView: 1,
 centeredSlides:true,
  spaceBetween: 100,
  })
}
//открытие и закрытие бургера
function showBurger() {
document.querySelector('.burger-container').classList.remove('hide-burger');
}
function hideBurger() {
 document.querySelector('.burger-container').classList.add('hide-burger');
}



//плавное перемещение по клику навбара
const anchors = document.querySelectorAll('a[href^="#"]')
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


wow = new WOW ({
   mobile:       true, 
})
wow.init();
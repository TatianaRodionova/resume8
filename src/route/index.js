// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Київ, вул. Прирічна',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'LinkedIn',
      text: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    layout: 'footer',
    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 10,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Photo',
          isMain: false,
        },
        {
          name: 'Qigong',
          isMain: true,
        },
        {
          name: 'Book',
          isMain: true,
        },
      ],
    },

    layout: 'footer',
    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Education',
    },

    header,

    main: {
      education: [
        {
          name: 'Школа дизайну',
          isEnd: true,
        },
        {
          name: 'Київський економічний університет',
          isEnd: true,
        },
        {
          name: 'Oxford University',
          isEnd: false,
        },
        {
          name: 'IT-Brains',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Best Girl',
          id: 78787,
        },
        {
          name: 'IT School',
          id: 35367,
        },
        {
          name: 'Management',
          id: 5555,
        },
      ],
    },

    layout: 'footer',
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume / Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack developer',
          company: {
            name: 'IT-Brains',
            url: 'https://www.it-brains.com.ua/',
          },
          duration: {
            from: '10/09/2001',
            to: null,
          },
          projectAmount: [
            {
              name: 'Resume',
              url: 'https://www.resume.com.ua/',
              about:
                'Before you get started learning, please take this short survey. It will ask you a few questions',
              stacks: [
                {
                  name: 'React.js',
                  stackAmount: 9,
                },
                {
                  name: 'HTML / CSS',
                  stackAmount: 10,
                },
                {
                  name: 'Nodejs',
                  stackAmount: 7,
                },
              ],
              awords: [
                {
                  name: 'Before you get started learning',
                  awardAmount: 8,
                },
                {
                  name: 'Gold Medal',
                  awardAmount: 10,
                },
              ],
            },
          ],
        },
      ],
    },
    layout: 'footer',
    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router

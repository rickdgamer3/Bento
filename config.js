// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
    // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
    // ├┴┐├─┤└─┐││  └─┐
    // └─┘┴ ┴└─┘┴└─┘└─┘
  
    // General
    name: 'Sayantan',
    imageBackground: false,
    openInNewTab: true,
    twelveHourFormat: true,
  
    // Greetings
    greetingMorning: 'Good morning!',
    greetingAfternoon: 'Good afternoon,',
    greetingEvening: 'Good evening,',
    greetingNight: 'Go to Sleep!',
  
    // Layout
    bentoLayout: 'lists', // 'bento', 'lists', 'buttons'
  
    // Weather
    weatherKey: 'api.openweathermap.org/data/2.5/weather?lat={22.572645}&lon={88.363892}&appid={API key}', // Write here your API Key
    weatherIcons: 'Dark', // 'Onedark', 'Nord', 'Dark', 'White'
    weatherUnit: 'C', // 'F', 'C'
    language: 'en', // More languages in https://openweathermap.org/current#multi
  
    trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: '22.572645',
    defaultLongitude: '88.363892',
  
    // Autochange
    autoChangeTheme: true,
  
    // Autochange by OS
    changeThemeByOS: true,
  
    // Autochange by hour options (24hrs format, string must be in: hh:mm)
    changeThemeByHour: false,
    hourDarkThemeActive: '18:30',
    hourDarkThemeInactive: '07:00',
  
    // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
    // ├┴┐│ │ │  │ │ ││││└─┐
    // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
  
    firstButtonsContainer: [
      {
        id: '1',
        name: 'PW',
        icon: 'graduation-cap',
        link: 'https://physicswallah.live/tabs/tabs/batch-tab/6133adb6beb299006d0a9fb8/new-overview',
      },
      {
        id: '2',
        name: 'Mail',
        icon: 'mail',
        link: 'https://mail.google.com/mail/',
      },
      {
        id: '3',
        name: 'Search',
        icon: 'trello',
        link: 'https://todoist.com',
      },
      {
        id: '4',
        name: 'Whatsapp',
        icon: 'message-circle',
        link: 'https://web.whatsapp.com/',
      },
      {
        id: '5',
        name: 'Reddit',
        icon: 'glasses',
        link: 'https://reddit.com',
      },
      {
        id: '6',
        name: 'Youtube',
        icon: 'youtube',
        link: 'https://www.youtube.com/',
      },
      {
        id: '7',
        name: 'Spotify',
        icon: 'headphones',
        link: 'https://open.spotify.com',
      },
      {
        id: '8',
        name: 'Linkedin',
        icon: 'linkedin',
        link: 'https://in.linkedin.com',
      },
      {
        id: '9',
        name: 'Discord',
        icon: 'bot',
        link: 'https://discord.com/app',
      },
      {
        id: '10',
        name: 'Amazon',
        icon: 'shopping-bag',
        link: 'https://amazon.com/',
      },
      {
        id: '11',
        name: 'Twitche',
        icon: 'twitch',
        link: 'https://www.twitch.tv/',
      },
      {
        id: '12',
        name: 'Telegram',
        icon: 'send',
        link: 'https://web.telegram.org/',
      }
      // First Links Container
  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
        {
          name: 'Inspirational',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          name: 'Classic',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          name: 'Oldies',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          name: 'Rock',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com',
        },
        {
          name: 'Dribbble',
          link: 'https://www.dribbble.com',
        },
        {
          name: 'Trello',
          link: 'https://www.trello.com',
        },
        {
          name: 'Slack',
          link: 'https://www.slack.com',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
    

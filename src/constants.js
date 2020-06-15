export const MY_MENU_OPTIONS = [
  { value: 'home', id: 'app.mymenu.home' },
  { value: 'about', id: 'app.mymenu.about' },
  { value: 'services', id: 'app.mymenu.services' },
  { value: 'contact', id: 'app.mymenu.contact' },
]

export const MY_NAME = { value: 'Son Nguyen', id: 'app.mymenu.myname' }

export const MY_BANNER = {
  hello: {
    value: 'hello',
    id: 'app.mybanner.hello',
  },
  name: {
    value: 'Son Nguyen',
    id: 'app.mybanner.myname',
  },
  title: {
    value: 'developer',
    id: 'app.mybanner.mytitle',
  },
}

export const MY_SOCIAL_TYPES = {
  FACEBOOK: 'facebook',
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  TWITTER: 'twitter',
}

export const MY_SOCIAL_LINKS_CONFIG = [
  { url: 'https://www.facebook.com/ngocson.nguyen.0403', type: MY_SOCIAL_TYPES.FACEBOOK },
  { url: 'https://github.com/signalz', type: MY_SOCIAL_TYPES.GITHUB },
  { url: 'https://www.linkedin.com/in/ngoc-son-nguyen-736b90126', type: MY_SOCIAL_TYPES.LINKEDIN },
  { url: 'https://twitter.com/signsz', type: MY_SOCIAL_TYPES.TWITTER },
]

export const MY_LABEL_TYPES = {
  BIRTHDAY: 'birthday',
  PHONE: 'phone',
  EMAIL: 'email',
  LOCATION: 'location',
}

export const MY_LABEL_CONFIG = [
  {
    type: MY_LABEL_TYPES.BIRTHDAY,
    label: 'app.myabout.birthday.label',
    value: 'app.myabout.birthday.value',
  },
  {
    type: MY_LABEL_TYPES.PHONE,
    label: 'app.myabout.phone.label',
    value: 'app.myabout.phone.value',
  },
  {
    type: MY_LABEL_TYPES.EMAIL,
    label: 'app.myabout.email.label',
    value: 'app.myabout.email.value',
  },
  {
    type: MY_LABEL_TYPES.LOCATION,
    label: 'app.myabout.location.label',
    value: 'app.myabout.location.value',
  },
]

export const SECTIONS = {
  HOME: {
    id: 'home',
  },
  ABOUT: {
    id: 'about',
  },
}

export const MY_SKILLS = [
  { label: 'app.myskills.html.label', value: 'app.myskills.html.value', width: '90%' },
  { label: 'app.myskills.fe.label', value: 'app.myskills.fe.value', width: '90%' },
  { label: 'app.myskills.be.label', value: 'app.myskills.be.value', width: '60%' },
  { label: 'app.myskills.mobile.label', value: 'app.myskills.mobile.value', width: '70%' },
]

export const DESKTOP_WIDTH = 992
export const TABLET_WIDTH = 768

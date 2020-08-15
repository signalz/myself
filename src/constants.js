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
  SERVICES: {
    id: 'services',
  },
  CONTACT: {
    id: 'contact',
  },
}

export const MY_SKILLS = [
  { label: 'app.myskills.html.label', value: 'app.myskills.html.value', width: '90%' },
  { label: 'app.myskills.fe.label', value: 'app.myskills.fe.value', width: '90%' },
  { label: 'app.myskills.be.label', value: 'app.myskills.be.value', width: '60%' },
  { label: 'app.myskills.mobile.label', value: 'app.myskills.mobile.value', width: '70%' },
]

export const MY_SERVICE_TYPES = {
  DESKTOP: 'desktop',
  API: 'api',
  MOBILE: 'mobile',
}

export const MY_SERVICES_CONFIG = [
  {
    type: MY_SERVICE_TYPES.DESKTOP,
    label: 'app.myservices.desktop.label',
    description: 'app.myservices.desktop.description',
  },
  {
    type: MY_SERVICE_TYPES.API,
    label: 'app.myservices.api.label',
    description: 'app.myservices.api.description',
  },
  {
    type: MY_SERVICE_TYPES.MOBILE,
    label: 'app.myservices.mobile.label',
    description: 'app.myservices.mobile.description',
  },
]

export const MY_CONTACT_TYPES = {
  LOCATION: 'location',
  PHONE: 'phone',
  EMAIL: 'email',
  SKYPE: 'skype',
}

export const MY_CONTACT_CONFIG = [
  {
    type: MY_CONTACT_TYPES.LOCATION,
    label: 'app.mycontact.location.label',
    description: 'app.mycontact.location.description',
    url:
      'https://www.google.com/maps/place/Hanoi,+Ho%C3%A0n+Ki%E1%BA%BFm,+Hanoi,+Vietnam/@21.0123541,105.7835141,13z/data=!4m5!3m4!1s0x3135ab9bd9861ca1:0xe7887f7b72ca17a9!8m2!3d21.0277595!4d105.8341634',
  },
  {
    type: MY_CONTACT_TYPES.PHONE,
    label: 'app.mycontact.phone.label',
    description: 'app.mycontact.phone.description',
    url: 'tel:+84988426014',
  },
  {
    type: MY_CONTACT_TYPES.EMAIL,
    label: 'app.mycontact.email.label',
    description: 'app.mycontact.email.description',
    url: 'mailto:nguyenngocson4391@gmail.com',
  },
  {
    type: MY_CONTACT_TYPES.SKYPE,
    label: 'app.mycontact.skype.label',
    description: 'app.mycontact.skype.description',
    url: 'skype:ngocsonzz?chat',
  },
]

export const MY_CV_URL = 'https://drive.google.com/file/d/1D3BjNRVk6ijmVjDWOqh44WfizuCU-V25/view'

export const DESKTOP_WIDTH = 992
export const TABLET_WIDTH = 768
export const HEADER_HEIGHT = 84

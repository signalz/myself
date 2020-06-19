import { MY_SOCIAL_TYPES, MY_LABEL_TYPES, MY_SERVICE_TYPES } from 'constants.js'
import FacebookIcon from 'components/svg/facebook'
import GithubIcon from 'components/svg/github'
import LinkedinIcon from 'components/svg/linkedin'
import TwitterIcon from 'components/svg/twitter'
import BirthdayIcon from 'components/svg/birthday'
import PhoneIcon from 'components/svg/phone'
import EmailIcon from 'components/svg/mail'
import LocationIcon from 'components/svg/location'
import MobileIcon from 'components/svg/mobile'
import DesktopIcon from 'components/svg/desktop'
import ApiIcon from 'components/svg/api'

export function getIcon(type) {
  switch (type) {
    case MY_SOCIAL_TYPES.FACEBOOK:
      return FacebookIcon
    case MY_SOCIAL_TYPES.GITHUB:
      return GithubIcon
    case MY_SOCIAL_TYPES.LINKEDIN:
      return LinkedinIcon
    case MY_SOCIAL_TYPES.TWITTER:
      return TwitterIcon
    case MY_LABEL_TYPES.BIRTHDAY:
      return BirthdayIcon
    case MY_LABEL_TYPES.PHONE:
      return PhoneIcon
    case MY_LABEL_TYPES.EMAIL:
      return EmailIcon
    case MY_LABEL_TYPES.LOCATION:
      return LocationIcon
    case MY_SERVICE_TYPES.DESKTOP:
      return DesktopIcon
    case MY_SERVICE_TYPES.MOBILE:
      return MobileIcon
    case MY_SERVICE_TYPES.API:
      return ApiIcon
    default:
      return FacebookIcon
  }
}

export const NEXT = 'next'

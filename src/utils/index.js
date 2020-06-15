import { MY_SOCIAL_TYPES, MY_LABEL_TYPES } from 'constants.js'
import FacebookIcon from 'components/svg/facebook'
import GithubIcon from 'components/svg/github'
import LinkedinIcon from 'components/svg/linkedin'
import TwitterIcon from 'components/svg/twitter'
import BirthdayIcon from 'components/svg/birthday'
import PhoneIcon from 'components/svg/phone'
import EmailIcon from 'components/svg/mail'
import LocationIcon from 'components/svg/location'

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
    default:
      return FacebookIcon
  }
}

export const NEXT = 'next'

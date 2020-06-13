import { MY_SOCIAL_TYPES } from 'constants.js'
import FacebookIcon from 'components/svg/facebook'
import GithubIcon from 'components/svg/github'
import LinkedinIcon from 'components/svg/linkedin'
import TwitterIcon from 'components/svg/twitter'

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
    default:
      return FacebookIcon
  }
}

export const NEXT = 'next'

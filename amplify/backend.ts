import { defineBackend } from '@aws-amplify/backend'
import { contactMe } from './contact-me/resource'

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  contactMe
})

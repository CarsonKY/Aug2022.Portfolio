// Import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Import schema types and categories
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import testimonials from './testimonials'
import brands from './brands'
import about from './about'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from "./contact"


// Pass schemas over to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([,
  testimonials,
  works,
  brands,
  about,
  experiences,
  skills,
  workExperience,
  contact

  ]),
})

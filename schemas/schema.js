// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents Schema
import home from './documents/home'
import about from './documents/about'
import products from './documents/products'
import settings from './documents/settings'

// Objects Schema
import a11yImage from './objects/image'
import imageWithCaption from './objects/imageWithCaption'
import link from './objects/link'
import categories from './documents/categories'
import hero from './objects/hero'
import seo from './objects/seo'
import collection from './documents/collection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    about,
    products,
    categories,
    settings,
    collection,
    
    link,
    a11yImage,
    imageWithCaption,
    hero,
    seo
  ]),
})

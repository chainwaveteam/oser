/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import category from './documents/category'
import post from './documents/post'
import author from './documents/author'
import topic from './documents/topic'
import customer from './documents/customer'
import service from './documents/service'
import formation from './documents/formation'
import project from './documents/project'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import quote from './objects/quote'
import excerpt from './objects/excerpt'
import testimonial from './objects/testimonial'
import siteLinks from './objects/siteLinks'
import authorLinks from './objects/authorLinks'
import comment from './documents/comment'
import blogSettings from './documents/blogSettings'
import redactionSettings from './documents/redactionSettings'
import projectsModule from './objects/modules/projectsModule'
import servicesModule from './objects/modules/servicesModule'
import customersModule from './objects/modules/customersModule'
import selectPage from './objects/selectPage'
import ctaModule from './objects/modules/ctaModule'
import simplePortableText from './objects/simplePortableText'
import simplePortableTextModule from './objects/modules/simplePortableTextModule'
import modules from './objects/modules/modules'
import formationsModule from './objects/modules/formationsModule'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // document schemas
    siteSettings,
    author,
    post,
    category,
    topic,
    customer,
    service,
    project,
    formation,
    comment,
    blogSettings,
    redactionSettings,

    // Object types
    mainImage,
    bodyPortableText,
    simplePortableText,
    quote,
    excerpt,
    siteLinks,
    authorLinks,
    testimonial,
    selectPage,

    // Modules builder
    modules,
    projectsModule,
    servicesModule,
    simplePortableTextModule,
    customersModule,
    formationsModule,
    ctaModule,
  ]),
})

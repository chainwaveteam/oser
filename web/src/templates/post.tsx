import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Image from 'gatsby-image'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import Layout from '../layout'
import SEO from '../layout/seo'
import { PageTemplate, Post } from '../interfaces'
import Hero from '../components/Hero'
import AuthorCard from '../components/cards/AuthorCard'
import BodyPortableText from '../components/BodyPortableText'
import PostSocialBar from '../components/blog/PostSocialBar'
import Comments from '../components/blog/Comments'
import PostNavigation from '../components/blog/PostNavigation'
import useSanityImages from '../hooks/useSanityImages'

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  mainImage: {
    maxWidth: 960,
    margin: 'auto',
  },
  divider: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  body: {
    paddingBottom: theme.spacing(6),
  },
}))

export interface PostTemplateProps extends PageTemplate {
  pageContext: {
    current: Post
    next: Post
    prev: Post
  }
}

const PostTemplate: FC<PostTemplateProps> = ({ pageContext, path }) => {
  const classes = useStyles()

  const {
    title,
    slug,
    excerpt,
    mainImage,
    body,
    categories,
  } = pageContext.current

  // Get image sharp
  const [getImageById] = useSanityImages()
  const image = getImageById(mainImage?.asset.id)

  return (
    <Layout isBlog>
      <SEO
        title={title}
        description={excerpt}
        path={path}
        image={mainImage}
        isPost
      />
      <PostNavigation direction="left" post={pageContext.prev} />
      <PostNavigation direction="right" post={pageContext.next} />

      <Hero title={title} subtitle={excerpt}>
        <PostSocialBar categories={categories} />
      </Hero>
      <div className={classes.body}>
        <Container maxWidth="lg">
          {image && (
            <Box mb={8}>
              <Image
                alt={mainImage?.alt}
                className={classes.mainImage}
                fluid={image.md}
              />
            </Box>
          )}
        </Container>

        <Container maxWidth="md">
          <Divider className={classes.divider} />

          <Box mb={4}>
            <BodyPortableText blocks={body} />
          </Box>

          <PostSocialBar categories={categories} />

          <Divider className={classes.divider} />

          <AuthorCard />

          <Divider className={classes.divider} />

          <Comments postSlug={slug.current} postTitle={title} />
        </Container>
      </div>
    </Layout>
  )
}

export default PostTemplate

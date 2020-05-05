import React, { FC } from 'react'
import { navigate } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'

import { Post } from '../interfaces'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardAction: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingBottom: '56.25%',
    height: 0,
    width: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cardContent: {
    flex: 1,
    height: '100%',
  },
}))

export type PostCardProps = Post

const PostCard: FC<PostCardProps> = ({ title, excerpt, mainImage, slug }) => {
  const classes = useStyles()

  const handleNavigate = () => {
    navigate(slug.current)
  }

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction} onClick={handleNavigate}>
        {mainImage && (
          <BackgroundImage
            className={classes.cardMedia}
            fluid={mainImage.asset.sm}
            backgroundColor={grey[200]}
          />
        )}
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1">{excerpt}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostCard
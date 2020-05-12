import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(12),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
}))

export interface SectionProps {
  title?: string
  description?: string
}

const Section: FC<SectionProps> = ({ title, description, children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.section}>
      <Container maxWidth="md">
        {title && (
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="subtitle2">{description}</Typography>
        )}
      </Container>
      <Container maxWidth="lg">
        <Box my={4}>{children}</Box>
      </Container>
    </Box>
  )
}

export default Section
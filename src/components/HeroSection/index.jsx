import React from 'react'
import {Grid, TextContainer, Text, Image} from './styles'
import heroImageSrc from '../../assets/hero-image.jpg'
import {Check} from '../Check/styles'
import {H2, P} from '../../styles'

const HeroSection = () => (
  <>
    <Grid>
      <Image src={heroImageSrc} alt="group of Black people smiling at a restaurant" />
      <TextContainer>
        <Text>
          <H2>Support local Black owned businesses!</H2>
          <P>
            Use our directory to discover new Black owned businesses local to you, or add your own
            to the directory.
          </P>
        </Text>
      </TextContainer>
    </Grid>

    <Check alt="repeating red and white check pattern" />
  </>
)

export default HeroSection

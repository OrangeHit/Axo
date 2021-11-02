import React, {useState} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroH2, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElement'
import { ImageBg } from './Back.js'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>WELCOME </HeroH1>
                <HeroH2>TO THE AXOLOX</HeroH2>
                <HeroP>
                7777 hand drawn unique axolotes living on the Layer 2 <br /> Ethereum Solution, Immutable X.
                </HeroP>
                <HeroP>
                The Mexican mystical amphibian is a unique, stylish, useful <br /> collectible, and helps the preservation of the species.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="connectwallet" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Buy on OpenSea {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

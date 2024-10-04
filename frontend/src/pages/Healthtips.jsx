import React from 'react'
import Health from '../components/Health'
import HealthTipsHero from '../components/HealthTipsHero'

const Healthtips = () => {
    return (
        <>
            <HealthTipsHero title={"Stay Healthy with Care404: Expert Tips for Better Living"} imageUrl={"/health.png"} />
            <Health imageUrl={"/h1.png"} />
        </>
    )
}

export default Healthtips

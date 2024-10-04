import React from 'react'
import Privacy from '../components/Privacy'
import PrivacyPol from '../components/PrivacyPol'

const PrivacyPolicy = () => {
  return (
    <>
    <PrivacyPol title={"Care404: Our Commitment to Privacy"} imageUrl={"/privacy.png"} />
    <Privacy imageUrl={"/p1.png"} />
    </>
  )
}

export default PrivacyPolicy

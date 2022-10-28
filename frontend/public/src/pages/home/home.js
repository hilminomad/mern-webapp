import  React from 'react'
import Hero from '../../components/hero'
import ExpectMore from './expeptMore'
import Partners from './partners'
import Sitation from './sitation'
import Offres from './offres'

export   default     function   Home()
{
	return(
		<>
			<Hero/>
			<Offres/>
			<ExpectMore/>
			<Partners/>
			<Sitation/>
		</>
	)
}
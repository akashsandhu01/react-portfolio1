import './index.scss'
import { ProgressBar } from 'react-loader-spinner'

export default function Contact() {
  return (
    <>
       <div>Contact</div>
       <ProgressBar
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor = 'white'
          barColor = 'white'/>
    </>
   

  )
}

import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  console.log(error);
  if(error.status === 404){
    return (
      <Wrapper>
        <div>
        <img src={img} alt='page not found'/>
        <h3>Ohh!</h3>
        <p>We cann't seem to find the page you looking for</p>
        <Link to='/'>Back to home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
      <p>Something went wrong</p>
      </div>
    </Wrapper>
  )
}

export default Error

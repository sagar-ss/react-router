import {Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'
const SearchForm = ({searchTerm}) => {
  const navigate = useNavigation()
  const isSubmitted = navigate.state === 'submitting'
  return (
    <Wrapper>
    <Form className='form'>
      <input 
        type='search'
        name='search'
        className='form-input'
        defaultValue={searchTerm}
        required
        />
        <button 
          type='submit'
          className='btn'
          disabled={isSubmitted}
        >
            {isSubmitted?'Submitting':'Submit'}
        </button>
    </Form>
    </Wrapper>
  )
}

export default SearchForm

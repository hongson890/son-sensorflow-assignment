import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../features/users'
import { searchUser } from '../features/users/users.actions'

export const Home: React.FC = () => {
  const users = useSelector(selectors.getUsers)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Redux + TypeScript</h1>
      <p>
        Hello and welcome! :) This app was generated by the Create React App
        {users.length}
      </p>
      <div>
        <button
          className="waves-effect waves-teal btn-flat blue"
          type="button"
          data-qa="decrement-counter"
          onClick={() => dispatch(searchUser())}
        >
          search
        </button>
      </div>
    </>
  )
}

import { Route, Routes, useNavigate } from "react-router-dom"
import LogInPage from "../components/LogInPage"
import SignUpPage from "../components/SignUpPage"
import { useState } from "react"
import Home from "./Home"
import UserData from "../components/UserData"
import {
  setUserData,
  setCurrentUserData,
  userDataRootState,
} from "../Redux/features/userData"
import { useDispatch, useSelector } from "react-redux"

const SignInPage = () => {
  const dispatch = useDispatch()

  const currentUserData = useSelector(
    (state: userDataRootState) => state.currentUserData.currentUserData
  )

  const userData = useSelector(
    (state: userDataRootState) => state.userData.userData
  )

  const [userVal, setUserVal] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const [logInVal, setLogInVal] = useState<any>({
    email: "",
    password: "",
  })

  const [userValError, setUserValError] = useState<any>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  })

  // password hide and show state and  function
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPassword = () => setShowPassword(!showPassword)

  const Navigate = useNavigate()

  // Set the value input to value to loginval state
  const handleLogInChange = (key: string, e: any) => {
    let val = { ...logInVal }
    val[key] = e.target.value
    setLogInVal(val)
  }
  // Handle Log Out
  const handleLogOut = () => {
    dispatch(setCurrentUserData([]))
    Navigate("/login")
  }

  // Set the value input to value (handleUserVal) function

  const handleOnChange = (key: string, e: any) => {
    let val = { ...userVal }
    val[key] = e.target.value
    setUserVal(val)

    // used regex for name and email and password
    const name = /^[^\d]{4,}$/
    const email = /^\S+@\S+\.\S+$/
    const password = /^(?=.*\d.*\d)[\w\d]{8,}$/

    // form validation
    if (key === "firstName") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, firstName: isvalid })
    } else if (key === "lastName") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, lastName: isvalid })
    } else if (key === "email") {
      const isvalid = email.test(e.target.value)
      setUserValError({ ...userValError, email: isvalid })
    } else if (key === "password") {
      const isvalid = password.test(e.target.value)
      setUserValError({ ...userValError, password: isvalid })
    }
  }

  const handleIsSuperAdmin = () => {
    if (logInVal.email === "superadmin@gmail.com") {
      if (logInVal.password === "superadmin@123") {
        return true
      } else {
        alert("enter correct password")
      }
    } else {
      return false
    }
  }

  const handleIsAdmin = () => {
    if (logInVal.email === "admin@gmail.com") {
      if (logInVal.password === "admin@123") {
        return true
      } else {
        alert("enter correct password")
      }
    } else {
      return false
    }
  }

  const handleClearUserDatas = () => {
    const val = {
      email: "",
      password: "",
    }
    setLogInVal(val)
  }

  // Log in function

  const logIn = () => {
    const isSuperAdmin = handleIsSuperAdmin()
    const isAdmin = handleIsAdmin()

    if (isSuperAdmin) {
      const val = {
        isSuperAdmin: true,
      }
      dispatch(setCurrentUserData(val))
      Navigate("/home")
      handleClearUserDatas()
    } else if (isAdmin) {
      const val = {
        isSuperAdmin: false,
      }
      dispatch(setCurrentUserData(val))
      Navigate("/home")
      handleClearUserDatas()
    } else {
      if (logInVal.email === "") {
        alert("please enter email.")
        return
      } else if (logInVal.password === "") {
        alert("Please enter password")
        return
      }
      if (userData.length > 0) {
        const currentUser = userData.find(
          (user: any) => user.email === logInVal.email
        )
        if (currentUser && currentUser.email === logInVal.email) {
          if (currentUser.password === logInVal.password) {
            Navigate("/userdata")
            dispatch(setCurrentUserData(currentUser))
            handleClearUserDatas()
          } else {
            alert("Enter correct password")
          }
        } else {
          alert("User not fount.")
        }
      } else {
        alert("user data not")
      }
    }
  }

  // Create account function
  const createAccount = async (e: any) => {
    e.preventDefault()
    const val = {
      id: userData.length ? userData[userData.length - 1].id + 1 : 1,
      firstName: userVal.firstName,
      lastName: userVal.lastName,
      email: userVal.email,
      password: userVal.password,
    }
    // if else condition for form validation
    if (!userValError.firstName) {
      alert("Please enter a valid Firstname name with 4 characters long.")
      return
    } else if (!userValError.lastName) {
      alert("Please enter a valid lastname name 4 characters long.")
      return
    } else if (!userValError.email) {
      alert("Please enter a valid email address (at least 8 characters long).")
      return
    } else if (!userValError.password) {
      alert(
        "Please enter a valid password (at least 8 characters long, including at least 2 numbers)."
      )
      return
    } else {
      Navigate("/userdata")
    }
    dispatch(setCurrentUserData(val))
    const newData = userData.length ? [...userData, val] : [val]
    dispatch(setUserData(newData))
  }

  return (
    <div>
      <div className='h-[100vh]'>
        <Routes>
          <Route
            index
            element={
              <SignUpPage
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
                userVal={userVal}
                createAccount={createAccount}
                handleOnChange={handleOnChange}
              />
            }
          />
          <Route
            path='login'
            element={
              <LogInPage
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
                handleLogInChange={handleLogInChange}
                logInVal={logInVal}
                logIn={logIn}
              />
            }
          />
          <Route
            path='signup'
            element={
              <SignUpPage
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
                userVal={userVal}
                createAccount={createAccount}
                handleOnChange={handleOnChange}
              />
            }
          />
          <Route
            path='home'
            element={
              <Home
                handleLogOut={handleLogOut}
                currentUserData={currentUserData}
              />
            }
          />
          <Route
            path='userdata'
            element={
              <UserData
                handleLogOut={handleLogOut}
                currentUserData={currentUserData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default SignInPage

import { useState } from "react"
import MembersHeader from "../components/MembersHeader"
import CreateModel from "../components/Model"
import PlayersList from "../components/PlayersList"
import { membersDataRootState } from "../Redux/features/membersData"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMemberData } from "../Redux/features/membersData"

type Homeprops = {
  currentUserData: any
  handleLogOut: () => void
}

const Home = ({ currentUserData, handleLogOut }: Homeprops) => {
  
  const membersData = useSelector(
    (state: membersDataRootState) => state.membersData.membersData
  )

  const dispatch = useDispatch()

  // Model open state

  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false)
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // handle value of admin & user value & edit states

  const [admin, setAdmin] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
  })

  const [user, setUser] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    status: "",
  })

  const [values, setValues] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    status: "",
  })

  // Basic Popover state and handleClick function and handleClose

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  //      handle admin & user value & edit function

  const name = /^[^\d]{1,}$/
  const email = /^\S+@\S+\.\S+$/
  const [userValError, setUserValError] = useState<any>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  })
  // handle Edit  model open

  // Model open function
  const handleModal = () => setIsModalOpen(!isModalOpen)
  const handleAdminModal = () => setIsAdminModalOpen(!isAdminModalOpen)
  const handleuserModal = () => setIsUserModalOpen(!isUserModalOpen)

  const handleAdmin = (key: string, e: any) => {
    let val = { ...admin }
    val[key] = e.target.value
    setAdmin(val)

    if (key === "first_name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, firstName: isvalid })
    } else if (key === "last_name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, lastName: isvalid })
    } else if (key === "email") {
      const isvalid = email.test(e.target.value)
      setUserValError({ ...userValError, email: isvalid })
    }
  }

  const handleUser = (key: string, e: any) => {
    let val = { ...user }
    val[key] = e.target.value
    setUser(val)

    if (key === "first_name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, firstName: isvalid })
    } else if (key === "last_name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, lastName: isvalid })
    } else if (key === "email") {
      const isvalid = email.test(e.target.value)
      setUserValError({ ...userValError, email: isvalid })
    }
  }

  // handle delete on change function

  const handleEdit = (key: string, e: any) => {
    let val = { ...values }
    val[key] = e.target.value
    setValues(val)

    if (key === "first_name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, firstName: isvalid })
    } else if (key === "last_name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, lastName: isvalid })
    }
  }

  //  handle change function

  const handleChange = (values: any) => {
    let val = {
      id: values.id,
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      role: values.role,
      status: values.status,
    }
    setValues(val)
  }

  // handle Delete function
  const handleDelete = async (id: any) => {
    let newData = membersData.filter((item: any) => item.id !== id)
    dispatch(setMemberData(newData))
  }

  // handle admin submit botton

  const handleAdminSubmit = async (value: any, e: any, type: any) => {
    e.preventDefault()

    // if else condition for user form validation

    if (!userValError.firstName) {
      alert("Please enter a Firstname name.")
      return
    } else if (!userValError.lastName) {
      alert("Please enter a Lastname name.")
      return
    } else if (!userValError.email) {
      alert("Please enter a valid email address (at least 8 characters long).")
      return
    } else {
      const emailCheck = membersData.filter(
        (item: any) => item.email === value.email
      )
      if (emailCheck.length) {
        alert("This email already have another admin")
        return
      }

      const id = membersData.length
        ? Number(membersData[membersData.length - 1]?.id) + 1
        : 1
      const newId = id.toString()

      const val = {
        id: newId,
        firstname: value.first_name,
        lastname: value.last_name,
        email: value.email,
        status: 0,
        role: "Admin",
        teams: type,
      }

      const newData = membersData.length ? [...membersData, val] : [val]
      dispatch(setMemberData(newData))
    }
  }

  // handle user submit botton

  const handleUserSubmit = async (value: any, e: any, type: any) => {
    e.preventDefault()
    // if else condition for user form validation

    if (!userValError.firstName) {
      alert("Please enter a Firstname name.")
      return
    } else if (!userValError.lastName) {
      alert("Please enter a Lastname name.")
      return
    } else if (!userValError.email) {
      alert("Please enter a valid email address (at least 8 characters long).")
      return
    } else if (value.role === "") {
      alert("Please select your role")
      return
    } else {
      const emailCheck = membersData.filter(
        (item: any) => item.email === value.email
      )
      if (emailCheck.length) {
        alert("This email already have another admin")
        return
      }

      const id = membersData.length
        ? Number(membersData[membersData.length - 1]?.id) + 1
        : 1
      const newId = id.toString()

      const val = {
        id: newId,
        firstname: value.first_name,
        lastname: value.last_name,
        email: value.email,
        status: 0,
        role: value.role,
        teams: type,
      }
      const newData = membersData.length ? [...membersData, val] : [val]
      dispatch(setMemberData(newData))
    }
  }

  // handle edit submit button

  const handleEditSubmit = async (value: any, e: any) => {
    e.preventDefault()

    const newData = membersData.map((i: any) => {
      if (i.id === value.id) {
        return {
          ...i,
          firstname: value.first_name,
          lastname: value.last_name,
          email: value.email,
          status: value.status,
          teams: i.teams,
          role: value.role,
        }
      } else return i
    })
    dispatch(setMemberData(newData))
  }

  return (
    <div className='p-5 bg-gray-200'>
      <MembersHeader
        handleLogOut={handleLogOut}
        currentUserData={currentUserData}
        adminModal={handleAdminModal}
        userModal={handleuserModal}
      />
      <PlayersList
        values={{}}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        currentUserData={currentUserData}
        onChange={handleChange}
        MembersList={membersData}
        handleModal={handleModal}
        handleDelete={handleDelete}
      />
      {isAdminModalOpen && (
        <CreateModel
          type='admin'
          handleClose={handleClose}
          values={admin}
          handleModelPopUp={handleAdminModal}
          onChange={handleAdmin}
          handleSubmit={handleAdminSubmit}
        />
      )}
      {isUserModalOpen && (
        <CreateModel
          type='user'
          handleClose={handleClose}
          values={user}
          handleModelPopUp={handleuserModal}
          onChange={handleUser}
          handleSubmit={handleUserSubmit}
        />
      )}
      {isModalOpen && (
        <CreateModel
          type='edit'
          handleClose={handleClose}
          values={values}
          handleModelPopUp={handleModal}
          onChange={handleEdit}
          handleSubmit={handleEditSubmit}
        />
      )}
    </div>
  )
}

export default Home

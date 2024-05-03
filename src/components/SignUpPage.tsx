import { FaEyeSlash, FaRegEye } from "react-icons/fa"
import { Link } from "react-router-dom"

type SignUpPageProps = {
  userVal: any
  createAccount: (e: any) => void
  handleOnChange: (key: string, e: any) => void
  handleShowPassword: () => void
  showPassword: boolean
}

const SignUpPage = ({
  userVal,
  createAccount,
  handleShowPassword,
  showPassword,
  handleOnChange,
}: SignUpPageProps) => {
  return (
    <div>
      <div className='h-[100vh] flex pt-[140px] justify-center px-5 py-2 bg-gray-300'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}>
          {/* Name */}

          <h2 className='text-[28px] mb-[40px] font-semibold '>
            Create your new account
          </h2>

          <div className='my-2 grid grid-flow-col  gap-4'>
            <label htmlFor='' className='mb-1 text-[14px]'>
              First Name
            </label>
            <input
              type='text'
              required
              className='outline-none text-xs px-1'
              value={userVal.firstName}
              onChange={(e) => {
                handleOnChange("firstName", e)
              }}
            />
          </div>
          <div className='my-2 grid grid-flow-col  gap-4'>
            <label htmlFor='' className='mb-1 text-[14px]'>
              Last Name
            </label>
            <input
              type='text'
              required
              className='outline-none text-xs px-1'
              value={userVal.lastName}
              onChange={(e) => {
                handleOnChange("lastName", e)
              }}
            />
          </div>

          {/* Email */}

          <div className='my-2 grid grid-flow-col  gap-4'>
            <label htmlFor='' className='mb-1 text-[14px]'>
              Email
            </label>
            <input
              type='mail'
              required
              className='outline-none text-xs px-1'
              value={userVal.email}
              onChange={(e) => {
                handleOnChange("email", e)
              }}
            />
          </div>

          {/* Password */}

          <div className='my-2 grid grid-flow-col  gap-4'>
            <label htmlFor='' className='mb-1 text-[14px]'>
              password
            </label>
            <div className='flex relative items-center '>
              <input
                type={showPassword ? "text" : "password"}
                required
                className='outline-none py-1 w-[100%] text-xs px-1'
                value={userVal.password}
                onChange={(e) => {
                  handleOnChange("password", e)
                }}
              />
              {showPassword ? (
                <FaRegEye
                  className='absolute cursor-pointer text-sm right-[5px]'
                  onClick={() => {
                    handleShowPassword()
                  }}
                />
              ) : (
                <FaEyeSlash
                  className='absolute cursor-pointer text-sm right-[5px] '
                  onClick={() => {
                    handleShowPassword()
                  }}
                />
              )}
            </div>
          </div>
          {/* Account create button */}
          <div className='my-2 grid grid-flow-col  gap-4'>
            <button
              className='bg-white px-4 rounded-md font-semibold py-1 text-[14px]'
              onClick={(e: any) => {
                createAccount(e)
              }}>
              Create Account
            </button>
            <Link
              to='/login'
              className='bg-white px-4 rounded-md font-semibold py-1 text-[14px]'>
              Already have account ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage

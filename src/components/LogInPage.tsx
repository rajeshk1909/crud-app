import { FaEyeSlash, FaRegEye } from "react-icons/fa"

type LogInPageProps = {
  logIn: (type: string) => void
  handleLogInChange: (key: string, e: any) => void
  logInVal: any
  handleShowPassword: () => void
  showPassword: boolean
}

const LogInPage = ({
  logIn,
  handleLogInChange,
  handleShowPassword,
  showPassword,
  logInVal,
}: LogInPageProps) => {
  return (
    <div className='h-[100vh] flex pt-[180px] justify-center px-5 py-2 bg-gray-300'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}>
        <h2 className='pb-[40px] font-semibold text-[28px]'>
          Log In Your Account
        </h2>

        {/* Email */}

        <div className='my-2 grid grid-flow-col   gap-4'>
          <label htmlFor='' className='mb-1 text-[14px]'>
            Email
          </label>
          <input
            type='mail'
            className='outline-none text-xs  px-1 '
            value={logInVal.email}
            onChange={(e) => {
              handleLogInChange("email", e)
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
              text-xs
              className='outline-none py-1 w-[100%] text-xs px-1'
              value={logInVal.password}
              onChange={(e) => {
                handleLogInChange("password", e)
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
        <div className=' flex justify-center items-center  mt-5'>
          <button
            className='bg-white px-4 rounded-md font-semibold py-1 text-[14px]'
            onClick={() => {
              logIn("user")
            }}>
             Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default LogInPage

type Avatarprops = {
  firstname: string
  lastname: string
}

const Avatar = ({ firstname, lastname }: Avatarprops) => {
  const createAvatar = (firstname: string, lastname: string) => {
    return (
      firstname.slice(0, 1).toUpperCase() + lastname.slice(0, 1).toUpperCase()
    )
  }

  return (
      <div className='mx-[50px] flex items-center justify-center w-12 h-12 bg-gray-400 text-white font-semibold 
    text-base rounded-full'>
      {createAvatar(firstname, lastname)}
    </div>
  )
}

export default Avatar

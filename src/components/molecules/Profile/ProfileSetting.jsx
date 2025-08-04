function ProfileSetting() {
  return (
    <>
        <form action="" className="flex flex-col gap-[50px]">
            <div className="w-[866px] h-[418px] bg-[#FFFFFF] px-[35px] py-[20px] rounded-[24px]">
              <div className="w-full border-b border-b-[#DEDEDE] py-[20px]">
                <h1 className="text-[16px] font-[400] tracking-[0.75px] text-[#14142B]">Details Information</h1>
              </div>
              <div className="flex justify-between gap-[34px] py-[30px]">
                <div className="flex flex-col gap-[20px]">
                  <label for="firstName" className="text-[16px] font-[400] tracking-[0] text-[#4E4B66]">First Name</label>
                  <input type="text" name="firstName" id="firstName" placeholder="Jonas"  className="w-[384px] h-[64px] rounded-[16px] border border-[#DEDEDE] bg-[#FCFDFE] pl-[20px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <label for="lastName" className="text-[16px] font-[400] tracking-[0] text-[#4E4B66]">Last Name</label>
                  <input type="text" name="lastName" id="lastName" placeholder="El Rodriguez"  className="w-[384px] h-[64px] rounded-[16px] border border-[#DEDEDE] bg-[#FCFDFE] pl-[20px]" />
                </div>
              </div>

              <div className="flex justify-between gap-[34px] pb-[30px]">
                <div className="flex flex-col gap-[20px]">
                  <label for="email" className="text-[16px] font-[400] tracking-[0] text-[#4E4B66]">Email</label>
                  <input type="email" name="email" id="email" placeholder="jonasrodrigu123@gmail.com"  className="w-[384px] h-[64px] rounded-[16px] border border-[#DEDEDE] bg-[#FCFDFE] pl-[20px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <label for="phone" className="text-[16px] font-[400] tracking-[0] text-[#4E4B66]">Phone Number</label>
                  <input type="text" name="phone" id="phone" placeholder="081445687121"  className="w-[384px] h-[64px] rounded-[16px] border border-[#DEDEDE] bg-[#FCFDFE] pl-[20px]" />
                </div>
              </div>

            </div>

            <div className="w-[866px] h-[297px] bg-[#FFFFFF] px-[35px] py-[20px] rounded-[24px]">
              <div className="w-full border-b border-b-[#DEDEDE] py-[20px]">
                <h1 className="text-[16px] font-[400] tracking-[0.75px] text-[#14142B]">Account and Privacy</h1>
              </div>
              <div className="flex justify-between gap-[34px] py-[30px]">
                <div className="flex flex-col gap-[20px]">
                  <label for="newPass" className="text-[16px] font-[400] tracking-[0] text-[#4E4B66]">New Password</label>
                  <div className="w-[384px] h-[64px] rounded-[16px] border border-[#DEDEDE] overflow-hidden relative">
                    <input type="password" name="newPass" id="newPass" placeholder="Write your password"  className=" w-full h-full bg-[#FCFDFE] pl-[20px] rounded-[16px]" />
                    <img src="../assets/imgs/icon/eye 1.png" alt="eye" className="absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="flex flex-col gap-[20px]">
                  <label for="confirmPass" className="text-[16px] font-[400] tracking-[0] text-[#4E4B66]">Confirm Password</label>
                  <div className="w-[384px] h-[64px] rounded-[16px] border border-[#DEDEDE] overflow-hidden relative">
                    <input type="password" name="confirmPass" id="confirmPass" placeholder="Confirm your password"  className=" w-full h-full bg-[#FCFDFE] pl-[20px] rounded-[16px]" />
                    <img src="../assets/imgs/icon/eye 1.png" alt="eye" className="absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

            </div>

            <div className="w-[360px] h-[56px] bg-[#1D4ED8] rounded-[16px]">
              <button type="submit" className="w-full h-[56px] rounded-[16px] text-[16px] font-[500] tracking-[0.75px] text-[#F7F7FC]">Update changes</button>
            </div>
          </form>
    </>
  )
}

export default ProfileSetting
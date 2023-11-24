import { Typography } from '@material-tailwind/react';


const Footer = () => {
    return (
        <footer className="w-full bg-[#393E46] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
         
         <div >
         <h2 className=" text-xl font-bold text-white"><span className="text-[#00ADB5]">Tech</span>Raddar</h2>
            </div>
        <ul className="flex flex-wrap items-center gap-y-2  gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              className=" font-semibold transition-colors hover:text-[#00ADB5] text-white focus:text-[#00ADB5]"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" font-semibold transition-colors hover:text-[#00ADB5] text-white focus:text-[#00ADB5]"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" font-semibold transition-colors hover:text-[#00ADB5] text-white focus:text-[#00ADB5]"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" font-semibold transition-colors hover:text-[#00ADB5] text-white focus:text-[#00ADB5]"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center  flex justify-center text-white gap-3">
        &copy; All copyrights deserve to <h2 className=" text-xl font-bold text-white"><span className="text-[#00ADB5]">Tech</span>Raddar</h2>
      </Typography>
    </footer>
    );
};

export default Footer;
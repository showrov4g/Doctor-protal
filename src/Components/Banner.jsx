import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div>
      {/* left side  */}
      <div>
        <div>
          <p>Book Appointment </p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        <button>Create account</button>
      </div>
      {/* right side  */}
      <div>
        <img src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;

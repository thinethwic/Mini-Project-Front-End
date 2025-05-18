import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-11">
        <div className="col-span-3">
          <div>
            <Link to={"/"} className="text-4xl font-medium text-underlay-1">
              UniMind AI
            </Link>
          </div>
          <div className="mt-6 text-gray-600 text-xl">
            More +7000 Students Consultation
          </div>
          <div className="flex justify-start gap-8 mt-4">
            <div>
              <FaFacebook className="text-blue-500 text-2xl" />
            </div>
            <div>
              <FaInstagram className="text-pink-500 text-2xl" />
            </div>

            <div>
              <FaYoutube className="text-red-500 text-2xl" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Home</div>
          <div className="mt-6">
            {" "}
            <Link tp={"/"}>Home</Link>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Dashboard</div>
          <div className="mt-6">
            {" "}
            <Link tp={"/"}>Dashboard</Link>{" "}
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Company</div>
          <div className="mt-6"> About Us </div>
          <div className="mt-2"> Contact Us </div>
        </div>
      </div>

      <div className="col-span-7 mt-8">
        <Separator />
        <div className="text-center text-gray-400 text-lg mt-6">
          {" "}
          &#169; 2024 UniMind AI.All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;

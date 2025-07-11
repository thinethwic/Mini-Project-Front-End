import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex py-12 justify-between items-center">
      <div>
        <Link to={"/"} className="text-4xl font-medium text-underlay-1">
          UniMind AI
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="hidden md:flex justify-center gap-x-8">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          {" "}
          <Link>About Us</Link>
        </div>
        <div>
          {" "}
          <Link>Contact Us</Link>
        </div>
      </div>
      <div className="hidden md:flex justify-center gap-x-8 items-center">
        <SignedIn>
          <UserButton />
          <div className="flex gap-x-4 items-center">
            <Button asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex gap-x-4 items-center">
            <Link to={"/sign-in"}>Sign In</Link>
            <Button asChild>
              <Link to={"/sign-up"}> Sign Up </Link>
            </Button>
          </div>
        </SignedOut>
      </div>

      {/* Mobile menu (shown when hamburger is open) */}
      {isOpen && (
        <div className="bg-white shadow-md">
          <div className="flex flex-col mt-4 space-y-4 md:hidden">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>

            <SignedIn>
              <div className="flex flex-col gap-y-2">
                <UserButton />
                <Button asChild>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                </Button>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex flex-col gap-y-2">
                <Link to="/sign-in" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
                <Button asChild>
                  <Link to="/sign-up" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navigation;

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      return navigate("/sign-in");
    }

    if (user?.publicMetadata?.role !== "admin") {
      return navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate, user]);

  return (
    <div>
      <div className="flex justify-end gap-x-4 items-center py-4">
        <Link to="question"> Posted Questions </Link>
        <Button asChild>
          <Link to="question/create">Post A Question</Link>
        </Button>
      </div>
      <Outlet />
    </div>
  );
}
export default AdminLayout;

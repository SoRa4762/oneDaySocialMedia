const Header = () => {
  return (
    <div className="h-[10vh] w-full flex gap-2 items-center justify-between font-semibold text-xl px-4 bg-blue-500 text-white">
      <div className="flex gap-4">
        <a href="/home" className="cursor-pointer">
          Home
        </a>
        <a href="/addpost" className="cursor-pointer">
          Add Post
        </a>
      </div>

      <div className="flex gap-4">
        <a href="/signin" className="cursor-pointer">
          Sigin
        </a>
        <a href="/signup" className="cursor-pointer">
          Signup
        </a>
      </div>
    </div>
  );
};

export default Header;

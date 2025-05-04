import "../app/App.css";
import { Link } from "react-router-dom";
import Hat from "../assets/Hat.svg";
import { UseThemeStore } from "../store/ThemeStore";

const Navbar = () => {
  const isDark = UseThemeStore((state) => state.isDark);
  const toggleTheme = UseThemeStore((state) => state.handleTheme);
  return (
    <div className="flex justify-center  ">
      <div className=" w-[95%] mt-5 p-4 bg-white rounded-2xl flex flex-row justify-between items-center">
        <Link to="/">
          <div className="flex flex-row items-center">
            <img src={Hat} alt="" />
            <p className="text-[20px] font-navbar font-medium">
              <span className="text-purpleDefault ">Bilim</span>
              Tap
            </p>
          </div>
        </Link>

        <div className="flex flex-row justify-between items-center gap-5">
          <Link to="/">
            <p className="text-[15px] font-medium">Главная</p>
          </Link>
          <Link to="/search">
            <p className="text-[15px] font-medium">Все курсы</p>
          </Link>

          <div
            className="mr-5 border flex flex-row gap-2 px-2 py-2 rounded-3xl bg-black cursor-pointer"
            onClick={toggleTheme}
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill={isDark ? `black` : `white`}
                />
                <path
                  d="M12 5V6.75M16.9498 7.05022L15.7123 8.28767M19 12H17.25M16.9498 16.9498L15.7123 15.7123M12 17.25V19M8.28767 15.7123L7.05022 16.9498M6.75 12H5M8.28767 8.28767L7.05022 7.05022M14.9167 12C14.9167 12.7735 14.6094 13.5154 14.0624 14.0624C13.5154 14.6094 12.7735 14.9167 12 14.9167C11.2265 14.9167 10.4846 14.6094 9.93761 14.0624C9.39062 13.5154 9.08333 12.7735 9.08333 12C9.08333 11.2265 9.39062 10.4846 9.93761 9.93761C10.4846 9.39062 11.2265 9.08333 12 9.08333C12.7735 9.08333 13.5154 9.39062 14.0624 9.93761C14.6094 10.4846 14.9167 11.2265 14.9167 12Z"
                  stroke={isDark ? `white` : `black`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill={isDark ? `white` : `black`}
                />
                <path
                  d="M20 14.522C19.1125 14.8919 18.1603 15.0817 17.1988 15.0804C13.1784 15.0804 9.91958 11.8216 9.91958 7.80119C9.91958 6.80823 10.1182 5.86231 10.478 5C9.15169 5.5533 8.01875 6.48672 7.22188 7.68268C6.42502 8.87864 5.99988 10.2837 6 11.7208C6 15.7411 9.25885 19 13.2792 19C14.7163 19.0001 16.1214 18.575 17.3173 17.7781C18.5133 16.9813 19.4467 15.8483 20 14.522Z"
                  stroke={isDark ? `black` : `white`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

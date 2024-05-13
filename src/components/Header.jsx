import { AlignJustify, Bell, Grip, Search, UserRound, Video } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import youTubeLogo from "../assets/icons/YouTubeLogo.png"

const Header = () => {
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();
        let searchTerm = e.target[0].value
        navigate(`/search/${searchTerm}`);

    };
    return (
        <header className=" px-5 py-5 flex bg-white" id="header">
            <div className="w-full flex items-center">
                <div className="flex items-center gap-5 max-w-[250px] w-full">
                    <button>
                        <AlignJustify />
                    </button>
                    <Link className="flex items-center" to={'/'}>
                        <img src={youTubeLogo} alt="YouTube logo" />
                    </Link>
                </div>
                <form className="flex items-center w-full" onSubmit={onhandleSubmit} >
                    <input className="bg-[rgb(235,235,235)] rounded-[22px] outline-none w-full  ps-2" type="text" />
                    <button type="submit">
                        <Search />
                    </button>
                </form>
            </div>
            <div className="flex items-center justify-end w-full gap-[25px] max-[547px]:hidden">
                <a href="https://github.com/notouting" target="_blank" className="text-black font-bold">notouting</a>
                <button>
                    <Video />
                </button>
                <button>
                    <Grip />
                </button>
                <button>
                    <Bell />
                </button>
                <button>
                    <UserRound />
                </button>
            </div>
        </header>
    )
}

export default Header
import { Link } from "react-router-dom"
import "./TopBar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function Topbar() {
   const {user, dispatch} = useContext(Context);
   const handlelogout = () => {
       dispatch({type: "LOGOUT"})
   }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-f"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-discord"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"><Link className="link" to="/create">Create</Link></li>
                    <li className="topListItem" onClick={handlelogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img src={user.profilePic} alt="" className="topImg" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSeacrhIcon fas fa-search"></i>
            </div>
        </div>
    )
}

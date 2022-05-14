import "./sidebar.css"
import { useEffect, useState } from "react";
import sidebarImg from "../../assets/img/sidebar.jpg"
import axios from "axios";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={sidebarImg} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae quasi, harum vel fugit unde debitis nobis aliquid commodi.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <li className="sidebarListItem">{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <ul className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-f"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-discord"></i>
                </ul>
            </div>
        </div>
    )
}
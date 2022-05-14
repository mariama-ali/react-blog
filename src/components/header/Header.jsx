import "./header.css"
import headerImg  from "../../assets/img/header.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"  src={headerImg} alt="" />
        </div>
    )
}

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import post3 from "../../assets/img/post3.jpg"
import './Singlepost.css'
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";

export default function SinglePost() {
    const {user} = useContext(Context)
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "./public/images/";
    useEffect(()=> {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path])
    const handleDelete = async() => {
        try{
            await axios.delete("/posts/" + path, 
            {data:{username: user.username}})
            window.location.replace("/");
        }catch(err){}
    }
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
            <h1 className="singlePostTitle">
               {post.title}
               {post.username === user?.username && (
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
               )}
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:
                 <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">{post.desc}</p>
        </div>
    </div>
  )
}

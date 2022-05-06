import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { auth, db } from "../firebaseConfig";
import DeletePost from "./DeletePost";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=> {
        const postRef = collection(db, "Blog" );
        const q = query(postRef, orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot) => {
            const posts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(posts);
            console.log(posts)
        });
    }, []);
    return (
        <div>
            {
                posts.length === 0 ? (
                    <p> No posts found! </p>
                ):(
                posts.map(({id, title, description, imageUrl, createdAt, createdBy, userId,}) => (
                <div className="border mt-3 p-3 bg-dark" key={id}>
                    <div className='row'>
                        <div className="col-3">
                            <Link to={`/post/${id}`}>
                                <img src={imageUrl} alt='title' style={{height: 180, width: 180}}
                                />
                            </Link>
                        </div>
                        <div className="col-9 ps-3">
                            <div className="row">
                                <div className="col-6">
                                    {createdBy && (
                                        <span className="badge bg-primary">{createdBy}</span>
                                    )}
                                </div>
                                <div className="col-6 d-flex flex-row-reverse">
                                    {user && user.uid === userId && (
                                        <DeletePost id={id} imageUrl={imageUrl} />
                                    )}
                                </div>
                            </div>
                            <h3>{title}</h3>
                            <p>{createdAt.toDate().toDateString()}</p>
                            <h5>{description}</h5>
                        </div>
                    </div>
                </div>
               )) 
            )}
        </div>
    );
}

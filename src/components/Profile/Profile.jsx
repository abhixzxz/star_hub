import { useEffect, useState } from "react";
import "./profile.css";



export default function Profile() {
    const [like, setLike] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <>
            <div class="header__wrapper">
                <header></header>
                <div class="cols__container">
                    <div class="left__col">
                        <div class="img__container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTka8wyXUeYsJcNqpKWfKlRlhJIx78mZ_aXEg&usqp=CAU" alt="Anna Smith" />
                            <span></span>
                        </div>
                        <h2>Nivin</h2>
                        <p>Actor</p>
                        <p>nivin@gmail.com</p>

                        <ul class="about">
                            <li><span>{like}</span>Followers</li>
                            <li><span>322</span>Following</li>
                            <li><span>200,543</span>Attraction</li>
                        </ul>

                        <div class="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
                                erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
                                ligula egestas nulla.
                            </p>

                            <ul>
                                <li><i class="fab fa-twitter"></i></li>
                                <i class="fab fa-pinterest"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-dribbble"></i>
                            </ul>
                        </div>
                    </div>
                    <div class="right__col">
                        <nav>
                            <ul>
                                <li><a href="">photos</a></li>
                                <li><a href="">galleries</a></li>
                                <li><a href="">groups</a></li>
                                <li><a href="">about</a></li>
                            </ul>
                            <button onClick={likeHandler}>Follow</button>
                        </nav>

                        <div class="photos">
                            <img src="https://www.instantstories.com/uploads/stories/nivin-pauly/nivin-pauly-latest-hd-photoswallpapers-1080p4k-hjwy-lg.jpg?v=1570072986" alt="Photo" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpunijb6klwdgago0Jqjmm2rlTLNPF9MTJfG_c77rJt8o82txOX6PJ-PfRt9YYjXUrUBg&usqp=CAU" alt="Photo" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpunijb6klwdgago0Jqjmm2rlTLNPF9MTJfG_c77rJt8o82txOX6PJ-PfRt9YYjXUrUBg&usqp=CAU" alt="Photo" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpunijb6klwdgago0Jqjmm2rlTLNPF9MTJfG_c77rJt8o82txOX6PJ-PfRt9YYjXUrUBg&usqp=CAU" alt="Photo" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpunijb6klwdgago0Jqjmm2rlTLNPF9MTJfG_c77rJt8o82txOX6PJ-PfRt9YYjXUrUBg&usqp=CAU" alt="Photo" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import './index.css';

export default function FloatingTalent(){
    return(
        <div class="container">
            <div class="avatar">
                <a href="https://codepen.io/MarioDesigns/">
                <img src="https://res.cloudinary.com/skiltime/image/upload/v1611402484/image_29_m4umlm.png" alt="Lorgaritm Talent" />
                </a>
            </div>
            <div class="content">
                <h2>Floating CSS animation</h2>
                <p>Follow me on:</p>
                <p>
                <span><a href="https://twitter.com/MDesignsuk" target="_blank"><i class="fa fa-twitter"></i></a></span>
                <span><a href="https://github.com/Mario-Duarte/" target="_blank"><i class="fa fa-github"></i></a></span>
                <span><a href="https://bitbucket.org/Mario_Duarte/" target="_blank"><i class="fa fa-bitbucket"></i></a></span>
                <span><a href="https://codepen.io/MarioDesigns/" target="_blank"><i class="fa fa-codepen"></i></a></span>
                </p>
                <p>BY: Mario Duarte</p>
            </div>
        </div>
    )
};
import React from 'react';
import './index.css';

export default function FloatingTalent(){
    return(
        <div class="container">
            <div class="avatar">
                <a href="https://codepen.io/MarioDesigns/">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png" alt="Skytsunami" />
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
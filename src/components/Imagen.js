import React from 'react';
import { BsEyeFill,BsHeartFill } from "react-icons/bs";
import { GoLinkExternal } from 'react-icons/go';
const Imagen = ({imagen}) => {
    //extarer las variables
    const { largeImageURL, likes, previewURL, tags, views} = imagen;
    let viewsk = 0;
    let likesk = 0;
    if (likes > 1000){
        likesk = Math.round(likes / 100)/10 + "k";
    }
    else{
        likesk = likes;
    }
    if (views > 1000){
        viewsk = Math.round(views / 100)/10 + "k";
    }
    else{
        viewsk = views;
    }

    return ( 
        <div className="card-images">
            <div className='card'>
                <a 
                href={largeImageURL}
                target='_blank'
                className='btn-view'
                rel="noopener noreferrer">
                    <img src={previewURL} alt={tags} className="card-img-top" />
                </a>
                
                <div className='card-body'>
                    <div className='card-i'>
                        <p className='card-text'>{likesk} <BsHeartFill color="blue"/></p>
                        <p className='card-text'>{viewsk} <BsEyeFill color="blue"/></p>
                    </div>

                    <div className='card-footer'>
                        <a
                            href={largeImageURL}
                            target='_blank'
                            className='btn-view'
                            rel="noopener noreferrer"
                        ><GoLinkExternal color="blue" /></a>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Imagen;
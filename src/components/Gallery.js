import React from 'react';
import './gallery.css'

export default function Gallery() {
    return (
        <div id='gallery' className="gallery mt-5">
            <div className='section-header'>
                <h2 className=''>Gallery</h2>
                <p>Glimpses of the memorable moments</p>
                <p><i>Welcome to your memories full of Zeal and Zest</i></p>
            </div>
            <div className="container page-top">
                <div className="row">


                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <div id="transZ" className="fancybox" rel="ligthbox">
                            <img  src="https://cdn.pixabay.com/photo/2016/11/22/19/15/audience-1850119__340.jpg" className="zoom img-fluid " alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a id="transZ" href="https://cdn.pixabay.com/photo/2013/04/19/01/15/university-105709__340.jpg" className="fancybox" rel="ligthbox">
                            <img src="https://cdn.pixabay.com/photo/2013/04/19/01/15/university-105709__340.jpg" className="zoom img-fluid" alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a id="transZ" href="https://media.istockphoto.com/photos/catwalk-runway-show-event-picture-id940236760?k=20&m=940236760&s=612x612&w=0&h=zjH-xABXaEepsYLi0Gq8gekCLE6ZJ3rhi56MG84MbxI=" className="fancybox" rel="ligthbox">
                            <img src="https://media.istockphoto.com/photos/catwalk-runway-show-event-picture-id940236760?k=20&m=940236760&s=612x612&w=0&h=zjH-xABXaEepsYLi0Gq8gekCLE6ZJ3rhi56MG84MbxI=" className="zoom img-fluid " alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a id="transZ" href="https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253__340.jpg" className="fancybox" rel="ligthbox">
                            <img src="https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253__340.jpg" className="zoom img-fluid " alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a id="transZ" href="https://cdn.pixabay.com/photo/2020/12/18/04/05/tradition-5841140__340.jpg" className="fancybox" rel="ligthbox">
                            <img src="https://cdn.pixabay.com/photo/2020/12/18/04/05/tradition-5841140__340.jpg" className="zoom img-fluid " alt="" />

                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a id="transZ" href="https://cdn.pixabay.com/photo/2018/10/17/03/51/concert-3753034__340.jpg" className="fancybox" rel="ligthbox">
                            <img src="https://cdn.pixabay.com/photo/2018/10/17/03/51/concert-3753034__340.jpg" className="zoom img-fluid" alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a id="transZ" href="https://cdn.pixabay.com/photo/2013/07/30/03/14/istanbul-168774__340.jpg" className="fancybox" rel="ligthbox">
                            <img src="https://cdn.pixabay.com/photo/2013/07/30/03/14/istanbul-168774__340.jpg" className="zoom img-fluid " alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a id="transZ" href="https://cdn.pixabay.com/photo/2019/01/26/02/09/buffet-3955616__340.jpg" className="fancybox" rel="ligthbox">
                            <img src="https://cdn.pixabay.com/photo/2019/01/26/02/09/buffet-3955616__340.jpg" className="zoom img-fluid " alt="" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
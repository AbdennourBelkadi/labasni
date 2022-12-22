import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel} from 'react-responsive-carousel';


export default function Home(){
        return (
          <Carousel >
            <div>
              <img src="https://underarmour.scene7.com/is/image/Underarmour/FW22_Gifting_Tile_Men_1_1?qlt=75&fmt=jpg&scl=1&" />
              <p className="legend">NIKE</p>
            </div>
            <div>
              <img src="https://www.sportsdirect.com/images/products/59853441_l_a1.jpg" />
              <p className="legend">Football</p>
            </div>
            <div>
              <img src="https://www.madina.dz/wp-content/uploads/2022/03/XA048_2_ZC1-650x650.jpg" />
              <p className="legend">Basketball</p>
            </div>
            <div>
              <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ca1efddf-5e04-4af7-95c3-85b0ab29b63b/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-qdcSR6.png"
               />
              <p className="legend">training</p>
            </div>
            <div>
              <p className="legend">UNDERARMOUR</p>
              <img src="https://www.trigema.de/out/pictures/generated/ddmedia/726_726_100/fvf_37201_046_H.jpg" />
            </div>
            {/* <div>
              <img src="https://cdn.about.puma.com/img/layout/Logo_PUMA-Cat_dark.svg"/>
              <p className="legend">PUMA</p>
            </div> */}
          </Carousel>
        );
    }
    


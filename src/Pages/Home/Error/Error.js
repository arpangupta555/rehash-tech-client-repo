import { error } from 'daisyui/src/colors';
import React from 'react';

const Error = () => {
    return (


        <div>



            <br />
            {error && (
                <div>
                    <img src="https://www.wallpaperflare.com/static/765/775/653/errors-minimalism-typography-x-wallpaper.jpg" alt="" />

                </div>
            )}
        </div>


    );

};

export default Error;
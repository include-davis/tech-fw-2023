import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialLinks = (props) => {

    return (
        <div>
            <a href="https://github.com/ylylime" ><GitHubIcon fontSize="large" /></a>
            <a href="https://www.linkedin.com/in/emily-ng-4b96b4100/"><LinkedInIcon fontSize="large" /></a>
            <a href="mailto:eming@ucdavis.edu"><EmailIcon fontSize="large" /></a>
        </div>
    )
};
export default SocialLinks;
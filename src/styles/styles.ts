import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
    

    //time line css starts 

    :root {
        --backround-color: #011f4b;
        --primary-color: #6497b1;
        --secondary-color: #f79f6a;
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
           
      
      /* Top Down Arrow */
      
      #timeline ul {
        list-style: none;
        margin-top: 50px;
      }
      
      /* Central Line */
      #timeline ul li {
        position: relative;
        width: 0;
        border-left: 6px dotted var(--primary-color);
        margin: 0 auto;
      }
      
      /* Dots */
      #timeline ul li:before {
        content: "";
        position: absolute;
        top: 0;
        left: -11px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fafafa;
        transition: background 1s ease-in-out;
      }
      
      /* Year */
      #timeline ul h3 {
        font-family: "Montserrat";
        font-weight: 300;
        font-size: 1.5rem;
        text-align: center;
        margin: 30px 0 10px;
      }
      
      /* Boxes &  Bottom Text */
      #timeline ul li > div {
        width: 350px;
        margin-bottom: 5px;
        text-align: center;
        position: relative;
        //opacity: 0;
        //visibility: hidden;
        transition: all 1s ease-in-out;
      }
      #timeline ul li > div p {
        padding-top: 20px;
      }
      #timeline ul li:nth-child(2n + 0) > div {
        margin-left: 70px;
        transform: translateX(60px);
      }
      #timeline ul li:nth-child(4n + 0) > div {
        margin-left: -414px;
        transform: translateX(-60px);
      }
      #timeline ul li > div > div  {
        position: relative;
        top: -14px;
        background: var(--secondary-color);
        width: 350px;
        padding: 5px 10px;
      }
      /* Top boxes arrows */
      #timeline ul li > div:before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        border-style: solid;
      }
      #timeline ul li:nth-child(2n + 0) > div:before {
        left: -15px;
        border-width: 8px 16px 8px 0;
        border-color: transparent var(--secondary-color) transparent transparent;
      }
      #timeline ul li:nth-child(4n + 0) > div:before {
        transform: translateX(365px);
        border-width: 8px 0 8px 16px;
        border-color: transparent transparent transparent var(--secondary-color);
      }
      
      /* Show Boxes */
      #timeline ul li.show > div {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
      
      #timeline ul li.show:before {
        background: var(--secondary-color);
      }
      
      @media (max-width: 900px) {
        #timeline ul li > div,
        #timeline ul li > div > div {
          width: 200px;
        }
        #timeline ul li:nth-child(4n + 0) > div {
          margin-left: -264px;
        }
        #timeline ul li:nth-child(4n + 0) > div:before {
          transform: translateX(215px);
      }
      
      @media (max-width: 600px) {
        .main-header h1 {
          font-size: 2rem;
        }
        #timeline ul li {
          margin: 0 50px;
        }
        #timeline ul li > div,
        #timeline ul li > div > div {
          width: calc(100vw - 170px);
        }
        #timeline ul h3 {
          text-align: unset;
          padding-left: 30px;
        }
        #timeline ul li:nth-child(4n + 0) > div {
          margin-left: 70px;
          transform: translateX(60px);
        }
        #timeline ul li:nth-child(4n + 0) > div:before {
          transform: translateX(0);
          border-width: 8px 16px 8px 0;
          border-color: transparent var(--secondary-color) transparent transparent;
        }
        #timeline ul li.show > div {
          transform: none;
        }
      }

    //timeline css ends
`;

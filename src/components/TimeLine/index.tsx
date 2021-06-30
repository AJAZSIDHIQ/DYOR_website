import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

declare const window: any;

interface TimelineProps {
        time: string;
        title: string;
        desc: string;
}

const TimeLine = (timeLines : TimelineProps[] ) => {

    useEffect(() => {

        const items  : NodeListOf<HTMLElement> = document.querySelectorAll("#timeline li");
        const isInViewport = (el : HTMLElement) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWhith || document.documentElement.clientWidth)
            );
        };
    
        const run = () =>
            items.forEach((item) => {
                if (isInViewport(item)) {
                    item.classList.add("show");
                }
        });
    
        // Events
        window.addEventListener("load", run);
         window.addEventListener("resize", run);
         window.addEventListener("scroll", run);
    });


    var TimeLineHtml = "";
    for(var i = 0;  i < Object.keys(timeLines).length ; i++) {
        console.log(timeLines[i])
        TimeLineHtml += "<h3>"+ timeLines[i].time +"</h3><li><div><div><h2>"+ timeLines[i].title +"</h2></div><p>"+ timeLines[i].desc +"</p></div></li>";
    }
 
    //var TimeLineHtml1 = $(TimeLineHtml)

    // const TimeLineHtml = Object.keys(timeLines).map((index : any) =>
    // <div>
    //     <h3>{timeLines[index].time}</h3>
    //     <li>
    //     <div>
    //         <div>
    //         <h2>{timeLines[index].title}</h2>
    //         </div>
    //         <p>
    //         {timeLines[index].desc}
    //         </p>
    //     </div>
    //     </li>
    //    </div>
    //  );

    return (
        <section id="timeline">
        <ul>
        { ReactHtmlParser (TimeLineHtml) }   
        </ul>
      </section>
    );
  };

  export default TimeLine;
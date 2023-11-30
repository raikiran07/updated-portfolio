import React from 'react'

const Resume = ({setSection}) => {
setSection('Resume')
  return (
    <div className="page resume-container max-w-xs  mx-auto  border relative p-3 rounded-md">
        <div className="section">
            <div className="section-icon-container flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"/> <path d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5" stroke="#FFC000" stroke-linejoin="round"/> <path d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471" stroke="#FCC419" stroke-linejoin="round"/> </g>

</svg>
<p className="section-title">Education</p>
            </div>
       
        <ul className="pl-8">
           <li>
           The Assam Kaziranga University 
            <p className="yellow">2019 - 2023</p>
            <p className="section-text">Completed my Bachelors in Technology from the assam kaziranga University on 2023 with a CGPA - <span className="yellow">8.02</span></p>
            
           </li>
           <li>
           Jawaharlal Nehru Vidyalaya 
            <p>2017 - 2019</p>
            <p className="section-text">12th | Percentage - <span className="yellow">76.4%</span></p>
            
           </li>
           <li>
           {`Government High Secondary School Ganga (AR)`} 
            <p>2015 - 2017</p>
            <p className="section-text">10th | CGPA - <span className="yellow">10</span></p>
            
           </li>
        </ul>
        </div>


        <div className="section mt-3">
            <div className="section-icon-container flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z" stroke="#FFC000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
<p className="section-title">Experience</p>
            </div>
       
        <ul className="pl-8">
           <li>
           {`ADP | Member Technical (Full Time)`} 
            <p className="year yellow">October 2023 - Present</p>
           </li>
           <li>
           TCS | Fullstack Python Developer Intern 
            <p className="year">July 2022 - August 2022</p>
           </li>
           <li>
           Maths Teacher | Private School
            <p className="year">Feb 2022 - June 2022</p>
           </li>
        </ul>
        </div>

        <div className="section mt-3">
            <div className="section-icon-container flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 48 48" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FFC000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">



<path class="st0" d="M11.12,24.5c0.244,0,0.483-0.048,0.715-0.118c0.131,0.203,0.268,0.406,0.412,0.608 c-2.223,3.148-2.815,6.145-1.59,8.26c1.065,1.84,3.372,2.836,6.46,2.836c0.473,0,0.976-0.041,1.484-0.088 c1.045,2.292,2.381,3.937,3.895,4.801C22.49,40.867,22.47,40.931,22.47,41c0,1.373,1.117,2.49,2.49,2.49 c1.368,0,2.48-1.117,2.48-2.49c0-0.066-0.02-0.128-0.025-0.193c1.515-0.873,2.851-2.521,3.894-4.809 c0.507,0.047,1.011,0.088,1.483,0.088c3.088,0,5.395-0.996,6.46-2.836c1.229-2.121,0.639-5.117-1.587-8.255 c1.456-2.042,2.21-4.016,2.204-5.755c0.819-0.415,1.349-1.258,1.349-2.201c0-1.373-1.116-2.49-2.489-2.49 c-0.487,0-0.941,0.14-1.334,0.395c-1.499-0.864-3.589-1.196-6.091-0.963c-1.041-2.288-2.376-3.937-3.89-4.81 c0.005-0.064,0.025-0.127,0.025-0.193c0-1.368-1.112-2.48-2.48-2.48c-1.373,0-2.49,1.112-2.49,2.48c0,0.071,0.019,0.133,0.026,0.203 c-1.514,0.871-2.849,2.519-3.893,4.804c-3.823-0.358-6.717,0.629-7.946,2.753c-0.504,0.872-0.691,1.893-0.593,3.024 c-0.855,0.404-1.425,1.28-1.425,2.255C8.64,23.388,9.752,24.5,11.12,24.5z M19.231,15.064c1.399,0.187,2.872,0.552,4.398,1.088 c-0.979,0.439-1.96,0.918-2.928,1.474c-0.945,0.543-1.852,1.153-2.735,1.791C18.267,17.841,18.69,16.383,19.231,15.064z M30.68,15.065c0.541,1.319,0.964,2.777,1.265,4.353c-0.883-0.638-1.79-1.248-2.734-1.79c-0.946-0.547-1.929-1.028-2.923-1.474 C27.803,15.621,29.293,15.251,30.68,15.065z M30.68,34.924c-1.413-0.196-2.905-0.568-4.396-1.095 c0.995-0.447,1.98-0.928,2.925-1.475c0.945-0.543,1.852-1.153,2.734-1.79C31.641,32.14,31.212,33.62,30.68,34.924z M28.711,18.494 c1.208,0.694,2.37,1.481,3.466,2.329c0.184,1.368,0.283,2.767,0.283,4.167c0,1.396-0.1,2.794-0.284,4.17 c-1.095,0.848-2.258,1.632-3.467,2.327c-1.207,0.698-2.469,1.312-3.749,1.836c-1.253-0.51-2.517-1.122-3.76-1.837 c-1.208-0.694-2.37-1.481-3.466-2.329c-0.184-1.361-0.283-2.76-0.283-4.167c0-1.403,0.1-2.801,0.284-4.171 c1.095-0.848,2.258-1.632,3.465-2.326c1.243-0.715,2.507-1.327,3.76-1.837C26.241,17.181,27.502,17.794,28.711,18.494z M33.277,21.725c1.216,1.049,2.283,2.157,3.142,3.265c-0.863,1.113-1.929,2.219-3.142,3.26c0.109-1.08,0.184-2.169,0.184-3.259 C33.46,23.896,33.386,22.806,33.277,21.725z M19.231,34.924c-0.533-1.304-0.962-2.785-1.264-4.361 c0.883,0.637,1.79,1.247,2.734,1.791c0.969,0.557,1.949,1.036,2.928,1.474C22.108,34.362,20.636,34.729,19.231,34.924z M16.633,28.254c-1.215-1.048-2.281-2.155-3.142-3.265c0.863-1.113,1.93-2.219,3.143-3.259c-0.109,1.077-0.183,2.164-0.183,3.259 C16.45,26.088,16.524,27.177,16.633,28.254z M11.522,32.75c-0.989-1.708-0.478-4.208,1.361-6.92c1.064,1.33,2.396,2.652,3.915,3.866 c0.295,1.924,0.778,3.743,1.402,5.336C14.941,35.274,12.517,34.466,11.522,32.75z M24.96,42.49c-0.821,0-1.49-0.668-1.49-1.49 c0-0.118,0.015-0.232,0.046-0.352c0.163-0.665,0.757-1.128,1.444-1.128c0.68,0,1.281,0.476,1.433,1.132 c0.001,0.005,0.003,0.011,0.004,0.017c0.03,0.111,0.044,0.217,0.044,0.331C26.44,41.822,25.776,42.49,24.96,42.49z M27.126,39.819 c-0.424-0.776-1.25-1.299-2.166-1.299c-0.93,0-1.75,0.513-2.176,1.291c-1.175-0.751-2.265-2.121-3.14-3.941 c1.698-0.26,3.479-0.746,5.315-1.468c1.778,0.709,3.59,1.205,5.307,1.467C29.392,37.688,28.302,39.06,27.126,39.819z M38.388,32.75 c-0.994,1.717-3.42,2.524-6.678,2.282c0.623-1.592,1.105-3.41,1.4-5.342c1.518-1.204,2.849-2.525,3.916-3.861 C38.87,28.534,39.38,31.035,38.388,32.75z M40.22,17.04c0,0.636-0.404,1.197-1.015,1.398c-0.95,0.333-1.955-0.425-1.955-1.398 c0-0.437,0.185-0.845,0.511-1.125c0.27-0.239,0.605-0.365,0.97-0.365C39.552,15.55,40.22,16.218,40.22,17.04z M36.665,15.677 c-0.262,0.399-0.415,0.868-0.415,1.363c0,1.368,1.112,2.48,2.48,2.48c0.046,0,0.093-0.009,0.14-0.012 c-0.071,1.384-0.711,2.998-1.839,4.65c-1.064-1.332-2.397-2.657-3.92-3.874c-0.297-1.943-0.772-3.728-1.404-5.333 C33.734,14.799,35.427,15.045,36.665,15.677z M24.96,7.5c0.816,0,1.48,0.664,1.48,1.48c0,0.114-0.014,0.22-0.048,0.349 c-0.15,0.661-0.753,1.141-1.433,1.141c-0.688,0-1.282-0.467-1.446-1.148C23.484,9.212,23.47,9.098,23.47,8.98 C23.47,8.164,24.139,7.5,24.96,7.5z M22.785,10.171c0.427,0.785,1.245,1.299,2.175,1.299c0.921,0,1.75-0.529,2.17-1.306 c1.176,0.76,2.263,2.133,3.135,3.953c-1.693,0.252-3.471,0.736-5.306,1.461c-1.845-0.725-3.625-1.209-5.314-1.461 C20.52,12.3,21.609,10.929,22.785,10.171z M18.199,14.958c-0.629,1.603-1.103,3.385-1.4,5.333c-1.516,1.203-2.846,2.524-3.915,3.86 c-0.054-0.079-0.108-0.157-0.16-0.236c0.017-0.015,0.03-0.033,0.047-0.049c0.051-0.045,0.093-0.095,0.139-0.144 c0.099-0.102,0.188-0.21,0.267-0.327c0.04-0.06,0.078-0.12,0.113-0.183c0.069-0.125,0.124-0.255,0.171-0.39 c0.021-0.061,0.047-0.119,0.063-0.182c0.052-0.2,0.086-0.406,0.086-0.62c0-0.174-0.019-0.344-0.053-0.509 c-0.004-0.018-0.012-0.034-0.016-0.052c-0.186-0.803-0.759-1.455-1.513-1.753c-0.006-0.002-0.012-0.003-0.017-0.005 c-0.143-0.055-0.291-0.099-0.446-0.127c-0.05-0.009-0.102-0.009-0.152-0.015c-0.097-0.012-0.192-0.03-0.292-0.03 c-0.014,0-0.025,0.005-0.038,0.005c-0.012,0-0.024-0.003-0.037-0.003c-0.003-0.051-0.011-0.105-0.012-0.156 c-0.003-0.093-0.002-0.184,0.001-0.275c0.004-0.142,0.014-0.28,0.03-0.416c0.01-0.087,0.02-0.174,0.036-0.258 c0.026-0.141,0.062-0.276,0.102-0.41c0.021-0.07,0.037-0.142,0.062-0.21c0.072-0.197,0.155-0.387,0.259-0.567 C12.517,15.524,14.934,14.713,18.199,14.958z M10.731,20.58c0.112-0.033,0.242-0.05,0.389-0.05c0.821,0,1.49,0.668,1.49,1.49 c0,0.554-0.31,1.058-0.811,1.316c-0.21,0.109-0.438,0.164-0.68,0.164c-0.816,0-1.48-0.664-1.48-1.48 C9.64,21.35,10.085,20.759,10.731,20.58z"/>

<path class="st0" d="M24.957,29.911c2.712,0,4.918-2.207,4.918-4.918s-2.206-4.918-4.918-4.918s-4.918,2.206-4.918,4.918 S22.245,29.911,24.957,29.911z M24.957,21.074c2.16,0,3.918,1.758,3.918,3.918c0,2.161-1.758,3.918-3.918,3.918 s-3.918-1.758-3.918-3.918C21.039,22.832,22.797,21.074,24.957,21.074z"/>

</g>

</svg>
<p className="section-title">Skills</p>
            </div>
       
        <ul className="pl-8 skill-list flex flex-wrap gap-2">
           <li>
           Webdevelopment
           </li>
           <li>
           Datastructure & Algorithm
           </li>
           <li>
           ML & AI
           </li>
           <li>Java Programming</li>
           <li>Backend Development</li>
           <li>Poetry</li>
           <li>Ui/Ux Designing</li>
        </ul>
        </div>

        <div className="button-container text-center md:text-left md:pl-5">
            <a href="../assets/KiranRai_resume_2023.pdf" download>
            <button className="border border-black p-1 rounded-full text-xs bg-black text-white mt-5 md:text-lg md:px-5 md:mt-7 md:mb-5">Download Resume</button>
            </a>
        
        </div>

       
       
       
    </div>
    
  )
}

export default Resume
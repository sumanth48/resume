import React from 'react'

var Skills = () => {
    return (<>
        <div class="container " id="Skills">
        <div class="card pb-5 mt-5 shadow-lg bg-white rounded">
            <h2 class="px-5 pt-5 fw-light">Professional Skills</h2>
            <div class="row">
                <div class="col-lg-6">
                    <h6 class="fw-bold px-5 text-muted my-2">HTML</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar "style={{width:'95%'}}>95</div>
                    </div>
                    <h6 class="fw-bold px-5 text-muted my-2">CSS</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar "style={{width:"90%"}}>90</div>
                    </div>
                    <h6 class="fw-bold px-5 text-muted my-2">JAVA SCRIPT</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar" style={{width:"75%"}}>75</div>
                    </div>
                    <h6 class="fw-bold px-5 text-muted my-2">SQL</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar " style={{width:"80%"}}>80</div>
                    </div>

                </div>
                <div class="col-lg-6">
                    <h6 class="fw-bold px-5 text-muted my-2">JAVA</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar w-95" style={{width:"75%"}}>75</div>
                    </div>
                    <h6 class="fw-bold px-5 text-muted my-2">PYTHON</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar  "style={{width:"35%"}}>35</div>
                    </div>
                    <h6 class="fw-bold px-5 text-muted my-2">C</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar  "style={{width:"55%"}}>55</div>
                    </div>
                    <h6 class="fw-bold px-5 text-muted my-2" >C++</h6>
                    <div class="progress mx-5">
                        <div class="progress-bar  "style={{width:"65%"}}>65</div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    </>)
}
export default Skills

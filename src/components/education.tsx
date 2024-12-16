import "../style/education.css";

function Education() {
  return (
    <main className="edu-main">
      <div className="edu-text">
        <h1>Education</h1>
        <p>lorem</p>
      </div>

      <div className="box-con-edu">
        <div>
          <h1 className="uni-name">University of Karachi</h1>
          <span>Completed</span>
          <span className="container">2015</span>
        </div>
        <div className="Commerce">
          <h1>B.Com</h1>
        </div>
</div>
        {/* box 2 */}

        {/* <div className="box-con-edu">
          <div>
            <h1 className="uni-name">University of Karachi</h1>
            <span>Student</span>
          </div>
          <div className="commerce">
            <h1>Bachalor in Commerce</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptas unde dolore ipsum molestias ratione, tempora alias accusamus odio repudiandae labore enim, sapiente dolorem iste repellat sit modi sequi numquam?</p> 
          </div>
       
        </div> */}
          <div className="box-con-edu">
            <div>
              <h1 className="uni-name">University of Karachi</h1>
              <span>Student</span>
            </div>

            <div className="commerce">
              <h1>Bachalor in Commerce</h1>
              {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, neque eum! Magnam minima deleniti ad tempora odio illo eos ipsam repudiandae neque eligendi dolore nemo fugit, natus sequi autem magni?</p> */}
            </div>
          </div>
    
     
    </main>
  );
}

export default Education;

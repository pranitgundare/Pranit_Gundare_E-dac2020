import './App.css';
import './Feedback.css';

// submit()
// {
// //   <div class="alert alert-success" role="alert">
// //     Feedback Submited Successfully..!
// // </div>
// // alert("submitted");
// }

function Feedback(){
  return(
   
        <div className="container-fluid">
        <div className="view"> 
        <div className="feedback">
        
       <form action="" method="post">
       <h1 className="mb-2"><u>Feedback</u></h1>
         <h5 className="mb-2">Please Provide Your Feedback Below:</h5> 
           <h3 className="mb-2"><b>1) How was your learning experience?? </b></h3> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline1">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline2">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline3" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline3">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline4" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label mb-2" for="customRadioInline4">Poor</label>
</div>



<h3 className="mb-2"><b>2) Is the portal useful to improve your studies? </b></h3> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline5" name="customRadioInline" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline5">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline6" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline6">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline7" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline7">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline8" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline8">Poor</label>
</div>


<h3 className="mb-2"><b>3) was the schedule helped you in managing time? </b></h3> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline9" name="customRadioInline" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline9">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline10" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline10">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline11" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline11">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline12" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline12">Poor</label>
</div>


<h3 className="mb-2"><b>4) Is the pace of learning useful? </b></h3> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline13" name="customRadioInline" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline13">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline14" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline14">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline15" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline15">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline16" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline16">Poor</label>
</div>

<h3 className="mb-2"><b>5) Are you able to clear your doubts? </b></h3> 

           <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline17" name="customRadioInline" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadioInline17">Excellent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline18" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline18">Good</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline19" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label" for="customRadioInline19">Average</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline20" name="customRadioInline" class="custom-control-input"></input>

  <label class="custom-control-label className=mb-2" for="customRadioInline20">Poor</label>
</div>

<div class="mt-3">
    <label for="validationTextarea">Comments:</label>
    <textarea class="form-control is-invalid mt-2 " id="validationTextarea" placeholder="Enter your Comments Here.." required></textarea>
    <div class="invalid-feedback">
      Please enter your message here.
    </div>
  </div>

  <button class="btn btn-outline-info mt-2"  type="submit">Submit Feedback</button>

  {/* [
 'success',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
)); */}
</form>
        </div>
             
        
</div>
</div>

     



  );


}
export default Feedback;
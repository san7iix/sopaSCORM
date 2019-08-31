var scorm = pipwerks.SCORM;
var lmsConnected = false;

function handleError(msg){
   alert(msg);
   window.close();
}


function initCourse(){
   //scorm.init returns a boolean
   lmsConnected = scorm.init();

   //If the scorm.init function succeeded...
   if(lmsConnected){

      //Let's get the completion status to see if the course has already been completed
      var completionstatus = scorm.get("cmi.core.lesson_status");

      //If the course has already been completed...
      if(completionstatus == "completed" || completionstatus == "passed"){

         //...let's display a message and close the browser window
         handleError("You have already completed this course. You do not need to continue.");

      }

   //If the course couldn't connect to the LMS for some reason...
   } else {

      //... let's alert the user then close the window.
      handleError("Error: Course could not connect with the LMS");

   }
}

function setComplete(){

   //If the lmsConnection is active...
   if(lmsConnected){

      //... try setting the course status to "completed"
      var success = scorm.set("cmi.core.lesson_status", "completed");

      setData();


      //If the course was successfully set to "completed"...
      if(success){

         //... disconnect from the LMS, we don't need to do anything else.
         scorm.quit();

      //If the course couldn't be set to completed for some reason...
      } else {

         //alert the user and close the course window
         handleError("Error: Course could not be set to complete!");

      }

   //If the course isn't connected to the LMS for some reason...
   } else {

      //alert the user and close the course window
      handleError("Error: Course is not connected to the LMS");

   }

}


function setData() {
  scorm.set("cmi.core.score.raw","100");
  scorm.set("cmi.objectives.n.success_status","passed");
  scorm.save();
  return false;
}

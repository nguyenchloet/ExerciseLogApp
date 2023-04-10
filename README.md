# ExerciseLogApp
React Native Daily Exercise Log Application

<strong><em>The problem:</em></strong><br />
My exercise notes look like this

<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/ExerciseNotes.jpg" height="350" title="Screenshot of Notes text file logging workouts">

<strong><em>The Solution:</em></strong><br />
A strength-focused, multi-platform exercise log application in React Native 

<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 1.png" height="350" title="Figma Frame 1 Login View">&emsp;
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 1a.png" height="350" title="Figma Frame 1a Registration View">&emsp;
<br />
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 2a.png" height="350" title="Figma Frame 2a New Day Root View">&emsp;
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 2b.png" height="350" title="Figma Frame 2b Add Exercise View">&emsp;
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 2c.png" height="350" title="Figma Frame 2c Exercise View">&emsp;
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 2d.png" height="350" title="Figma Frame 2d Exercise Detail View">
<br />
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 3.png" height="350" title="Figma Frame 3 Calendar View">&emsp;
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 4.png" height="350" title="Figma Frame 4 Chart View">&emsp;
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/MockUps/Frame 5.png" height="350" title="Figma Frame 5 Profile View">

Features:
- secure user login and registration
- stores data from user
  - Date() date                   (required)
  - String ownerId                (default = user, required)
  - String program                (default = last program)
  - Int program day 
  - String weight type (lb/kg)    (required)
  - String exercise name          (required)
  - String exercise type          (strength default, cardio, etc)
  - Int warmUpReps  
  - Int warmUpSets
  - Double warmUpWeight
  - Bool warmUpSameWeightEachSet  (default = yes, required)
  - Bool warmUpBodyWeight         (default = no, required)
  - Bool warmUpTimed              (default = no, required)
  - Int workReps  
  - Int workSets
  - Double workUpWeight
  - Bool workSameWeightEachSet    (default = yes, required)
  - Bool workBodyWeight           (default = no, required)
  - Bool workTimed                (default = no, required)
- calendar view
- data charting
  - progress
  - one max rep
  - tonnage 

Possible Enhancements:
- user weight logging & graphing
- integrate video demos

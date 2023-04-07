# ExerciseLogApp
React Native Daily Exercise Log Application

<strong><em>The problem:</em></strong><br />
My exercise notes look like this

<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/ExerciseNotes.jpg" width="350" title="Screenshot of Notes text file logging workouts">

<strong><em>The Solution:</em></strong><br />
A strength-focused, multi-platform exercise log application in React Native 

<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 1.png" width="200" title="Figma Frame 1 Login View"><img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 1a.png" width="200" title="Figma Frame 1a Registration View">
<br />
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 2a.png" width="200" title="Figma Frame 2a New Day Root View"><img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 2b.png" width="200" title="Figma Frame 2b Add Exercise View"><img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 2c.png" width="200" title="Figma Frame 2c Exercise View"><img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 2d.png" width="200" title="Figma Frame 2d Exercise Detail View">
<br />
<img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 3.png" width="200" title="Figma Frame 3 Calendar View"><img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 4.png" width="200" title="Figma Frame 4 Chart View"><img src="https://github.com/nguyenchloet/ExerciseLogApp/blob/main/Design/Frame 5.png" width="200" title="Figma Frame 5 Profile View">


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

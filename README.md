# Finance-Tracker
A web app service where users can keep track of incoming and outgoing expenses. 

To Do

FRONTEND

HOME 

-income and expense after fetch validation set dispatch type to SET 
-Import in expense, and income from useContext hook to replace useState


-Make div class "bottom card header" have its own component with full functionality 

    INCOME
    -Make sure empty fields array works and doesnt cause error on submit
    -On submit button in form, close modal pop up
    -Handle response.ok and !response.ok on fetch call, comments in the functions already on what to do
    -SET dispatch type make sure that works


    EXPENSE
    -Add Button expense on click, modal form pop up (Refer to income for example)
    -Make form to take it in 
    -On submit button, make modal close
    -API header for post
    -POST validation, set dispatch, refer to income for the rest
    
       
    


-Add context for income
    -Add api functionality to set, create, delete income
    -After above, set context after each 

-Add context for expense
    -Add api functionality to set, create, delete income
    -After above, set context after each 

After initial frontend, 
        -Start Authentication
        -Create user controllers
        -Create user routes
        -Create User Schema:
            -Schema signup
                -Verify input fields
                -Verify email
                -Hash and salt passwords
                -return user
            -Schema login
                -verify input fields
                -Verify email
                -verify user in db with input password and db password
                -return user

-Browser router
        
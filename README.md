# Finance-Tracker
A web app service where users can keep track of incoming and outgoing expenses. 

To Do

FRONTEND

s-Make div class "bottom card header" have its own component with full functionality 

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
        
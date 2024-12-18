

// function login(){
    
    
//     const v1=document.getElementById('user').value;
//     const v2=document.getElementById('pass').value;

//     // let v1=document.f1.user.value;
// 	// let v2=document.f1.pass.value;

//     if(v1==null || v1=="" || v1!=="parashu")
//         {
//             alert("username can't be empty or username is incorrect");
//             return false;
    
//         }
        
//       else if(v2==null || v2=="")
//         {
//             alert("password can't be empty");
//             return false
//         }
//       else{  
//         alert("Login success");
//         window.location.replace("file:///C:/html/petshopwebsite/petshop.html");
//         }
//     }

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);  // Debugging: Check if the username is being captured
    console.log("Password:", password);  // Debugging: Check if the password is being captured

    if (username && password) {
        alert("Login Successful!");
        window.location.replace("file:///E:/html/petshopwebsite/petshop.html");
    } else {
        alert("Please enter both username and password.");
    }
}

// Testing scenarios
document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Logging test cases
    console.log("Testing cases...");
    console.log("1. Username:", username, "Password:", password);

    if (!username && !password) {
        console.log("Test Case: Both fields empty");
        alert("Test Case: Both fields empty");
    } else if (!username) {
        console.log("Test Case: Missing Username");
        alert("Test Case: Missing Username");
    } else if (!password) {
        console.log("Test Case: Missing Password");
        alert("Test Case: Missing Password");

    } else if(username!='^[a-zA-Z]+$'){
        alert('enter correct username');;
    }
    else{  
         alert("Login success");
         
       }
});


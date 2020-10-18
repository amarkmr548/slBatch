function postArticleEventHandler()
{
    // DOM document object model
    // entire html is converted to tree structure
    userNameElement=document.getElementById("txtUserName");
    blogTitleElement=document.getElementById("txtBlogTitle")
    blogArticleElememnt=document.getElementById("txtBlogArticle");

    errorMessageElement=document.getElementById("errorMessage");
    errorFlag=false;
    errorMessageElement.innerHTML="";
    if (userNameElement.value=="")
    {
        errorMessageElement.innerHTML+="Username cannot be empty";
        errorFlag=true;
    }
    if(blogTitleElement.value =="")
    {
        errorMessageElement.innerHTML+="<br />Blog title cannot be empty";
        errorFlag=true;
    }
    if(blogArticleElememnt.value== "")
    {
        errorMessageElement.innerHTML+="<br/> Blog article cannot be empty";
        errorFlag=true;
    }
    if(errorFlag== false)
    {
        message="Thank u "+userNameElement.value +" for submitting the blog on "+ blogTitleElement.value;
        alert(message);
        location.href="file:///C:/Users/anjum/OneDrive/Desktop/slBatch/index1.html";
    }
}
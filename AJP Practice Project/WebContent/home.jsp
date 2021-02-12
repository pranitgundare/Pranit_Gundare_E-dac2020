<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ include file="common-css-js.jsp" %>

<% 
if(session.getAttribute("my-auth") == null) {
  response.sendRedirect("/day14-project/login.jsp");
  }
%>

<jsp:include page="common-header.jsp"></jsp:include>


<body>

<div class="container-fluid">
    
      <div class="row">
           <c:forEach begin="0" end="25" varStatus="myIndex">
                 <div class="col-3">
                     <div class="card">
                     <img alt="pic" src="https://picsum.photos/200/${300 + myIndex.index}" style="height:200px; object-fit:cover" class="card-img-top">
                     <div class="card-body">
                       <h5 class="card-title">Picture ${myIndex.index}</h5>
                       <p class="card-text"> Only You Are The Creator Of Your Destiny ♥♥ </p>
                       <a href="#" class="btn btn-danger">Like♂♂</a>
                     </div>
                     
                     
                     </div>
                 
                 
                 
                 </div>
           
           
           
           
           </c:forEach>
         
      
      
      
      </div>


</div>

</body>
</html>